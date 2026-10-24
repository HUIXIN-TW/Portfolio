import { useEffect, useState } from "react";
import styles from "./JapanTrip.module.css";
import {
  MEETING_TIME_KEY, readChecklist, readMeetingTime,
  saveChecklist, writeStorage, useTripMetadata, useCopyFeedback,
  shareText, JapanTripHero, JapanTripMap,
} from "./japan-trip/JapanTripShared";

const days = [
  {
    number: "01",
    title: "Osaka · Namba, Dotonbori & Shinsekai",
    description: "Land in Kansai, settle into Namba and discover Osaka after dark.",
    stops: [
      { time: "7:05–10:55 am", title: "Fly into Kansai International Airport", details: [
        "Kaohsiung (KHH) → Kansai International Airport (KIX). Allow time for immigration and baggage collection.",
      ] },
      { time: "10:55 am–12:35 pm", title: "Airport → Namba → hotel", details: [
        "Buy a Nankai Railway ticket and top up an ICOCA card (suggested starting balance: ¥3,500).",
        "Take the Nankai Railway to Namba (about 45–55 minutes), then walk 10–15 minutes to the hotel and leave your luggage.",
        "Hotel check-in starts at 3:00 pm; luggage storage may be possible before then.",
      ] },
      { time: "Lunch", title: "Eat around Namba", details: [
        "Nearby choices include KITAN HIBIKI and Wagyu Sukiyaki Okuwo. Other options: Naiwa Omeriasu or Usamitei Matsubaya.",
      ] },
      { time: "Afternoon", title: "Shinsaibashi & Dotonbori", details: [
        "Walk through Shinsaibashi-suji Shopping Street, browse Dotonbori and see the Glico running-man sign.",
        "Most of these sights are within a short walk of one another.",
      ] },
      { time: "4:20–6:30 pm", title: "Tsutenkaku Tower & Shinsekai", details: [
        "Take the Osaka Metro from Namba to Dobutsuen-mae, then walk roughly 10 minutes to Tsutenkaku.",
        "Explore the tower area and the retro streets of Shinsekai.",
      ] },
      { time: "7:00 pm", title: "Dinner in Shinsekai", details: [
        "Try kushikatsu (Osaka-style fried skewers), or return to Namba for dinner.",
      ] },
    ],
  },
  {
    number: "02",
    title: "Kyoto · Kiyomizu-dera, Gion & Nishiki Market",
    description: "An early start, traditional streets and a day exploring eastern Kyoto.",
    stops: [
      { time: "From 5:30 am", title: "Namba → eastern Kyoto", details: [
        "Take the Osaka Metro to Yodoyabashi, then the Keihan Railway to Gion-Shijo. Continue towards Kiyomizu-dera by local transport and on foot.",
        "Allow around 90 minutes or more door-to-door, depending on connections. Check the day's first trains before setting off.",
      ] },
      { time: "Early morning", title: "Kiyomizu-dera & Yasaka Shrine", details: [
        "Visit Kiyomizu-dera before the crowds, then follow the historic lanes towards Yasaka Shrine (roughly 20–30 minutes on foot).",
      ] },
      { time: "9:00 am–12:30 pm", title: "Kimono rental & photos", details: [
        "Head to Okamoto Kimono (Kiyomizu branch) for your fitting.",
        "Explore Hanamikoji Street and the picturesque Shirakawa area for photos.",
      ] },
      { time: "Lunch", title: "A break in Gion", details: [
        "Consider Ramen Nishiki or Menya Inoichi; GOKAGO is a possible sweet stop.",
      ] },
      { time: "By 2:30 pm", title: "Return the kimono", details: [
        "Allow time to walk back to the rental branch. Confirm the actual return deadline with the shop.",
      ] },
      { time: "Afternoon", title: "Nishiki Market & the Kamo River", details: [
        "Browse Nishiki Market and finish with a stroll by the Kamo River.",
      ] },
      { time: "3:50 pm onwards", title: "Return to Osaka", details: [
        "Take the train back towards Namba and have dinner around Dotonbori.",
        "Some routes via Kintetsu require a transfer; check the full journey before buying a ticket.",
      ] },
    ],
  },
  {
    number: "03",
    title: "Osaka Castle, Tenjinbashisuji & home",
    description: "Coffee, a castle visit, a final shopping street and the airport.",
    stops: [
      { time: "7:15–8:30 am", title: "Coffee near Osaka Castle", details: [
        "Take the metro from Namba towards Tanimachi 4-chome and walk to SOT COFFEE ROASTER.",
      ] },
      { time: "8:30–11:30 am", title: "Osaka Castle Park", details: [
        "Explore the park and castle museum. The park is large, so allow extra walking time.",
        "If you want a boat ride, check availability and book a slot early.",
      ] },
      { time: "11:30 am–3:00 pm", title: "Tenjinbashisuji Shopping Street", details: [
        "Take the metro towards Ogimachi and explore the shopping arcade. Stop for lunch and local snacks.",
      ] },
      { time: "Around 3:00 pm", title: "Collect your luggage", details: [
        "Travel back to Namba, collect your bags from the hotel and make your way to Nankai Namba Station.",
        "Keep a buffer for the station transfer and the airport journey.",
      ] },
      { time: "Evening", title: "Kansai Airport → Kaohsiung", details: [
        "Nankai Railway from Namba to KIX takes around 45–55 minutes depending on service.",
        "Flight: 8:20–10:55 pm (local times). Check your airline's baggage drop and boarding deadlines.",
      ] },
    ],
  },
];

