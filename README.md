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
`public/404.html` disables that catch-all so retired Trips and Portfolio paths
return a native HTTP 404. Avoid `_redirects` rewrites to `/index.html`:
production `/projects` previously returned **HTTP 308 Location: /** instead
of loading Projects. This regression was missed by Vite's SPA fallback tests.

The production build now generates **physical clean-URL HTML entrypoints**
(e.g. `dist/projects.html` and `dist/blog/hello-blog.html`) from React Router's
literal routes and published Markdown blog slugs. Cloudflare Pages serves
`/projects` directly from `/projects.html` without rewriting to root. Adding
a new static route or published blog post automatically creates an entrypoint;
unknown slugs remain HTTP 404. The build validates route ownership and absence
of redirect rules. Static HTML entries load the same React bundle; content is
rendered by the existing React Router, not server-rendered.

`npm run test:e2e` uses **Wrangler Pages dev** rather than Vite preview, asserting
server-level 200/404 statuses and no `Location` header for owned/retired routes.
Still verify real HTTP responses after the Cloudflare Pages production deploy.
