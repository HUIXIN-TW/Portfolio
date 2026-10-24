import React, { useEffect, useState } from "react";
import styles from "./JapanTrip.module.css";

const days = [
  { title: "Day 1 · Arrive in Osaka — Namba, Dotonbori & Shinsekai", stops: [
    ["7:05–10:55", "Fly from Kaohsiung to Kansai International Airport (KIX)."],
    ["10:55–12:35", "Clear arrivals, pick up an ICOCA transit card (suggested top-up: ¥3,500), and take the Nankai Railway to Namba (around 45–55 minutes). Walk to the hotel and drop off your bags."],
    ["Lunch", "Choose from KITAN HIBIKI or Wagyu Sukiyaki Okuwo near Namba. Other options include Naiwa Omeriasu and Usamitei Matsubaya."],
    ["Afternoon", "Explore Shinsaibashi-suji and Dotonbori on foot. Stop by the famous Glico running-man sign."],
    ["4:20–6:30 pm", "Take the Osaka Metro from Namba to Dobutsuen-mae, then walk to Tsutenkaku Tower and explore Shinsekai."],
    ["7:00 pm", "Try kushikatsu (Osaka-style fried skewers) in Shinsekai, or head back to Namba for dinner."]
  ] },
  { title: "Day 2 · Kyoto — Kiyomizu-dera, kimono & Nishiki Market", stops: [
    ["5:30–6:30 am", "Travel from Namba via Yodoyabashi to Gion-Shijo on the Keihan Railway, then continue towards Kiyomizu-dera."],
    ["6:30–9:00 am", "Visit Kiyomizu-dera early, then stroll towards Yasaka Shrine."],
    ["9:00 am–12:30 pm", "Kimono fitting at Okamoto Kimono's Kiyomizu location, followed by photos around Hanamikoji Street and Shirakawa."],
    ["Lunch", "Consider Ramen Nishiki or Menya Inoichi, and stop at GOKAGO for something sweet."],
    ["By 2:30 pm", "Return the kimono to the rental shop."],
    ["Afternoon", "Browse Nishiki Market and enjoy a walk along the Kamo River."],
    ["3:50–6:00 pm", "Return to Osaka. Have dinner around Dotonbori or Kuromon Market."]
  ] },
  { title: "Day 3 · Osaka Castle, Tenjinbashisuji & the flight home", stops: [
    ["7:15–8:30 am", "Head from Namba to SOT COFFEE ROASTER near Osaka Castle."],
    ["8:30–11:30 am", "Explore Osaka Castle Park and the castle museum. Allow extra time for walking; check boat-ride availability on arrival."],
    ["11:30 am–3:00 pm", "Browse Tenjinbashisuji Shopping Street, with time for lunch and snacks."],
    ["3:00–3:40 pm", "Take the metro back to Namba and collect your luggage from the hotel."],
    ["After 3:40 pm", "Take the Nankai Railway from Namba to KIX (around 45–55 minutes)."],
    ["8:20–10:55 pm", "Fly from Kansai International Airport to Kaohsiung."]
  ] }
];

const packing = [
  ["Essentials", ["Passport", "Wallet", "Japanese yen", "Credit card", "ICOCA / Suica card — check balance", "Phone — at least 50% battery", "Power bank and charging cable", "eSIM / mobile data working", "Hotel key card", "Small rubbish bag", "Reusable shopping bag", "Tax-free shopping QR code (if needed)"]],
  ["Before heading out", ["Use the bathroom", "Check the weather", "Warm layers, scarf and gloves if cold", "Sunscreen and sunglasses if sunny", "Switch off room appliances", "Close the windows", "Secure valuables"]]
];

const phrases = [
  ["すみません。", "Sumimasen.", "Excuse me / Sorry."],
  ["ありがとうございます。", "Arigatou gozaimasu.", "Thank you very much."],
  ["お願いします。", "Onegaishimasu.", "Please / I'd appreciate it."],
  ["こんにちは。", "Konnichiwa.", "Hello / Good afternoon."],
  ["こんばんは。", "Konbanwa.", "Good evening."],
  ["何名様ですか？", "Nanmei-sama desu ka?", "How many people are in your party?"],
  ["二人です。", "Futari desu.", "There are two of us."],
  ["五人です。", "Gonin desu.", "There are five of us."],
  ["はい。", "Hai.", "Yes."],
  ["いいえ。", "Iie.", "No."],
  ["こちらでお召し上がりですか？", "Kochira de omeshiagari desu ka?", "Is that for here?"],
  ["道に迷いました、助けてください。", "Michi ni mayoimashita, tasukete kudasai.", "I'm lost. Could you help me?"]
];

const CHECK_KEY = "japanTripEnChecklist";
const TIME_KEY = "japanTripEnMeetingTime";

