import React, { useMemo, useState } from "react";
import majorproject from "../data/major-project.json";
import ProjectCard from "../ui/ProjectCard";
import ProjectGalleryFilters from "../ui/ProjectGalleryFilters";
import { filterProjects } from "../utils/projectGalleryFilters";

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
            A selection of engineering work across cloud platforms, integrations,
            data systems and product development.
          </p>
        </div>

        <ProjectGalleryFilters
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
    </section>
  );
};

export default ProjectsPage;
