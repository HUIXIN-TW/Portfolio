import React, { useMemo, useState } from "react";
import majorproject from "../data/major-project.json";
import ProjectCard from "../ui/ProjectCard";
import ProjectGalleryFilters from "../ui/ProjectGalleryFilters";
import { filterProjects } from "../utils/projectGalleryFilters";
import { sectionTitle, wideSectionContainer } from "../styles/uiClasses";

const ProjectsPage = () => {
  const majorprojectObject = majorproject.find((item) => item.majorproject);
  const majorprojectData = majorprojectObject ? majorprojectObject.majorproject : [];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((currentCategory) => (currentCategory === category ? "All" : category));
  };

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology((currentTechnology) => (currentTechnology === technology ? null : technology));
  };

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedTechnology(null);
  };

  const filteredProjects = useMemo(
    () => filterProjects(majorprojectData, selectedCategory, selectedTechnology),
    [majorprojectData, selectedCategory, selectedTechnology]
  );

  return (
    <section className="padding" id="portfolio">
      <div className={wideSectionContainer}>
        <h2 className={sectionTitle}>Projects</h2>

        <ProjectGalleryFilters
          projects={majorprojectData}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          filteredCount={filteredProjects.length}
          onCategoryChange={handleCategoryClick}
          onTechnologyChange={handleTechnologyClick}
          onClearFilters={handleClearFilters}
        />

        <div className="mt-6 w-full">
          {filteredProjects.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
              {filteredProjects.map((item, index) => (
                <ProjectCard key={`${item.project}-${item.company}-${item.period}-${index}`} data={item} />
              ))}
            </div>
          ) : (
            <div className="w-full rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-10 text-center text-sm text-slate-600 dark:border-[#44475A] dark:bg-[#343746] dark:text-[#C7C9D9]">
              No projects match the current filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
