import React from "react";
import { Link } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import { ROUTES } from "../config/routes.mjs";

// This route explains the engineer, not the projects. Live application links
// belong to the existing Work cards so a product has one canonical showcase.
const engineeringFocus = [
  {
    title: "Cloud & platform",
    description: "AWS infrastructure, serverless systems, Infrastructure as Code and operational reliability.",
  },
  {
    title: "Delivery & automation",
    description: "CI/CD, release workflows and integrations that make engineering delivery more dependable.",
  },
  {
    title: "Data & backend",
    description: "Python and TypeScript services, Snowflake/dbt, orchestration and data pipelines.",
  },
];

const AboutPage = () => (
  <section className="padding editorial-about" id="about">
    <div className="editorial-container">
      <PageHeading
        title="About"
        eyebrow="ENGINEERING PROFILE"
        description="Platform and backend engineering, grounded in cloud infrastructure, data systems and automation."
      />

      <div className="editorial-about-layout">
        <section className="editorial-about-story" aria-labelledby="about-story-heading">
          <h2 id="about-story-heading">Building systems that last.</h2>
          <p>
            I work across platform, backend and data engineering, connecting reliable
            cloud infrastructure with practical software products. My experience
            includes AWS migrations, serverless services, data pipelines and
            infrastructure automation.
          </p>
          <p>
            I focus on clear architecture, maintainable integrations and delivery
            workflows that make systems easier to operate and evolve.
          </p>
          <div className="editorial-about-actions">
            <Link to={ROUTES.projects} className="editorial-text-link">
              Explore engineering work <span aria-hidden="true">→</span>
            </Link>
            <Link to={ROUTES.experience} className="editorial-text-link">
              Experience <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <aside className="editorial-about-focus" aria-labelledby="about-focus-heading">
          <p className="editorial-eyebrow">WHAT I WORK ON</p>
          <h2 id="about-focus-heading">Engineering focus</h2>
          <dl>
            {engineeringFocus.map(({ title, description }) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="editorial-about-background" aria-labelledby="about-background-heading">
        <p className="editorial-eyebrow">BACKGROUND</p>
        <h2 id="about-background-heading">Engineering with business context.</h2>
        <div className="editorial-about-background-copy">
          <p>
            Before moving into software engineering, I worked in audit and accounting
            with Deloitte and PwC. That background informs how I approach
            documentation, stakeholder needs and delivery ownership.
          </p>
          <p>
            Alongside my engineering work, I build independent products through
            WhatNow Studio, including Notica, which connects Notion and Google
            Calendar. Product development keeps my platform decisions close to
            real user needs.
          </p>
        </div>
      </section>
    </div>
  </section>
);

export default AboutPage;
