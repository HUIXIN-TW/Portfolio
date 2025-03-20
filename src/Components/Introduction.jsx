import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../assets/images/down-arrow.svg";
import image from "../assets/images/motion-background.jpg";

const imageAltText = "";

const Introduction = ({ name, title }) => {
  return (
    <section id="introduction" className="min-h-screen relative">
      <img className="absolute w-full h-full object-cover" src={image} alt={imageAltText} />
      <div className="absolute top-1/2 left-1 w-160 m-5 md:left-12 transform -translate-y-1/2">
        <a
          href="https://huixin-tw.github.io/Resume/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security for opening links in a new tab
        >
          <h1 className="text-8xl font-normal leading-tight m-0">{name}</h1>
          <h2 className="text-3xl font-normal m-0 pt-4">{title}</h2>
          <span>Click for Resume</span>
        </a>
        <p className="text-lg mt-10">
          Live What to Eat App. Hey foodies! Got the munchies idea?
          <a
            href="https://what-to-eat-huixin-tw.vercel.app/"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security for opening links in a new tab
          >
            {"  "}
            🌟 What to Eat app 🌟
          </a>
        </p>
      </div>
      <div className="scroll-down-arrow absolute inset-0 flex items-end justify-center pb-12">
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
