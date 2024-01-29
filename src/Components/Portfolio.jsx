import React from "react";
import image from "../images/design-desk.jpg";
import profileData from "../data/detailed_profile_data.json";
import VolunteerExperience from "./VolunteerExperience"; // Import the VolunteerExperience component

const imageAltText = "desktop with books and laptop";

const Portfolio = () => {
  const volunteerObject = profileData.find((item) => item.volunteer);
  const volunteerData = volunteerObject ? volunteerObject.volunteer : [];

  console.log(volunteerData);

  return (
    <section className="p-2 sm:padding" id="portfolio">
      <h2 className="text-center">Work & Project Experience</h2>
      <div className="pictureContainer flex flex-row p-2 lg:pt12 lg:item-center">
        <div className="w-3/4 self-center hidden xl:block">
          <img src={image} className="w-full object-cover slide-in" alt={imageAltText} />
        </div>
        {/* Render Volunteer Experience */}
        {volunteerData && volunteerData.length > 0 && (
          <div className="horizonalContainer border border-black">
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
