import React, { useState } from "react";

import image from "../assets/images/motion-background.jpg";
import Button from "./common/Button";
import Education from "./Education";
import Portfolio from "./Portfolio";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a dedicated software developer with a fervent interest in data science, I specialize in crafting elegant, user-friendly interfaces that seamlessly integrate sophisticated backend functionalities. My passion lies in harnessing the synergy between aesthetic design and powerful data-driven solutions to deliver interactive, intuitive, and impactful user experiences.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Agile Methodologies & Management",
  "UI/UX Design & Prototyping",
  "Full Stack Web Development",
  "Data Warehousing & ETL Processes",
  "Data Analysis & Visualization",
  "Machine Learning & Data Mining",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Driven by a profound dedication to innovation in web development and data science, I excel in blending front-end finesse with robust back-end solutions, ensuring seamless, full-stack integration. My passion extends to leveraging data science proficiency, using insightful analytics and machine learning to transform complex data into actionable, user-centric applications. My goal is to make technology not just accessible, but intuitively intelligent and responsive to user needs.";

const About = () => {
  const [showDetails, setShowDetails] = useState(false); // State to toggle the visibility of Education and Portfolio

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="bg-white w-full p-2 m-auto my-12 text-center sm:p-8 sm:w-3/4">
        <h2>About Myself</h2>
        <p className="text-xs md:text-xl">{description}</p>
        <hr />
        <ul className="text-left text-sm grid grid-cols-1 md:grid-cols-2 sm:text-lg gap-3 m-8">
          {skillsList.map((skill) => (
            <li key={skill}>・{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="text-xs md:text-xl p-4 md:p-12">{detailOrQuote}</p>
      </div>
      {/* Button to toggle the visibility of Education and Portfolio */}
      <div className="flex justify-center items-center">
        <Button
          onClick={() => setShowDetails(!showDetails)}
          text={showDetails ? "Read Less" : "Read More"}
        ></Button>
      </div>
      {/* Conditionally render Education and Portfolio components */}
      {showDetails && (
        <>
          <Education />
          <Portfolio />
        </>
      )}
    </section>
  );
};

export default About;
