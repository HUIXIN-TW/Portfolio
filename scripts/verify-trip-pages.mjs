import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import zh from "../src/features/trips/japan/content/zh.js";
import en from "../src/features/trips/japan/content/en.js";

for (const content of [zh, en]) {
  const route = content.locale === "en" ? "/japan/en" : "/japan";
  const html = readFileSync(resolve("dist", route.slice(1) + ".html"), "utf8");
  const escape = (text) => text.replaceAll("&", "&amp;");
  assert.ok(html.includes("<title>" + escape(content.meta.title) + "</title>"), "Missing title for " + route);
  assert.ok(html.includes('rel="canonical" href="https://trips.huixinyang.com' + route + '"'), "Missing canonical URL");
  assert.ok(html.includes('name="description" content="' + escape(content.meta.description) + '"'), "Missing description");
  assert.ok(html.includes('property="og:locale" content="' + (content.locale === "en" ? "en_US" : "zh_TW") + '"'));
  assert.ok(html.includes('href="/trips/japan/favicon.svg"'), "Trip favicon missing");
  assert.ok(!html.includes("The U Group"), "Portfolio-only noscript content leaked into trips: " +
    html.slice(Math.max(0, html.indexOf("The U Group") - 120), html.indexOf("The U Group") + 180));
  assert.ok(html.includes('src="/assets/'), "Trip HTML must reference built Vite assets");
}
console.log("Trip static HTML metadata verified for both locales.");
