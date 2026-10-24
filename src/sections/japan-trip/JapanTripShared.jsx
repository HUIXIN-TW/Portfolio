import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../JapanTrip.module.css";

export const CHECKLIST_KEY = "japanTripChecklistV2";
export const MEETING_TIME_KEY = "japanTripMeetingTimeV2";
export const CHECKLIST_IDS = [
  "passport", "wallet", "yen", "credit-card", "transit-card", "phone",
  "charger", "mobile-data", "hotel-key", "rubbish-bag", "bathroom",
  "shopping-bag", "tax-free", "cold-weather", "scarf-gloves", "extra-layer",
  "sunny-weather", "sunscreen", "sunglasses", "appliances", "windows", "valuables",
];

export function readStorage(key) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}

export function writeStorage(key, value) {
  try { window.localStorage.setItem(key, value); return true; } catch { return false; }
}

export function readChecklist() {
  try {
    const saved = JSON.parse(readStorage(CHECKLIST_KEY) || "null");
    if (saved && typeof saved === "object" && !Array.isArray(saved)) {
      return Object.fromEntries(CHECKLIST_IDS.map((id) => [id, saved[id] === true]));
    }
  } catch { /* Fall back to earlier versions. */ }
  try {
    const original = JSON.parse(readStorage("preflightChecklist") || "null");
    if (Array.isArray(original)) {
      return Object.fromEntries(CHECKLIST_IDS.map((id, index) => [id, original[index] === true]));
    }
  } catch { /* Invalid historical data; start fresh. */ }
  try {
    const english = JSON.parse(readStorage("japanTripEnChecklist") || "null");
    if (english && typeof english === "object" && !Array.isArray(english)) {
      const names = [
        "Passport", "Wallet", "Japanese yen", "Credit card", "ICOCA / Suica card — check balance",
        "Phone — at least 50% battery", "Power bank and charging cable", "eSIM / mobile data working",
        "Hotel key card", "Small rubbish bag", "Use the bathroom", "Reusable shopping bag",
        "Tax-free shopping QR code (if needed)", "Check the weather", "Warm layers, scarf and gloves if cold",
        "Warm layers, scarf and gloves if cold", "Check the weather", "Sunscreen and sunglasses if sunny",
        "Sunscreen and sunglasses if sunny", "Switch off room appliances", "Close the windows",
        "Secure valuables",
      ];
      return Object.fromEntries(CHECKLIST_IDS.map((id, index) => [id, english[names[index]] === true]));
    }
  } catch { /* Invalid historical data; start fresh. */ }
  return {};
}

export function readMeetingTime() {
  const current = readStorage(MEETING_TIME_KEY);
  return current !== null ? current : (readStorage("preflightMeetingTime") || readStorage("japanTripEnMeetingTime") || "");
}

export function saveChecklist(checked) {
  writeStorage(CHECKLIST_KEY, JSON.stringify(checked));
}

export function useTripMetadata(lang, title, description) {
  useEffect(() => {
    const previous = {
      lang: document.documentElement.lang,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
    };
    document.documentElement.lang = lang;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
    return () => {
      document.documentElement.lang = previous.lang;
      document.title = previous.title;
      if (created) meta.remove();
      else if (previous.description !== null && previous.description !== undefined) {
        meta.setAttribute("content", previous.description);
      }
    };
  }, [lang, title, description]);
}

export function useCopyFeedback() {
  const [copiedField, setCopiedField] = useState("");
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async (field, value, fallbackLabel) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopiedField(""), 1800);
    } catch {
      window.prompt(fallbackLabel, value);
    }
  };
  return { copiedField, copy };
}

export async function shareText(message, copyPrompt) {
  if (navigator.share) {
    try {
      await navigator.share({ text: message });
      return "shared";
    } catch (error) {
      if (error?.name === "AbortError") return "cancelled";
    }
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(message);
    return "copied";
  } catch {
    window.prompt(copyPrompt, message);
    return "manual";
  }
}

