import React, { useState } from "react";
import majorproject from "../data/majorproject.json";
import MajorProject from "./MajorProject";
import TechnologiesButton from "./TechnologiesButton";

const Portfolio = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  const majorprojectObject = majorproject.find((item) => item.majorproject);
  const majorprojectData = majorprojectObject ? majorprojectObject.majorproject : [];

  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center">Work & Project Gallery</h2>
      <div className="p-3 justify-center text-xs hidden md:flex lg:mt-5 lg:mr-5 lg:ml-5 lg:mb-0">
        <TechnologiesButton onTechnologyClick={handleTechnologyClick} />
      </div>

      <div className="flex flex-row p-2 lg:pt-12 lg:item-center">
        {/* Render MajorProject Experience */}
        {majorprojectData && majorprojectData.length > 0 && (
          <div className="horizonalContainer w-full">
            {majorprojectData
              .filter((project) => (selectedTechnology ? project.technologies.includes(selectedTechnology) : true))
              .map((item, index) => (
                <MajorProject key={index} data={item} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
