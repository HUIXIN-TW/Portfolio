import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const redirects = readFileSync("dist/_redirects", "utf8");
const notFound = readFileSync("dist/404.html", "utf8");
const app = readFileSync("src/App.jsx", "utf8");

const rules = redirects.split(/\\r?\\n/).map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"))
  .map((line) => line.split(/\\s+/));

assert.ok(notFound.includes("404 · Page not found"), "Pages must provide a real 404.html");
assert.ok(app.includes('path="*"'), "Client-side unmatched paths must show a not-found page");
assert.ok(!app.includes("LegacyTripRedirect"), "Portfolio must not navigate to Trips");
assert.ok(rules.every(([from, to, code]) => from.startsWith("/") && to === "/index.html" && code === "200"),
  "Pages routing may only rewrite owned routes to index.html, never redirect");
assert.ok(rules.every(([from]) => !/^\\/(?:japan(?:[/.]|$)|trips\\/japan(?:\\/|$))/.test(from)),
  "Retired Trips URLs must not be handled as Portfolio routes");

const routePaths = [...app.matchAll(/<Route\\s+path="(\\/[^"]+)"/g)].map((m) => m[1]);
const expected = new Set(routePaths.flatMap((path) => {
  if (path.includes(":")) return [path.replace(/:[^/]+/g, "*")];
  return [path, path + "/"];
}));
const actual = new Set(rules.map(([from]) => from));
assert.deepEqual([...actual].sort(), [...expected].sort(),
  "Cloudflare Pages rewrites must match React Router routes exactly");
console.log(`Pages route contract verified: ${routePaths.length} Portfolio routes; unknown and retired routes use HTTP 404.`);
