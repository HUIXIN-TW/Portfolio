import React from "react";
import { Disclosure } from "@headlessui/react";
import YouTubeVideo from "./YouTubeVideo";
import ProjectImage from "./ProjectImage";
import { getProjectTechnologies } from "../utils/projectGalleryFilters";

const imageUrls = {
  repairlab: new URL("../assets/images/repair-lab.gif", import.meta.url).href,
  poops: new URL("../assets/images/poops.png", import.meta.url).href,
  hackathondatascienceposter: new URL("../assets/images/hackathon-data-science-poster.jpg", import.meta.url).href,
  hackathondatascienceslides: new URL("../assets/images/hackathon-data-science-slides.gif", import.meta.url).href,
  graphql: new URL("../assets/images/graphql.png", import.meta.url).href,
  cluster: new URL("../assets/images/cluster.png", import.meta.url).href,
  OLAP: new URL("../assets/images/olap.gif", import.meta.url).href,
  brewchat: new URL("../assets/images/brewchat.gif", import.meta.url).href,
  ESP32: new URL("../assets/images/esp32.gif", import.meta.url).href,
};

// Legacy project data has descriptions as prose or dash-prefixed bullets.
// Surface the first meaningful statement; never invent an "impact" metric.
const getDescription = (description) => {
  const lines = Array.isArray(description) ? description.filter((line) => typeof line === "string" && line.trim()) : [];
  const first = lines.find((line) => !line.trim().startsWith("-")) ?? lines[0] ?? "";
  return {
    summary: first.replace(/^\s*-\s*/, "").trim(),
    details: lines.filter((line) => line !== first),
  };
};

const ProjectCard = ({ data }) => {
  const technologies = getProjectTechnologies(data);
  const { summary, details } = getDescription(data.description);
  const imageUrl = imageUrls[data.imgId];
  const hasDetails = details.length > 0 || Boolean(data.youtubeVideoId || imageUrl) || technologies.length > 4;

  return (
    <article className="editorial-project-card">
      <div className="editorial-project-card-top">
        <p className="editorial-card-meta">{data.company} · {data.period}</p>
        {data.occupation && <p className="editorial-project-role">{data.occupation}</p>}
        <h2 className="editorial-project-title">
          {data.url ? (
            <a href={data.url} target="_blank" rel="noopener noreferrer">{data.project}</a>
          ) : data.project}
        </h2>
        {data.rank && <p className="editorial-card-meta">Recognition: {data.rank}</p>}
        {summary && <p className="editorial-project-summary">{summary}</p>}
      </div>

      <div className="editorial-project-card-bottom">
        {technologies.length > 0 && (
          <p className="editorial-card-stack">
            {technologies.slice(0, 4).join(" / ")}
            {technologies.length > 4 ? " / …" : ""}
          </p>
        )}

        {hasDetails && (
          <Disclosure as="div" className="editorial-project-details">
            {({ open }) => (
              <>
                <Disclosure.Button className="editorial-details-toggle">
                  {open ? "Less detail" : "Architecture & contribution"}
                  <span aria-hidden="true">{open ? "−" : "+"}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="editorial-details-panel">
                  {details.map((line, index) => (
                    <p key={index}>{line.replace(/^\s*-\s*/, "").trim()}</p>
                  ))}
                  {technologies.length > 4 && (
                    <p className="editorial-all-technologies">
                      <strong>Technologies:</strong> {technologies.join(", ")}
                    </p>
                  )}
                  {data.youtubeVideoId && (
                    <div className="image-wrapper">
                      <YouTubeVideo videoId={data.youtubeVideoId} />
                    </div>
                  )}
                  {imageUrl && (
                    <div className="image-wrapper">
                      <ProjectImage imageUrl={imageUrl} alt={`${data.project} project preview`} />
                    </div>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
