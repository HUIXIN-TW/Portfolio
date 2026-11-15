import React from "react";
import PageHeading from "../ui/PageHeading";
import ExperienceCard from "../ui/ExperienceCard";
import experienceData from "../data/experience.json";
import { sectionContainer } from "../styles/uiClasses";

const ExperiencePage = () => {
  return (
    <section className="padding" id="experience">
      <div className={sectionContainer}>
        <PageHeading title="Experience" description="Platform, backend and data engineering work across infrastructure, automation and production systems." />
        <div className="content-card-stack">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              occupation={exp.occupation}
              technologies={exp.technologies}
              period={exp.period}
              company={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
