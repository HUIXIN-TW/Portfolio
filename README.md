## 🔗 Demo

- [Live Portfolio](https://huixinyang.com)
- [GitHub Pages Deployment](https://huixintws.github.io/portfolio/)

## 🎮 Tech Stack

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- Node.js
- Deploying to a production environment: AWS Amplify

## Deployment Instructions

### Production: AWS Amplify

- **Environment:** Production
- **Workflow:**
  - When your changes are merged to the `main` branch, AWS Amplify automatically builds and deploys your site.

### Staging / Testing Preview: GitHub Pages

- **Environment:** Staging (Preview or Development)
- **Workflow:**
  - The project uses Parcel to build static assets into the `dist` folder.
  - To deploy the staging version, simply run:

  ```bash
  npm run deploy
  ```

## 🗃️ JavaScript Portfolio

The repo contains the following:

- `/.devcontainer`
  - `.devcontainer/Dockerfile`: A configuration file used by Codespaces to determine operating system and other details.
  - `.devcontainer/devcontainer.json`: A configuration file used by Codespaces to configure Visual Studio Code settings, such as the enabling of additional extensions.
- `/src`: This directory contains HTML, JS and CSS files used to build this portfolio site.
- `.eslintrc`: This file contains settings for [ESLint](https://eslint.org/) that is included for code consistency and quality.
- `.prettierrc`: This file contains settings for [Prettier](https://prettier.io/) that is used to format code.
- `package.json` and `package-lock.json`: These files define the project information for [Node.js](https://nodejs.org/), dependent packages and the versions needed of each.
