import React, { useMemo, useState } from "react";
import { PRIMARY_FILTERS, getSortedTechnologyFilters } from "../utils/projectGalleryFilters";
import { tagPillBase, tagPillButton, tagPillFilter, tagPillFilterActive, tagPillTechActive } from "../styles/uiClasses";

const ADVANCED_TAG_COLLAPSED_LIMIT = 24;

const ProjectGalleryFilters = ({
  projects,
  selectedCategory,
  selectedTechnology,
  filteredCount,
  onCategoryChange,
  onTechnologyChange,
  onClearFilters,
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(true);
  const [showAllAdvancedTags, setShowAllAdvancedTags] = useState(false);

  const technologyFilters = useMemo(() => getSortedTechnologyFilters(projects), [projects]);
  const hasActiveFilters = selectedCategory !== "All" || Boolean(selectedTechnology);
  const activeSelection = [selectedCategory !== "All" ? selectedCategory : null, selectedTechnology].filter(Boolean);
  const statusText = hasActiveFilters
    ? `Filtered by ${activeSelection.join(" · ")}`
    : `Showing ${filteredCount} projects`;
  const visibleTechnologyFilters = useMemo(() => {
    if (showAllAdvancedTags || technologyFilters.length <= ADVANCED_TAG_COLLAPSED_LIMIT) {
      return technologyFilters;
    }

    const visible = technologyFilters.slice(0, ADVANCED_TAG_COLLAPSED_LIMIT);

    if (selectedTechnology && !visible.includes(selectedTechnology)) {
      visible.push(selectedTechnology);
    }

    return visible;
  }, [selectedTechnology, showAllAdvancedTags, technologyFilters]);
  const hasMoreAdvancedTags = technologyFilters.length > ADVANCED_TAG_COLLAPSED_LIMIT;

  return (
    <div className="mt-5 w-full space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible lg:justify-start">
          {PRIMARY_FILTERS.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`${tagPillFilter} flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36] ${
                  isActive ? `${tagPillFilterActive} shadow-sm` : ""
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-[#A9ADC1] lg:justify-end">
          <span className="font-medium leading-6 text-slate-700 dark:text-[#C7C9D9] lg:text-right">{statusText}</span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className={`${tagPillButton} focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]`}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-3">
        <h3 className="mb-0 text-sm font-semibold leading-5 tracking-[0.04em] text-slate-600 dark:text-[#C7C9D9]">
          Advanced tags
        </h3>
        <button
          type="button"
          onClick={() => setShowAdvancedFilters((current) => !current)}
          className={`${tagPillButton} focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]`}
          aria-expanded={showAdvancedFilters}
          aria-controls="project-advanced-filters"
        >
          {showAdvancedFilters ? "Hide filters" : "Show advanced tags"}
        </button>
      </div>

      {showAdvancedFilters && (
        <div id="project-advanced-filters" className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {visibleTechnologyFilters.map((technology) => {
              const isActive = selectedTechnology === technology;

              return (
                <button
                  key={technology}
                  type="button"
                  onClick={() => onTechnologyChange(technology)}
                  className={`${tagPillBase} focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#8BE9FD] dark:focus-visible:ring-offset-[#282A36] dark:hover:bg-[#FF79C6] dark:hover:text-[#282A36] ${
                    isActive ? `${tagPillTechActive} shadow-sm` : ""
                  }`}
                >
                  {technology}
                </button>
              );
            })}
          </div>

          {hasMoreAdvancedTags && (
            <button
              type="button"
              onClick={() => setShowAllAdvancedTags((current) => !current)}
              className={`${tagPillButton} focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]`}
            >
              {showAllAdvancedTags ? "Show fewer tags" : "Show all tags"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGalleryFilters;
