import { expect, test } from "@playwright/test";

test("Portfolio home and Projects navigation remain available", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("header")).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/portfolio$/);
  await expect(page.locator("#footer")).toBeVisible();
  await expect(page.getByRole("heading", { name: /大阪|Osaka/ })).toHaveCount(0);
});

for (const legacy of ["/japan", "/japan/en", "/japan/en.html", "/japan?from=bookmark#checklist"]) {
  test(`Legacy ${legacy} leaves Portfolio for the Trips origin`, async ({ page }) => {
    // Do not depend on the live external site; assert the browser's real navigation request.
    await page.route("https://trips.huixinyang.com/**", route => route.fulfill({
      contentType: "text/html",
      body: "<h1>Trips destination</h1>",
    }));
    await page.goto(legacy);
    await expect(page).toHaveURL(`https://trips.huixinyang.com${legacy}`);
    await expect(page.getByRole("heading", { name: "Trips destination" })).toBeVisible();
  });
}
