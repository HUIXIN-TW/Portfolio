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
├── config/routes.mjs    # Canonical route paths, navigation and blog URL helper
├── blogs/               # Markdown blog posts (loaded via blogLoader.js)
├── data/                # Data sources (JSON collections and JavaScript career case studies)
├── pages/               # Route-level components (PascalCase + Page.jsx)
├── sections/            # Reusable page sections (PascalCase)
├── styles/              # Global CSS (main.css) and shared Tailwind class strings (uiClasses.js)
├── ui/                  # Shared UI components (PascalCase)
└── utils/               # Utilities: blogLoader, theme, projectFilters
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

The route registry in `src/config/routes.mjs` is the single source of URL paths and navigation. Both React Router and the build-time Pages entrypoint scripts import this registry. The production build now generates **physical clean-URL HTML entrypoints**
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

## Editorial Engineering visual system

Portfolio uses Direction A (Editorial Engineering), selected on 15 November 2026. This independent repository is not part of the Home/Trips/Space monorepo.

- Semantic light/dark tokens: src/styles/editorial.css; shared primitive classes: src/styles/uiClasses.js.
- Light palette: near-neutral warm-white #FAF9F7, graphite #25272B, neutral gray #60656D; slate-blue #415E7A only for interaction accents. Dark mode uses charcoal #191B20, not green.
- Fonts: Inter/Noto Sans TC/system sans with monospace only for secondary technical labels. The existing Google Fonts request already enables display=swap; no new font files are introduced.
- Home prioritizes an engineering proposition, featured work and concise biography. The full About, education, awards, referees and other existing routes stay accessible.
- Projects shows role, summary and leading technologies upfront, with other details/media in an accessible disclosure. Category filtering remains; advanced technology filters start collapsed.
- Navigation: Work, Experience, Writing and Resume; supporting pages stay in More/mobile menu.
- No route migrations, extra API calls, invented performance metrics, Cloudflare Pages rewrites or particle animation were added.
- Acceptance: lint/build and Playwright route, responsive, theme and keyboard tests. Actual production screenshots and Safari/150% text review are a separate manual acceptance step.

## Platform-first editorial content

As of 15 November 2026, the Portfolio prioritises **Platform & Backend Engineering**. Public case-study summaries in `src/data/platformCaseStudies.js` were curated from the private Notion Engineering Experience & Skills Library / Engineering Evidence DB (career project records), with only `Delivered` engineering work featured. These are public-friendly summaries, not replicas of confidential architecture or private Notion links.

- Home highlights AWS infrastructure migration, Pulumi IaC, ECS cost optimisation and repeatable CI/CD & cross-service staging validation.
- `/projects` leads with four delivered career case studies: AWS Platform Migration; CI/CD & Staging; Snowflake Infrastructure & Access Governance; and Data Platform CI Quality Gates.
- The original 16 independent and earlier projects remain under Applications & Projects, with existing filters and details preserved.
- Data Engineering is a connected competency, not the primary headline. Personal products remain visible in the project archive.
- Do not promote unverified Terraform or Azure DevOps → GitHub Enterprise initiatives to delivered case studies. Avoid publishing private source/evidence URLs, sensitive configuration or unreconciled performance metrics.

## Naming and public URL stability

- React route files: `src/pages/FooPage.jsx` (PascalCase + Page), even where the URL is just `/foo`.
- Reusable composition sections: `src/sections/FooSection.jsx` or a semantic PascalCase name, e.g. `HomeHero.jsx`.
- Shared UI: `src/ui/ProjectCard.jsx`, `src/ui/ProjectFilters.jsx`. JavaScript utilities/data modules use camelCase (`blogLoader.js`, `projectFilters.js`, `platformCaseStudies.js`).
- JSON, image and Markdown filenames use lowercase kebab-case for new files (`blog-posts.json`). Pre-existing data/asset filenames are not mass-renamed if compatibility or provenance is uncertain.
- Public URLs and blog slugs are lowercase kebab-case and come exclusively from `src/config/routes.mjs` + Markdown frontmatter. Display names may differ from route names (e.g. Work → `/projects`, Writing → `/blog`).
- Do not rename published routes or blog slugs as a side effect of moving source files. Keep Cloudflare Pages physical HTML entrypoints and native 404 rules intact.
