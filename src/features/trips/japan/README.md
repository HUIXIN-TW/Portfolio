# Japan Trip

The travel guide is a self-contained feature, not a Portfolio section.

## Architecture

- `JapanTripPage.jsx` is the single renderer. The router supplies `zh` or `en`.
- `data/itinerary.js` owns the ordered itinerary stop IDs and planned display times (shared across languages).
- `content/{zh,en}.js` holds natural-language day and stop descriptions keyed by the stable IDs. `localizeDays` assembles the localized view; do not duplicate schedule times.
- `components/` contains presentation and user interaction. Avoid putting localized copy or source-of-truth records in components.
- `data/` contains language-independent checklist IDs, Japanese phrases, hotel facts, shared site URLs, and the 41-place map inventory.
- `utils/map.js` handles place search, category matching, and named Google Maps links with explicit city data.
- `utils/` contains browser effects, clipboard/share behavior and optional local storage.
- `JapanTrip.module.css` styles only this feature.

## Maps and builds

`data/places.js` is the canonical static map export (41 points, eight layers). Do not maintain hand-authored partial CSVs or secondary copies. `scripts/generate-japan-kml.mjs` builds the localized KML files in `public/trips/japan/`; the `predev` and `prebuild` npm lifecycle hooks run it automatically. Files in that public directory are build outputs, not independent source data.

`npm run verify:trips` validates locale structures, stable itinerary/checklist/phrase IDs and map completeness. Section headings share the navigation labels. CI also runs ESLint, Build, and browser smoke tests.

## Routing and persistence

Canonical routes: `/japan` (zh) and `/japan/en` (en), served only on `trips.huixinyang.com` (plus local development). Cloudflare Pages preview domains deliberately return HTTP 404 for trip routes. Cloudflare Pages middleware returns HTTP 404 for these routes and their trip assets on `portfolio.huixinyang.com` and other main-site domains; `public/_routes.json` limits Function invocations to trip paths. No legacy redirects. The checklist and meeting time use the current browser storage keys only; previous development-era keys are deliberately not supported.

## Browser checks

After `npm ci` and `npx playwright install chromium`, run `npm run build && npm run test:e2e`. The suite verifies localized metadata, language switching, Checklist persistence, map search and accordions, and responsive layout. There are no screenshot baselines or pixel-diff checks; UI changes can be reviewed locally; the production Trips domain serves the deployed guide.
