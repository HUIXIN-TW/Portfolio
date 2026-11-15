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

test("Project details open in a dialog without resizing adjacent cards", async ({ page }) => {
  await page.goto("/projects");
  const cards = page.locator(".editorial-project-card");
  await expect(cards).toHaveCount(16);
  const first = cards.first();
  await expect(first.locator(".editorial-project-summary")).toBeVisible();
  await expect(first.locator(".editorial-project-role")).toBeVisible();

  const getHeights = () => cards.evaluateAll((elements) =>
    elements.slice(0, 2).map((element) => element.getBoundingClientRect().height)
  );
  const before = await getHeights();
  const trigger = first.getByRole("button", { name: "View details" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { level: 2 })).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Close project details" })).toBeVisible();
  await expect.poll(async () => getHeights()).toEqual(before);

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("Long project descriptions scroll in a mobile dialog, not inside the card grid", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto("/projects");
  const cards = page.locator(".editorial-project-card");
  const expanded = cards.filter({ hasText: "Data Warehousing & Association Rule Mining" });
  await expect(expanded).toHaveCount(1);
  const before = await expanded.boundingBox();
  await expanded.getByRole("button", { name: "View details" }).click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText(/Crime in Atlanta/i)).toBeVisible();
  const frame = await dialog.locator(".editorial-project-dialog-panel").boundingBox();
  expect(frame.width).toBeLessThanOrEqual(320);
  expect(frame.height).toBeLessThanOrEqual(640);
  const scrollable = await dialog.locator(".editorial-project-dialog-body").evaluate((element) =>
    element.scrollHeight > element.clientHeight
  );
  expect(scrollable).toBe(true);
  const after = await expanded.boundingBox();
  expect(Math.abs(after.height - before.height)).toBeLessThan(1);

  await dialog.getByRole("button", { name: "Close project details" }).click();
  await expect(dialog).toHaveCount(0);
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

test("PWA rocket identity is consistent for Safari tabs, iOS install and the web manifest", async ({ page, request }) => {
  await page.goto("/");
  const favicon = page.locator('link[rel="icon"]');
  const apple = page.locator('link[rel="apple-touch-icon"]');
  await expect(favicon).toHaveAttribute("href", "/portfolio-rocket-48.png");
  await expect(favicon).toHaveAttribute("type", "image/png");
  await expect(favicon).toHaveAttribute("sizes", "48x48");
  await expect(apple).toHaveAttribute("href", "/portfolio-rocket-192.png");
  await expect(apple).toHaveAttribute("sizes", "192x192");
  await expect(page.locator('link[rel="manifest"]')).toHaveAttribute("href", "/site.webmanifest");

  const response = await request.get("/site.webmanifest");
  expect(response.status()).toBe(200);
  const manifest = await response.json();
  expect(manifest).toMatchObject({
    name: "Huixin Yang — Portfolio",
    short_name: "Huixin",
    start_url: "/",
    scope: "/",
    display: "standalone",
  });
  expect(manifest.icons).toEqual([
    { src: "/portfolio-rocket-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "/portfolio-rocket-512.webp", sizes: "512x512", type: "image/webp", purpose: "any" },
  ]);

  for (const [path, expectedSize, mime] of [
    ["/portfolio-rocket-48.png", 48, "image/png"],
    ["/portfolio-rocket-192.png", 192, "image/png"],
    ["/portfolio-rocket-512.webp", 512, "image/webp"],
  ]) {
    const asset = await request.get(path);
    expect(asset.status()).toBe(200);
    expect(asset.headers()["content-type"]).toContain(mime);
    const dimensions = await page.evaluate(async (src) => {
      const image = new Image();
      image.src = src;
      await image.decode();
      return [image.naturalWidth, image.naturalHeight];
    }, path);
    expect(dimensions).toEqual([expectedSize, expectedSize]);
  }

  for (const route of ["/projects", "/experience", "/blog"]) {
    const routeResponse = await request.get(route, { maxRedirects: 0 });
    expect(routeResponse.status()).toBe(200);
    const body = await routeResponse.text();
    expect(body).toContain('href="/portfolio-rocket-48.png"');
    expect(body).toContain('href="/portfolio-rocket-192.png"');
    expect(body).toContain('href="/site.webmanifest"');
  }
});

test("Project descriptions render semantic bullets rather than repeated loose paragraphs", async ({ page }) => {
  await page.goto("/projects");
  const project = page.locator(".editorial-project-card").filter({ hasText: "NotionSyncGCal Website" });
  await project.getByRole("button", { name: "View details" }).click();
  const dialog = page.getByRole("dialog");
  const list = dialog.locator(".editorial-project-description-list");
  await expect(list).toHaveCount(1);
  await expect(list.locator("li")).toHaveCount(6);
  await expect(list.locator("li").first()).toContainText("Built a Next.js 14+ web application");
  await expect(dialog.getByRole("heading", { name: "Project details" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
});

test("Primary navigation prioritises engineering experience before writing and resume", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const desktop = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(desktop.locator(":scope > a.editorial-nav-link")).toHaveText([
    "Work", "Experience", "About", "Writing", "Resume",
  ]);
  await desktop.locator("summary").click();
  await expect(desktop.getByRole("link", { name: "Education" })).toBeVisible();
  await expect(desktop.getByRole("link", { name: "Awards" })).toBeVisible();
  await expect(desktop.getByRole("link", { name: "Referee" })).toBeVisible();
  await expect(desktop.getByRole("link", { name: "GitHub" })).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Menu" }).click();
  const mobile = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(mobile.locator(".editorial-mobile-links > a").first()).toHaveText("Work");
  await expect(mobile.locator(".editorial-mobile-links > a").nth(2)).toHaveText("About");
  await expect(mobile.locator(".editorial-mobile-links > a").nth(3)).toHaveText("Writing");
});
