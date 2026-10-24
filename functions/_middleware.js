import { canServeTrip } from "../src/features/trips/japan/data/site.js";

export function isTripPath(pathname) {
  return /^\/japan(?:\/|$|\.html$)/.test(pathname) ||
    /^\/trips\/japan(?:\/|$)/.test(pathname);
}

// Runs before Pages serves static assets, unlike a React-only 404.
export function onRequest({ request, next }) {
  const { hostname, pathname } = new URL(request.url);
  if (!isTripPath(pathname) || canServeTrip(hostname)) {
    return next();
  }

  return new Response("404 Not Found", {
    status: 404,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex",
    },
  });
}
