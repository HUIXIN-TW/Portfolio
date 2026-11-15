import React from "react";
import PropTypes from "prop-types";
import Introduction from "./Introduction";
import FeaturedWork from "./FeaturedWork";
import HomeOverview from "./HomeOverview";

const Home = ({ name, title }) => (
  <div id="home">
    <Introduction name={name} title={title} />
    <FeaturedWork />
    <HomeOverview />
  </div>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
