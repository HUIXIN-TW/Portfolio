import React from "react";
import styled from "styled-components";

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ExperienceTitle = styled.h3`
  text-align: left;
`;

const ExperiencePeriod = styled.span`
  text-align: right;
  font-style: italic;
`;

const ExperienceCard = ({ occupation, technologies, company, description, period }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <ExperienceHeader>
        <ExperienceTitle>
          {occupation}, {company}
        </ExperienceTitle>
        <ExperiencePeriod className="text-gray-600">{period}</ExperiencePeriod>
      </ExperienceHeader>
      <div className="text-sm text-gray-900 flex flex-wrap gap-2">
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="text-xs italic bg-gray-200 text-gray-900 rounded-md px-2 py-1"
          >
            #{technology}
          </span>
        ))}
      </div>
      <ul className="text-sm text-gray-500 m-5">
        {description.map((desc, index) => (
          <li key={index} className="list-disc list-inside">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
