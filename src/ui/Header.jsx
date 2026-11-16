import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeSelect from "./ThemeSelect";
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../config/routes.mjs";
import ExternalLink from "./ExternalLink";

const navClass = ({ isActive }) =>
  isActive ? "editorial-nav-link is-active" : "editorial-nav-link";

const Header = () => {
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
          <ExternalLink className="editorial-nav-link" href="https://resume.huixinyang.com/">
            Resume
          </ExternalLink>
          <details className="editorial-more">
            <summary className="editorial-nav-link">More</summary>
            <div className="editorial-more-links">
              {SECONDARY_NAV_ITEMS.map(({ to, label }) => (
                <NavLink key={to} className={navClass} to={to}>{label}</NavLink>
              ))}
              <ExternalLink className="editorial-nav-link" href="https://github.com/HUIXIN-TW">
                GitHub
              </ExternalLink>
            </div>
          </details>
        </nav>

        <div className="editorial-header-actions">
          <ThemeSelect />
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
          <ExternalLink className="editorial-nav-link" href="https://resume.huixinyang.com/">Resume</ExternalLink>
          {SECONDARY_NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} className={navClass} to={to} onClick={() => setMobileOpen(false)}>
              {label}
            </NavLink>
          ))}
          <ExternalLink className="editorial-nav-link" href="https://github.com/HUIXIN-TW">
            GitHub
          </ExternalLink>
        </div>
      </nav>
    </header>
  );
};


export default Header;
