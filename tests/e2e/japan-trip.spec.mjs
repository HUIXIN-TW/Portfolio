import { expect, test } from "@playwright/test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

async function captureVisualBaseline(locator, filename, testInfo) {
  await locator.screenshot({ path: testInfo.outputPath(filename), animations: "disabled" });
  const baselineFolder = resolve("tests/e2e/visual-baselines");
  expect(existsSync(resolve(baselineFolder, filename)), "Missing approved screenshot " + filename).toBeTruthy();
  await expect(locator).toHaveScreenshot(filename, {
    animations: "disabled",
    threshold: 0.15,
    maxDiffPixelRatio: 0.01,
  });
}

test.beforeEach(async ({ page }) => {
  // The original owner's My Maps iframe is external; app behavior must not depend on it.
  await page.route("https://www.google.com/maps/d/**", (route) => route.abort());
});

test("static localized HTML, page metadata and language switching", async ({ page, request }) => {
  const chinese = await request.get("/japan");
  const english = await request.get("/japan/en");
  expect(chinese.ok()).toBeTruthy();
  expect(english.ok()).toBeTruthy();
  expect(await chinese.text()).toContain('rel="canonical" href="https://trips.huixinyang.com/japan"');
  expect(await english.text()).toContain('rel="canonical" href="https://trips.huixinyang.com/japan/en"');
  expect(await english.text()).toContain('property="og:locale" content="en_US"');

  await page.goto("/japan");
  await expect(page.getByRole("heading", { name: "大阪・京都三日旅行指南" })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute("lang", "zh-Hant");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/japan\/en$/);
  await expect(page.getByRole("heading", { name: "Three Days in Osaka & Kyoto" })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href", "https://trips.huixinyang.com/japan/en"
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content", "Three Days in Osaka & Kyoto | Kansai Travel Guide"
  );
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href", "/trips/japan/favicon.png"
  );
  await page.getByRole("link", { name: "繁中" }).click();
  await expect(page).toHaveURL(/\/japan$/);
  await expect(page.getByRole("heading", { name: "大阪・京都三日旅行指南" })).toBeVisible();
});

test("checklist state persists through reload and reset", async ({ page }) => {
  await page.goto("/japan");
  const passport = page.getByRole("checkbox", { name: "護照" });
  await passport.check();
  await expect(passport).toBeChecked();
  await expect(page.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "5");
  await page.reload();
  await expect(page.getByRole("checkbox", { name: "護照" })).toBeChecked();
  await page.getByRole("button", { name: "重設" }).click();
  await expect(page.getByRole("checkbox", { name: "護照" })).not.toBeChecked();
});

test("map search, filtering and accordion are fully React-controlled", async ({ page }) => {
  await page.goto("/japan/en");
  await page.getByRole("button", { name: "Coffee · Kyoto · 4" }).click();
  const kyoto = page.locator('#trip-map details').filter({
    has: page.locator("summary").filter({ hasText: "Coffee · Kyoto" }),
  });
  await expect(kyoto).toHaveAttribute("open", "");
  await kyoto.locator("summary").click();
  await expect(kyoto).not.toHaveAttribute("open", "");
  await kyoto.locator("summary").click();
  await expect(kyoto).toHaveAttribute("open", "");
  await page.getByRole("searchbox", { name: "Search saved places" }).fill("GOKAGO");
  await expect(page.getByText("GOKAGO", { exact: true })).toBeVisible();
  await kyoto.locator("summary").click();
  await expect(kyoto).not.toHaveAttribute("open", "");
  await page.getByRole("searchbox", { name: "Search saved places" }).fill("Okutan");
  await expect(kyoto).toHaveAttribute("open", "");
});

test("desktop layout guard and capture for future visual baselines", async ({ page }, testInfo) => {
  await page.goto("/japan");
  const itinerary = page.locator("#itinerary");
  const reference = page.locator("#reference");
  await expect(itinerary).toHaveCSS("border-radius", "26px");
  await expect(itinerary.locator("details").first()).toHaveCSS("border-left-width", "0px");
  await expect(reference.locator("details").first()).toHaveCSS("border-left-width", "0px");
  await expect(page.locator("#checklist")).toBeVisible();
  await captureVisualBaseline(itinerary, "desktop-itinerary.png", testInfo);
  await captureVisualBaseline(page.locator("#checklist"), "desktop-checklist.png", testInfo);
  await reference.locator("details summary").first().click();
  await reference.locator("details summary").last().click();
  await captureVisualBaseline(reference, "desktop-reference.png", testInfo);
  await captureVisualBaseline(page.locator("#trip-map"), "desktop-map.png", testInfo);
});

test("mobile layout guard and capture for future visual baselines", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/japan/en");
  const width = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(width).toBeLessThanOrEqual(390);
  await expect(page.locator("#reference")).toBeVisible();
  await captureVisualBaseline(page.locator("#itinerary"), "mobile-itinerary.png", testInfo);
  await captureVisualBaseline(page.locator("#checklist"), "mobile-checklist.png", testInfo);
  await captureVisualBaseline(page.locator("#trip-map"), "mobile-map.png", testInfo);
});
