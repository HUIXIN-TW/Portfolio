import { hotel } from "../data/hotel";
import { useCopyFeedback } from "../utils/browser";
import styles from "../JapanTrip.module.css";
import ReferencePanel from "./ReferencePanel";

const fields = ["name", "address", "phone", "checkin", "checkout"];

function displayValue(field, locale) {
  return field === "address" ? hotel.address[locale] : hotel[field];
}

export default function HotelInfo({ content }) {
  const { copy, copiedField } = useCopyFeedback();
  const { actions, locale } = content;
  const labels = content.hotel.labels;
  return (
    <ReferencePanel number="04.1" type="HOTEL" title={content.headings.hotel}>
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
    </ReferencePanel>
  );
}
