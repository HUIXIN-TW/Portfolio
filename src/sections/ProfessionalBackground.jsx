import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes.mjs";

// The former About page's unique career narrative lives once, on Home.
const ProfessionalBackground = () => {
  return (
    <section id="background" className="editorial-background" aria-labelledby="background-heading">
      <div className="editorial-container editorial-background-layout">
        <div>
          <p className="editorial-eyebrow">BACKGROUND</p>
          <h2 id="background-heading">From business assurance to platform engineering.</h2>
        </div>
        <div className="editorial-background-copy">
          <p>
            My career began in audit and accounting at Deloitte and PwC. That experience
            shaped how I approach risk, evidence, and accountability—principles I now
            apply to cloud infrastructure, automation, and reliable software delivery.
          </p>
          <Link className="editorial-text-link" to={ROUTES.experience}>
            Explore my experience <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
