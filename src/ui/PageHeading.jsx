import React from "react";
import PropTypes from "prop-types";

// One H1 and introduction pattern across routed pages.
const PageHeading = ({ title, description, eyebrow }) => (
  <header className="editorial-page-heading">
    {eyebrow && <p className="editorial-eyebrow">{eyebrow}</p>}
    <h1>{title}</h1>
    {description && <p className="editorial-lead">{description}</p>}
  </header>
);

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  eyebrow: PropTypes.string,
};

export default PageHeading;
