import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes.mjs";
import PlatformCaseCard from "../ui/PlatformCaseCard";
import { platformCaseStudies } from "../data/platformCaseStudies";

const FeaturedPlatformWork = () => (
  <section className="editorial-featured" aria-labelledby="featured-heading">
    <div className="editorial-container">
      <div className="editorial-section-heading">
        <div>
          <p className="editorial-eyebrow">SELECTED PLATFORM WORK</p>
          <h2 id="featured-heading">Infrastructure that teams can rely on.</h2>
        </div>
        <Link className="editorial-text-link" to={ROUTES.projects}>
          View engineering work <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="editorial-featured-grid">
        {platformCaseStudies.slice(0, 2).map((study) => (
          <PlatformCaseCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedPlatformWork;
