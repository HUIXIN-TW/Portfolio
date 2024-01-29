import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import educationData from "../data/education.json";
import image from "../images/school.jpg";

const imageAltText = "School building";

const Education = () => {
  return (
    <section className="p-2 sm:padding" id="education">
      <h2 className="text-center">Education</h2>
      <div className="pictureContainer flex flex-row p-2 lg:pt12 lg:item-center">
        <div className="w-3/4 self-center hidden lg:block">
          <img src={image} className="w-full object-cover slide-in" alt={imageAltText} />
        </div>

        <div className="verticalContainer">
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
    </section>
  );
};

export default Education;
