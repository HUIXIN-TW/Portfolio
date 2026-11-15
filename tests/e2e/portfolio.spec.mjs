import { expect, test } from "@playwright/test";

test("Portfolio home and Projects navigation remain available", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Huixin Yang", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Work", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Work", exact: true }).click();
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


test("Editorial Home presents a clear proposition and real featured work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Huixin Yang", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Engineering reliable systems/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Notica Web" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "WhatToEat app" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore my work" })).toHaveAttribute("href", "/projects");
});

test("Projects show purpose and role before optional details", async ({ page }) => {
  await page.goto("/projects");
  const first = page.locator(".editorial-project-card").first();
  await expect(first.locator(".editorial-project-summary")).toBeVisible();
  await expect(first.locator(".editorial-project-role")).toBeVisible();
  await first.getByRole("button", { name: "Architecture & contribution" }).click();
  await expect(first.locator(".editorial-details-panel")).toBeVisible();
  await expect(page.locator(".editorial-project-card")).toHaveCount(16);
});

for (const width of [320, 390, 768, 1280]) {
  test("Editorial pages remain usable at " + width + "px", async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/projects"]) {
      await page.goto(path);
      await expect(page.locator("#main")).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    }
    if (width < 960) {
      await page.goto("/");
      const menu = page.getByRole("button", { name: "Menu" });
      await expect(menu).toBeVisible();
      await menu.click();
      await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
      await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Work" }).click();
      await expect(page).toHaveURL(/\/projects$/);
      await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
    }
  });
}

test("Editorial typography survives 150% text scaling, reduced motion and theme toggle", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 760 });
  await page.goto("/");
  await page.evaluate(() => { document.documentElement.style.fontSize = "150%"; });
  await expect(page.getByRole("heading", { name: "Huixin Yang", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore my work" })).toBeVisible();
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dracula");
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
});
