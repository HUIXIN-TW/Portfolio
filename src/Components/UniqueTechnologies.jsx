import data from "../data/majorproject.json";

// Flatten the project data into a single array
const allProjects = data.flatMap((projectType) => Object.values(projectType).flat());

// Extract all technologies and get unique values
const allTechnologies = allProjects
  .flatMap((project) => project.technologies || []) // Extract technologies, or fallback to an empty array if not present
  .filter(Boolean); // Filter out any falsy values (like undefined or null)

const uniqueTechnologies = [...new Set(allTechnologies)]; // Get unique values

export { uniqueTechnologies };
