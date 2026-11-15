import React from "react";
import { Dialog } from "@headlessui/react";
import YouTubeVideo from "./YouTubeVideo";
import ProjectImage from "./ProjectImage";

// The old portfolio stores media IDs, not URLs. Keep asset resolution
// at the presentation boundary rather than embedding paths in project JSON.
const projectImageUrls = {
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

const ProjectDetailsDialog = ({ data, summary, details, technologies, open, onClose }) => {
  const imageUrl = projectImageUrls[data.imgId];

  return (
    <Dialog open={open} onClose={onClose} className="editorial-project-dialog">
      <div className="editorial-project-dialog-backdrop" aria-hidden="true" />
      <div className="editorial-project-dialog-frame">
        <Dialog.Panel className="editorial-project-dialog-panel">
          <header className="editorial-project-dialog-header">
            <div className="editorial-project-dialog-heading">
              <p className="editorial-card-meta">{data.company} · {data.period}</p>
              <Dialog.Title as="h2">{data.project}</Dialog.Title>
              {data.occupation && (
                <p className="editorial-project-role">{data.occupation}</p>
              )}
            </div>
            <button
              className="editorial-project-dialog-close"
              type="button"
              aria-label="Close project details"
              onClick={onClose}
            >
              <span aria-hidden="true">×</span>
            </button>
          </header>
          <div className="editorial-project-dialog-body">
            {summary && <p className="editorial-project-dialog-summary">{summary}</p>}
            {details.length > 0 && (
              <section className="editorial-project-dialog-section" aria-label="Project description">
                <h3>Project details</h3>
                {details.map((line, index) => (
                  <p key={index}>{line.replace(/^\s*-\s*/, "").trim()}</p>
                ))}
              </section>
            )}
            {technologies.length > 0 && (
              <section className="editorial-project-dialog-section" aria-label="Technologies">
                <h3>Technologies</h3>
                <p>{technologies.join(" / ")}</p>
              </section>
            )}
            {data.youtubeVideoId && (
              <div className="editorial-project-dialog-video">
                <YouTubeVideo videoId={data.youtubeVideoId} />
              </div>
            )}
            {imageUrl && (
              <div className="editorial-project-dialog-image">
                <ProjectImage imageUrl={imageUrl} alt={`${data.project} project preview`} />
              </div>
            )}
            {data.url && (
              <a
                className="editorial-text-link"
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open project <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
