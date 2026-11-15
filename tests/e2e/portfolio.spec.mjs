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
  await expect(page.getByRole("heading", { name: /Building reliable cloud platforms/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AWS Platform Migration & ECS Modernisation" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "CI/CD & Cross-Service Staging Validation" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore platform work" })).toHaveAttribute("href", "/projects");
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
  await expect(page.getByRole("link", { name: "Explore platform work" })).toBeVisible();
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dracula");
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
});

test("Editorial palette is graphite-led and consistent in light/dark modes", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const getPalette = () => page.evaluate(() => {
    const styles = getComputedStyle(document.documentElement);
    const shell = getComputedStyle(document.querySelector("#main"));
    return {
      background: styles.getPropertyValue("--ed-background").trim(),
      ink: styles.getPropertyValue("--ed-ink").trim(),
      accent: styles.getPropertyValue("--ed-accent").trim(),
      shellBackground: shell.backgroundColor,
    };
  });
  await expect.poll(async () => (await getPalette()).background).toBe("#faf9f7");
  expect(await getPalette()).toMatchObject({
    ink: "#25272b",
    accent: "#415e7a",
    shellBackground: "rgb(250, 249, 247)",
  });
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  expect(await getPalette()).toMatchObject({
    background: "#191b20",
    ink: "#f3f4f5",
    accent: "#b0c8e2",
    shellBackground: "rgb(25, 27, 32)",
  });
  await expect(page.locator(".editorial-hero-aside")).toHaveCount(0);
});

test("Platform engineering case studies lead Work while personal projects remain accessible", async ({ page }) => {
  await page.goto("/projects");
  const platform = page.locator("#platform-work");
  await expect(platform.getByRole("heading", { name: "Platform engineering case studies" })).toBeVisible();
  await expect(platform.locator(".platform-case-card")).toHaveCount(4);
  await expect(platform.locator(".platform-case-card").first()).toContainText("AWS Platform Migration");
  await expect(platform.locator(".platform-case-card").nth(1)).toContainText("CI/CD");
  await expect(page.getByRole("heading", { name: "Applications & projects" })).toBeVisible();
  await expect(page.locator(".editorial-project-card")).toHaveCount(16);
  expect(await page.locator("#platform-work").evaluate((element) =>
    element.compareDocumentPosition(document.querySelector(".platform-project-archive")) & Node.DOCUMENT_POSITION_FOLLOWING
  )).toBeTruthy();
});

test("Platform-led Home headline is visible and describes supported experience", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".editorial-eyebrow").first()).toHaveText("PLATFORM ENGINEERING / BACKEND SYSTEMS");
  await expect(page.getByRole("heading", { name: /Building reliable cloud platforms/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Cloud platforms & IaC" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Delivery automation" })).toBeVisible();
  await expect(page.locator(".editorial-featured .platform-case-card")).toHaveCount(2);
});