const WORDING = {
  zh: {
    eyebrow: "OSAKA · KYOTO · 3 DAYS",
    title: "關西三日旅行手冊",
    description: "從大阪街區走到京都古寺，把路線、必備物品與實用日文整理在同一頁。",
    subtitle: "行程時間僅供規劃參考；出發前請再次確認交通、營業時間與預約。",
    itinerary: "每日行程",
    checklist: "出門檢查",
    phrases: "實用日文",
    map: "行程地圖",
    switchLabel: "選擇頁面語言",
    locationTitle: "地點與地圖",
    locationIntro: "可在地圖中探索行程地點，也能下載地點清單，建立自己的可編輯地圖。",
    openMap: "開啟原始地圖",
    download: "下載地點 CSV",
    instructions: "如何建立可編輯的副本？",
    steps: "下載 CSV → 開啟 Google My Maps 並建立新地圖 → 匯入 CSV，以 Location 欄定位、Name 欄命名。此副本由你自行管理，不需要取得原地圖編輯權限。",
    mapCaveat: "嵌入的 My Maps 標記名稱由原地圖決定，切換語言不會自動翻譯。下載的 CSV 提供繁體中文地點名稱。",
    mapTitle: "大阪與京都旅遊地圖",
    copyPrompt: "請複製以下文字：",
  },
  en: {
    eyebrow: "OSAKA · KYOTO · 3 DAYS",
    title: "A long weekend in Kansai",
    description: "Three days of Osaka neighbourhoods, Kyoto landmarks, useful Japanese phrases and everything you need before heading out.",
    subtitle: "Travel times are estimates. Recheck transport, opening hours and bookings before you go.",
    itinerary: "Day-by-day plan",
    checklist: "Packing checklist",
    phrases: "Japanese phrases",
    map: "Trip map",
    switchLabel: "Choose page language",
    locationTitle: "Explore the map",
    locationIntro: "Browse the shared map or download the places as a CSV to make an editable map of your own.",
    openMap: "Open the original map",
    download: "Download places (CSV)",
    instructions: "Want to edit the map yourself?",
    steps: "Download the CSV, create a map in Google My Maps, then import the file. Choose Location for positioning and Name for labels. Your new map is fully yours to edit; no access to the original owner's account is needed.",
    mapCaveat: "Labels inside the embedded My Maps are maintained by its owner and may remain in Chinese. The downloadable CSV contains English place names.",
    mapTitle: "Osaka and Kyoto itinerary map",
    copyPrompt: "Copy the following text:",
  },
};

export function JapanTripHero({ lang }) {
  const copy = WORDING[lang];
  return (
    <header className={styles.tripHero}>
      <div className={styles.heroTop}>
        <span className={styles.eyebrow}>{copy.eyebrow}</span>
        <nav className={styles.languageSwitch} aria-label={copy.switchLabel}>
          <Link to="/japan/zh" lang="zh-TW" className={lang === "zh" ? styles.languageActive : ""} aria-current={lang === "zh" ? "page" : undefined}>繁中</Link>
          <Link to="/japan/en" lang="en" className={lang === "en" ? styles.languageActive : ""} aria-current={lang === "en" ? "page" : undefined}>English</Link>
        </nav>
      </div>
      <h1>{copy.title}</h1>
      <p className={styles.heroDescription}>{copy.description}</p>
      <p className={styles.heroNote}>{copy.subtitle}</p>
      <nav className={styles.sectionNav} aria-label={lang === "zh" ? "頁面目錄" : "On this page"}>
        <a href="#itinerary">{copy.itinerary}</a>
        <a href="#checklist">{copy.checklist}</a>
        <a href="#phrases">{copy.phrases}</a>
        <a href="#trip-map">{copy.map}</a>
      </nav>
    </header>
  );
}

export function JapanTripMap({ lang }) {
  const copy = WORDING[lang];
  const csv = "/trips/japan-stops-" + lang + ".csv";
  const mapId = "1I-jR7-sL_QXOJdqcB0a8Go19_VI2dsE";
  const mapUrl = "https://www.google.com/maps/d/embed?mid=" + mapId + "&hl=" + (lang === "zh" ? "zh-TW" : "en");
  return (
    <section id="trip-map" className={styles.mapSection} aria-labelledby="trip-map-title">
      <div className={styles.mapIntroduction}>
        <div>
          <span className={styles.sectionKicker}>04 / MAP</span>
          <h2 id="trip-map-title">{copy.locationTitle}</h2>
          <p>{copy.locationIntro}</p>
        </div>
        <div className={styles.mapActions}>
          <a href={csv} download className={styles.primaryButton}>{copy.download}</a>
          <a href={"https://www.google.com/maps/d/viewer?mid=" + mapId} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>{copy.openMap} ↗</a>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <iframe
          title={copy.mapTitle}
          className={styles.frame}
          src={mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <details className={styles.mapHelp}>
        <summary>{copy.instructions}</summary>
        <p>{copy.steps} <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener noreferrer">Google My Maps ↗</a></p>
      </details>
      <p className={styles.mapDisclaimer}>{copy.mapCaveat}</p>
    </section>
  );
}
