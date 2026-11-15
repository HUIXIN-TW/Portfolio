import React from "react";
import PropTypes from "prop-types";
import HomeHero from "../sections/HomeHero";
import FeaturedPlatformWork from "../sections/FeaturedPlatformWork";
import EngineeringFocus from "../sections/EngineeringFocus";

const HomePage = ({ name, title }) => (
  <div id="home">
    <HomeHero name={name} title={title} />
    <FeaturedPlatformWork />
    <EngineeringFocus />
  </div>
);

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomePage;
