import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { onRequest } from "../../functions/_middleware.js";
import { canServeTrip } from "../../src/features/trips/japan/data/site.js";

const pathConfig = JSON.parse(readFileSync(new URL("../../public/_routes.json", import.meta.url), "utf8"));

test("Cloudflare Pages only invokes middleware for trip paths", () => {
  assert.deepEqual(pathConfig.include, ["/japan", "/japan/*", "/japan.html", "/trips/japan/*"]);
  assert.deepEqual(pathConfig.exclude, []);
});

async function requestPath(host, path) {
  let passed = false;
  const response = await onRequest({
    request: new Request("https://" + host + path),
    next: () => {
      passed = true;
      return new Response("served", { status: 200 });
    },
  });
  return { passed, response };
}

test("portfolio and other main-site domains receive genuine HTTP 404 for trip pages and assets", async () => {
  for (const host of [
    "portfolio.huixinyang.com", "huixinyang.com", "www.huixinyang.com",
    "portfolio-3oq.pages.dev", "fix-trips-domain-isolation.portfolio-3oq.pages.dev",
  ]) {
    assert.equal(canServeTrip(host), false);
    for (const path of [
      "/japan", "/japan/", "/japan/en", "/japan/en/", "/japan.html", "/japan/en.html",
      "/trips/japan/favicon.png", "/trips/japan/places-en.kml",
    ]) {
      const { passed, response } = await requestPath(host, path);
      assert.equal(passed, false, host + path + " should not reach static assets");
      assert.equal(response.status, 404, host + path);
      assert.equal(response.headers.get("x-robots-tag"), "noindex");
    }
  }
});

test("only the Trips domain and local development serve trip routes", async () => {
  for (const host of ["trips.huixinyang.com", "localhost", "127.0.0.1"]) {
    assert.equal(canServeTrip(host), true);
    for (const path of ["/japan", "/japan/en", "/trips/japan/places-zh.kml"]) {
      const { passed, response } = await requestPath(host, path);
      assert.equal(passed, true, host + path);
      assert.equal(response.status, 200, host + path);
    }
  }
});

test("non-trip Portfolio paths pass through without interception", async () => {
  for (const path of ["/", "/about", "/portfolio", "/assets/main.js"]) {
    const { passed, response } = await requestPath("portfolio.huixinyang.com", path);
    assert.equal(passed, true, path);
    assert.equal(response.status, 200);
  }
});
