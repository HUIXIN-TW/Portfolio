import React from "react";
import { Link } from "react-router-dom";
import majorProjects from "../data/major-project.json";

const projects = majorProjects.find((entry) => Array.isArray(entry.majorproject))?.majorproject ?? [];
const featured = ["Notica Web", "WhatToEat app"]
  .map((name) => projects.find((item) => item.project === name))
  .filter(Boolean);

const getSummary = (project) =>
  project.description?.find((line) => line && !line.trim().startsWith("-"))?.trim() ??
  project.description?.[0]?.replace(/^\s*-\s*/, "").trim() ??
  "";

const FeaturedWork = () => (
  <section className="editorial-featured" aria-labelledby="featured-heading">
    <div className="editorial-container">
      <div className="editorial-section-heading">
        <div>
          <p className="editorial-eyebrow">SELECTED WORK</p>
          <h2 id="featured-heading">Built to solve real problems.</h2>
        </div>
        <Link className="editorial-text-link" to="/projects">
          All projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="editorial-featured-grid">
        {featured.map((project) => (
          <article className="editorial-feature-card" key={project.project}>
            <p className="editorial-card-meta">{project.company} · {project.occupation}</p>
            <h3>{project.project}</h3>
            <p className="editorial-feature-summary">{getSummary(project)}</p>
            <p className="editorial-card-stack">
              {project.technologies?.slice(0, 4).join(" / ")}
            </p>
            {project.url && (
              <a className="editorial-text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                Explore project <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
