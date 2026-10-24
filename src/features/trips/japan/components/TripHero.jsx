import { Link } from "react-router-dom";
import styles from "../JapanTrip.module.css";
import { TRIP_ROUTES } from "../data/site";

const sections = [["itinerary", "itinerary"], ["checklist", "checklist"], ["phrases", "phrases"], ["reference", "reference"], ["trip-map", "map"]];

export default function TripHero({ content }) {
  const { hero, navigation, locale } = content;
  return (
    <header className={styles.tripHero}>
      <div className={styles.heroTop}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>
        <nav className={styles.languageSwitch} aria-label={navigation.language}>
          <Link to={TRIP_ROUTES.zh} lang="zh" className={locale === "zh" ? styles.languageActive : ""} aria-current={locale === "zh" ? "page" : undefined}>繁中</Link>
          <Link to={TRIP_ROUTES.en} lang="en" className={locale === "en" ? styles.languageActive : ""} aria-current={locale === "en" ? "page" : undefined}>English</Link>
        </nav>
      </div>
      <h1>{hero.title}</h1>
      <p className={styles.heroDescription}>{hero.description}</p>
      <p className={styles.heroNote}>{hero.note}</p>
      <nav className={styles.sectionNav} aria-label={navigation.label}>
        {sections.map(([id, key]) => <a key={id} href={"#" + id}>{navigation[key]}</a>)}
      </nav>
    </header>
  );
}
