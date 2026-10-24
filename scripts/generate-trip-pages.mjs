import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import zh from "../src/features/trips/japan/content/zh.js";
import en from "../src/features/trips/japan/content/en.js";

const dist = resolve("dist");
const original = readFileSync(resolve(dist, "index.html"), "utf8");
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;");

for (const content of [zh, en]) {
  const locale = content.locale;
  const url = "https://trips.huixinyang.com" + (locale === "en" ? "/japan/en" : "/japan");
  const title = escapeHtml(content.meta.title);
  const description = escapeHtml(content.meta.description);
  const metadata = [
    '<meta name="description" content="' + description + '" />',
    '<link rel="canonical" href="' + url + '" />',
    '<link rel="alternate" hreflang="zh-Hant" href="https://trips.huixinyang.com/japan" />',
    '<link rel="alternate" hreflang="en" href="https://trips.huixinyang.com/japan/en" />',
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="' + (locale === "en" ? "en_US" : "zh_TW") + '" />',
    '<meta property="og:url" content="' + url + '" />',
    '<meta property="og:title" content="' + title + '" />',
    '<meta property="og:description" content="' + description + '" />',
    '<meta name="twitter:card" content="summary" />',
    '<meta name="twitter:title" content="' + title + '" />',
    '<meta name="twitter:description" content="' + description + '" />',
  ].join("\n    ");
  let html = original
    .replace('<html lang="en">', '<html lang="' + (locale === "en" ? "en" : "zh-Hant") + '">')
    .replace(/<title>[^<]*<\/title>/, "<title>" + title + "</title>\n    " + metadata)
    .replace(/<link rel="icon"[^>]*>/, '<link rel="icon" type="image/svg+xml" href="/trips/japan/favicon.svg" />')
    .replace(/<link rel="apple-touch-icon"[^>]*>/, "")
    .replace(/<meta name="apple-mobile-web-app-title"[^>]*>/, '<meta name="apple-mobile-web-app-title" content="' + title + '" />')
    .replace(/<noscript[\s\S]*?<\/noscript>/, "<noscript>" +
      escapeHtml(content.hero.title + " — " + content.hero.description) + "</noscript>");
  const target = resolve(dist, locale === "en" ? "japan/en.html" : "japan.html");
  if (locale === "en") mkdirSync(resolve(dist, "japan"), { recursive: true });
  if (html === original || !html.includes('rel="canonical"')) throw new Error("Failed to generate trip metadata");
  writeFileSync(target, html);
}
console.log("Generated static metadata for /japan and /japan/en.");
