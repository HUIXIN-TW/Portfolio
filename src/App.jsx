import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RouteScrollManager from "./ui/RouteScrollManager";
import Footer from "./ui/Footer";
import { ROUTES, LEGACY_ROUTES } from "./config/routes.mjs";
import Header from "./ui/Header";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import CertificatesAndAwardsPage from "./pages/CertificatesAndAwardsPage";
import ProjectsPage from "./pages/ProjectsPage";
import MigrationPage from "./pages/MigrationPage";
import RefereePage from "./pages/RefereePage";
import ExperiencePage from "./pages/ExperiencePage";
import WritingPage from "./pages/WritingPage";
import WritingPostPage from "./pages/WritingPostPage";

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
  return (
    <Router>
      <RouteScrollManager />
      <SiteRoutes siteProps={siteProps} />
    </Router>
  );
};

const SiteRoutes = ({ siteProps }) => {
  return (
    <div
      id="main"
      className="editorial-shell min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path={ROUTES.home} element={<HomePage name={siteProps.name} title={siteProps.title} />} />
          <Route path={LEGACY_ROUTES.about} element={<Navigate to={`${ROUTES.home}#background`} replace />} />
          <Route path={ROUTES.education} element={<EducationPage />} />
          <Route path={ROUTES.certificatesAndAwards} element={<CertificatesAndAwardsPage />} />
          <Route path={ROUTES.experience} element={<ExperiencePage />} />
          <Route path={ROUTES.projects} element={<ProjectsPage />} />
          <Route path={ROUTES.writing} element={<WritingPage />} />
          <Route path={ROUTES.writingPost} element={<WritingPostPage />} />
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
      <Footer {...siteProps} />
    </div>
  );
};

export default App;
