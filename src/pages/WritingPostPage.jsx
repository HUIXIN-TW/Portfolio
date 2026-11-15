import React, { useMemo } from "react";
import PageHeading from "../ui/PageHeading";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../config/routes.mjs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug } from "../utils/blogLoader";
import { card, cardPadding, sectionContainer, tagPillBase, tagPillButton, tagPillMuted } from "../styles/uiClasses";

const formatArticleDate = (value) => {
  if (!value) {
    return "";
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mt-10 text-3xl font-semibold tracking-tight text-[var(--ed-ink)]">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 text-2xl font-semibold tracking-tight text-[var(--ed-ink)]">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-xl font-semibold tracking-tight text-[var(--ed-ink)]">{children}</h3>
  ),
  p: ({ children }) => <p className="text-base leading-7 text-[var(--ed-muted)]">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-[var(--ed-muted)]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-[var(--ed-muted)]">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-[var(--ed-ink)] underline decoration-[var(--ed-border)] underline-offset-4 hover:text-[var(--ed-accent)]"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[var(--ed-border)] pl-4 text-base leading-7 text-[var(--ed-muted)]">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-xl bg-[var(--ed-code-background)] p-4 text-sm leading-6 text-[var(--ed-code-ink)]">
      {children}
    </pre>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="rounded bg-[var(--ed-hover)] px-1.5 py-0.5 text-sm text-[var(--ed-ink)]">
        {children}
      </code>
    ) : (
      <code className="text-inherit">{children}</code>
    ),
  table: ({ children }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-[var(--ed-border)] px-3 py-2 text-left font-semibold text-[var(--ed-ink)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[var(--ed-border)] px-3 py-2 text-[var(--ed-muted)]">
      {children}
    </td>
  ),
};

const stripDuplicateTitleHeading = (markdown, title) => {
  if (!markdown || !title) return markdown;
  const trimmedTitle = title.trim();
  const lines = markdown.split("\n");
  const firstNonEmptyIndex = lines.findIndex((l) => l.trim());
  if (firstNonEmptyIndex === -1) return markdown;
  const firstLine = lines[firstNonEmptyIndex];
  const headingMatch = firstLine.match(/^#{1,6}\s+(.*)/);
  if (headingMatch && headingMatch[1].trim() === trimmedTitle) {
    const remaining = lines.slice(firstNonEmptyIndex + 1);
    const afterBlank = remaining[0]?.trim() === "" ? remaining.slice(1) : remaining;
    return afterBlank.join("\n").trimStart();
  }
  return markdown;
};

const WritingPostPage = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : null;

  const postTags = useMemo(() => (post?.tags?.length ? post.tags : []), [post]);

  return (
    <section className="padding" id="writing-article">
      <div className={sectionContainer}>
        <div className="mb-6">
          <Link
            to={ROUTES.writing}
            className="text-sm font-medium text-[var(--ed-muted)] underline decoration-[var(--ed-border)] underline-offset-4"
          >
            Back to Writing
          </Link>
        </div>

        {post && <PageHeading title={post.title} eyebrow="WRITING" />}
        {post ? (
          <article className={`${card} ${cardPadding}`}>
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={tagPillMuted}>{formatArticleDate(post.date)}</span>
                  {post.category && <span className={tagPillMuted}>{post.category}</span>}
                  {post.readingTime && <span className={tagPillMuted}>{post.readingTime}</span>}
                </div>

                {post.summary && <p className="editorial-article-meta">{post.summary}</p>}
              </div>

              {postTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {postTags.map((tag) => (
                    <span key={tag} className={tagPillBase}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {post.sourceUrl ? (
                <div className="flex flex-wrap gap-2">
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${tagPillButton} focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ed-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ed-background)] `}
                  >
                    Source link
                  </a>
                </div>
              ) : null}

              <div className="space-y-6">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {stripDuplicateTitleHeading(post.content, post.title)}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        ) : (
          <div className={`${card} ${cardPadding}`}>
            <p className="text-[var(--ed-muted)]">Post not found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WritingPostPage;
