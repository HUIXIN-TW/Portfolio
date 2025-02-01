import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/images/avatar.webp";
import GitHubButton from "./GitHubButton";
import ResumeButton from "./ResumeButton";

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div>
      {/* Desktop Nav */}
      <div className="sm:flex hidden fixed top-0 z-10 justify-between items-center bg-white bg-opacity-75 p-4 w-full">
        <div className="flex items-center gap-4">
          <Link to="/" onClick={toggleDropdown} className="hover:text-blue-600">
            <img src={photo} alt="Logo" className="w-10 h-10 rounded-full" />
          </Link>
          <GitHubButton name="HUIXIN_TW" />
        </div>
        <div className="flex flex-wrap justify-center items-center flex-1 gap-4 md:gap-8">
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/education" className="hover:text-blue-600">
            Education
          </Link>
          <Link to="/experience" className="hover:text-blue-600">
            Experience
          </Link>
          <Link to="/portfolio" className="hover:text-blue-600">
            Portfolio
          </Link>
          <Link to="/referee" className="hover:text-blue-600">
            Referee
          </Link>
          {/* <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link> */}
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="sm:hidden fixed top-0 z-10 justify-between items-center bg-white bg-opacity-75 p-4 w-full">
        <div
          role="button"
          tabIndex="0" // Make the div focusable
          onClick={() => setToggleDropdown(!toggleDropdown)}
          onKeyDown={(event) => {
            // Trigger action on Enter or Space key press
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault(); // Prevent the default action to stop scrolling when Space is pressed
              setToggleDropdown(!toggleDropdown);
            }
          }}
          aria-pressed={toggleDropdown ? "true" : "false"} // Communicate the toggle state
          className="cursor-pointer" // Apply styling for visual indication of interactivity
          style={{ outline: "none" }} // Optionally remove the focus outline; consider custom focus styles for accessibility
        >
          <img src={photo} alt="profile" className="h-10 w-10 rounded-full" />
        </div>

        {toggleDropdown && (
          <div className="absolute left-12 flex flex-col w-4/5 p-5 bg-white gap-5 rounded-lg shadow-lg">
            <Link
              to="/about"
              className="text-center hover:text-blue-600"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              About
            </Link>
            <Link
              to="/education"
              className="text-center hover:text-blue-600"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Education
            </Link>
            <Link
              to="/experience"
              className="text-center hover:text-blue-600"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Experience
            </Link>
            <Link
              to="/portfolio"
              className="text-center hover:text-blue-600"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Portfolio
            </Link>
            <Link
              to="/referee"
              className="text-center hover:text-blue-600"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Referee
            </Link>
            <GitHubButton name="HUIXIN-TW" />
            <ResumeButton name="Resume" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
