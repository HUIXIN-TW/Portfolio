import React from "react";
import profileData from "../data/projects.json";
import Volunteer from "./Volunteer";

const Portfolio = () => {
  const volunteerObject = profileData.find((item) => item.volunteer);
  const volunteerData = volunteerObject ? volunteerObject.volunteer : [];

  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center">Work & Project Gallery</h2>
      <div className="pictureContainer flex flex-row p-2 lg:pt-12 lg:item-center">
        {/* Render Volunteer Experience */}
        {volunteerData && volunteerData.length > 0 && (
          <div className="horizonalContainer w-full">
            {volunteerData.map((item, index) => (
              <Volunteer key={index} data={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
