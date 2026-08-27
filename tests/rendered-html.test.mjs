import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  return (await import(workerUrl.href)).default;
}

async function request(path = "/") {
  const worker = await loadWorker();
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the portfolio with its primary SEO metadata", async () => {
  const response = await request();
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /<title>Suriya Haidari — Full-Stack Web Developer<\/title>/i);
  assert.match(html, /name="description"/i);
  assert.match(html, /rel="canonical"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"Person"/i);
  assert.match(html, /id="project-pedal24"/i);
  assert.match(html, /id="project-devboard"/i);
});

test("serves crawl directives and a sitemap", async () => {
  const robotsResponse = await request("/robots.txt");
  const sitemapResponse = await request("/sitemap.xml");

  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap: https:\/\/suriya-haidari-portfolio\.pedal24\.chatgpt\.site\/sitemap\.xml/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(await sitemapResponse.text(), /<loc>https:\/\/suriya-haidari-portfolio\.pedal24\.chatgpt\.site<\/loc>/i);
});
