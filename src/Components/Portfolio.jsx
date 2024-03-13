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
      <div className="bg-blue-50 text-blue-700 p-4 ml-20 mr-20 mt-10 rounded shadow-lg">
        <p className="text-lg text-center mb-2">🌟 Announcing: Live What to Eat App 🌟</p>
        <p className="text-md md:text-base text-gray-700">
          Hey foodies! Got the munchies? I am thrilled to unveil the
          <a
            href="https://what-to-eat-huixin-tw.vercel.app/"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            {" "}
            What to Eat app{" "}
          </a>
          — your new go-to for discovering and sharing mouth-watering lunch ideas. Whether you are
          seeking inspiration or eager to share your culinary adventures, this app is your perfect
          companion. Dive in now for a taste of something new and exciting. Bon appétit!
        </p>
      </div>
      <div className="flex justify-center text-xs lg:mt-5 lg:mr-5 lg:ml-5 lg:mb-0 p-3">
        <TechnologiesButton onTechnologyClick={handleTechnologyClick} />
      </div>

      <div className="pictureContainer flex flex-row p-2 lg:pt-12 lg:item-center">
        {/* Render MajorProject Experience */}
        {majorprojectData && majorprojectData.length > 0 && (
          <div className="horizonalContainer w-full">
            {majorprojectData
              .filter((project) =>
                selectedTechnology ? project.technologies.includes(selectedTechnology) : true
              )
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
