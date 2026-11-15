import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes.mjs";

const capabilities = [
  {
    title: "Cloud platforms & IaC",
    detail: "AWS workload migrations, ECS operations and Pulumi-managed infrastructure.",
  },
  {
    title: "Delivery automation",
    detail: "GitHub Actions, release validation, container builds and staging quality gates.",
  },
  {
    title: "Platform reliability",
    detail: "Identity and permissions, operational diagnostics, data-platform governance and cost visibility.",
  },
];

const EngineeringFocus = () => (
  <section className="editorial-overview" aria-labelledby="approach-heading">
    <div className="editorial-container editorial-overview-layout">
      <div>
        <p className="editorial-eyebrow">ENGINEERING FOCUS</p>
        <h2 id="approach-heading">Make systems repeatable, observable and safe to change.</h2>
      </div>
      <div className="editorial-overview-content">
        <p>
          I approach platform work through infrastructure, delivery workflows and
          operational boundaries—not just the services that run on top of them.
          My backend and data engineering experience informs how those systems
          behave under real production constraints.
        </p>
        <ul className="platform-capability-list">
          {capabilities.map(({ title, detail }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
        <div className="editorial-overview-links">
          <Link className="editorial-text-link" to={ROUTES.experience}>
            Experience <span aria-hidden="true">↗</span>
          </Link>
          <Link className="editorial-text-link" to={ROUTES.about}>
            Background <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default EngineeringFocus;
