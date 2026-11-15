import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes.mjs";
import ExternalLink from "./ExternalLink";

// Editorial footer: identity, useful routes and explicit contact links.
const Footer = ({ name, email, gitHub, linkedIn, devDotTo, instagram, medium, twitter, youTube }) => {
  const contactLinks = [
    email && { label: "Email", href: `mailto:${email}`, external: false },
    gitHub && { label: "GitHub", href: `https://github.com/${gitHub}`, external: true },
    linkedIn && { label: "LinkedIn", href: `https://www.linkedin.com/in/${linkedIn}`, external: true },
    devDotTo && { label: "Dev.to", href: `https://dev.to/${devDotTo}`, external: true },
    instagram && { label: "Instagram", href: `https://www.instagram.com/${instagram}`, external: true },
    medium && { label: "Medium", href: `https://medium.com/@${medium}`, external: true },
    twitter && { label: "Twitter", href: `https://twitter.com/${twitter}`, external: true },
    youTube && { label: "YouTube", href: `https://www.youtube.com/c/${youTube}`, external: true },
  ].filter(Boolean);

  return (
    <footer id="footer" className="editorial-footer">
      <div className="editorial-container">
        <div className="editorial-footer-top">
          <div className="editorial-footer-identity">
            <Link to={ROUTES.home} className="editorial-footer-brand">
              {name}<span aria-hidden="true">.</span>
            </Link>
            <p>Platform Engineering · Backend Systems</p>
          </div>
          <div className="editorial-footer-columns">
            <nav className="editorial-footer-column" aria-label="Footer pages">
              <h2>Explore</h2>
              <Link to={ROUTES.projects}>Work</Link>
              <Link to={ROUTES.experience}>Experience</Link>
              <Link to={ROUTES.about}>About</Link>
              <ExternalLink href="https://resume.huixinyang.com/">Resume</ExternalLink>
            </nav>
            <nav className="editorial-footer-column" aria-label="Footer contact">
              <h2>Connect</h2>
              {contactLinks.map(({ label, href, external }) =>
                external ? (
                  <ExternalLink href={href} key={label}>{label}</ExternalLink>
                ) : (
                  <a href={href} key={label}>{label}</a>
                )
              )}
            </nav>
          </div>
        </div>
        <div className="editorial-footer-bottom">
          <small>© {new Date().getFullYear()} {name}</small>
          <a href="#main" className="editorial-footer-back-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  devDotTo: PropTypes.string,
  instagram: PropTypes.string,
  medium: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
