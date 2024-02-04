import React from "react";
import { Link } from "react-router-dom";

import photo from "../../assets/images/photo.jpg";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between", // Align items on the main-axis (horizontal)
        alignItems: "center", // Align items on the cross-axis (vertical)
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <div
        style={{
          // Logo and Name Container
          display: "flex",
          alignItems: "center",
          gap: "1rem", // You can adjust the gap between the logo and name
        }}
      >
        <img
          src={photo}
          alt="Logo"
          style={{ width: "40px", height: "40px", borderRadius: "100%" }}
        />
        <span>Huixin</span>
      </div>
      <div
        style={{
          // Navigation Links Container
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Evenly distribute the available space among the links
          alignItems: "center",
          flex: 1, // Take up the remaining space after the logo and name
          gap: "2rem", // Adjust the gap between the links
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
