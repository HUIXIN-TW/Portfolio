import React, { useState } from "react";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { getProjectTechnologies } from "../utils/projectFilters";

// Legacy project descriptions contain prose and dash-prefixed lines.
// Display only an initial summary in the card; the dialog preserves all content.
const getDescription = (description) => {
  const lines = Array.isArray(description)
    ? description.filter((line) => typeof line === "string" && line.trim())
    : [];
  const first = lines.find((line) => !line.trim().startsWith("-")) ?? lines[0] ?? "";
  return {
    summary: first.replace(/^\s*-\s*/, "").trim(),
    details: lines.filter((line) => line !== first),
  };
};

const ProjectCard = ({ data }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const technologies = getProjectTechnologies(data);
  const { summary, details } = getDescription(data.description);

  const hasContent =
    Boolean(summary || details.length || data.youtubeVideoId || data.imgId) ||
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
          details={details}
          technologies={technologies}
          open={detailsOpen}
          onClose={() => setDetailsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
