import styles from "../JapanTrip.module.css";

export default function ReferencePanel({ number, type, title, children }) {
  return (
    <details className={styles.card}>
      <summary className={styles.cardSummary}>
        <span className={styles.referenceCardNumber}>{number} / {type}</span>
        <h3 className={styles.cardHeading}>{title}</h3>
      </summary>
      <div className={styles.cardBody}>{children}</div>
    </details>
  );
}
