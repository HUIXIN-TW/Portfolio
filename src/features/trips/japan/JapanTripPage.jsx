import zhTW from "./content/zh-TW";
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

const localizedContent = { "zh-TW": zhTW, en };

export default function JapanTripPage({ locale = "zh-TW" }) {
  const content = localizedContent[locale] || zhTW;
  useTripMetadata(content.meta, content.locale);

  return (
    <div className={styles.mapPage} lang={content.locale}>
      <TripHero content={content} />
      <Itinerary content={content} />
      <div className={styles.extras}>
        <Checklist content={content} />
        <Phrasebook content={content} />
        <HotelInfo content={content} />
        <EmergencyContacts content={content} />
      </div>
      <TripMap content={content} />
    </div>
  );
}
