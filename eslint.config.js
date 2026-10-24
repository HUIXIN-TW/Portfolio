import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { js, react },
    extends: ["js/recommended"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^React$" }],
      "react/jsx-uses-vars": "error",
    },
  },
  {
    files: ["*.config.{js,mjs}", "scripts/**/*.mjs"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["tests/**/*.mjs"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["functions/**/*.js"],
    languageOptions: {
      globals: globals.serviceworker,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
]);
