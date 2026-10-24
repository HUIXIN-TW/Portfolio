// Localized content only. Layout and behavior live in JapanTripPage.jsx.
const days = [
  {
    number: "01",
    title: "Osaka · Namba, Dotonbori & Shinsekai",
    description: "Land in Kansai, settle into Namba and discover Osaka after dark.",
    stops: [
      { time: "07:05–10:55", title: "Fly into Kansai International Airport", details: [
        "Kaohsiung (KHH) → Kansai International Airport (KIX). Allow time for immigration and baggage collection.",
      ] },
      { time: "10:55–12:35", title: "Airport → Namba → hotel", details: [
        "Buy a Nankai Railway ticket and top up an ICOCA card (suggested starting balance: ¥3,500).",
        "Take the Nankai Railway to Namba (about 45–55 minutes), then walk 10–15 minutes to the hotel and leave your luggage.",
        "Hotel check-in starts at 15:00; luggage storage may be possible before then.",
      ] },
      { time: "Lunch", title: "Eat around Namba", details: [
        "Nearby choices include KITAN HIBIKI and Wagyu Sukiyaki Okuwo. Other options: Naiwa Omeriasu or Usamitei Matsubaya.",
      ] },
      { time: "Afternoon", title: "Shinsaibashi & Dotonbori", details: [
        "Walk through Shinsaibashi-suji Shopping Street, browse Dotonbori and see the Glico running-man sign.",
        "Most of these sights are within a short walk of one another.",
      ] },
      { time: "16:20–18:30", title: "Tsutenkaku Tower & Shinsekai", details: [
        "Take the Osaka Metro from Namba to Dobutsuen-mae, then walk roughly 10 minutes to Tsutenkaku.",
        "Explore the tower area and the retro streets of Shinsekai.",
      ] },
      { time: "19:00", title: "Dinner in Shinsekai", details: [
        "Try kushikatsu (Osaka-style fried skewers), or return to Namba for dinner.",
      ] },
    ],
  },
  {
    number: "02",
    title: "Kyoto · Kiyomizu-dera, Gion & Nishiki Market",
    description: "An early start, traditional streets and a day exploring eastern Kyoto.",
    stops: [
      { time: "From 05:30", title: "Namba → eastern Kyoto", details: [
        "Take the Osaka Metro to Yodoyabashi, then the Keihan Railway to Gion-Shijo. Continue towards Kiyomizu-dera by local transport and on foot.",
        "Allow around 90 minutes or more door-to-door, depending on connections. Check the day's first trains before setting off.",
      ] },
      { time: "Early morning", title: "Kiyomizu-dera & Yasaka Shrine", details: [
        "Visit Kiyomizu-dera before the crowds, then follow the historic lanes towards Yasaka Shrine (roughly 20–30 minutes on foot).",
      ] },
      { time: "09:00–12:30", title: "Kimono rental & photos", details: [
        "Head to Okamoto Kimono (Kiyomizu branch) for your fitting.",
        "Explore Hanamikoji Street and the picturesque Shirakawa area for photos.",
      ] },
      { time: "Lunch", title: "A break in Gion", details: [
        "Consider Ramen Nishiki or Menya Inoichi; GOKAGO is a possible sweet stop.",
      ] },
      { time: "By 14:30", title: "Return the kimono", details: [
        "Allow time to walk back to the rental branch. Confirm the actual return deadline with the shop.",
      ] },
      { time: "Afternoon", title: "Nishiki Market & the Kamo River", details: [
        "Browse Nishiki Market and finish with a stroll by the Kamo River.",
      ] },
      { time: "From 15:50", title: "Return to Osaka", details: [
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
      { time: "07:15–08:30", title: "Coffee near Osaka Castle", details: [
        "Take the metro from Namba towards Tanimachi 4-chome and walk to SOT COFFEE ROASTER.",
      ] },
      { time: "08:30–11:30", title: "Osaka Castle Park", details: [
        "Explore the park and castle museum. The park is large, so allow extra walking time.",
        "If you want a boat ride, check availability and book a slot early.",
      ] },
      { time: "11:30–15:00", title: "Tenjinbashisuji Shopping Street", details: [
        "Take the metro towards Ogimachi and explore the shopping arcade. Stop for lunch and local snacks.",
      ] },
      { time: "Around 15:00", title: "Collect your luggage", details: [
        "Travel back to Namba, collect your bags from the hotel and make your way to Nankai Namba Station.",
        "Keep a buffer for the station transfer and the airport journey.",
      ] },
      { time: "20:20–22:55", title: "Kansai Airport → Kaohsiung", details: [
        "Nankai Railway from Namba to KIX takes around 45–55 minutes depending on service.",
        "Flight: 20:20–22:55 (local times). Check your airline's baggage drop and boarding deadlines.",
      ] },
    ],
  },
];

const content = {
  "locale": "en",
  "meta": {
    "title": "Three Days in Kansai | Osaka & Kyoto",
    "description": "A practical three-day Osaka and Kyoto itinerary, Japanese phrases, an interactive checklist, hotel details and an editable map CSV."
  },
  "hero": {
    "eyebrow": "OSAKA · KYOTO · 3 DAYS",
    "title": "A long weekend in Kansai",
    "description": "Three days of Osaka neighbourhoods, Kyoto landmarks, useful Japanese phrases and everything you need before heading out.",
    "note": "Travel times are estimates. Recheck transport, opening hours and bookings before you go."
  },
  "navigation": {
    "label": "On this page",
    "language": "Choose page language",
    "itinerary": "Day-by-day plan",
    "checklist": "Packing checklist",
    "phrases": "Japanese phrases",
    "reference": "Reference",
    "map": "Trip map"
  },
  "headings": {
    "reference": "Travel reference",
    "referenceDescription": "Hotel details and essential emergency contacts, together in one place.",
    "itinerary": "Day-by-day itinerary",
    "itineraryDescription": "Open each day for transport tips, places to visit and food stops.",
    "checklist": "Before you leave · Packing & room check",
    "phrases": "Useful Japanese · Tap to hear each phrase",
    "hotel": "Hotel details · Tap to copy",
    "emergency": "Emergency numbers in Japan"
  },
  "checklist": {
    "ready": "READY TO GO?",
    "reset": "Reset",
    "share": "Share",
    "meetingTime": "Meet-up time (optional)",
    "unchecked": "Still to check",
    "none": "Everything checked!",
    "notSet": "not set",
    "summary": "Ready-to-go checklist",
    "progress": "Checklist progress",
    "sectionTitles": [
      "Essentials",
      "Weather check",
      "Before closing the door"
    ]
  },
  "actions": {
    "copy": "Copy",
    "copied": "Copied!",
    "copyPrompt": "Copy the following details:",
    "sharePrompt": "Copy your checklist:",
    "listen": "▶ Listen",
    "phrasesHelp": "Some expressions below are things you may hear from local staff.",
    "phraseCountUnit": "phrases"
  },
  "hotel": {
    "labels": {
      "name": "Hotel",
      "address": "Address",
      "phone": "Phone",
      "checkin": "Check-in",
      "checkout": "Check-out"
    }
  },
  "emergency": {
    "police": "Police",
    "fire": "Fire / ambulance",
    "coast": "Coast Guard",
    "hotline": "Japan Visitor Hotline"
  },
  "map": {
    "title": "Explore the trip map",
    "description": "All 41 places from the original Osaka and Kyoto map, organised into eight categories. Browse the source map or find places below using English labels.",
    "open": "View original map",
    "download": "Download all places (KML)",
    "directoryTitle": "All 41 saved places",
    "directoryIntro": "Filter by category, search a place, or open its exact coordinates in Google Maps.",
    "searchLabel": "Search saved places",
    "searchPlaceholder": "Search cafes, restaurants, attractions…",
    "filterLabel": "Filter places by category",
    "allLayers": "All categories",
    "noResults": "No matching places. Try another search or category.",
    "openPlace": "Directions",
    "instructions": "Make your own editable Google My Maps copy",
    "steps": "Download the full English KML above, open Google My Maps, create a new map and import the file. It includes all 41 locations in the original eight layers and can be edited in your own Google account.",
    "caveat": "The original embedded map may display Chinese names. The searchable list and English KML use English place labels. The KML preserves places, coordinates and layers, but not all custom KMZ icons.",
    "iframeTitle": "Original Osaka and Kyoto trip map"
  },
  "checklistItems": {
    "passport": "Passport",
    "wallet": "Wallet",
    "yen": "Japanese yen",
    "credit-card": "Credit card",
    "transit-card": "ICOCA / Suica · check the balance",
    "phone": "Phone · battery above 50%",
    "charger": "Power bank & charging cable",
    "mobile-data": "eSIM / mobile data working",
    "hotel-key": "Hotel key card",
    "rubbish-bag": "Small rubbish bag",
    "bathroom": "Use the bathroom",
    "shopping-bag": "Reusable shopping bag",
    "tax-free": "Tax-free shopping QR code, if needed",
    "cold-weather": "Check the temperature forecast",
    "scarf-gloves": "Check whether a scarf & gloves are needed",
    "extra-layer": "Check whether an extra layer is needed",
    "sunny-weather": "Check the UV index & chance of rain",
    "sunscreen": "Check whether sunscreen is needed",
    "sunglasses": "Check whether sunglasses are needed",
    "appliances": "Switch off room appliances",
    "windows": "Close the windows",
    "valuables": "Secure valuables or put them in the safe"
  },
  "phraseTranslations": {
    "phrase-01": "Excuse me, where is the station?",
    "phrase-02": "Does this train go to Osaka?",
    "phrase-03": "Two tickets, please.",
    "phrase-04": "What dish would you recommend?",
    "phrase-05": "Could we have the bill, please?",
    "phrase-06": "Do you take credit cards?",
    "phrase-07": "Could you take a photo for us?",
    "phrase-08": "Where is the toilet?",
    "phrase-09": "How much is this?",
    "phrase-10": "Welcome! (Something shop staff may say.)",
    "phrase-11": "Hello / good afternoon.",
    "phrase-12": "Good evening.",
    "phrase-13": "How many people? (Staff asking.)",
    "phrase-14": "Is that for here? (Staff asking.)",
    "phrase-15": "Just one.",
    "phrase-16": "Two people.",
    "phrase-17": "Five people.",
    "phrase-18": "Yes.",
    "phrase-19": "No.",
    "phrase-20": "Please / I'd appreciate that.",
    "phrase-21": "Thank you very much.",
    "phrase-22": "Hello, a table for two, please.",
    "phrase-23": "I'm lost. Could you help me?"
  }
};

export default { ...content, days };
