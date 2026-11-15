import React from "react";
import PropTypes from "prop-types";
import Introduction from "../sections/Introduction";
import FeaturedWork from "../sections/FeaturedWork";
import HomeOverview from "../sections/HomeOverview";

const HomePage = ({ name, title }) => (
  <div id="home">
    <Introduction name={name} title={title} />
    <FeaturedWork />
    <HomeOverview />
  </div>
);

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomePage;
