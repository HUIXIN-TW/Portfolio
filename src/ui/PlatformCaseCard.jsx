import React from "react";
import PropTypes from "prop-types";

// One presentation contract for career case studies on Home and Work.
// No external Notion links or claims about private employer architecture are rendered.
const PlatformCaseCard = ({ study }) => (
  <article className="platform-case-card" data-platform-case={study.id}>
    <div className="platform-case-header">
      <p className="editorial-card-meta">{study.company} · {study.domain}</p>
      <h3>{study.title}</h3>
    </div>
    <dl className="platform-case-details">
      <div>
        <dt>Challenge</dt>
        <dd>{study.challenge}</dd>
      </div>
      <div>
        <dt>My contribution</dt>
        <dd>{study.contribution}</dd>
      </div>
      <div>
        <dt>Outcome</dt>
        <dd>{study.outcome}</dd>
      </div>
    </dl>
    <p className="editorial-card-stack">{study.stack.join(" / ")}</p>
  </article>
);

PlatformCaseCard.propTypes = {
  study: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    contribution: PropTypes.string.isRequired,
    outcome: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlatformCaseCard;
