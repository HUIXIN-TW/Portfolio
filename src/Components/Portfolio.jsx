import React from "react";
import image from "../images/design-desk.jpg";
import profileData from "../data/detailed_profile_data.json";
import VolunteerExperience from "VolunteerExperience"; // Import the VolunteerExperience component

const imageAltText = "desktop with books and laptop";

const Portfolio = () => {
  const { volunteer: volunteerData } = profileData[0]; // Destructure volunteerData from profileData[0]

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio - Volunteer Work</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {/* Render Volunteer Experience */}
          {volunteerData && volunteerData.length > 0 && (
            <div>
              <h3>Volunteer Experience</h3>
              {volunteerData.map((item, index) => (
                <VolunteerExperience key={index} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
