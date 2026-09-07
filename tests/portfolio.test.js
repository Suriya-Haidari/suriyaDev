import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function collectFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(entryPath) : [entryPath];
  });
}

test("uses the requested JSX feature structure", () => {
  const sourceFiles = collectFiles(path.join(projectRoot, "src"));

  assert.ok(existsSync(path.join(projectRoot, "src", "App.jsx")));
  assert.ok(existsSync(path.join(projectRoot, "src", "routes", "AppRoutes.jsx")));
  assert.ok(existsSync(path.join(projectRoot, "src", "layout", "Navbar", "Navbar.jsx")));
  assert.ok(existsSync(path.join(projectRoot, "src", "features", "projects", "ProjectsSection.jsx")));
  assert.equal(sourceFiles.some((file) => /\.tsx?$/.test(file)), false);
});

test("build output includes SEO and crawl files", () => {
  const html = readFileSync(path.join(projectRoot, "dist", "index.html"), "utf8");

  assert.match(html, /<title>Suriya Haidari — Full-Stack Web Developer<\/title>/i);
  assert.match(html, /name="description"/i);
  assert.match(html, /rel="canonical"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.ok(existsSync(path.join(projectRoot, "dist", "robots.txt")));
  assert.ok(existsSync(path.join(projectRoot, "dist", "sitemap.xml")));
});
