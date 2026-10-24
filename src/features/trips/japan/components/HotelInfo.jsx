import { useCopyFeedback } from "../utils/browser";
import styles from "../JapanTrip.module.css";

const fields = ["name", "address", "phone", "checkin", "checkout"];

export default function HotelInfo({ content }) {
  const { copy, copiedField } = useCopyFeedback();
  const { hotel, actions } = content;
  return (
    <details className={styles.card}>
      <summary className={styles.cardSummary}>{content.headings.hotel}</summary>
      <div className={styles.cardBody}>
        <ul className={styles.infoList}>
          {fields.map((field) => (
            <li key={field}>
              <span className={styles.infoLabel}>{hotel.labels[field]}</span>
              <span className={styles.infoActions}>
                <span className={styles.infoValue}>{hotel[field]}</span>
                <button type="button" className={styles.copyButton}
                  onClick={() => copy(field, hotel[field], actions.copyPrompt + " " + hotel.labels[field])}
                  title={copiedField === field ? actions.copied : actions.copy}
                  aria-label={actions.copy + " " + hotel.labels[field]}>
                  {copiedField === field ? "✓" : "⧉"}
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
