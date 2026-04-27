import React from "react";
import ExperienceCard from "../ui/ExperienceCard";
import experienceData from "../data/experience.json";
import { sectionContainer, sectionTitle } from "../styles/uiClasses";

const Experience = () => {
  return (
    <section className="padding" id="experience">
      <div className={sectionContainer}>
        <h2 className={sectionTitle}>Experience</h2>
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

export default Experience;
