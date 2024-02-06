import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/images/photo.jpg";

const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex justify-between items-center bg-white bg-opacity-75 p-4 w-full">
      <div className="flex items-center gap-4">
        <img src={photo} alt="Logo" className="w-10 h-10 rounded-full" />
        <span>Huixin</span>
      </div>
      <div className="flex flex-wrap justify-center items-center flex-1 gap-4 md:gap-8">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link to="/education" className="hover:text-blue-600">
          Education
        </Link>
        <Link to="/portfolio" className="hover:text-blue-600">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
