import styles from "../JapanTrip.module.css";

export default function Itinerary({ content }) {
  return (
    <section id="itinerary" className={styles.itinerary} aria-labelledby="itinerary-title">
      <span className={styles.sectionKicker}>01 / ITINERARY</span>
      <h2 className={styles.sectionTitle} id="itinerary-title">{content.headings.itinerary}</h2>
      <p className={styles.sectionIntro}>{content.headings.itineraryDescription}</p>
      {content.days.map((day) => (
        <details className={styles.day} key={day.number}>
          <summary className={styles.dayTitle}>
            <span>
              <small className={styles.dayNumber}>DAY {day.number}</small>
              {day.title}
              {day.description && <span className={styles.dayDescription}>{day.description}</span>}
            </span>
          </summary>
          <div className={styles.timeline}>
            {day.stops.map((stop, index) => (
              <div className={styles.timelineItem} key={stop.id || day.number + "-" + index}>
                <span className={styles.timelineTime}>{stop.time || ""}</span>
                <div>
                  <h3 className={styles.blockTitle}>{stop.title}</h3>
                  <ul className={styles.list}>{stop.details.map((line, i) => <li key={i}>{line}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </section>
  );
}
