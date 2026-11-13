import { expect, test } from "@playwright/test";

test("Portfolio home and Projects navigation remain available", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Huixin Yang", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\\/portfolio$/);
  await expect(page.locator("#footer")).toBeVisible();
});

test("Portfolio deep links still render on refresh", async ({ page }) => {
  for (const path of ["/about", "/education", "/portfolio", "/blog"]) {
    await page.goto(path);
    await expect(page.locator("#main")).toBeVisible();
    await expect(page.getByRole("heading", { name: "404 · Page not found" })).toHaveCount(0);
  }
});

for (const legacy of ["/japan", "/japan/en", "/trips/japan/"]) {
  test(`Retired ${legacy} shows a local 404 rather than redirecting to Trips`, async ({ page }) => {
    // Vite preview tests React's in-app not-found view. Production HTTP 404 comes
    // from Cloudflare Pages' 404.html (validated by the build route-contract check).
    await page.goto(legacy);
    await expect(page).toHaveURL(`http://127.0.0.1:4173${legacy}`);
    await expect(page.getByRole("heading", { name: "404 · Page not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to Portfolio" })).toHaveAttribute("href", "/");
  });
}