const packing = [
  { title: "Essentials", items: [
    ["passport", "Passport"], ["wallet", "Wallet"], ["yen", "Japanese yen"],
    ["credit-card", "Credit card"], ["transit-card", "ICOCA / Suica · check the balance"],
    ["phone", "Phone · battery above 50%"], ["charger", "Power bank & charging cable"],
    ["mobile-data", "eSIM / mobile data working"], ["hotel-key", "Hotel key card"],
    ["rubbish-bag", "Small rubbish bag"], ["bathroom", "Use the bathroom"],
    ["shopping-bag", "Reusable shopping bag"], ["tax-free", "Tax-free shopping QR code, if needed"],
  ] },
  { title: "Weather check", items: [
    ["cold-weather", "Check the temperature forecast"],
    ["scarf-gloves", "Check whether a scarf & gloves are needed"],
    ["extra-layer", "Check whether an extra layer is needed"],
    ["sunny-weather", "Check the UV index & chance of rain"],
    ["sunscreen", "Check whether sunscreen is needed"],
    ["sunglasses", "Check whether sunglasses are needed"],
  ] },
  { title: "Before closing the door", items: [
    ["appliances", "Switch off room appliances"],
    ["windows", "Close the windows"],
    ["valuables", "Secure valuables or put them in the safe"],
  ] },
];

const phrases = [
  ["すみません、駅はどこですか。", "Sumimasen, eki wa doko desu ka?", "Excuse me, where is the station?"],
  ["この電車は大阪に行きますか。", "Kono densha wa Osaka ni ikimasu ka?", "Does this train go to Osaka?"],
  ["切符を二枚ください。", "Kippu o nimai kudasai.", "Two tickets, please."],
  ["おすすめの料理は何ですか。", "Osusume no ryori wa nan desu ka?", "What dish would you recommend?"],
  ["お会計をお願いします。", "Okaikei o onegaishimasu.", "Could we have the bill, please?"],
  ["クレジットカードは使えますか。", "Kurejitto kaado wa tsukaemasu ka?", "Do you take credit cards?"],
  ["写真を撮ってもらえますか。", "Shashin o totte moraemasu ka?", "Could you take a photo for us?"],
  ["トイレはどこですか。", "Toire wa doko desu ka?", "Where is the toilet?"],
  ["これはいくらですか。", "Kore wa ikura desu ka?", "How much is this?"],
  ["いらっしゃいませ。", "Irasshaimase.", "Welcome! (Something shop staff may say.)"],
  ["こんにちは。", "Konnichiwa.", "Hello / good afternoon."],
  ["こんばんは。", "Konbanwa.", "Good evening."],
  ["何名様ですか？", "Nanmei-sama desu ka?", "How many people? (Staff asking.)"],
  ["こちらでお召し上がりですか？", "Kochira de omeshiagari desu ka?", "Is that for here? (Staff asking.)"],
  ["一人です。", "Hitori desu.", "Just one."],
  ["二人です。", "Futari desu.", "Two people."],
  ["五人です。", "Gonin desu.", "Five people."],
  ["はい。", "Hai.", "Yes."],
  ["いいえ。", "Iie.", "No."],
  ["お願いします。", "Onegaishimasu.", "Please / I'd appreciate that."],
  ["ありがとうございます。", "Arigatou gozaimasu.", "Thank you very much."],
  ["こんにちは、二人です。お願いします。", "Konnichiwa, futari desu. Onegaishimasu.", "Hello, a table for two, please."],
  ["道に迷いました、助けてください。", "Michi ni mayoimashita, tasukete kudasai.", "I'm lost. Could you help me?"],
];

