import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import educationData from "../data/education.json";

import ScholarshipsAndAwards from "./ScholarshipsAndAwards";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 className="text-center">Education</h2>
      <div className="flex flex-row lg:item-center">
        <div className="w-full verticalContainer">
          {educationData.map((education) => (
            <div className="box" key={education.degree}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <div className="degreeGpaPair">
                      <a href={education.url} target="_blank" rel="noopener noreferrer">
                        <span className="degree">{education.degree}</span>
                      </a>
                      <span className="gpa">GPA: {education.gpa}</span>
                    </div>
                    <p className="small">{education.university}</p>
                    <Disclosure.Button className="pt-3 w-full flex items-center justify-center">
                      <ChevronUpIcon
                        className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul>
                        {education.achievements.map((achievement, idx) => (
                          <div key={idx} className="achievementResultPair">
                            <span className="achievementPair">
                              <span className="achievementTitle">{achievement.title}</span>
                              <span className="achievementTechnologies">
                                {achievement.technologies}
                              </span>
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
      </div>
      <ScholarshipsAndAwards />
    </section>
  );
};

export default Education;
