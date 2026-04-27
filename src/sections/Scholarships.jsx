import React from "react";
import scholarshipsData from "../data/scholarships.json";
import { card, cardMeta, cardPadding, cardTitle, mutedText } from "../styles/uiClasses";

const Scholarships = () => {
  const scholarshipItems = scholarshipsData.filter((item) => item.category === "Scholarship");

  return (
    <div className="mt-16">
      <div className="content-card-stack">
        {scholarshipItems.map((scholarship, index) => (
          <div key={`scholarship-${index}`} className={`${card} ${cardPadding}`}>
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <h4 className={cardTitle}>{scholarship.name}</h4>
              {scholarship.period && <span className={cardMeta}>{scholarship.period}</span>}
            </div>
            {scholarship.institution && <p className="text-sm text-slate-700">{scholarship.institution}</p>}
            {scholarship.description && (
              <p className={`mt-3 whitespace-pre-line ${mutedText}`}>{scholarship.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
