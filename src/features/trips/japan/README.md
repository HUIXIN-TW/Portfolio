# Japan Trip

The travel guide is a self-contained feature, not a Portfolio section.

## Architecture

- `JapanTripPage.jsx` is the single renderer. The router supplies `zh` or `en`.
- `data/itinerary.js` owns the ordered itinerary stop IDs and planned display times (shared across languages).
- `content/{zh,en}.js` holds natural-language day and stop descriptions keyed by the stable IDs. `localizeDays` assembles the localized view; do not duplicate schedule times.
- `components/` contains presentation and user interaction. Avoid putting localized copy or source-of-truth records in components.
- `data/` contains language-independent checklist IDs, Japanese phrases, hotel facts, and the 41-place map inventory.
- `utils/` contains browser effects, clipboard/share behavior and optional local storage.
- `JapanTrip.module.css` styles only this feature.

## Maps and builds

`data/places.js` is the canonical static map export (41 points, eight layers). Do not maintain hand-authored partial CSVs or secondary copies. `scripts/generate-japan-kml.mjs` builds the localized KML files in `public/trips/japan/`; the `predev` and `prebuild` npm lifecycle hooks run it automatically. Files in that public directory are build outputs, not independent source data.

`npm run verify:trips` validates locale structures, stable itinerary/checklist/phrase IDs and map completeness. CI also runs ESLint and the Vite build.

## Routing and persistence

Canonical routes: `/japan` (zh) and `/japan/en` (en). No legacy redirects. The checklist and meeting time use the current browser storage keys only; previous development-era keys are deliberately not supported.

## Browser and visual checks

Run `npm install --no-save --package-lock=false @playwright/test@1.55.1` and `npx playwright install chromium`, then `npm run build && npm run test:e2e`. CI runs real Chromium checks for language switching, persisted Checklist state, controlled map accordions and key CSS layout properties. It captures desktop/mobile screenshots as workflow artifacts. Full pixel-diff visual regression requires separately reviewed and committed reference screenshots before broader CSS refactoring; merely taking screenshots is not a pixel-diff baseline.
