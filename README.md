## 🔗 Demo

- [Live Portfolio](https://portfolio.huixinyang.com/)

## 🎮 Tech Stack

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- Node.js
- Vite
- Deploying to a production environment: Cloudflare

## Deployment Instructions

### Production: Cloudflare

Huixin's portfolio [huixinyang.com](https://portfolio.huixinyang.com/) is hosted on Cloudflare.

- **Environment:** Production
- **Workflow:**

  - Cloudflare Pages build command: `npm ci && npm run build`
  - Cloudflare Pages build output directory: `dist`
  - Node version: `22.12.0` or any newer `22.x` release; Vite also supports Node `20.19+`
  - When your changes are merged to the `main` branch, Cloudflare automatically builds and deploys your site.

- To preview the built app locally:

  ```bash
  npm run preview
  ```

## 🗃️ JavaScript Portfolio

The repo contains the following:

- `/.devcontainer`
  - `.devcontainer/Dockerfile`: A configuration file used by Codespaces to determine operating system and other details.
  - `.devcontainer/devcontainer.json`: A configuration file used by Codespaces to configure Visual Studio Code settings, such as the enabling of additional extensions.
- `/src`: This directory contains HTML, JS and CSS files used to build this portfolio site.
- `index.html`: Vite entry HTML at the repository root.
- `eslint.config.js`: This file contains settings for [ESLint](https://eslint.org/) that is included for code consistency and quality.
- `.prettierrc`: This file contains settings for [Prettier](https://prettier.io/) that is used to format code.
- `package.json` and `package-lock.json`: These files define the project information for [Node.js](https://nodejs.org/), dependent packages and the versions needed of each.
