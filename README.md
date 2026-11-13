## 🔗 Demo

- [Live Portfolio](https://portfolio.huixinyang.com/)

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

## Portfolio route ownership

The Projects page uses the canonical `/projects` route for both desktop/mobile navigation and direct links.
The retired `/portfolio` path intentionally returns HTTP 404 and does not redirect.

Portfolio does not serve or redirect retired Trips paths, including `/japan`,
`/japan/en`, HTML aliases, or `/trips/japan/*`. They return HTTP 404
instead of forwarding to another application.

Cloudflare Pages normally serves `index.html` for unknown SPA paths.
`public/404.html` disables that catch-all, and `public/_redirects`
contains **internal 200 rewrites only for Portfolio routes**, including
dynamic blog posts. New React Router routes must be added to `_redirects`
or the production build verification will fail.

`npm run build` verifies the Pages route contract, while the Playwright
suite covers valid Portfolio navigation and the client-side not-found view.
Verify actual 404 / 200 HTTP statuses on the Cloudflare Pages deployment.
