import React from "react";
import profileData from "../data/projects.json";
import MajorProject from "./MajorProject";

const Portfolio = () => {
  const majorprojectObject = profileData.find((item) => item.majorproject);
  const majorprojectData = majorprojectObject ? majorprojectObject.majorproject : [];

  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center">Work & Project Gallery</h2>
      <div className="pictureContainer flex flex-row p-2 lg:pt-12 lg:item-center">
        {/* Render MajorProject Experience */}
        {majorprojectData && majorprojectData.length > 0 && (
          <div className="horizonalContainer w-full">
            {majorprojectData.map((item, index) => (
              <MajorProject key={index} data={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
