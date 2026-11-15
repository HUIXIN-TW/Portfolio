import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Introduction = ({ name, title }) => (
  <section id="introduction" className="editorial-hero">
    <div className="editorial-container">
      <div className="editorial-hero-copy">
        <p className="editorial-eyebrow">{title}</p>
        <h1>{name}</h1>
        <h2>Engineering reliable systems, from infrastructure to product.</h2>
        <p className="editorial-lead">
          I build backend platforms, data systems and practical software products
          with a focus on clarity, reliability and thoughtful delivery.
        </p>
        <div className="editorial-actions">
          <Link className="editorial-button editorial-button-primary" to="/projects">
            Explore my work
          </Link>
          <a className="editorial-button editorial-button-secondary" href="https://resume.huixinyang.com/">
            View résumé
          </a>
        </div>
      </div>
      <div className="editorial-hero-aside" aria-hidden="true">
        <span>BACKEND / PLATFORM</span>
        <span>DATA / INTEGRATIONS</span>
        <span>PRODUCT ENGINEERING</span>
      </div>
    </div>
  </section>
);

Introduction.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Introduction;
