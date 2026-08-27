import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 3200 + (process.pid % 1000);
const origin = `http://127.0.0.1:${port}`;
let server;
let serverOutput = "";

async function request(pathname = "/") {
  return fetch(`${origin}${pathname}`, { headers: { accept: "text/html" } });
}

test.before(async () => {
  const nextCli = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
  server = spawn(
    process.execPath,
    [nextCli, "start", "-H", "127.0.0.1", "-p", String(port)],
    { cwd: projectRoot, env: process.env, stdio: ["ignore", "pipe", "pipe"] },
  );

  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });

  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before startup.\n${serverOutput}`);
    }

    try {
      const response = await request();
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error(`Timed out waiting for Next.js.\n${serverOutput}`);
});

test.after(async () => {
  if (!server || server.exitCode !== null) return;

  server.kill();
  await Promise.race([
    once(server, "exit"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
});

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
  assert.match(await robotsResponse.text(), /Sitemap: https?:\/\/[^\s]+\/sitemap\.xml/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(await sitemapResponse.text(), /<loc>https?:\/\/[^<]+<\/loc>/i);
});
