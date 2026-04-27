import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import YouTubeVideo from "../ui/YouTubeVideo";
import ImgDisplay from "../ui/ImgDisplay";
import { getProjectTechnologies } from "../utils/projectGalleryFilters";
import { card, cardPadding, cardTitle, mutedText, tagPillBase, tagPillButton } from "../styles/uiClasses";

const repairLab = new URL("../assets/images/repair-lab.gif", import.meta.url).href;
const poops = new URL("../assets/images/poops.png", import.meta.url).href;
const hackathonDataSciencePoster = new URL("../assets/images/hackathon-data-science-poster.jpg", import.meta.url).href;
const hackathonDataScienceSlides = new URL("../assets/images/hackathon-data-science-slides.gif", import.meta.url).href;
const graphql = new URL("../assets/images/graphql.png", import.meta.url).href;
const cluster = new URL("../assets/images/cluster.png", import.meta.url).href;
const OLAP = new URL("../assets/images/olap.gif", import.meta.url).href;
const brewchat = new URL("../assets/images/brewchat.gif", import.meta.url).href;
const ESP32 = new URL("../assets/images/esp32.gif", import.meta.url).href;

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

const ProjectCard = ({ data }) => {
  const [isTechnologiesExpanded, setIsTechnologiesExpanded] = useState(false);
  const technologies = getProjectTechnologies(data);
  const hasHiddenTechnologies = technologies.length > 5;
  const visibleTechnologies = isTechnologiesExpanded ? technologies : technologies.slice(0, 5);
  const hiddenTechnologyCount = technologies.length - 5;

  return (
    <div className={`${card} ${cardPadding} horizonalContainerBox w-full bg-white dark:bg-[#343746]`}>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h3 className={cardTitle}>
          {data.project} - {data.company}
          {data.rank && <span> (Rank: {data.rank})</span>}
        </h3>
      </a>
      <p className="p-3 text-xs text-slate-600 dark:text-[#A9ADC1]">{data.period}</p>

      <div className="mb-6 flex flex-wrap gap-2 px-3">
        {visibleTechnologies.map((tech) => (
          <span key={tech} className={tagPillBase}>
            #{tech}
          </span>
        ))}
        {hasHiddenTechnologies && (
          <button
            type="button"
            aria-expanded={isTechnologiesExpanded}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setIsTechnologiesExpanded((current) => !current);
            }}
            className={`${tagPillButton} focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]`}
          >
            {isTechnologiesExpanded ? "Show less" : `+${hiddenTechnologyCount} more`}
          </button>
        )}
      </div>

      <div className="demo mt-6 w-full p-0">
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
            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:text-[#C7C9D9] dark:hover:bg-[#44475A] dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]">
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
            <Disclosure.Panel className={`px-4 pt-4 pb-2 ${mutedText}`}>
              <div>
                <ul className="text-left list-disc list-inside">
                  {data.description.map((desc, index) =>
                    desc.startsWith("-") ? (
                      <li className={`px-4 pt-3 pb-3 ${mutedText}`} key={index}>
                        {desc.substring(1)}
                      </li>
                    ) : (
                      <span className={`pt-6 pb-6 ${mutedText}`} key={index}>
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

export default ProjectCard;
