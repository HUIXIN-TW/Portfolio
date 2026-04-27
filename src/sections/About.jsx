import React from "react";
import {
  bodyText,
  card,
  cardPadding,
  cardTitle,
  sectionContainer,
  sectionTitle,
  subsectionTitle,
  tagPillMuted,
} from "../styles/uiClasses";

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
  "I am a backend, data, and platform-focused software engineer building scalable cloud systems and product-facing applications.\n\nI currently work on independent software products through WhatNow Studio, including Notica, a Notion × Google Calendar sync app. My work spans React, React Native, TypeScript, NestJS, AWS Lambda, DynamoDB, Cloudflare, Pulumi, CI/CD automation, and privacy-conscious product architecture.\n\nPreviously, I worked across backend engineering and data engineering, building Python and TypeScript services, AWS infrastructure, data pipelines, Snowflake/dbt workflows, Dagster orchestration, and internal React tools. Before software engineering, I worked in audit and accounting with Deloitte and PwC, which gives me a strong foundation in stakeholder communication, business process thinking, documentation, and delivery ownership.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Backend & Platform Engineering",
  "Product-facing Full-stack Development",
  "React & React Native Applications",
  "AWS Serverless Architecture",
  "Infrastructure as Code with Pulumi",
  "CI/CD & Release Automation",
  "Cloudflare Pages / Edge Deployment",
  "Data Engineering Pipelines",
  "Snowflake, dbt & Analytics Workflows",
  "API Integrations & OAuth Workflows",
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
  const descriptionParagraphs = description.split("\n\n");

  return (
    <section className="padding" id="about">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div className={`${sectionContainer} min-w-0`}>
        <section className="space-y-6">
          <h2 className={sectionTitle}>Live Demo</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className={`${card} ${cardPadding} min-w-0 w-full`}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className={cardTitle}>What to Eat</h3>
                <span className={tagPillMuted}>Live</span>
              </div>
              <p className="mb-4 text-sm text-slate-600 dark:text-[#C7C9D9]">Quick meal ideas for hungry moments.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href="https://whattoeat.huixinyang.com/"
                  className="black_btn max-w-full min-w-0 gap-2 whitespace-normal break-words text-left"
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
                  className="outline_btn max-w-full min-w-0 gap-2 whitespace-normal break-words text-left icon-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" className="h-4 w-4 icon-default" aria-hidden="true" />
                  <img src={githubIconWhite} alt="" className="h-4 w-4 icon-hover" aria-hidden="true" />
                  Fullstack
                </a>
              </div>
            </div>
            <div className={`${card} ${cardPadding} min-w-0 w-full`}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className={cardTitle}>Notica</h3>
                <span className={tagPillMuted}>Live</span>
              </div>
              <p className="mb-4 text-sm text-slate-600 dark:text-[#C7C9D9]">
                Sync tool for Notion databases and Google Calendar.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href="https://notica.studio"
                  className="black_btn max-w-full min-w-0 gap-2 whitespace-normal break-words text-left"
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
                  href="https://github.com/HUIXIN-TW/NotionSyncGCal"
                  className="outline_btn max-w-full min-w-0 gap-2 whitespace-normal break-words text-left icon-swap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" className="h-4 w-4 icon-default" aria-hidden="true" />
                  <img src={githubIconWhite} alt="" className="h-4 w-4 icon-hover" aria-hidden="true" />
                  NotionSyncGCal
                </a>
                <a
                  href="https://github.com/HUIXIN-TW/notica-fullstack-web"
                  className="outline_btn max-w-full min-w-0 gap-2 whitespace-normal break-words text-left icon-swap"
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
        </section>

        <section className="mt-16 space-y-8">
          <h3 className={subsectionTitle}>About Myself</h3>
          <div className="max-w-4xl space-y-5">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className={`whitespace-normal break-words text-left ${bodyText}`}>
                {paragraph}
              </p>
            ))}
          </div>
          <hr className="my-0 border-slate-200 dark:border-[#44475A]" />
          <ul className="grid min-w-0 grid-cols-1 gap-x-10 gap-y-3 text-left text-base font-normal text-slate-700 dark:text-[#C7C9D9] sm:grid-cols-2">
            {skillsList.map((skill) => (
              <li key={skill}>・{skill}</li>
            ))}
          </ul>
          <hr className="my-0 border-slate-200 dark:border-[#44475A]" />
          <p className={`max-w-4xl whitespace-normal break-words text-left ${bodyText}`}>{detailOrQuote}</p>
        </section>
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
