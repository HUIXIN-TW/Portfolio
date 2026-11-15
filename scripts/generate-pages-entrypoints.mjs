import assert from "node:assert/strict";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { ROUTES, STATIC_PAGE_ROUTES, getWritingPostPath } from "../src/config/routes.mjs";

// Cloudflare Pages serves /projects from /projects.html with a real HTTP 200.
// Rewriting to /index.html via _redirects can instead cause a Pages 308 to /.
const dist = resolve("dist");
const entry = join(dist, "index.html");
assert.ok(existsSync(entry), "Build index.html before generating route entrypoints");
assert.ok(!existsSync(join(dist, "_redirects")), "Do not ship Pages _redirects rewrites");

assert.ok(STATIC_PAGE_ROUTES.includes(ROUTES.projects), "Missing canonical Projects route");
assert.equal(ROUTES.writingPost, "/writing/:slug", "Writing detail route must be canonical");
assert.ok(!Object.values(ROUTES).includes("/portfolio"), "Retired /portfolio route must remain missing");

assert.equal(ROUTES.writing, "/writing", "Writing index must be canonical");
assert.ok(!Object.values(ROUTES).some((route) => route === "/blog" || route.startsWith("/blog/")), "Blog routes must remain retired");

const emitted = new Set();
function emit(pathname) {
  assert.match(pathname, /^\/[a-z0-9/-]+$/, "Unsafe route path");
  assert.ok(!emitted.has(pathname), "Duplicate route: " + pathname);
  emitted.add(pathname);
  const output = join(dist, pathname.slice(1) + ".html");
  mkdirSync(dirname(output), { recursive: true });
  copyFileSync(entry, output);
}

for (const route of STATIC_PAGE_ROUTES) emit(route);

const sourceDir = resolve("src/blogs");
const normalizeSlug = (value) => value.toLowerCase().trim().replace(/\.md$/i, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const slugs = new Set();
for (const file of readdirSync(sourceDir).filter((f) => f.endsWith(".md")).sort()) {
  const markdown = readFileSync(join(sourceDir, file), "utf8");
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/)?.[1] ?? "";
  if (/^published:\s*false\s*$/im.test(frontmatter)) continue;
  const explicitSlug = frontmatter.match(/^slug:\s*["']?([^"'\n]+)["']?\s*$/im)?.[1];
  const slug = normalizeSlug(explicitSlug || file);
  assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid blog slug");
  assert.ok(!slugs.has(slug), "Duplicate blog slug: " + slug);
  slugs.add(slug);
  emit(getWritingPostPath(slug));
}
const listed = JSON.parse(readFileSync("src/data/blog-posts.json", "utf8"));
assert.ok(Array.isArray(listed), "Blog index must be a slug array");
for (const slug of listed) {
  assert.ok(slugs.has(slug), "Blog index references unknown/unpublished slug: " + slug);
}
console.log("Generated " + emitted.size + " Portfolio HTML entrypoints without _redirects.");
