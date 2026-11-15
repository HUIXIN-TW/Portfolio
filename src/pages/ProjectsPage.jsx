import React, { useMemo, useState } from "react";
import majorproject from "../data/major-project.json";
import ProjectCard from "../ui/ProjectCard";
import ProjectFilters from "../ui/ProjectFilters";
import PlatformCaseCard from "../ui/PlatformCaseCard";
import { platformCaseStudies } from "../data/platformCaseStudies";
import { filterProjects } from "../utils/projectFilters";

const majorprojectData =
  majorproject.find((entry) => Array.isArray(entry.majorproject))?.majorproject ?? [];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const filteredProjects = useMemo(
    () => filterProjects(majorprojectData, selectedCategory, selectedTechnology),
    [selectedCategory, selectedTechnology]
  );

  return (
    <section className="editorial-projects" id="projects">
      <div className="editorial-container">
        <div className="editorial-projects-heading">
          <h1>Projects</h1>
          <p className="editorial-lead">
            Cloud infrastructure, delivery automation and platform reliability,
            followed by independent applications and earlier projects.
          </p>
        </div>

        <div id="platform-work" className="platform-work-section" aria-labelledby="platform-work-heading">
          <div className="platform-section-intro">
            <p className="editorial-eyebrow">ENGINEERING EXPERIENCE</p>
            <h2 id="platform-work-heading">Platform engineering case studies</h2>
            <p>
              Infrastructure, automation and reliability work drawn from delivered
              engineering experience. Descriptions summarise my contribution without
              exposing private implementation details.
            </p>
          </div>
          <div className="platform-case-grid">
            {platformCaseStudies.map((study) => (
              <PlatformCaseCard key={study.id} study={study} />
            ))}
          </div>
        </div>

        <div className="platform-project-archive" aria-labelledby="project-archive-heading">
          <div className="platform-section-intro">
            <p className="editorial-eyebrow">INDEPENDENT & EARLIER WORK</p>
            <h2 id="project-archive-heading">Applications & projects</h2>
            <p>Product development, integrations, research and earlier engineering work.</p>
          </div>
        <ProjectFilters
          projects={majorprojectData}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          filteredCount={filteredProjects.length}
          onCategoryChange={(category) =>
            setSelectedCategory((previous) => previous === category ? "All" : category)
          }
          onTechnologyChange={(technology) =>
            setSelectedTechnology((previous) => previous === technology ? null : technology)
          }
          onClearFilters={() => {
            setSelectedCategory("All");
            setSelectedTechnology(null);
          }}
        />

        {filteredProjects.length > 0 ? (
          <div className="editorial-project-grid">
            {filteredProjects.map((item, index) => (
              <ProjectCard
                key={[item.project, item.company, item.period, index].join(":")}
                data={item}
              />
            ))}
          </div>
        ) : (
          <p className="editorial-empty-state" role="status">
            No projects match the current filters.
          </p>
        )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
