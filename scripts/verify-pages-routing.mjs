import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { ROUTES, STATIC_PAGE_ROUTES, PRIMARY_NAV_ITEMS, getBlogPostPath } from "../src/config/routes.mjs";

const dist = resolve("dist");
const html = readFileSync(join(dist, "index.html"), "utf8");
const notFound = readFileSync(join(dist, "404.html"), "utf8");
const app = readFileSync("src/App.jsx", "utf8");
const header = readFileSync("src/ui/Header.jsx", "utf8");
assert.ok(notFound.includes("404 · Page not found"), "Pages must serve native HTTP 404");
assert.ok(app.includes('path="*"'), "Client-side navigation needs a not-found route");
assert.ok(!app.includes("LegacyTripRedirect"), "Portfolio must not redirect to Trips");
assert.ok(!existsSync(join(dist, "_redirects")), "Pages _redirects rewrites must not reappear");
assert.ok(!existsSync("public/_redirects"), "Do not reintroduce redirect rules");

assert.equal(ROUTES.projects, "/projects", "Projects must use /projects");
assert.equal(ROUTES.blogPost, "/blog/:slug", "Blog slug URL must remain stable");
assert.ok(!Object.values(ROUTES).includes("/portfolio"), "Old /portfolio must return 404");
assert.ok(!Object.values(ROUTES).some((route) => /^\\/japan(?:\\/|$)/.test(route)), "No Trips routes on Portfolio");
assert.ok(PRIMARY_NAV_ITEMS.some(({ to, label }) => to === ROUTES.projects && label === "Work"),
  "Work navigation must target the canonical /projects route");
assert.equal((header.match(/PRIMARY_NAV_ITEMS\\.map/g) ?? []).length, 2,
  "Desktop and mobile navigation must both use the canonical primary links");
for (const key of Object.keys(ROUTES)) {
  assert.ok(app.includes(`path={ROUTES.${key}}`), "React Router must mount route: " + key);
}
const expected = [...STATIC_PAGE_ROUTES];
const publishedSlugs = [];
const normalizeSlug = (value) => value.toLowerCase().trim().replace(/\.md$/i, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
for (const file of readdirSync("src/blogs").filter((f) => f.endsWith(".md"))) {
  const markdown = readFileSync(join("src/blogs", file), "utf8");
  const fm = markdown.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/)?.[1] ?? "";
  if (/^published:\s*false\s*$/im.test(fm)) continue;
  const slug = fm.match(/^slug:\s*["']?([^"'\n]+)["']?\s*$/im)?.[1];
  publishedSlugs.push(normalizeSlug(slug || file));
}
if (ROUTES.blogPost) expected.push(...publishedSlugs.map(getBlogPostPath));
for (const route of expected) {
  const routeHtml = join(dist, route.slice(1) + ".html");
  assert.ok(existsSync(routeHtml), "Missing static route entry: " + route);
  assert.equal(readFileSync(routeHtml, "utf8"), html, "Route must serve React entrypoint: " + route);
}
for (const retired of ["/portfolio", "/japan", "/japan/en", "/trips/japan/places-en.kml"]) {
  assert.ok(!existsSync(join(dist, retired.slice(1) + ".html")), "Retired route emitted: " + retired);
}
console.log("Verified " + expected.length + " clean-URL Pages HTML entrypoints and native 404.");
