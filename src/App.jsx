import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import { ROUTES } from "./config/routes.mjs";
import Header from "./ui/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import CertificatesAndAwardsPage from "./pages/CertificatesAndAwardsPage";
import ProjectsPage from "./pages/ProjectsPage";
import MigrationPage from "./pages/MigrationPage";
import RefereePage from "./pages/RefereePage";
import ExperiencePage from "./pages/ExperiencePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import { applyThemeToDocument, getInitialTheme, THEME_DRACULA, THEME_LIGHT, THEME_STORAGE_KEY } from "./utils/theme";

import "./styles/main.css";
import "./styles/editorial.css";

const siteProps = {
  name: "Huixin Yang",
  title: "PLATFORM ENGINEERING / BACKEND SYSTEMS",
  email: "huixin.yang.tw@gmail.com",
  gitHub: "HUIXIN-TW",
  instagram: "",
  linkedIn: "hui-xin-yang",
  medium: "",
  twitter: "",
  youTube: "",
};

const App = () => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    applyThemeToDocument(theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures; the selected theme still applies for the current session.
    }
  }, [theme]);

  const handleThemeToggle = React.useCallback(() => {
    setTheme((currentTheme) => (currentTheme === THEME_DRACULA ? THEME_LIGHT : THEME_DRACULA));
  }, []);

  return (
    <Router>
      <SiteRoutes theme={theme} handleThemeToggle={handleThemeToggle} siteProps={siteProps} />
    </Router>
  );
};

const SiteRoutes = ({ theme, handleThemeToggle, siteProps }) => {
  return (
    <div
      id="main"
      className="editorial-shell min-h-screen flex flex-col"
    >
      <Header theme={theme} onThemeToggle={handleThemeToggle} />
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path={ROUTES.home} element={<HomePage name={siteProps.name} title={siteProps.title} />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.education} element={<EducationPage />} />
          <Route path={ROUTES.certificatesAndAwards} element={<CertificatesAndAwardsPage />} />
          <Route path={ROUTES.experience} element={<ExperiencePage />} />
          <Route path={ROUTES.projects} element={<ProjectsPage />} />
          <Route path={ROUTES.blog} element={<BlogPage />} />
          <Route path={ROUTES.blogPost} element={<BlogPostPage />} />
          <Route path={ROUTES.migration} element={<MigrationPage />} />
          <Route path={ROUTES.referee} element={<RefereePage />} />
          <Route
            path="*"
            element={
              <section className="mx-auto max-w-2xl px-6 py-16 text-center">
                <h1 className="text-2xl font-semibold">404 · Page not found</h1>
                <p className="mt-4"><a href="/" className="underline">Back to Portfolio</a></p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer {...siteProps} theme={theme} />
    </div>
  );
};

export default App;
