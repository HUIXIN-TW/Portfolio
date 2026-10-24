import { hotel } from "../data/hotel";
import { useCopyFeedback } from "../utils/browser";
import styles from "../JapanTrip.module.css";

const fields = ["name", "address", "phone", "checkin", "checkout"];

function displayValue(field, locale) {
  if (field === "address") return hotel.address[locale];
  if (locale === "en" && (field === "checkin" || field === "checkout")) {
    const [hour, minute] = hotel[field].split(":").map(Number);
    return (hour % 12 || 12) + ":" + String(minute).padStart(2, "0") + (hour < 12 ? " am" : " pm");
  }
  return hotel[field];
}

export default function HotelInfo({ content }) {
  const { copy, copiedField } = useCopyFeedback();
  const { actions, locale } = content;
  const labels = content.hotel.labels;
  return (
    <details className={styles.card}>
      <summary className={styles.cardSummary}>{content.headings.hotel}</summary>
      <div className={styles.cardBody}>
        <ul className={styles.infoList}>
          {fields.map((field) => {
            const value = displayValue(field, locale);
            return (
              <li key={field}>
                <span className={styles.infoLabel}>{labels[field]}</span>
                <span className={styles.infoActions}>
                  <span className={styles.infoValue}>{value}</span>
                  <button type="button" className={styles.copyButton}
                    onClick={() => copy(field, value, actions.copyPrompt + " " + labels[field])}
                    title={copiedField === field ? actions.copied : actions.copy}
                    aria-label={actions.copy + " " + labels[field]}>
                    {copiedField === field ? "✓" : "⧉"}
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}
