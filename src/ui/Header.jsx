import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { THEME_DRACULA } from "../utils/theme";
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../config/routes.mjs";

const navClass = ({ isActive }) =>
  isActive ? "editorial-nav-link is-active" : "editorial-nav-link";

const ThemeToggleButton = ({ theme, onToggle }) => (
  <button
    type="button"
    className="editorial-theme-toggle"
    onClick={onToggle}
    aria-label={theme === THEME_DRACULA ? "Switch to light theme" : "Switch to dark theme"}
  >
    <span aria-hidden="true">{theme === THEME_DRACULA ? "☀" : "◐"}</span>
  </button>
);

ThemeToggleButton.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Header = ({ theme, onThemeToggle }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="editorial-header">
      <div className="editorial-container editorial-header-inner">
        <Link className="editorial-brand" to="/" onClick={() => setMobileOpen(false)}>
          Huixin Yang<span className="editorial-brand-dot" aria-hidden="true">.</span>
        </Link>

        <nav className="editorial-desktop-nav" aria-label="Primary navigation">
          {PRIMARY_NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} className={navClass} to={to}>{label}</NavLink>
          ))}
          <a className="editorial-nav-link" href="https://resume.huixinyang.com/">
            Resume
          </a>
          <details className="editorial-more">
            <summary className="editorial-nav-link">More</summary>
            <div className="editorial-more-links">
              {SECONDARY_NAV_ITEMS.map(({ to, label }) => (
                <NavLink key={to} className={navClass} to={to}>{label}</NavLink>
              ))}
              <a className="editorial-nav-link" href="https://github.com/HUIXIN-TW" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </details>
        </nav>

        <div className="editorial-header-actions">
          <ThemeToggleButton theme={theme} onToggle={onThemeToggle} />
          <button
            className="editorial-menu-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="editorial-mobile-menu"
            onClick={() => setMobileOpen((isOpen) => !isOpen)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <nav
        id="editorial-mobile-menu"
        className="editorial-mobile-nav"
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
      >
        <div className="editorial-container editorial-mobile-links">
          {PRIMARY_NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} className={navClass} to={to} onClick={() => setMobileOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a className="editorial-nav-link" href="https://resume.huixinyang.com/">Resume</a>
          {SECONDARY_NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} className={navClass} to={to} onClick={() => setMobileOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a className="editorial-nav-link" href="https://github.com/HUIXIN-TW" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default Header;
