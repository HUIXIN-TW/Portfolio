import React from "react";
import { Link } from "react-router-dom";

const HomeOverview = () => (
  <section className="editorial-overview" aria-labelledby="approach-heading">
    <div className="editorial-container editorial-overview-layout">
      <div>
        <p className="editorial-eyebrow">APPROACH</p>
        <h2 id="approach-heading">Technical depth with a product perspective.</h2>
      </div>
      <div className="editorial-overview-content">
        <p>
          My work connects platform architecture, data engineering and product
          development. I have built AWS-based services, automated data pipelines,
          and web and mobile experiences that make complex workflows easier to use.
        </p>
        <p>
          Before moving into software engineering, I worked in audit and accounting.
          That experience continues to inform how I approach reliability,
          communication and delivery.
        </p>
        <div className="editorial-overview-links">
          <Link className="editorial-text-link" to="/about">
            More about me <span aria-hidden="true">↗</span>
          </Link>
          <Link className="editorial-text-link" to="/experience">
            Experience <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeOverview;
