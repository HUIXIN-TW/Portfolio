/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a software developer and data science enthusiast, passionate about designing elegant and user-friendly interfaces.";

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
  "I am deeply passionate about pioneering innovative solutions, leveraging my UI/UX expertise to make technology universally accessible and user-friendly";

const About = () => {
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
    </section>
  );
};

export default About;
