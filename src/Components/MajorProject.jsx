import React from "react";
import repairLab from "../assets/images/repair-lab.gif";
import poops from "../assets/images/poops.png";
import hackathonDataSciencePoster from "../assets/images/hackathon-data-science-poster.jpg";
import hackathonDataScienceSlides from "../assets/images/hackathon-data-science-slides.gif";
import YouTubeVideo from "./common/YouTubeVideo";
import ImgDisplay from "./common/ImgDisplay";

const MajorProject = ({ data }) => {
  return (
    <div className="horizonalContainerBox">
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
      <divx>
        <ul className="text-left list-disc list-inside">
          {data.description.map((desc, index) => (
            <li className="whitespace-normal" key={index}>
              {desc}
            </li> // Render each description item as a list item
          ))}
        </ul>
      </divx>
      <div className="demo p-10">
        {data.youtubeVideoId && <YouTubeVideo videoId={data.youtubeVideoId} />}
        {data.imgId === "repairlab" && <ImgDisplay imgUrl={repairLab} />}
        {data.imgId === "poops" && <ImgDisplay imgUrl={poops} />}
        {data.imgId === "hackathondatascienceposter" && (
          <ImgDisplay imgUrl={hackathonDataSciencePoster} />
        )}
        {data.imgId === "hackathondatascienceslides" && (
          <ImgDisplay imgUrl={hackathonDataScienceSlides} />
        )}
      </div>
    </div>
  );
};

export default MajorProject;