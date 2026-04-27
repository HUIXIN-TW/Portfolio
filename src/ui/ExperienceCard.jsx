import React from "react";
import { card, cardMeta, cardPadding, cardTitle, mutedText, tagPillBase } from "../styles/uiClasses";

const ExperienceCard = ({ occupation, technologies, company, description, period }) => {
  return (
    <div className={`${card} ${cardPadding}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className={cardTitle}>
          {occupation}, {company}
        </h3>
        <span className={cardMeta}>{period}</span>
      </div>
      <div className="flex flex-wrap gap-2 text-sm text-slate-900">
        {technologies.map((technology, index) => (
          <span key={index} className={tagPillBase}>
            #{technology}
          </span>
        ))}
      </div>
      <ul className={`m-4 ${mutedText}`}>
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
