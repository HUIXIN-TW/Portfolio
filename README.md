## 🔗 Demo

- [Live Portfolio](https://portfolio.huixinyang.com/)

## 🎮 Tech Stack

- React 18 + React Router
- Vite
- Tailwind CSS
- react-markdown + remark-gfm (Writing article rendering)
- @headlessui/react + @heroicons/react (accessible UI primitives)
- Cloudflare Pages (hosting)

## 🗂️ Project Structure

```
src/
├── App.jsx              # Root component; defines routes and page composition
├── main.jsx             # Entry point; mounts React app
├── assets/images/       # Static images and social icons (loaded via import.meta.url)
├── config/routes.mjs    # Canonical route paths, navigation and article URL helper
├── blogs/               # Markdown blog posts (loaded via blogLoader.js)
├── data/                # Data sources (JSON collections and JavaScript career case studies)
├── pages/               # Route-level components (PascalCase + Page.jsx)
├── sections/            # Reusable page sections (PascalCase)
├── styles/              # Global CSS (main.css) and shared Tailwind class strings (uiClasses.js)
├── ui/                  # Shared UI components (PascalCase)
└── utils/               # Utilities: blogLoader, projectFilters
public/
├── ship-it-maybe.png    # Podcast cover image (referenced by src/data/podcast.json)
├── swe.png              # Legacy asset retained for URL compatibility
├── portfolio-rocket-v2-48.png    # Same artwork for Safari's small tab icon
├── portfolio-rocket-v2-192.png   # iOS Home Screen icon and 192px PWA icon
├── portfolio-rocket-512.webp  # High-resolution PWA icon
└── site.webmanifest           # Install metadata and icon identity
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
| `index.html` | Vite HTML entry; loads the synchronous app-local appearance script, favicon, and iOS Home Screen metadata |
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
(e.g. `dist/projects.html` and `dist/writing/building-static-portfolio-blog.html`) from React Router's
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
- Home prioritizes an engineering proposition, featured work and concise biography. Career background is now a concise section on Home; the standalone About page was removed. Education, awards, references and other supported routes remain.
- Projects shows role, summary and leading technologies upfront, with other details/media in an accessible dialog. Category filtering remains; advanced technology filters start collapsed.
- Navigation: Projects, Experience, Writing and Resume; supporting pages stay in More/mobile menu.
- No extra API calls, invented performance metrics, Cloudflare Pages rewrites or particle animation were added.
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
- JSON, image and Markdown filenames use lowercase kebab-case for new files (`blog-posts.json`, `major-projects.json`). The three legacy project collections are named plural to reflect their contents; their internal JSON schema stays unchanged. Public asset URLs are not mass-renamed when compatibility or provenance is uncertain.
- Public URLs and blog slugs are lowercase kebab-case and come exclusively from `src/config/routes.mjs` + Markdown frontmatter.
- `npm run build` runs `scripts/verify-source-conventions.mjs` before generating Pages route entrypoints, enforcing route-key ↔ page-filename matching and named-file conventions. Display names may differ from route names (e.g. Work → `/projects`, Writing → `/writing`).
- Do not rename published routes or blog slugs as a side effect of moving source files. Keep Cloudflare Pages physical HTML entrypoints and native 404 rules intact.

## Portfolio rocket icon identity

The rocket artwork was provided by the user on 15 November 2026, and crops of the **same supplied image** are used for all three icon contexts. No vector redraw or alternate icon illustration is introduced.

- Safari favicon: `/portfolio-rocket-v2-48.png`, a 48×48 resize of the same artwork and framing used by the Home Screen and manifest icons.
- Standard fallbacks: `/favicon.ico` includes 16/32/48px images from the same source; `/apple-touch-icon.png` matches the declared Apple Touch Icon. Versioned PNG URLs give browsers a fresh icon URL after the old lightbulb identity.
- Apple Touch Icon: `/portfolio-rocket-v2-192.png` (192×192 PNG) for Safari **Add to Home Screen**.
- Web app manifest: `/site.webmanifest` specifies the same 192×192 PNG plus a 512×512 WebP. The images use the artwork's existing blue/cream palette; no transparent or maskable claims are made.
- `index.html` uses root-relative paths. Cloudflare Pages' generated physical HTML entrypoints inherit this metadata, including `/projects` and published blog URLs.
- Existing `public/swe.png` and `src/assets/images/idea-coding-round.svg` are retained as legacy assets to avoid breaking any links outside this app. The live icon references no longer point to them.
- Pixel size, asset decoding, icon MIME, manifest contents and icon paths on deep routes are covered by Playwright tests. After deploy, previously opened Safari tabs or pinned Home Screen shortcuts may continue to show the cached old icon until reopened/reinstalled; no website-data clearing is required.

## Independent project details and grid stability

The older project archive uses a two-column grid with cards of varying description lengths. Full text, technology lists, images and videos now render **only in an accessible Headless UI dialog**, not as in-card accordions. Cards display a short, line-clamped summary and a consistent View details control.

- Opening one project's details must not stretch the neighbouring card or push subsequent rows down.
- The dialog is labelled by its project title, supports Escape/backdrop dismissal, restores keyboard focus, and scrolls within the viewport on narrow screens.
- Preserve the existing project list, filtering, links, description content and media. Do not introduce separate routes for project detail or reorder published projects.
- Playwright verifies layout stability, dialog close/focus restoration and long-content 320px mobile scrolling.

## Project detail formatting and recruiter navigation

- Older project descriptions are stored as text arrays. `src/utils/projectDescription.js` parses consecutive dash-prefixed entries as semantic bullet lists; plain prose stays in paragraphs and explicit labels such as `Purpose:` become subheadings. Project JSON content stays unchanged.
- The single-source navigation registry promotes `Projects / Experience / Writing` to primary route items. Resume is directly accessible afterward as an external link. `More` contains Education, Awards, Referee and GitHub, without changing any URL.
- The desktop More popup uses compact, clear link spacing and the mobile menu preserves the same priority order. Playwright covers the menu ordering and list structure.

## Shared page heading and footer system

- `src/ui/PageHeading.jsx` provides the Projects-inspired route-level H1 typography, introductory copy and optional section eyebrow. Projects, Experience, Writing, Education, Awards, References, Migration data and individual articles reuse it; page sections retain their own smaller semantic headings.
- `src/styles/uiClasses.js` maps legacy `sectionContainer` to `editorial-container` so page titles and content align at the same width; no published URL or route key changes.
- `src/ui/ExternalLink.jsx` provides an accessible shared external-link arrow glyph and opens external pages in a new tab with `rel="noopener noreferrer"`. The header's Resume and GitHub and the footer's external links use the same component.
- `src/ui/Footer.jsx` is an editorial three-zone footer: identity and platform focus, Explore/Connect links, and a compact copyright/back-to-top baseline. It supports existing optional social handles without introducing extra services or analytics.
- Playwright verifies link targets and glyphs, heading size and left alignment across routes, footer semantics, and narrow screens.

## Retired About page and single-owner content strategy

- `src/pages/AboutPage.jsx` was deleted. Home now owns a short `src/sections/ProfessionalBackground.jsx` section (`/#background`) grounded in the original career story: audit/accounting experience at Deloitte and PwC informing risk awareness, traceability, and engineering accountability.
- Home leads with platform engineering and examples of delivered work; `EngineeringFocus` remains the sole on-page competency summary. Background adds *career context*, not another AWS/CI/CD skill list.
- `/projects` remains the single location for Notica and WhatToEat Live Site links and the platform case studies. The underlying project descriptions and counts are unchanged.
- `/about` is a **legacy compatibility URL**, listed separately in `LEGACY_ROUTES`, with a physical Cloudflare Pages entrypoint and a React Router `Navigate` to `/#background`. It is not included in navigation or the required `*Page.jsx` source naming contract. Direct HTTP requests return a 200 entrypoint before the client-side transition.
- Header contains Projects, Experience, Writing, external Resume and More; footer Explore follows the same priorities. Tests cover the legacy URL, target section, absence of the retired page, and Live Site link preservation.

## Writing route ownership and navigation scrolling

- Canonical public navigation is Projects, Experience, Writing and external Resume. Both desktop/mobile Header and Footer read the shared route registry.
- `/writing` and `/writing/:slug` serve physical HTML entrypoints. All former `/blog` URLs return native HTTP 404 without redirects or SPA rewrites.
- Writing has one article list and a compact external podcast link; Hello Blog stays an unpublished Markdown draft. Internal Markdown/loader filenames need not match public route names.
- `RouteScrollManager` resets ordinary client-side navigation to the top, resolves same-page and cross-page fragment targets after the route mounts, and leaves Back/Forward scrolling to the browser. Legacy `/about` still leads to `/#background`.
- The frozen `portfolio-v1-final` tag is preserved; this integration does not alter hosting, production domains or the existing Pages pipeline.

## Color appearance

The borderless navigation Theme selector shows a decorative mode icon and the current
System (default), Light or Dark preference. Its native select keeps a 44px hit target,
16px text and a visible keyboard focus ring; hover uses the app accent. System follows OS changes
immediately; explicit choices remain until changed. The preference is stored as
`huixin.theme` in this origin's localStorage and synchronized between open same-origin
tabs. Other subdomains keep independent preferences. Blocked storage falls back to
system and permits in-session selection. A synchronous, app-local `public/theme.js`
sets the resolved appearance, native `color-scheme` and browser `theme-color` before
React renders. The manifest launch background is static; the page updates on load.
Semantic tokens own all appearance colors; illustration assets are unchanged.
Header groups wrap when enlarged text no longer fits on one row, keeping navigation
and the Theme selector within the viewport. Playwright checks actual control bounds
at 960/961/1024px in Light and Dark with both standard and 150% text, alongside the
mobile and desktop route checks.
Existing `theme=light` / `theme=dracula` choices are read when the new preference is absent. Select System to resume OS tracking.
Native HTTP 404 pages use the same appearance bootstrap and app-colored error tokens without loading React.
