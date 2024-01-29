import React from "react";

const VolunteerExperience = ({ data }) => {
  return (
    <div className="volunteer-experience">
      <h4>
        {data.project} - {data.company}
      </h4>
      <p>{data.period}</p>
      <div>
        <strong>Technologies:</strong>
        <ul>
          {data.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Description:</strong>
        <p>{data.description.join(" ")}</p> {/* Join the description array into a single string */}
      </div>
      {data.url && (
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          Project Link
        </a>
      )}
    </div>
  );
};

export default VolunteerExperience;
