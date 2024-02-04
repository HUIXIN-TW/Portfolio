import React from "react";

const Technologies = ({ technologies, setFilter }) => {
  return (
    <div className="technologies-container">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="technology-tag" // Add some CSS class for styling
          onClick={() => setFilter(tech)} // Set the filter to the clicked technology
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
export default Technologies;
