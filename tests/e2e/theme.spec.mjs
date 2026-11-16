import { test, expect } from '@playwright/test';

const routes = ['/', '/projects', '/experience', '/writing', '/writing/building-static-portfolio-blog', '/migration', '/education', '/certificates-awards', '/referee'];
const migrationFixture = {
  months: { July: 120 },
  programYears: [{ programYear: '2026-27', title: 'Program year invitations issued',
    rows: [{ stream: 'General stream', visaType: '190', July: 120 }] }],
  pdfLinks: [{ title: 'Theme contrast reference', url: 'https://example.com/reference.pdf' }],
};

test.beforeEach(async ({ page }) => {
  // No production APIs, fonts or embeds are needed for deterministic appearance tests.
  await page.route('**/*', (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === '127.0.0.1' || url.hostname === 'localhost') return route.continue();
    return route.fulfill({ status: 200, json: migrationFixture });
  });
});

test('System tracks live OS changes without persisting a resolved override', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('combobox', { name: 'Color theme' })).toHaveValue('system');
  expect(await page.evaluate(() => localStorage.getItem('huixin.theme'))).toBeNull();
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
});

test('explicit choice persists, ignores OS changes, and can return to System', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const select = page.getByRole('combobox', { name: 'Color theme' });
  await select.selectOption('dark');
  await page.reload();
  await expect(select).toHaveValue('dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await select.selectOption('system');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('same-origin tabs synchronize explicit choices and storage clearing', async ({ page, context }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const other = await context.newPage();
  await other.emulateMedia({ colorScheme: 'light' });
  await other.goto('/');
  await page.getByRole('combobox', { name: 'Color theme' }).selectOption('dark');
  await expect(other.getByRole('combobox', { name: 'Color theme' })).toHaveValue('dark');
  await expect(other.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.evaluate(() => localStorage.clear());
  await expect(other.getByRole('combobox', { name: 'Color theme' })).toHaveValue('system');
  await expect(other.locator('html')).toHaveAttribute('data-theme', 'light');
  await other.close();
});

test('blocked storage still supports system and in-session explicit selection', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', {
    get() { throw new DOMException('Storage blocked', 'SecurityError'); },
  }));
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('combobox', { name: 'Color theme' }).selectOption('light');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('invalid stored values fall back to System', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('huixin.theme', 'invalid'));
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.getByRole('combobox', { name: 'Color theme' })).toHaveValue('system');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('appearance resolves before the React application loads', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.route('**/assets/*.js', (route) => route.abort());
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');
  const meta = await page.locator('meta[name="theme-color"]').getAttribute('content');
  expect(meta).toBe(await page.locator('script[src="/theme.js"]').getAttribute('data-dark'));
});

