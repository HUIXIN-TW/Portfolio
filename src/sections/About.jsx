import React from "react";

const githubIcon = new URL("../assets/images/socials/github-mark.svg", import.meta.url).href;
const githubIconWhite = new URL("../assets/images/socials/github-mark-white.svg", import.meta.url).href;

// import image from "../assets/images/motion-background.jpg";
// import Button from "../ui/Button";
// import Education from "./Education";
// import Portfolio from "./Portfolio";
// import Experience from "./Experience";
// import Referee from "./Referee";

// const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a software developer with a strong data engineering focus, I build reliable, scalable systems that connect front-end experiences with robust back-end services. I work across AWS infrastructure, data pipelines, and analytics platforms to deliver products that are fast, reliable, and user-centric.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Agile Methodologies",
  "UI/UX Design & Prototyping",
  "Full Stack Web Development",
  "Backend Engineering",
  "Frontend Engineering",
  "Mobile App Development",
  "AWS Infrastructure",
  "Cloudflare CDN",
  "Data Warehousing (Snowflake)",
  "Data Pipelines & Orchestration",
  "ETL/ELT (ETLeap, dbt)",
  "Machine Learning & Data Mining",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I enjoy bridging product and data: designing clean user flows while building the infrastructure and pipelines behind them. Recent work includes AWS migrations, Snowflake-based analytics stacks, and ETL automation with ETLeap, all aimed at improving performance, reliability, and decision-making.";

const About = () => {
  // const [showDetails, setShowDetails] = useState(false); // State to toggle the visibility of Education and Portfolio

  return (
    <section className="padding" id="about">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div className="bg-white w-full p-2 m-auto my-12 text-center sm:p-8 sm:w-3/4">
        <h2>Live Demo</h2>
        <div className="text-left text-wrap text-s md:text-xl p-4 md:p-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Open Source + Live</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">What to Eat</h3>
                <span className="text-xs italic bg-gray-200 text-gray-900 rounded-md px-2 py-1">Live</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Quick meal ideas for hungry moments.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href="https://what-to-eat-huixin-tw.vercel.app/"
                  className="black_btn gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 9h-2.02a15.2 15.2 0 00-1.24-5.02A8.02 8.02 0 0118.93 11zM12 4.07c1.06 1.38 1.88 3.33 2.15 5.93H9.85c.27-2.6 1.09-4.55 2.15-5.93zM5.07 13h2.02c.2 1.76.7 3.52 1.24 5.02A8.02 8.02 0 015.07 13zm0-2a8.02 8.02 0 013.26-5.02A15.2 15.2 0 007.09 11H5.07zm6.93 8.93c-1.06-1.38-1.88-3.33-2.15-5.93h4.3c-.27 2.6-1.09 4.55-2.15 5.93zM14.91 13h2.02a8.02 8.02 0 01-3.26 5.02c.54-1.5 1.04-3.26 1.24-5.02z" />
                  </svg>
                  Live Site
                </a>
                <a
                  href="https://github.com/HUIXIN-TW/what-to-eat"
                  className="outline_btn gap-2 icon-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" className="h-4 w-4 icon-default" aria-hidden="true" />
                  <img src={githubIconWhite} alt="" className="h-4 w-4 icon-hover" aria-hidden="true" />
                  Fullstack
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Notica</h3>
                <span className="text-xs italic bg-gray-200 text-gray-900 rounded-md px-2 py-1">Live</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Sync tool for Notion databases and Google Calendar.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href="https://www.notica.studio/"
                  className="black_btn gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 9h-2.02a15.2 15.2 0 00-1.24-5.02A8.02 8.02 0 0118.93 11zM12 4.07c1.06 1.38 1.88 3.33 2.15 5.93H9.85c.27-2.6 1.09-4.55 2.15-5.93zM5.07 13h2.02c.2 1.76.7 3.52 1.24 5.02A8.02 8.02 0 015.07 13zm0-2a8.02 8.02 0 013.26-5.02A15.2 15.2 0 007.09 11H5.07zm6.93 8.93c-1.06-1.38-1.88-3.33-2.15-5.93h4.3c-.27 2.6-1.09 4.55-2.15 5.93zM14.91 13h2.02a8.02 8.02 0 01-3.26 5.02c.54-1.5 1.04-3.26 1.24-5.02z" />
                  </svg>
                  Live Site
                </a>
                <a
                  href="https://github.com/HUIXIN-TW/notica-web"
                  className="outline_btn gap-2 icon-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" className="h-4 w-4 icon-default" aria-hidden="true" />
                  <img src={githubIconWhite} alt="" className="h-4 w-4 icon-hover" aria-hidden="true" />
                  Cloudflare
                </a>
                <a
                  href="https://github.com/HUIXIN-TW/notica-fullstack-web"
                  className="outline_btn gap-2 icon-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" className="h-4 w-4 icon-default" aria-hidden="true" />
                  <img src={githubIconWhite} alt="" className="h-4 w-4 icon-hover" aria-hidden="true" />
                  Amplify
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2>About Myself</h2>
        <p className="text-left text-wrap text-s md:text-xl p-4 md:p-12">{description}</p>
        <hr />
        <ul className="text-left text-s grid grid-cols-1 md:grid-cols-2 sm:text-lg gap-3 m-8">
          {skillsList.map((skill) => (
            <li key={skill}>・{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="text-left text-wrap text-s md:text-xl p-4 md:p-12">{detailOrQuote}</p>
      </div>
      {/* Button to toggle the visibility of Education and Portfolio */}
      {/* <div className="flex justify-center items-center">
        <Button
          onClick={() => setShowDetails(!showDetails)}
          text={showDetails ? "Read Less" : "Read More"}
        ></Button>
      </div> */}
      {/* Conditionally render Education and Portfolio components */}
      {/* {showDetails && (
        <>
          <Education />
          <Experience />
          <Portfolio />
          <Referee />
        </>
      )} */}
    </section>
  );
};

export default About;
