import React from "react";
import { Disclosure } from "@headlessui/react";
import repairLab from "../assets/images/repair-lab.gif";
import poops from "../assets/images/poops.png";
import hackathonDataSciencePoster from "../assets/images/hackathon-data-science-poster.jpg";
import hackathonDataScienceSlides from "../assets/images/hackathon-data-science-slides.gif";
import graphql from "../assets/images/graphql.png";
import cluster from "../assets/images/cluster.png";
import OLAP from "../assets/images/OLAP.gif";
import brewchat from "../assets/images/brewchat.gif";
import ESP32 from "../assets/images/ESP32.gif";
import YouTubeVideo from "./common/YouTubeVideo";
import ImgDisplay from "./common/ImgDisplay";

const getImageUrl = (imgId) => {
  switch (imgId) {
    case "repairlab":
      return repairLab;
    case "poops":
      return poops;
    case "hackathondatascienceposter":
      return hackathonDataSciencePoster;
    case "hackathondatascienceslides":
      return hackathonDataScienceSlides;
    case "graphql":
      return graphql;
    case "cluster":
      return cluster;
    case "OLAP":
      return OLAP;
    case "brewchat":
      return brewchat;
    case "ESP32":
      return ESP32;
    default:
      return null;
  }
};

const MajorProject = ({ data }) => {
  return (
    <div className="horizonalContainerBox bg-white">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h3 style={{ flexBasis: "40px" }}>
          {data.project} - {data.company}
          {data.rank && <span> (Rank: {data.rank})</span>}
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

      <div className="demo p-0 w-full">
        {data.youtubeVideoId && (
          <div className="image-wrapper">
            <YouTubeVideo videoId={data.youtubeVideoId} />
          </div>
        )}
        {data.imgId && (
          <div className="image-wrapper">
            <ImgDisplay imgUrl={getImageUrl(data.imgId)} />
          </div>
        )}
      </div>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-600 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span>Project Description</span>
              <svg
                className={`${open ? "transform rotate-180" : ""} w-5 h-5`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div>
                <ul className="text-left list-disc list-inside">
                  {data.description.map((desc, index) =>
                    desc.startsWith("-") ? (
                      <li className="px-4 pt-3 pb-3 text-sm text-gray-500" key={index}>
                        {desc.substring(1)}
                      </li>
                    ) : (
                      <span className="pt-6 pb-6 text-sm text-gray-500" key={index}>
                        {desc}
                      </span>
                    )
                  )}
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MajorProject;
