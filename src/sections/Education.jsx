import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import educationData from "../data/education.json";
import Scholarships from "./Scholarships";
import { card, cardPadding, cardTitle, mutedText, sectionContainer, sectionTitle } from "../styles/uiClasses";

const Education = () => {
  return (
    <section className="padding" id="education">
      <div className={sectionContainer}>
        <h2 className={sectionTitle}>Education & Scholarships</h2>
        <div className="content-card-stack">
          {educationData.map((education) => (
            <div className={`${card} ${cardPadding}`} key={education.degree}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <div className="degreeGpaPair">
                      <a href={education.url} target="_blank" rel="noopener noreferrer">
                        <span className={`degree ${cardTitle}`}>{education.degree}</span>
                      </a>
                      <span className="gpa">GPA: {education.gpa}</span>
                    </div>
                    <p className={mutedText}>{education.university}</p>
                    <Disclosure.Button className="flex w-full items-center justify-center pt-3">
                      <ChevronUpIcon
                        className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500 dark:text-[#C7C9D9]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul>
                        {education.achievements.map((achievement, idx) => (
                          <div key={idx} className="achievementResultPair">
                            <span className="achievementPair">
                              <span className="achievementTitle">{achievement.title}</span>
                              <span className="achievementTechnologies">{achievement.technologies}</span>
                            </span>
                            <span className="result">{education.results[idx]}</span>
                          </div>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
        <Scholarships />
      </div>
    </section>
  );
};

export default Education;
