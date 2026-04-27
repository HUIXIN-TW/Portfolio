import blogPostSlugs from "../data/blogPosts.json";

const markdownFiles = import.meta.glob("../blogs/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const defaultFrontmatter = {
  category: "",
  date: "",
  published: true,
  slug: "",
  sourceUrl: "",
  summary: "",
  tags: [],
  title: "",
  type: "article",
};

const normalizeSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\.md$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseFrontmatterValue = (value) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    }
  }

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }

  if (/^(true|false)$/i.test(trimmed)) {
    return trimmed.toLowerCase() === "true";
  }

  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed;
};

const parseFrontmatter = (rawMarkdown) => {
  const frontmatterMatch = rawMarkdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    return {
      content: rawMarkdown.trim(),
      frontmatter: {},
    };
  }

  const [, frontmatterBlock, content] = frontmatterMatch;
  const frontmatter = {};

  frontmatterBlock.split(/\r?\n/).forEach((line) => {
    const colonIndex = line.indexOf(":");

    if (colonIndex === -1) {
      return;
    }

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    frontmatter[key] = parseFrontmatterValue(value);
  });

  return {
    content: content.trim(),
    frontmatter,
  };
};

const stripMarkdownSyntax = (markdown) =>
  markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/^\|.*\|$/gm, " ")
    .replace(/\|/g, " ")
    .replace(/[*_~]/g, "")
    .replace(/<\/?[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getReadingTime = (markdown) => {
  const plainText = stripMarkdownSyntax(markdown);
  const wordCount = plainText ? plainText.split(/\s+/).filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} min read`;
};

const normalizePost = (filePath, rawMarkdown) => {
  const fileName = filePath.split("/").pop() || "";
  const fallbackSlug = normalizeSlug(fileName);
  const { content, frontmatter } = parseFrontmatter(rawMarkdown);
  const slug =
    typeof frontmatter.slug === "string" && frontmatter.slug.trim() ? normalizeSlug(frontmatter.slug) : fallbackSlug;

  const tags = Array.isArray(frontmatter.tags)
    ? frontmatter.tags.filter((tag) => typeof tag === "string" && tag.trim())
    : [];

  return {
    category: typeof frontmatter.category === "string" ? frontmatter.category.trim() : defaultFrontmatter.category,
    content,
    date: typeof frontmatter.date === "string" ? frontmatter.date.trim() : defaultFrontmatter.date,
    published: frontmatter.published !== false,
    readingTime: getReadingTime(content),
    slug,
    sourceUrl: typeof frontmatter.sourceUrl === "string" ? frontmatter.sourceUrl.trim() : defaultFrontmatter.sourceUrl,
    summary: typeof frontmatter.summary === "string" ? frontmatter.summary.trim() : defaultFrontmatter.summary,
    tags,
    title: typeof frontmatter.title === "string" && frontmatter.title.trim() ? frontmatter.title.trim() : fallbackSlug,
    type:
      typeof frontmatter.type === "string" && frontmatter.type.trim()
        ? frontmatter.type.trim().toLowerCase()
        : defaultFrontmatter.type,
  };
};

// Parse all markdown files into a slug-keyed map.
// Only published posts are included.
const postsBySlug = Object.fromEntries(
  Object.entries(markdownFiles)
    .map(([filePath, rawMarkdown]) => {
      const post = normalizePost(filePath, rawMarkdown);
      return [post.slug, post];
    })
    .filter(([, post]) => post.published !== false)
);

// Order posts according to blogPosts.json.
// Slugs that don't match a markdown file are silently skipped.
const orderedPosts = Array.isArray(blogPostSlugs) ? blogPostSlugs.map((slug) => postsBySlug[slug]).filter(Boolean) : [];

export const getBlogPosts = () => orderedPosts;

export const getBlogPostBySlug = (slug) => postsBySlug[slug] ?? null;
