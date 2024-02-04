import React from "react";

const Technologies = ({ technologies, setFilter }) => {
  const handleKeyPress = (event, tech) => {
    if (event.key === "Enter" || event.key === " ") {
      setFilter(tech);
    }
  };

  return (
    <div className="technologies-container">
      {technologies.map((tech, index) => (
        <span
          role="button"
          key={index}
          className="technology-tag" // Add some CSS class for styling
          onClick={() => setFilter(tech)} // Set the filter to the clicked technology
          tabIndex="0"
          onKeyDown={(event) => handleKeyPress(event, tech)} // Handle keyboard interactions
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
export default Technologies;
