import styles from "../JapanTrip.module.css";
import ReferencePanel from "./ReferencePanel";

const contacts = [
  ["police", "110", "tel:110"],
  ["fire", "119", "tel:119"],
  ["coast", "118", "tel:118"],
  ["hotline", "+81 50-3816-2787", "tel:+815038162787"],
];

export default function EmergencyContacts({ content }) {
  return (
    <ReferencePanel number="04.2" type="EMERGENCY" title={content.headings.emergency}>
        <ul className={styles.infoList}>
          {contacts.map(([id, value, href]) => (
            <li key={id}>
              <span className={styles.infoLabel}>{content.emergency[id]}</span>
              <a href={href} className={styles.infoValue}>{value}</a>
            </li>
          ))}
        </ul>
    </ReferencePanel>
  );
}
