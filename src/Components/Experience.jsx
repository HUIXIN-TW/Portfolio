import React from "react";
import ExperienceCard from "./common/ExperienceCard";
import experienceData from "../data/experience.json";

const Experience = () => {
  return (
    <section className="padding" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center">Experience</h2>
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
    </section>
  );
};

export default Experience;
