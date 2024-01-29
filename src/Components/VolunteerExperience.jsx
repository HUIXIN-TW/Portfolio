import React from "react";

const VolunteerExperience = ({ data }) => {
  return (
    <div className="box">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h3 style={{ flexBasis: "40px" }}>
          {data.project} - {data.company}
        </h3>
      </a>
      <p className="text-xs p-3">{data.period}</p>

      <div className="flex flex-wrap">
        {data.technologies.map((tech, index) => (
          <span key={index} className="text-xs italic mr-2 mb-2 bg-gray-200 px-2 py-1 rounded">
            #{tech}
          </span> // Render each technology as a hashtag
        ))}
      </div>
      <div>
        <ul className="text-left list-disc list-inside">
          {data.description.map((desc, index) => (
            <li className="whitespace-normal" key={index}>
              - {desc}
            </li> // Render each description item as a list item
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VolunteerExperience;
