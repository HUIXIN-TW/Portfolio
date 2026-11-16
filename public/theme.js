/* Runs before React and styles: explicit preference and resolved appearance stay separate.
 * This app-local contract is intentionally independent of the other deployed origins. */
(() => {
  const script = document.currentScript;
  const key = 'huixin.theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const listeners = new Set();
  const valid = (value) => ['system', 'light', 'dark'].includes(value);
  let preference = 'system';
  const readPreference = () => {
    try {
      const stored = localStorage.getItem(key);
      if (valid(stored)) return stored;
      // Preserve existing Portfolio choices without writing the system result as an override.
      if (script.dataset.legacy === 'portfolio' && stored === null) {
        const legacy = localStorage.getItem('theme');
        if (legacy === 'dracula') return 'dark';
        if (legacy === 'light') return 'light';
      }
    } catch { /* Storage may be unavailable; system and in-session choices still work. */ }
    return 'system';
  };
  const apply = () => {
    const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    root.dataset.theme = resolved;
    root.dataset.themePreference = preference;
    root.classList.toggle('dark', resolved === 'dark');
    root.style.colorScheme = resolved;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = resolved === 'dark' ? script.dataset.dark : script.dataset.light;
    listeners.forEach((listener) => listener());
  };
  preference = readPreference();
  window.huixinTheme = {
    getPreference: () => preference,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setPreference(value) {
      if (!valid(value)) return;
      preference = value;
      try { localStorage.setItem(key, value); } catch { /* Keep the in-session choice. */ }
      apply();
    },
  };
  media.addEventListener('change', () => { if (preference === 'system') apply(); });
  window.addEventListener('storage', (event) => {
    if (event.key !== key && event.key !== null) return;
    try { if (event.storageArea !== localStorage) return; } catch { return; }
    preference = readPreference();
    apply();
  });
  apply();
})();
