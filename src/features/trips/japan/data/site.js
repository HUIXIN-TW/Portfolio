// Shared by the browser app and static HTML generation.
export const TRIP_ORIGIN = "https://trips.huixinyang.com";
export const TRIP_ROUTES = { zh: "/japan", en: "/japan/en" };
export const TRIP_ICON = "/trips/japan/favicon.png";

export function tripCanonicalUrl(locale) {
  return TRIP_ORIGIN + TRIP_ROUTES[locale];
}

// Only the Trips domain (plus local dev and this project's Pages previews)
// should render trip content. Portfolio and other custom domains must not.
export function canServeTrip(hostname) {
  return hostname === "trips.huixinyang.com" ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "portfolio-3oq.pages.dev" ||
    hostname.endsWith(".portfolio-3oq.pages.dev");
}
