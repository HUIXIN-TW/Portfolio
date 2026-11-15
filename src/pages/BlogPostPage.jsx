import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug } from "../utils/blogLoader";
import { card, cardPadding, sectionContainer, tagPillBase, tagPillButton, tagPillMuted } from "../styles/uiClasses";

const formatBlogDate = (value) => {
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
    <h1 className="mt-10 text-3xl font-semibold tracking-tight text-slate-900 dark:text-[#F8F8F2]">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-[#F8F8F2]">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900 dark:text-[#F8F8F2]">{children}</h3>
  ),
  p: ({ children }) => <p className="text-base leading-7 text-slate-700 dark:text-[#C7C9D9]">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700 dark:text-[#C7C9D9]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-slate-700 dark:text-[#C7C9D9]">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-slate-600 dark:text-[#8BE9FD] dark:decoration-[#44475A] dark:hover:text-[#BD93F9]"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-slate-200 pl-4 text-base leading-7 text-slate-600 dark:border-[#44475A] dark:text-[#A9ADC1]">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-100 dark:bg-[#21222c] dark:text-[#F8F8F2]">
      {children}
    </pre>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-900 dark:bg-[#44475A] dark:text-[#F1FA8C]">
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
    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900 dark:border-[#44475A] dark:text-[#F8F8F2]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-slate-100 px-3 py-2 text-slate-700 dark:border-[#44475A] dark:text-[#C7C9D9]">
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

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : null;

  const postTags = useMemo(() => (post?.tags?.length ? post.tags : []), [post]);

  return (
    <section className="padding" id="blog-post">
      <div className={sectionContainer}>
        <div className="mb-6">
          <Link
            to="/blog"
            className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 dark:text-[#C7C9D9] dark:decoration-[#44475A] dark:hover:text-[#FF79C6]"
          >
            Back to Blog
          </Link>
        </div>

        {post ? (
          <article className={`${card} ${cardPadding}`}>
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={tagPillMuted}>{formatBlogDate(post.date)}</span>
                  {post.category && <span className={tagPillMuted}>{post.category}</span>}
                  {post.readingTime && <span className={tagPillMuted}>{post.readingTime}</span>}
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-[#F8F8F2]">
                  {post.title}
                </h1>
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
                    className={`${tagPillButton} focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]`}
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
            <p className="text-slate-600 dark:text-[#C7C9D9]">Post not found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPostPage;
