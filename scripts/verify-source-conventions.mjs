import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { ROUTES, PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../src/config/routes.mjs";

// Public path and routed-page component identity must remain consistent.
// This is intentionally stricter for new source files than for legacy public assets:
// published asset URLs must not change during an internal naming refactor.
const routeKeys = Object.keys(ROUTES);
const routePaths = Object.values(ROUTES);
assert.equal(routePaths.length, new Set(routePaths).size, "Duplicate public routes");
for (const [key, pathname] of Object.entries(ROUTES)) {
  if (key === "home") {
    assert.equal(pathname, "/");
  } else if (key === "writingPost") {
    assert.equal(pathname, "/writing/:slug");
  } else {
    assert.match(pathname.slice(1), /^[a-z]+(?:-[a-z]+)*$/, "Routes must be lowercase kebab-case");
  }
}
for (const { to } of [...PRIMARY_NAV_ITEMS, ...SECONDARY_NAV_ITEMS]) {
  assert.ok(routePaths.includes(to), "Navigation points to an unknown route: " + to);
}

const toPageName = (key) => key[0].toUpperCase() + key.slice(1) + "Page";
const pages = readdirSync("src/pages").filter((name) => name.endsWith(".jsx")).sort();
const expectedPages = routeKeys.map((key) => toPageName(key) + ".jsx").sort();
assert.deepEqual(pages, expectedPages, "Route keys and page-component filenames are out of sync");

const app = readFileSync("src/App.jsx", "utf8");
for (const key of routeKeys) {
  const pageName = toPageName(key);
  assert.ok(app.includes('from "./pages/' + pageName + '"'), "Missing page import " + pageName);
  assert.ok(app.includes("path={ROUTES." + key + "}"), "Missing Router binding for " + key);
}
for (const dir of ["src/pages", "src/sections", "src/ui"]) {
  for (const file of readdirSync(dir).filter((item) => item.endsWith(".jsx"))) {
    assert.match(file.slice(0, -4), /^[A-Z][A-Za-z0-9]*$/, "React components must be PascalCase in " + dir);
  }
}
for (const file of readdirSync("src/data")) {
  if (file.endsWith(".json")) {
    assert.match(file.slice(0, -5), /^[a-z]+(?:-[a-z]+)*$/, "JSON files must use kebab-case");
  } else if (file.endsWith(".js")) {
    assert.match(file.slice(0, -3), /^[a-z][A-Za-z0-9]*$/, "JavaScript data modules must be camelCase");
  }
}
for (const file of readdirSync("src/utils").filter((name) => name.endsWith(".js"))) {
  assert.match(file.slice(0, -3), /^[a-z][A-Za-z0-9]*$/, "Utility names must be camelCase");
}
for (const file of readdirSync("src/blogs").filter((name) => name.endsWith(".md"))) {
  assert.match(file.slice(0, -3), /^[a-z]+(?:-[a-z]+)*$/, "Blog Markdown filenames must be kebab-case");
}
console.log("Verified page/component/data naming, canonical routes and navigation targets.");
