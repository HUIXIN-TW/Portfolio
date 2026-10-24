import styles from "../JapanTrip.module.css";

const mapId = "1I-jR7-sL_QXOJdqcB0a8Go19_VI2dsE";

export default function TripMap({ content }) {
  const { map, locale } = content;
  const csv = locale === "en" ? "/trips/japan/places-en.csv" : "/trips/japan/places-zh-TW.csv";
  const params = new URLSearchParams({ mid: mapId, hl: locale });
  return (
    <section id="trip-map" className={styles.mapSection} aria-labelledby="trip-map-title">
      <div className={styles.mapIntroduction}>
        <div>
          <span className={styles.sectionKicker}>04 / MAP</span>
          <h2 id="trip-map-title">{map.title}</h2>
          <p>{map.description}</p>
        </div>
        <div className={styles.mapActions}>
          <a href={csv} download className={styles.primaryButton}>{map.download}</a>
          <a href={"https://www.google.com/maps/d/viewer?mid=" + mapId} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>{map.open} ↗</a>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <iframe title={map.iframeTitle} className={styles.frame}
          src={"https://www.google.com/maps/d/embed?" + params}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
      <details className={styles.mapHelp}>
        <summary>{map.instructions}</summary>
        <p>{map.steps} <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener noreferrer">Google My Maps ↗</a></p>
      </details>
      <p className={styles.mapDisclaimer}>{map.caveat}</p>
    </section>
  );
}