for (const width of [960, 961, 1024]) {
  test(`header controls stay within the viewport at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    for (const fontSize of [100, 150]) {
      await page.locator('html').evaluate((node, size) => {
        node.style.fontSize = `${size}%`;
      }, fontSize);
      for (const appearance of ['light', 'dark']) {
        await page.getByRole('combobox', { name: 'Color theme' }).selectOption(appearance);
        // overflow-x: clip can hide controls without increasing scrollWidth.
        const controls = page.locator('.editorial-header-inner').getByRole('link')
          .or(page.locator('.editorial-header-inner').getByRole('combobox'))
          .or(page.locator('.editorial-header-inner').getByRole('button'))
          .or(page.locator('.editorial-header-inner summary'));
        for (const control of await controls.all()) {
          if (!await control.isVisible()) continue;
          const bounds = await control.boundingBox();
          expect(bounds.x).toBeGreaterThanOrEqual(0);
          expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
        }
      }
    }
  });
}

for (const width of [320, 390, 1280]) {
  test(`all routes preserve appearance and fit at ${width}px with 150% text`, async ({ page }, testInfo) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width, height: 900 });
    for (const path of routes) {
      await page.goto(path);
      await expect(page.getByRole('combobox', { name: 'Color theme' })).toBeVisible();
      for (const appearance of ['light', 'dark']) {
        const select = page.getByRole('combobox', { name: 'Color theme' });
        await select.selectOption(appearance);
        await page.addStyleTag({ content: 'html { font-size: 150% !important; }' });
        await expect(page.locator('html')).toHaveCSS('color-scheme', appearance);
        await expect(select).toHaveValue(appearance);
        const bounds = await select.boundingBox();
        expect(bounds.x).toBeGreaterThanOrEqual(0);
        expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
        expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
        await select.focus();
        await expect(select).toBeFocused();
        expect(await select.evaluate((node) => parseFloat(getComputedStyle(node).fontSize))).toBeGreaterThanOrEqual(width <= 768 ? 16 : 14);
        expect(await select.evaluate((node) => getComputedStyle(node).outlineStyle)).not.toBe('none');
        expect(await select.evaluate((node) => node.getBoundingClientRect().height)).toBeGreaterThanOrEqual(44);
        const expectedMeta = await page.locator('script[src="/theme.js"]').getAttribute('data-' + appearance);
        await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', expectedMeta);
        if (width !== 390) await page.screenshot({
          path: testInfo.outputPath(`${path.replaceAll('/', '_') || 'home'}-${appearance}-${width}.png`),
          fullPage: true, animations: 'disabled',
        });
      }
    }
  });
}

test('legacy Portfolio preference migrates without preventing a System reset', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'dracula'));
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await expect(page.getByRole('combobox', { name: 'Color theme' })).toHaveValue('dark');
  await page.getByRole('combobox', { name: 'Color theme' }).selectOption('system');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

async function contrast(locator) {
  return locator.evaluate((node) => {
    const rgb = (value) => value.match(/[\d.]+/g).map(Number);
    const luminance = (values) => values.slice(0, 3).map((v) => v / 255)
      .map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
      .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
    const foreground = luminance(rgb(getComputedStyle(node).color));
    for (let ancestor = node; ancestor; ancestor = ancestor.parentElement) {
      const color = rgb(getComputedStyle(ancestor).backgroundColor);
      if (color.length === 3 || color[3] === 1) {
        const background = luminance(color);
        return (Math.max(foreground, background) + 0.05) / (Math.min(foreground, background) + 0.05);
      }
    }
    throw new Error('Expected an opaque semantic surface');
  });
}

test('Migration document links remain readable in both appearances and hover states', async ({ page }) => {
  await page.goto('/migration');
  const link = page.getByRole('link', { name: 'Theme contrast reference', exact: true });
  await expect(link).toBeVisible();
  for (const appearance of ['light', 'dark']) {
    await page.getByRole('combobox', { name: 'Color theme' }).selectOption(appearance);
    expect(await contrast(link)).toBeGreaterThanOrEqual(4.5);
    await link.hover();
    expect(await contrast(link)).toBeGreaterThanOrEqual(4.5);
    await page.keyboard.press('Tab');
    await link.focus();
    await expect(link).toBeFocused();
    expect(await link.evaluate((node) => getComputedStyle(node).outlineStyle)).not.toBe('none');
  }
});

test('native error appearance preserves preference and follows System without React', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page.getByRole('combobox', { name: 'Color theme' }).selectOption('dark');
  const response = await page.goto('/does-not-exist/nested');
  expect(response.status()).toBe(404);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');
  expect(await contrast(page.getByRole('link'))).toBeGreaterThanOrEqual(4.5);
  await page.getByRole('link').click();
  await page.getByRole('combobox', { name: 'Color theme' }).selectOption('system');
  await page.goto('/does-not-exist/nested');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

// Intermediate widths catch clipped navigation even when overflow-x hides it.
test('compact theme and navigation remain reachable with enlarged text', async ({ page }) => {
  await page.goto('/');
  await page.addStyleTag({ content: 'html { font-size: 150% !important; }' });
  for (const width of [320, 390, 640, 768, 960, 961, 1024, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const mode of ['light', 'dark', 'system']) {
      const select = page.getByRole('combobox', { name: 'Color theme' });
      await select.selectOption(mode);
      await expect(select).toHaveValue(mode);
      const controls = page.locator('header').getByRole('link').or(select);
      for (const control of await controls.all()) {
        if (!await control.isVisible()) continue;
        const bounds = await control.boundingBox();
        expect(bounds.x).toBeGreaterThanOrEqual(0);
        expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
      }
      await select.focus();
      await expect(select).toBeFocused();
      await select.press('Tab');
      await expect(select).not.toBeFocused();
    }
  }
});

test('theme typography stays secondary to navigation and scales with text', async ({ page }, testInfo) => {
  await page.goto('/');
  const select = page.getByRole('combobox', { name: 'Color theme' });
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const scale of [100, 150]) {
      await page.locator('html').evaluate((node, value) => { node.style.fontSize = `${value}%`; }, scale);
      const expectedSize = (width <= 768 ? 16 : 14) * scale / 100;
      await expect(select).toHaveCSS('font-size', `${expectedSize}px`);
      await expect(select).toHaveCSS('font-weight', '400');
      expect((await select.boundingBox()).height).toBeGreaterThanOrEqual(44);
      for (const mode of ['system', 'light', 'dark']) {
        await select.selectOption(mode);
        await expect(select).toHaveValue(mode);
        // Show the resting control beside navigation, without its keyboard focus ring.
        await select.press('Tab');
        await page.screenshot({ path: testInfo.outputPath(`theme-navigation-${width}-${scale}-${mode}.png`), animations: 'disabled' });
      }
    }
  }
});

test.describe('touch appearance controls', () => {
  test.use({ hasTouch: true });
  test('large touch screens retain native form legibility', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    expect(await page.evaluate(() => matchMedia('(any-pointer: coarse)').matches)).toBe(true);
    await expect(page.getByRole('combobox', { name: 'Color theme' })).toHaveCSS('font-size', '16px');
  });
});
