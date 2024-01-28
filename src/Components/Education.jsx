import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import image from "../images/school.jpg"; // Assuming the image is in the src/images folder

const imageAltText = "School building";

const educationList = [
  {
    degree: "Master of Information Technology",
    university: "University of Western Australia (UWA), Perth, Australia",
    gpa: "6.38 / 7.0",
    achievements: [
      {
        title: "Agile Web application - BrewChat",
        technologies: "Javascript, Flask, SQLAlchemy, unittest, Git",
      },
      {
        title: "Data Warehousing & Association Rule Mining",
        technologies: "R, SQL, SSMS, Power BI",
      },
      {
        title: "Graph Database & Graph Data Science",
        technologies: "Neo4j, Cypher, R",
      },
      {
        title: "Exploratory data analysis and Machine learning models",
        technologies: "R, RStudio, Git",
      },
      {
        title: "IOT ESP32 Air Quality Detector",
        technologies: "C++, Flask, HTML, CSS, Javascript, Firebase Real-Time DB, Git",
      },
      {
        title: "Business intelligence report",
        technologies: "Python, PowerBI",
      },
      {
        title: "Cybersecurity",
        technologies: "Bash, Virtualisation & Containerisation",
      },
      {
        title: "Rational Database Management System",
        technologies: "SQL",
      },
      {
        title: "COVID Analysis",
        technologies: "Python",
      },
    ],
    results: [
      "HD & Top3 Project",
      "HD & Top2 Project",
      "HD & Top4 Project",
      "Top1 Project",
      "HD",
      "HD",
      "HD",
      "HD",
      "HD",
    ],
    url: "#",
  },
  {
    degree: "M.S. in Accounting and Information Technology",
    university: "National Chung Cheng University (CCU), Chiayi, Taiwan",
    gpa: "3.93 / 4.0",
    achievements: [
      {
        title: "Nationally in CCU’s competitive annual Accounting postgraduate entrance exam.",
        technologies:
          "Subjects: English, Intermediate Accounting, and Cost and Management Accounting",
      },
      {
        title:
          "Conducted research on “Directors’ and Officers’ Liability Insurance and Cost Stickiness.”",
        technologies: "SAS, SPSS, Excel, Word, and PowerPoint",
      },
    ],
    results: ["TOP2", "HD"],
    url: "#",
  },
  {
    degree: "B.S. in Accounting and Information Systems",
    university:
      "National Kaohsiung University of Science and Technology (NKUST), Kaohsiung, Taiwan",
    gpa: "80.44 / 100",
    achievements: [],
    results: [],
    url: "#",
  },
  // Add more educational experiences if needed
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>

        <div className="verticalContainer">
          {educationList.map((education) => (
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
