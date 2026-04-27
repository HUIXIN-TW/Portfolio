import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div
        id="main"
        className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#282A36] dark:text-[#F8F8F2]"
      >
        <Header theme={theme} onThemeToggle={handleThemeToggle} />
        <main className="flex-1 w-full relative">
          {/* Define your routes */}
          <Routes>
            <Route path="/" element={<Home name={siteProps.name} title={siteProps.title} />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates-awards" element={<CertificatesAndAwards />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/referee" element={<Referee />} />
          </Routes>
        </main>
        <Footer {...siteProps} theme={theme} />
      </div>
    </Router>
  );
};

export default App;
