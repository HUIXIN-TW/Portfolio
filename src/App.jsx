import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import About from "./sections/About";
import Home from "./sections/Home";
import Education from "./sections/Education";
import CertificatesAndAwards from "./sections/CertificatesAndAwards";
import Portfolio from "./sections/Portfolio";
// import Contact from "./sections/Contact";
import Referee from "./sections/Referee";
import Experience from "./sections/Experience";

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

const primaryColor = "#e5e7eb";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <Router>
      <div id="main">
        <Header />
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home name={siteProps.name} title={siteProps.title} />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates-awards" element={<CertificatesAndAwards />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/referee" element={<Referee />} />
        </Routes>
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </Router>
  );
};

export default App;
