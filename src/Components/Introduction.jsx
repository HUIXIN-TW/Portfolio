import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../assets/images/down-arrow.svg";
import image from "../assets/images/desk-and-chair.jpg";

const imageAltText =
  "A desk with a chair and a computer monitor. The monitor displays a code editor with a React project open.";

const Introduction = ({ name, title }) => {
  return (
    <section id="introduction" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "20rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div
        className="scroll-down-arrow"
        style={{ position: "absolute", bottom: "3rem", left: "50%" }}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
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
