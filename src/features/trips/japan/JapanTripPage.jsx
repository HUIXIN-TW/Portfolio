import zh from "./content/zh";
import en from "./content/en";
import { useTripMetadata } from "./utils/browser";
import TripHero from "./components/TripHero";
import Itinerary from "./components/Itinerary";
import Checklist from "./components/Checklist";
import Phrasebook from "./components/Phrasebook";
import HotelInfo from "./components/HotelInfo";
import EmergencyContacts from "./components/EmergencyContacts";
import TripMap from "./components/TripMap";
import styles from "./JapanTrip.module.css";

const localizedContent = { zh, en };

export default function JapanTripPage({ locale = "zh" }) {
  const content = localizedContent[locale] || zh;
  useTripMetadata(content.meta, content.locale);

  return (
    <div className={styles.mapPage} lang={content.locale}>
      <TripHero content={content} />
      <Itinerary content={content} />
      <div className={styles.extras}>
        <Checklist content={content} />
        <Phrasebook content={content} />
        <section id="reference" className={styles.referenceSection} aria-labelledby="reference-heading">
          <span className={styles.sectionKicker}>04 / REFERENCE</span>
          <h2 className={styles.sectionTitle} id="reference-heading">{content.headings.reference}</h2>
          <p className={styles.sectionIntro}>{content.headings.referenceDescription}</p>
          <div className={styles.referenceStack}>
            <HotelInfo content={content} />
            <EmergencyContacts content={content} />
          </div>
        </section>
      </div>
      <TripMap content={content} />
    </div>
  );
}
