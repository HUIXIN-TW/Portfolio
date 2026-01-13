import React from "react";
import certificatesAndAwardsData from "../data/certificates-and-awards.json";

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
      <div className="max-w-4xl mx-auto">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="text-center mb-4">{category}</h2>
            {items.map((award, index) => (
              <div key={`${category}-${index}`} className="bg-white shadow-md rounded-lg p-6 mb-4 ml-5 mr-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-left">{award.name}</h3>
                  {award.period && <span className="text-gray-600 italic">{award.period}</span>}
                </div>
                {award.institution && (
                  <div className="text-sm text-gray-900 flex flex-wrap gap-2">
                    <span className="text-xs italic bg-gray-200 text-gray-900 rounded-md px-2 py-1">
                      #{award.institution}
                    </span>
                  </div>
                )}
                {award.description && Array.isArray(award.description) ? (
                  <ul className="text-sm text-gray-500 m-4">
                    {award.description.map((item, descIndex) => (
                      <li key={descIndex} className="list-disc list-inside">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  award.description && <p className="text-sm text-gray-500 whitespace-pre-line">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesAndAwards;
