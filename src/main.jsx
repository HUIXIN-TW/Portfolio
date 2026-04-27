import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyThemeToDocument, getInitialTheme } from "./utils/theme";

const rootElement = document.getElementById("root");

applyThemeToDocument(getInitialTheme());

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("No root element found!");
}
