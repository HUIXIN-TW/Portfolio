import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import About from "./sections/About";
import Home from "./sections/Home";
import Education from "./sections/Education";
import CertificatesAndAwards from "./sections/CertificatesAndAwards";
import ProjectsPage from "./sections/ProjectsPage";
import Migration from "./sections/Migration";
import Referee from "./sections/Referee";
import Experience from "./sections/Experience";
import BlogPage from "./sections/BlogPage";
import BlogPostPage from "./sections/BlogPostPage";
import { applyThemeToDocument, getInitialTheme, THEME_DRACULA, THEME_LIGHT, THEME_STORAGE_KEY } from "./utils/theme";

import "./styles/main.css";

const JapanTripZh = React.lazy(() => import("./sections/JapanTripZh"));
const JapanTripEn = React.lazy(() => import("./sections/JapanTripEn"));

const siteProps = {
  name: "Huixin Yang",
  title: "Software Engineer & CPA Australia",
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
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const isTripsDomain = window.location.hostname === "trips.huixinyang.com";
  const isJapanTrip = isTripsDomain || ["/japan", "/japan/zh", "/japan/en"].includes(path);
  return (
    <div
        id="main"
        className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#282A36] dark:text-[#F8F8F2]"
      >
        {!isJapanTrip && <Header theme={theme} onThemeToggle={handleThemeToggle} />}
        <main className="flex-1 w-full relative">
          {/* Define your routes */}
          <React.Suspense fallback={<div role="status" className="p-8 text-center">Loading trip…</div>}>
            <Routes>
            <Route path="/japan" element={<JapanTripZh />} />
            <Route path="/japan/zh" element={<JapanTripZh />} />
            <Route path="/japan/en" element={<JapanTripEn />} />
            <Route path="/" element={isTripsDomain ? <Navigate to="/japan" replace /> : <Home name={siteProps.name} title={siteProps.title} />} />
            {!isTripsDomain && (
              <>
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates-awards" element={<CertificatesAndAwards />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/referee" element={<Referee />} />
              </>
            )}
            {isTripsDomain && <Route path="*" element={<div role="status" className="mx-auto max-w-2xl p-10 text-center"><h1 className="text-2xl font-semibold">404 · Page not found</h1><p className="mt-3"><a href="/japan" className="underline">Japan trip / 日本旅行</a></p></div>} />}
            </Routes>
          </React.Suspense>
        </main>
        {!isJapanTrip && <Footer {...siteProps} theme={theme} />}
    </div>
  );
};

export default App;
