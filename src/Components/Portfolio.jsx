import React from "react";
import profileData from "../data/detailed_profile_data.json";
import VolunteerExperience from "./VolunteerExperience"; // Import the VolunteerExperience component

const Portfolio = () => {
  const volunteerObject = profileData.find((item) => item.volunteer);
  const volunteerData = volunteerObject ? volunteerObject.volunteer : [];

  console.log(volunteerData);

  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center">Work & Project Experience</h2>
      <div className="pictureContainer flex flex-row p-2 lg:pt-12 lg:item-center">
        {/* Render Volunteer Experience */}
        {volunteerData && volunteerData.length > 0 && (
          <div className="horizonalContainer w-full">
            {volunteerData.map((item, index) => (
              <VolunteerExperience key={index} data={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
