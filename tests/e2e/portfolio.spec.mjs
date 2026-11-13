import { expect, test } from "@playwright/test";

test("Portfolio home and Projects navigation remain available", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Huixin Yang", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { name: "Projects", exact: true })).toBeVisible();
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator("#footer")).toBeVisible();
});

test("Projects deep link returns HTTP 200 without redirects, not Home", async ({ page, request }) => {
  const raw = await request.get("/projects", { maxRedirects: 0 });
  expect(raw.status()).toBe(200);
  expect(raw.headers().location).toBeUndefined();
  const response = await page.goto("/projects");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { name: "Projects", exact: true })).toBeVisible();
});

for (const route of ["/about", "/education", "/certificates-awards", "/experience", "/blog", "/blog/hello-blog", "/blog/building-static-portfolio-blog", "/migration", "/referee"]) {
  test(`Portfolio deep link ${route} serves clean URL without redirect`, async ({ page, request }) => {
    const raw = await request.get(route, { maxRedirects: 0 });
    expect(raw.status()).toBe(200);
    expect(raw.headers().location).toBeUndefined();
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("#main")).toBeVisible();
    await expect(page.getByRole("heading", { name: "404 · Page not found" })).toHaveCount(0);
  });
}

for (const legacy of ["/portfolio", "/portfolio/", "/japan", "/japan/en", "/japan/en.html", "/trips/japan/places-en.kml", "/blog/unknown-post"]) {
  test(`Unknown or retired ${legacy} returns native HTTP 404 without redirect`, async ({ page, request }) => {
    const raw = await request.get(legacy, { maxRedirects: 0 });
    expect(raw.status()).toBe(404);
    expect(raw.headers().location).toBeUndefined();
    const response = await page.goto(legacy);
    expect(response?.status()).toBe(404);
    await expect(page).toHaveURL(`http://127.0.0.1:4173${legacy}`);
    await expect(page.getByRole("heading", { name: "404 · Page not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to Portfolio" })).toHaveAttribute("href", "/");
  });
}
