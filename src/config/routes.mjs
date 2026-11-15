// The single source of truth for Portfolio URL paths and navigation.
// Keep existing public URLs stable: Cloudflare Pages emits physical HTML
// entrypoints for each static route and published blog slug.
export const ROUTES = Object.freeze({
  home: "/",
  about: "/about",
  education: "/education",
  certificatesAndAwards: "/certificates-awards",
  experience: "/experience",
  projects: "/projects",
  blog: "/blog",
  blogPost: "/blog/:slug",
  migration: "/migration",
  referee: "/referee",
});

export const PRIMARY_NAV_ITEMS = Object.freeze([
  { to: ROUTES.projects, label: "Work" },
  { to: ROUTES.experience, label: "Experience" },
  { to: ROUTES.blog, label: "Writing" },
]);

export const SECONDARY_NAV_ITEMS = Object.freeze([
  { to: ROUTES.about, label: "About" },
  { to: ROUTES.education, label: "Education" },
  { to: ROUTES.certificatesAndAwards, label: "Awards" },
  { to: ROUTES.referee, label: "Referee" },
]);

export const STATIC_PAGE_ROUTES = Object.freeze(
  Object.values(ROUTES).filter((route) => route !== ROUTES.home && !route.includes(":"))
);

export const getBlogPostPath = (slug) => `${ROUTES.blog}/${encodeURIComponent(slug)}`;
