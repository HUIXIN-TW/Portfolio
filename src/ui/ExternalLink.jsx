import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`editorial-external-link ${className}`.trim()}
    target="_blank"
    rel="noopener noreferrer"
    aria-description="Opens in a new tab"
  >
    <span>{children}</span>
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className="editorial-external-link-icon" aria-hidden="true" focusable="false">
      <path d="M14 4h6v6" />
      <path d="M20 4 10.5 13.5" />
      <path d="M20 13.5V20H4V4h6.5" />
    </svg>
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ExternalLink;
