import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import GitHubButton from "./GitHubButton";
import ResumeButton from "./ResumeButton";
import { wideSectionContainer } from "../styles/uiClasses";
import { THEME_DRACULA } from "../utils/theme";

const photoUrl = new URL("../assets/images/avatar.webp", import.meta.url).href;

const navLinkClassName = ({ isActive }) =>
  [
    "whitespace-nowrap text-sm transition-colors",
    isActive
      ? "font-semibold text-slate-950 underline decoration-slate-950 decoration-2 underline-offset-4 dark:text-[#BD93F9] dark:decoration-[#BD93F9]"
      : "text-slate-600 hover:text-slate-950 dark:text-[#C7C9D9] dark:hover:text-[#FF79C6]",
  ].join(" ");

const mobileNavLinkClassName = ({ isActive }) =>
  [
    "text-center text-sm transition-colors",
    isActive
      ? "font-semibold text-slate-950 underline decoration-slate-950 decoration-2 underline-offset-4 dark:text-[#BD93F9] dark:decoration-[#BD93F9]"
      : "text-slate-600 hover:text-slate-950 dark:text-[#C7C9D9] dark:hover:text-[#FF79C6]",
  ].join(" ");

const ThemeToggleButton = ({ theme, onToggle, className = "" }) => {
  const isDracula = theme === THEME_DRACULA;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDracula ? "Switch to light theme" : "Switch to Dracula dark theme"}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-[#44475A] dark:bg-[#343746] dark:text-[#F8F8F2] dark:hover:border-[#BD93F9] dark:hover:text-[#FF79C6] dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36] ${className}`}
    >
      <span aria-hidden="true">{isDracula ? "☀︎" : "☾"}</span>
    </button>
  );
};

const Header = ({ theme, onThemeToggle }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <header className="w-full">
      {/* Desktop Nav */}
      <div className="sm:fixed sm:top-0 sm:z-10 sm:flex sm:w-full sm:bg-white/75 sm:backdrop-blur dark:sm:bg-[#282A36]/75">
        <div className={`${wideSectionContainer} hidden items-center justify-between py-4 sm:flex`}>
          <div className="flex shrink-0 items-center gap-4">
            <Link
              to="/"
              onClick={() => setToggleDropdown(false)}
              className="transition-colors hover:text-slate-900 dark:hover:text-[#FF79C6]"
            >
              <img src={photoUrl} alt="Logo" className="h-10 w-10 rounded-full" />
            </Link>
            <GitHubButton name="HUIXIN-TW" />
          </div>
          <nav className="ml-auto flex items-center justify-end gap-4 md:gap-6">
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
            <NavLink to="/education" className={navLinkClassName}>
              Education & Scholarships
            </NavLink>
            <NavLink to="/certificates-awards" className={navLinkClassName}>
              Certificates & Awards
            </NavLink>
            <NavLink to="/experience" className={navLinkClassName}>
              Experience
            </NavLink>
            <NavLink to="/blog" className={navLinkClassName}>
              Blog
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClassName}>
              Projects
            </NavLink>
            <NavLink to="/referee" className={navLinkClassName}>
              Referee
            </NavLink>
            <ThemeToggleButton theme={theme} onToggle={onThemeToggle} className="ml-2" />
            {/* <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link> */}
          </nav>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="sm:hidden fixed top-0 z-10 flex w-full items-center justify-between bg-white/75 px-4 py-4 backdrop-blur dark:bg-[#282A36]/75">
        <button
          type="button"
          onClick={() => setToggleDropdown(!toggleDropdown)}
          aria-pressed={toggleDropdown ? "true" : "false"}
          className="cursor-pointer rounded-none border-0 bg-transparent p-0 focus:outline-none"
        >
          <img src={photoUrl} alt="profile" className="h-10 w-10 rounded-full" />
        </button>

        <ThemeToggleButton theme={theme} onToggle={onThemeToggle} />

        {toggleDropdown && (
          <div className="absolute left-4 right-4 top-[4.75rem] flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-[#44475A] dark:bg-[#343746]">
            <NavLink to="/about" className={mobileNavLinkClassName} onClick={() => setToggleDropdown(!toggleDropdown)}>
              About
            </NavLink>
            <NavLink
              to="/education"
              className={mobileNavLinkClassName}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Education & Scholarships
            </NavLink>
            <NavLink
              to="/certificates-awards"
              className={mobileNavLinkClassName}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Certificates & Awards
            </NavLink>
            <NavLink
              to="/experience"
              className={mobileNavLinkClassName}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Experience
            </NavLink>
            <NavLink to="/blog" className={mobileNavLinkClassName} onClick={() => setToggleDropdown(!toggleDropdown)}>
              Blog
            </NavLink>
            <NavLink
              to="/portfolio"
              className={mobileNavLinkClassName}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/referee"
              className={mobileNavLinkClassName}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Referee
            </NavLink>
            <GitHubButton name="HUIXIN-TW" />
            <ResumeButton name="Resume" />
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default Header;
