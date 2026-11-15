import React, { useState } from "react";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { getProjectTechnologies } from "../utils/projectFilters";
import { getProjectDescription } from "../utils/projectDescription";

const ProjectCard = ({ data }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const technologies = getProjectTechnologies(data);
  const { summary, detailBlocks } = getProjectDescription(data.description);

  const hasContent =
    Boolean(summary || detailBlocks.length || data.youtubeVideoId || data.imgId) ||
    technologies.length > 0;

  return (
    <>
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
          {hasContent && (
            <button
              className="editorial-details-toggle"
              type="button"
              aria-haspopup="dialog"
              onClick={() => setDetailsOpen(true)}
            >
              View details <span aria-hidden="true">↗</span>
            </button>
          )}
        </div>
      </article>
      {hasContent && (
        <ProjectDetailsDialog
          data={data}
          summary={summary}
          detailBlocks={detailBlocks}
          technologies={technologies}
          open={detailsOpen}
          onClose={() => setDetailsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
