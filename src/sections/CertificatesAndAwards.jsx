import React from "react";
import certificatesAndAwardsData from "../data/certificates-and-awards.json";
import {
  card,
  cardMeta,
  cardPadding,
  cardTitle,
  mutedText,
  sectionContainer,
  sectionTitle,
  tagPillBase,
} from "../styles/uiClasses";

const CertificatesAndAwards = () => {
  const groupedItems = certificatesAndAwardsData.reduce((acc, item) => {
    if (item.category !== "Certificate" && item.category !== "Award") {
      return acc;
    }

    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section className="padding" id="certificates-awards">
      <div className={sectionContainer}>
        <h2 className={sectionTitle}>Certificates & Awards</h2>
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-12">
            <div className="content-card-stack">
              {items.map((award, index) => (
                <div key={`${category}-${index}`} className={`${card} ${cardPadding}`}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h4 className={cardTitle}>{award.name}</h4>
                    {award.period && <span className={cardMeta}>{award.period}</span>}
                  </div>
                  {award.institution && (
                    <div className="flex flex-wrap gap-2 text-sm text-slate-900 dark:text-[#F8F8F2]">
                      <span className={tagPillBase}>#{award.institution}</span>
                    </div>
                  )}
                  {award.description && Array.isArray(award.description) ? (
                    <ul className={`m-4 ${mutedText}`}>
                      {award.description.map((item, descIndex) => (
                        <li key={descIndex} className="list-disc list-inside">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    award.description && <p className={`whitespace-pre-line ${mutedText}`}>{award.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesAndAwards;
