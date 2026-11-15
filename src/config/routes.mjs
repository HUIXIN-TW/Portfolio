// The single source of truth for Portfolio URL paths and navigation.
// Cloudflare Pages route ownership: Cloudflare Pages emits physical HTML
// entrypoints for each static route and published article slug.
export const ROUTES = Object.freeze({
  home: "/",
  education: "/education",
  certificatesAndAwards: "/certificates-awards",
  experience: "/experience",
  projects: "/projects",
  writing: "/writing",
  writingPost: "/writing/:slug",
  migration: "/migration",
  referee: "/referee",
});

export const PRIMARY_NAV_ITEMS = Object.freeze([
  { to: ROUTES.projects, label: "Projects" },
  { to: ROUTES.experience, label: "Experience" },
  { to: ROUTES.writing, label: "Writing" },
]);

export const SECONDARY_NAV_ITEMS = Object.freeze([
  { to: ROUTES.education, label: "Education" },
  { to: ROUTES.certificatesAndAwards, label: "Awards" },
  { to: ROUTES.referee, label: "Referee" },
]);

// Preserve incoming links to the former About page, but do not expose it in navigation.
export const LEGACY_ROUTES = Object.freeze({ about: "/about" });

export const STATIC_PAGE_ROUTES = Object.freeze([
  ...Object.values(ROUTES).filter((route) => route !== ROUTES.home && !route.includes(":")),
  ...Object.values(LEGACY_ROUTES),
]);

export const getWritingPostPath = (slug) => `${ROUTES.writing}/${encodeURIComponent(slug)}`;
