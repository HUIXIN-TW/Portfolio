const GENERIC_TAG_PREFIX = "About ";

export const PRIMARY_FILTERS = [
  "All",
  "Full-stack",
  "Mobile",
  "Cloud / AWS",
  "Data / AI",
  "Frontend",
  "Backend",
  "DevOps",
];

const CATEGORY_ALIASES = {
  Mobile: ["react native", "expo", "eas build", "app store connect"],
  "Cloud / AWS": [
    "aws lambda",
    "api gateway",
    "dynamodb",
    "s3",
    "cloudflare",
    "pulumi",
    "aws amplify",
    "cloudwatch",
    "firebase",
    "vercel",
  ],
  "Data / AI": [
    "python",
    "sql",
    "etl process",
    "dataiku",
    "power bi",
    "powerbi",
    "chatgpt api",
    "chatgpt fine tuning model",
    "lstm",
    "prompt engineering",
    "feature engineering",
    "data collection",
    "jupyter notebook",
    "neo4j",
    "cypher",
    "r",
    "python networkx",
    "python requests",
  ],
  Frontend: ["react", "next.js", "tailwind css", "html", "css", "javascript", "typescript", "nextauth.js"],
  Backend: ["nestjs", "flask", "postgres", "mysql", "mongodb", "prisma", "sqlalchemy", "sql"],
  DevOps: ["docker", "github actions", "git actions", "git", "unit testing", "selenium", "amplify"],
};

const normalizeText = (value) => value.trim().toLowerCase();

const isGenericTechnology = (technology) =>
  technology.trim().toLowerCase().startsWith(GENERIC_TAG_PREFIX.toLowerCase());

export const getProjectTechnologies = (project) => {
  const technologies = Array.isArray(project.technologies) ? project.technologies : [];
  return [...new Set(technologies.filter(Boolean).filter((technology) => !isGenericTechnology(technology)))];
};

const tagMatchesAlias = (technology, alias) => {
  const normalizedTechnology = normalizeText(technology);
  const normalizedAlias = normalizeText(alias);

  return normalizedTechnology === normalizedAlias || normalizedTechnology.includes(normalizedAlias);
};

const projectHasAnyAlias = (technologies, aliases) =>
  aliases.some((alias) => technologies.some((technology) => tagMatchesAlias(technology, alias)));

export const getProjectCategories = (project) => {
  if (Array.isArray(project.categories) && project.categories.length > 0) {
    return [...new Set(project.categories.filter(Boolean))];
  }

  const technologies = getProjectTechnologies(project);
  const hasFrontend = projectHasAnyAlias(technologies, CATEGORY_ALIASES.Frontend);
  const hasBackend = projectHasAnyAlias(technologies, CATEGORY_ALIASES.Backend);
  const hasCloud = projectHasAnyAlias(technologies, CATEGORY_ALIASES["Cloud / AWS"]);
  const hasMobile = projectHasAnyAlias(technologies, CATEGORY_ALIASES.Mobile);
  const hasData = projectHasAnyAlias(technologies, CATEGORY_ALIASES["Data / AI"]);
  const hasDevOps = projectHasAnyAlias(technologies, CATEGORY_ALIASES.DevOps);

  const categories = [];

  if (hasFrontend && (hasBackend || hasCloud)) {
    categories.push("Full-stack");
  }
  if (hasMobile) {
    categories.push("Mobile");
  }
  if (hasCloud) {
    categories.push("Cloud / AWS");
  }
  if (hasData) {
    categories.push("Data / AI");
  }
  if (hasFrontend) {
    categories.push("Frontend");
  }
  if (hasBackend) {
    categories.push("Backend");
  }
  if (hasDevOps) {
    categories.push("DevOps");
  }

  return [...new Set(categories)];
};

export const filterProjects = (projects, selectedCategory, selectedTechnology) => {
  return projects.filter((project) => {
    const technologies = getProjectTechnologies(project);
    const categories = getProjectCategories(project);
    const categoryMatches = selectedCategory === "All" || categories.includes(selectedCategory);
    const technologyMatches = !selectedTechnology || technologies.includes(selectedTechnology);

    return categoryMatches && technologyMatches;
  });
};

export const getTechnologyCounts = (projects) => {
  const counts = new Map();

  projects.forEach((project) => {
    getProjectTechnologies(project).forEach((technology) => {
      counts.set(technology, (counts.get(technology) || 0) + 1);
    });
  });

  return counts;
};

export const getSortedTechnologyFilters = (projects) => {
  return [...getTechnologyCounts(projects).entries()]
    .sort(([technologyA, countA], [technologyB, countB]) => {
      if (countA !== countB) {
        return countB - countA;
      }

      return technologyA.localeCompare(technologyB);
    })
    .map(([technology]) => technology);
};
