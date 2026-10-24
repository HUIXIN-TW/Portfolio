import { expect, test } from "@playwright/test";
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
  const zhButton = page.getByRole("link", { name: "繁中" });
  const enButton = page.getByRole("link", { name: "English" });
  await expect(zhButton).toHaveCSS("font-size", "13px");
  await expect(enButton).toHaveCSS("font-size", "13px");
  const zhWidth = await zhButton.evaluate((element) => element.getBoundingClientRect().width);
  const enWidth = await enButton.evaluate((element) => element.getBoundingClientRect().width);
  expect(zhWidth).toBe(enWidth);
  await zhButton.click();
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

test("desktop layout and map filters without a horizontal scrollbar", async ({ page }) => {
  await page.goto("/japan");
  const itinerary = page.locator("#itinerary");
  const reference = page.locator("#reference");
  await expect(itinerary).toHaveCSS("border-radius", "26px");
  await expect(itinerary.locator("details").first()).toHaveCSS("border-left-width", "0px");
  await expect(reference.locator("details").first()).toHaveCSS("border-left-width", "0px");
  await expect(page.locator("#checklist")).toBeVisible();
  const mainHeadings = page.locator(
    '#itinerary > h2, #checklist > summary h2, #phrases > summary h2, #reference > h2, #trip-map h2'
  );
  await expect(mainHeadings).toHaveCount(5);
  const headingFontSizes = await mainHeadings.evaluateAll((nodes) =>
    nodes.map((node) => getComputedStyle(node).fontSize));
  expect(new Set(headingFontSizes).size).toBe(1);
  const referenceTitle = await page.locator("#reference > h2").evaluate((node) =>
    parseFloat(getComputedStyle(node).fontSize));
  const hotelTitle = await page.locator("#reference h3").first().evaluate((node) =>
    parseFloat(getComputedStyle(node).fontSize));
  expect(hotelTitle).toBeLessThan(referenceTitle);
  const filterStyles = await page.locator("#trip-map [role='group']").evaluate((node) => ({
    wrap: getComputedStyle(node).flexWrap,
    overflowX: getComputedStyle(node).overflowX,
  }));
  expect(filterStyles.wrap).toBe("wrap");
  expect(filterStyles.overflowX).not.toBe("auto");
  const editHelp = page.locator('#trip-map div:has(> p > a[href="https://www.google.com/maps/d/"])');
  await expect(editHelp).toHaveCount(1);
  await expect(page.locator('#trip-map details:has(a[href="https://www.google.com/maps/d/"])')).toHaveCount(0);
  const mapInfo = page.locator("#trip-map").getByText("想自行編輯地圖？", { exact: false });
  await expect(mapInfo).toBeVisible();
  const summary = page.locator("#checklist > summary");
  await summary.click();
  await expect(summary).toHaveCSS("border-bottom-width", "0px");
  const decoration = await page.locator("header").first().evaluate((node) =>
    getComputedStyle(node, "::after").backgroundImage);
  expect(decoration).toContain("sakura-decoration.svg");
});

test("mobile layout and horizontal chip swipe without visible scrollbar", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/japan/en");
  const width = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(width).toBeLessThanOrEqual(390);
  await expect(page.locator("#reference")).toBeVisible();
  const chipList = page.locator("#trip-map [role='group']");
  await expect(chipList).toHaveCSS("flex-wrap", "nowrap");
  await expect(chipList).toHaveCSS("scrollbar-width", "none");
  const scrollable = await chipList.evaluate((node) => node.scrollWidth > node.clientWidth);
  expect(scrollable).toBeTruthy();
});
