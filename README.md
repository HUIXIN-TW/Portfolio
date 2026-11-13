## 🔗 Demo

- [Live Portfolio](https://portfolio.huixinyang.com/)
- [Trips](https://trips.huixinyang.com/) — separate app and Cloudflare Worker, maintained in [huixin-web-platform](https://github.com/HUIXIN-TW/huixin-web-platform/tree/master/apps/public/trips).

## 🎮 Tech Stack

- React 18 + React Router
- Vite
- Tailwind CSS
- react-markdown + remark-gfm (blog rendering)
- @headlessui/react + @heroicons/react (accessible UI primitives)
- Cloudflare Pages (hosting)

## 🗂️ Project Structure

```
src/
├── App.jsx              # Root component; defines routes and theme state
├── main.jsx             # Entry point; mounts React app
├── assets/images/       # Static images and social icons (loaded via import.meta.url)
├── blogs/               # Markdown blog posts (loaded via blogLoader.js)
├── data/                # JSON data files for each portfolio section
├── sections/            # Page-level route components
├── styles/              # Global CSS (main.css) and shared Tailwind class strings (uiClasses.js)
├── ui/                  # Shared presentational components
└── utils/               # Utilities: blogLoader, theme, projectGalleryFilters
public/
├── ship-it-maybe.png    # Podcast cover image (referenced by src/data/podcast.json)
└── swe.png              # iOS Home Screen icon (referenced by apple-touch-icon in index.html; no JS import)
```

## 🚀 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint:strict` | Run ESLint across all `.js` / `.jsx` files |

## ☁️ Deployment

Hosted on **Cloudflare Pages**.

- Build command: `npm ci && npm run build`
- Output directory: `dist`
- Node version: `22.x` (also supports `20.19+`)
- Deploys automatically when changes merge to `main`.

## 🗃️ Config Files

| File | Purpose |
|---|---|
| `index.html` | Vite HTML entry; contains inline theme-init script, favicon, and iOS Home Screen metadata |
| `vite.config.mjs` | Vite configuration |
| `tailwind.config.js` | Tailwind CSS configuration |
| `eslint.config.js` | ESLint rules |
| `.prettierrc` | Prettier formatting rules |
| `package.json` | Dependencies and scripts |

## Trips migration

Portfolio no longer bundles Japan trip pages, content, KML generation or trip assets.
Cloudflare Pages `public/_redirects` permanently redirects legacy `/japan`, `/japan/en`,
HTML aliases and `/trips/japan/*` assets to `https://trips.huixinyang.com`.
A small React route fallback covers client-side navigation to legacy Japan paths.
The Portfolio root and existing Portfolio routes remain on this Pages project.

`npm run test:e2e` checks Portfolio navigation and the legacy client-side redirects.
Vite preview does not implement Pages `_redirects`; verify HTTP 301 responses on the
Cloudflare Pages preview deployment before merging.
