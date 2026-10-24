import styles from "../JapanTrip.module.css";

export default function ReferencePanel({ number, type, title, children }) {
  return (
    <details className={styles.card}>
      <summary className={styles.cardSummary}>
        <span className={styles.referenceCardNumber}>{number} / {type}</span>
        <span className={styles.cardHeading}>{title}</span>
      </summary>
      <div className={styles.cardBody}>{children}</div>
    </details>
  );
}
