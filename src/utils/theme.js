export const THEME_LIGHT = "light";
export const THEME_DRACULA = "dracula";
export const THEME_STORAGE_KEY = "theme";

export const isValidTheme = (value) => value === THEME_LIGHT || value === THEME_DRACULA;

export const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return THEME_LIGHT;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (isValidTheme(storedTheme)) {
      return storedTheme;
    }
  } catch {
    // Ignore storage access failures and fall back to system preference.
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? THEME_DRACULA : THEME_LIGHT;
};

export const applyThemeToDocument = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  const isDracula = theme === THEME_DRACULA;
  document.documentElement.classList.toggle("dark", isDracula);
  document.documentElement.style.colorScheme = isDracula ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
};
