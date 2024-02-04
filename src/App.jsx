import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

import "./styles/main.css";

const siteProps = {
  name: "Huixin Yang",
  title: "Software Developer & CPA Australia",
  email: "huixin.yang.tw@gmail.com",
  gitHub: "HUIXIN-TW",
  instagram: "",
  linkedIn: "hui-xin-yang",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </Router>
  );
};

export default App;