export default function JapanTripEnglish() {
  const [checked, setChecked] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CHECK_KEY) || "{}"); } catch { return {}; }
  });
  const [meetingTime, setMeetingTime] = useState(() => {
    try { return localStorage.getItem(TIME_KEY) || ""; } catch { return ""; }
  });
  useEffect(() => { document.title = "Japan Trip | Osaka & Kyoto"; }, []);
  useEffect(() => { try { localStorage.setItem(CHECK_KEY, JSON.stringify(checked)); } catch { /* storage unavailable */ } }, [checked]);
  useEffect(() => { try { localStorage.setItem(TIME_KEY, meetingTime); } catch { /* storage unavailable */ } }, [meetingTime]);

  const allItems = packing.flatMap((group) => group[1]);
  const done = allItems.filter((item) => checked[item]).length;
  const percent = Math.round((done / allItems.length) * 100);
  const share = async () => {
    const remaining = allItems.filter((item) => !checked[item]);
    const message = `Ready-to-go checklist: ${done}/${allItems.length} done (${percent}%). ${remaining.length ? "Still to pack/check: " + remaining.join(", ") : "All set!"}. Meet-up time: ${meetingTime || "not set"}.`;
    if (navigator.share) {
      try { await navigator.share({ text: message }); return; } catch (error) { if (error?.name === "AbortError") return; }
    }
    try { await navigator.clipboard.writeText(message); window.alert("Checklist copied to clipboard."); }
    catch { window.prompt("Copy your checklist:", message); }
  };
  const speak = (phrase) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "ja-JP";
    const voice = window.speechSynthesis.getVoices().find((v) => v.lang?.toLowerCase().startsWith("ja"));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.mapPage} lang="en">
      <section className={styles.itinerary}>
        <h2 className={styles.sectionTitle}>Japan Trip · Osaka & Kyoto</h2>
        <p>A three-day itinerary with transport notes, food stops and practical travel essentials. Times are estimates, so check current timetables before travelling.</p>
        {days.map((day) => (
          <details className={styles.day} key={day.title}>
            <summary className={styles.dayTitle}>{day.title}</summary>
            {day.stops.map(([time, description]) => (
              <div key={time + description}>
                <h4 className={styles.blockTitle}>{time}</h4>
                <ul className={styles.list}><li>{description}</li></ul>
              </div>
            ))}
          </details>
        ))}
      </section>
      <section className={styles.extras}>
        <details className={styles.card}>
          <summary className={styles.cardSummary}>Before You Leave · Quick Checklist</summary>
          <div className={styles.cardBody}>
            <div className={styles.preflight}>
              <div className={styles.preflightProgress}>
                <div className={styles.preflightProgressHeader}>
                  <span>READY TO GO?</span>
                  <div className={styles.preflightProgressActions}>
                    <strong>{percent}%</strong>
                    <button type="button" className={styles.resetButton} onClick={() => setChecked({})}>Reset</button>
                    <button type="button" className={styles.shareButton} onClick={share}>Share</button>
                  </div>
                </div>
                <div className={styles.preflightProgressBar}><span className={styles.preflightProgressFill} style={{ width: `${percent}%` }} /></div>
                <label className={styles.preflightTime}><span>Meet-up time (optional)</span><input type="time" value={meetingTime} onChange={(event) => setMeetingTime(event.target.value)} /></label>
              </div>
              {packing.map(([group, items], index) => (
                <div className={styles.preflightSection} key={group}>
                  <div className={styles.preflightHeader}><span className={styles.preflightIndex}>{index + 1}</span><span className={styles.preflightTitle}>{group}</span></div>
                  <div className={styles.preflightList}>
                    {items.map((item) => (
                      <div className={styles.preflightRow} key={item}>
                        <label className={styles.checkItem}><input type="checkbox" checked={Boolean(checked[item])} onChange={(event) => setChecked((previous) => ({ ...previous, [item]: event.target.checked }))} /><span>{item}</span></label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
        <details className={styles.card}>
          <summary className={styles.cardSummary}>Useful Japanese Phrases</summary>
          <div className={styles.cardBody}>
            <ol className={styles.sentenceList}>
              {phrases.map(([japanese, romaji, english]) => (
                <li key={japanese}>
                  <span className={styles.jp} lang="ja">{japanese}</span>
                  <span className={styles.romaji}>{romaji}</span>
                  <span className={styles.zh}>{english}</span>
                  <button type="button" className={styles.speakButton} onClick={() => speak(japanese)} aria-label={`Play Japanese pronunciation: ${english}`}>Listen</button>
                </li>
              ))}
            </ol>
          </div>
        </details>
        <details className={styles.card}>
          <summary className={styles.cardSummary}>Hotel Details</summary>
          <div className={styles.cardBody}>
            <ul className={styles.infoList}>
              <li><span className={styles.infoLabel}>Hotel</span><span className={styles.infoValue}>GRIDS PREMIUM HOTEL OSAKA NAMBA</span></li>
              <li><span className={styles.infoLabel}>Address</span><span className={styles.infoValue}>1-7-7 Nambanaka, Naniwa Ward, Osaka</span></li>
              <li><span className={styles.infoLabel}>Phone</span><a className={styles.infoValue} href="tel:+81666350810">+81 6-6635-0810</a></li>
              <li><span className={styles.infoLabel}>Check-in</span><span className={styles.infoValue}>3:00 pm</span></li>
              <li><span className={styles.infoLabel}>Check-out</span><span className={styles.infoValue}>11:00 am</span></li>
            </ul>
          </div>
        </details>
        <details className={styles.card}>
          <summary className={styles.cardSummary}>Emergency Contacts in Japan</summary>
          <div className={styles.cardBody}>
            <ul className={styles.infoList}>
              <li><span className={styles.infoLabel}>Police</span><a className={styles.infoValue} href="tel:110">110</a></li>
              <li><span className={styles.infoLabel}>Fire / Ambulance</span><a className={styles.infoValue} href="tel:119">119</a></li>
              <li><span className={styles.infoLabel}>Coast Guard</span><a className={styles.infoValue} href="tel:118">118</a></li>
              <li><span className={styles.infoLabel}>Japan Visitor Hotline</span><a className={styles.infoValue} href="tel:+815038162787">+81 50-3816-2787</a></li>
            </ul>
          </div>
        </details>
      </section>
      <div className={styles.frameWrapper}>
        <iframe title="Osaka and Kyoto trip map" className={styles.frame} src="https://www.google.com/maps/d/u/2/embed?mid=1I-jR7-sL_QXOJdqcB0a8Go19_VI2dsE&ehbc=2E312F" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}
