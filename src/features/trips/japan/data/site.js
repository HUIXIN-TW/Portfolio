// Shared by the browser app and static HTML generation.
export const TRIP_ORIGIN = "https://trips.huixinyang.com";
export const TRIP_ROUTES = { zh: "/japan", en: "/japan/en" };
export const TRIP_ICON = "/trips/japan/favicon.png";

export function tripCanonicalUrl(locale) {
  return TRIP_ORIGIN + TRIP_ROUTES[locale];
}
