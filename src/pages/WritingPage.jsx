import React from "react";
import PageHeading from "../ui/PageHeading";
import ExternalLink from "../ui/ExternalLink";
import { getWritingPostPath } from "../config/routes.mjs";
import { Link } from "react-router-dom";
import podcastData from "../data/podcast.json";
import { getBlogPosts } from "../utils/blogLoader";
import {
  card,
  cardMeta,
  cardPadding,
  cardTitle,
  sectionContainer,
  subsectionTitle,
  tagPillBase,
  tagPillButton,
} from "../styles/uiClasses";

const formatArticleDate = (value) => {
  if (!value) return "";
  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

const WritingPage = () => {
  const articles = getBlogPosts();
  const podcastUrl = podcastData.websiteUrl;

  return (
    <section className="padding" id="writing">
      <div className={sectionContainer}>
        <PageHeading title="Writing" description="Engineering notes, technical exploration and articles." />
        <div className="mt-10">
          <h2 className={subsectionTitle}>Articles</h2>
          {articles.length > 0 ? (
            <div className={`${card} ${cardPadding} mt-5 divide-y divide-[var(--ed-border)] `}>
              {articles.map((article) => (
                <article key={article.slug} className="space-y-3 py-5 first:pt-0 last:pb-0">
                  <Link to={getWritingPostPath(article.slug)} className="block">
                    <h3 className={cardTitle}>{article.title}</h3>
                  </Link>
                  <p className={cardMeta}>
                    {formatArticleDate(article.date)}
                    {article.readingTime ? ` · ${article.readingTime}` : ""}
                  </p>
                  {article.summary && (
                    <p className="text-base leading-7 text-[var(--ed-muted)]">{article.summary}</p>
                  )}
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className={tagPillBase}>#{tag}</span>
                      ))}
                    </div>
                  )}
                  <Link to={getWritingPostPath(article.slug)} className={tagPillButton}>
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-sm text-[var(--ed-muted)]">No articles are available yet.</p>
          )}
        </div>

        {podcastUrl && (
          <aside className={`${card} ${cardPadding} mt-12`}>
            <h2 className={subsectionTitle}>Also on the podcast</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ed-muted)]">
              {podcastData.description}
            </p>
            <ExternalLink
              href={podcastUrl}
              className={`${tagPillButton} mt-4`}
            >
              Listen to {podcastData.name}
            </ExternalLink>
          </aside>
        )}
      </div>
    </section>
  );
};

export default WritingPage;
