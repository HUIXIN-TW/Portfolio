import React from "react";
import Introduction from "./Introduction";
import About from "./About";

const Home = ({ name, title }) => {
  return (
    <section id="home">
      <Introduction name={name} title={title} />
      <About />
    </section>
  );
};

export default Home;
