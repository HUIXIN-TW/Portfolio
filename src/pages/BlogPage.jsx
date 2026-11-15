import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import podcastData from "../data/podcast.json";
import { getBlogPosts } from "../utils/blogLoader";
import {
  card,
  cardMeta,
  cardPadding,
  cardTitle,
  sectionContainer,
  sectionTitle,
  subsectionTitle,
  tagPillBase,
  tagPillButton,
  tagPillMuted,
} from "../styles/uiClasses";

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

const LINK_FOCUS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-[#BD93F9] dark:focus-visible:ring-offset-[#282A36]";

const BlogPage = () => {
  const posts = getBlogPosts();
  const latestArticles = posts.slice(0, 3);
  const allArticles = posts.slice(0, 20);

  const podcastLinks = useMemo(
    () => (Array.isArray(podcastData.links) ? podcastData.links.filter((l) => l && l.url) : []),
    []
  );

  const latestEpisodes = useMemo(() => {
    if (!Array.isArray(podcastData.episodes) || podcastData.episodes.length === 0) {
      return [];
    }

    return [...podcastData.episodes]
      .sort((a, b) => {
        const timeA = Number.isNaN(Date.parse(a.date)) ? 0 : Date.parse(a.date);
        const timeB = Number.isNaN(Date.parse(b.date)) ? 0 : Date.parse(b.date);

        return timeB - timeA;
      })
      .slice(0, 3);
  }, []);

  const renderTags = (tags) =>
    tags.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className={tagPillBase}>
            #{tag}
          </span>
        ))}
      </div>
    ) : null;

  return (
    <section className="padding" id="blog">
      <div className={sectionContainer}>
        <div className="space-y-4">
          <h2 className={sectionTitle}>Blog</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          {/* Latest Articles */}
          <div className={`${card} ${cardPadding}`}>
            <div className="mb-5">
              <h3 className={subsectionTitle}>Latest Articles</h3>
            </div>

            {latestArticles.length > 0 ? (
              <div className="divide-y divide-slate-200 dark:divide-[#44475A]">
                {latestArticles.map((post) => (
                  <article key={post.slug} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        <Link to={`/blog/${post.slug}`} className="block">
                          <h4 className={cardTitle}>{post.title}</h4>
                        </Link>
                        <p className={cardMeta}>
                          {formatBlogDate(post.date)}
                          {post.readingTime ? ` · ${post.readingTime}` : ""}
                        </p>
                      </div>

                      {post.summary && (
                        <p className="text-base leading-7 text-slate-600 dark:text-[#C7C9D9]">{post.summary}</p>
                      )}

                      {renderTags(post.tags)}

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <Link to={`/blog/${post.slug}`} className={`${tagPillButton} ${LINK_FOCUS}`}>
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-600 dark:text-[#C7C9D9]">No blog posts are available yet.</p>
            )}
          </div>

          {/* Podcast */}
          <div className={`${card} ${cardPadding}`}>
            <div className="mb-5">
              <h3 className={subsectionTitle}>Podcast</h3>
            </div>

            {/* Profile */}
            <div className="flex items-end gap-3">
              {podcastData.icon && (
                <img
                  src={podcastData.icon}
                  alt={podcastData.name || "Podcast icon"}
                  className="h-36 w-36 flex-shrink-0 rounded-xl object-cover"
                />
              )}
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-semibold tracking-tight text-slate-950 dark:text-[#F8F8F2]">
                  {podcastData.name}
                </p>
                {podcastData.author && <p className={cardMeta}>by {podcastData.author}</p>}
              </div>
            </div>

            {podcastData.description && (
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-[#C7C9D9]">{podcastData.description}</p>
            )}

            {/* Platform links — only when url is non-empty */}
            {podcastLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {podcastLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${tagPillButton} ${LINK_FOCUS}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-[#C7C9D9]">
                Podcast links are coming soon.
              </p>
            )}

            {/* Episodes */}
            {latestEpisodes.length > 0 && (
              <div className="mt-4 border-t border-slate-200 pt-4 dark:border-[#44475A]">
                <p className="mb-3 text-sm font-semibold tracking-tight text-slate-950 dark:text-[#F8F8F2]">Episodes</p>
                <div className="divide-y divide-slate-200 dark:divide-[#44475A]">
                  {latestEpisodes.map((ep) => (
                    <div key={ep.title} className="space-y-2 py-3 first:pt-0 last:pb-0">
                      <p className="text-sm font-medium leading-snug text-slate-950 dark:text-[#F8F8F2]">{ep.title}</p>
                      <p className={cardMeta}>
                        {formatBlogDate(ep.date)}
                        {ep.duration ? ` · ${ep.duration}` : ""}
                      </p>
                      {ep.summary && (
                        <p className="text-sm leading-6 text-slate-600 dark:text-[#C7C9D9]">{ep.summary}</p>
                      )}
                      {ep.url ? (
                        <a href={ep.url} target="_blank" rel="noreferrer" className={`${tagPillButton} ${LINK_FOCUS}`}>
                          Open episode
                        </a>
                      ) : (
                        <span className={tagPillMuted}>Coming soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* All Articles */}
        <div className="mt-12">
          <h3 className={subsectionTitle}>All Articles</h3>
          {allArticles.length > 0 ? (
            <div className={`${card} ${cardPadding}`}>
              <div className="divide-y divide-slate-200 dark:divide-[#44475A]">
                {allArticles.map((post) => (
                  <article key={post.slug} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                        <div className="min-w-0">
                          <Link to={`/blog/${post.slug}`} className="block">
                            <h4 className={cardTitle}>{post.title}</h4>
                          </Link>
                          <p className={cardMeta}>
                            {formatBlogDate(post.date)}
                            {post.readingTime ? ` · ${post.readingTime}` : ""}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <Link to={`/blog/${post.slug}`} className={`${tagPillButton} ${LINK_FOCUS}`}>
                            Read more
                          </Link>
                        </div>
                      </div>
                      {renderTags(post.tags)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className={`${card} ${cardPadding} text-center text-slate-600 dark:text-[#C7C9D9]`}>No posts yet.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
