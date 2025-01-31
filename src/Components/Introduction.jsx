import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../assets/images/down-arrow.svg";
import image from "../assets/images/motion-background.jpg";

const imageAltText = "";

const Introduction = ({ name, title }) => {
  return (
    <section id="introduction" className="min-h-screen relative">
      <img className="absolute w-full h-full object-cover" src={image} alt={imageAltText} />
      <div className="absolute top-1/2 left-1 w-160 md:left-12 transform -translate-y-1/2">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="scroll-down-arrow absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <img src={arrowSvg} className="h-12 w-12" alt="" />
      </div>
    </section>
  );
};

Introduction.defaultProps = {
  name: "",
  title: "",
};

Introduction.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Introduction;
