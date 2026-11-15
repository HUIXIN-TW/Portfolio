import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes.mjs";

const HomeHero = ({ name, title }) => (
  <section id="introduction" className="editorial-hero">
    <div className="editorial-container">
      <div className="editorial-hero-copy">
        <p className="editorial-eyebrow">{title}</p>
        <h1>{name}</h1>
        <h2>Building reliable cloud platforms and delivery systems.</h2>
        <p className="editorial-lead">
          I work across AWS infrastructure, Infrastructure as Code, CI/CD automation
          and production reliability, backed by hands-on backend and data engineering.
        </p>
        <div className="editorial-actions">
          <Link className="editorial-button editorial-button-primary" to={ROUTES.projects}>
            Explore platform work
          </Link>
          <a className="editorial-button editorial-button-secondary" href="https://resume.huixinyang.com/">
            View résumé
          </a>
        </div>
      </div>
    </div>
  </section>
);

HomeHero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeHero;