export default function JapanTripEn() {
  useTripMetadata("en", "Three Days in Kansai | Osaka & Kyoto", "A practical three-day Osaka and Kyoto itinerary, Japanese phrases, an interactive checklist, hotel details and an editable map CSV.");
  const [checked, setChecked] = useState(readChecklist);
  const [meetingTime, setMeetingTime] = useState(readMeetingTime);
  const { copiedField, copy } = useCopyFeedback();

  useEffect(() => { saveChecklist(checked); }, [checked]);
  useEffect(() => { writeStorage(MEETING_TIME_KEY, meetingTime); }, [meetingTime]);

  const allItems = packing.flatMap((group) => group.items);
  const done = allItems.filter(([id]) => checked[id] === true).length;
  const percent = Math.round((done / allItems.length) * 100);

  const share = async () => {
    const remaining = allItems.filter(([id]) => !checked[id]).map(([, label]) => label);
    const message = "Ready-to-go checklist: " + done + "/" + allItems.length + " done (" + percent + "%). " +
      (remaining.length ? "Still to check: " + remaining.join(", ") : "Everything checked!") +
      ". Meet-up time: " + (meetingTime || "not set") + ".";
    await shareText(message, "Copy your checklist:");
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

  const hotelDetail = (label, value) => (
    <li key={label}>
      <span className={styles.infoLabel}>{label}</span>
      <span className={styles.infoActions}>
        <span className={styles.infoValue}>{value}</span>
        <button
          type="button"
          className={styles.copyButton}
          onClick={() => copy(label, value, "Copy " + label + ":")}
          title={copiedField === label ? "Copied!" : "Copy " + label}
          aria-label={"Copy " + label.toLowerCase()}
        >{copiedField === label ? "✓" : "⧉"}</button>
      </span>
    </li>
  );

  return (
    <div className={styles.mapPage} lang="en">
      <JapanTripHero lang="en" />
      <section id="itinerary" className={styles.itinerary}>
        <span className={styles.sectionKicker}>01 / ITINERARY</span>
        <h2 className={styles.sectionTitle}>Day-by-day itinerary</h2>
        <p className={styles.sectionIntro}>Open each day for transport tips, places to visit and food stops.</p>
        {days.map((day) => (
          <details className={styles.day} key={day.number}>
            <summary className={styles.dayTitle}>
              <span><small className={styles.dayNumber}>DAY {day.number}</small>{day.title}<span className={styles.dayDescription}>{day.description}</span></span>
            </summary>
            <div className={styles.timeline}>
              {day.stops.map((stop) => (
                <div className={styles.timelineItem} key={stop.title}>
                  <span className={styles.timelineTime}>{stop.time}</span>
                  <div>
                    <h3 className={styles.blockTitle}>{stop.title}</h3>
                    <ul className={styles.list}>{stop.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </section>

      <div className={styles.extras}>
        <details id="checklist" className={styles.card} open>
          <summary className={styles.cardSummary}>Before you leave · Packing & room check</summary>
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
                <div className={styles.preflightProgressBar} role="progressbar" aria-label="Checklist progress" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                  <span className={styles.preflightProgressFill} style={{ width: percent + "%" }} />
                </div>
                <label className={styles.preflightTime}><span>Meet-up time (optional)</span><input type="time" value={meetingTime} onChange={(event) => setMeetingTime(event.target.value)} /></label>
              </div>
              {packing.map((group, index) => (
                <div className={styles.preflightSection} key={group.title}>
                  <div className={styles.preflightHeader}><span className={styles.preflightIndex}>{index + 1}</span><span className={styles.preflightTitle}>{group.title}</span></div>
                  <div className={styles.preflightList}>
                    {group.items.map(([id, label]) => (
                      <div className={styles.preflightRow} key={id}>
                        <label className={styles.checkItem}>
                          <input type="checkbox" checked={checked[id] === true} onChange={(event) => setChecked((previous) => ({ ...previous, [id]: event.target.checked }))} />
                          <span>{label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
        <details id="phrases" className={styles.card}>
          <summary className={styles.cardSummary}>Useful Japanese · Tap to hear each phrase</summary>
          <div className={styles.cardBody}>
            <p className={styles.helperText}>Some expressions below are things you may hear from local staff.</p>
            <ol className={styles.sentenceList}>
              {phrases.map(([japanese, romaji, english]) => (
                <li key={japanese}>
                  <span className={styles.jp} lang="ja">{japanese}</span>
                  <span className={styles.romaji}>{romaji}</span>
                  <span className={styles.zh}>{english}</span>
                  <button type="button" className={styles.speakButton} onClick={() => speak(japanese)} aria-label={"Play Japanese pronunciation: " + english}>▶ Listen</button>
                </li>
              ))}
            </ol>
          </div>
        </details>
        <details className={styles.card}>
          <summary className={styles.cardSummary}>Hotel details · Tap to copy</summary>
          <div className={styles.cardBody}>
            <ul className={styles.infoList}>
              {hotelDetail("Hotel", "GRIDS PREMIUM HOTEL OSAKA NAMBA")}
              {hotelDetail("Address", "1-7-7 Nambanaka, Naniwa Ward, Osaka")}
              {hotelDetail("Phone", "+81 6-6635-0810")}
              {hotelDetail("Check-in", "3:00 pm")}
              {hotelDetail("Check-out", "11:00 am")}
            </ul>
          </div>
        </details>
        <details className={styles.card}>
          <summary className={styles.cardSummary}>Emergency numbers in Japan</summary>
          <div className={styles.cardBody}>
            <ul className={styles.infoList}>
              <li><span className={styles.infoLabel}>Police</span><a className={styles.infoValue} href="tel:110">110</a></li>
              <li><span className={styles.infoLabel}>Fire / ambulance</span><a className={styles.infoValue} href="tel:119">119</a></li>
              <li><span className={styles.infoLabel}>Coast Guard</span><a className={styles.infoValue} href="tel:118">118</a></li>
              <li><span className={styles.infoLabel}>Japan Visitor Hotline</span><a className={styles.infoValue} href="tel:+815038162787">+81 50-3816-2787</a></li>
            </ul>
          </div>
        </details>
      </div>
      <JapanTripMap lang="en" />
    </div>
  );
}
