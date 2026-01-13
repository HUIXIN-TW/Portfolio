import React from "react";
import PropTypes from "prop-types";

const imageAltText = "";
const arrowSvg = new URL("../assets/images/down-arrow.svg", import.meta.url).href;
const image = new URL("../assets/images/motion-background.jpg", import.meta.url).href;

const Introduction = ({ name, title }) => {
  return (
    <section id="introduction" className="min-h-screen relative">
      <img className="absolute w-full h-full object-cover" src={image} alt={imageAltText} />
      <div className="absolute top-1/2 left-1 w-160 m-5 md:left-12 transform -translate-y-1/2">
        <a
          href="https://resume.huixinyang.com/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security for opening links in a new tab
        >
          <h1 className="text-8xl font-normal leading-tight m-0">{name}</h1>
          <h2 className="text-3xl font-normal m-0 pt-4">{title}</h2>
          <span>Click for Resume</span>
        </a>
      </div>
      <div className="scroll-down-arrow absolute inset-0 flex items-end justify-center pb-12 pointer-events-none">
        <img src={arrowSvg} className="h-12 w-12" alt="" />
      </div>
    </section>
  );
};

Introduction.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Introduction;
