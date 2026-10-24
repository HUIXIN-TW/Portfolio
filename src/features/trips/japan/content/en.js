// Native English copy with itinerary IDs aligned to content/zh.js.
const days = [
  {
    "number": "01",
    "title": "Osaka · Namba, Dotonbori & Shinsekai",
    "description": "Arrive in Osaka, explore Namba and Shinsaibashi, then spend the evening in Shinsekai.",
    "stops": [
      {
        "id": "day-1-arrival",
        "time": "07:05–10:55",
        "title": "Arrive at Kansai International Airport",
        "details": [
          "Fly from Kaohsiung (KHH) to Kansai International Airport (KIX). Allow time for immigration and baggage collection."
        ]
      },
      {
        "id": "day-1-tickets",
        "time": "10:55–11:30",
        "title": "Train tickets & ICOCA",
        "details": [
          "Buy a Nankai Railway ticket (credit card planned) and top up your ICOCA card by about ¥3,500.",
          "Walk from arrivals to the Nankai ticket gates (around 5–10 minutes)."
        ]
      },
      {
        "id": "day-1-nankai",
        "time": "11:30–12:20",
        "title": "Nankai Railway to Namba",
        "details": [
          "Kansai Airport Station → Namba Station (approximately 45–55 minutes)."
        ]
      },
      {
        "id": "day-1-hotel-walk",
        "time": "12:20–12:35",
        "title": "Walk to the hotel",
        "details": [
          "Allow 10–15 minutes on foot from Namba Station."
        ]
      },
      {
        "id": "day-1-luggage",
        "time": "12:35–12:50",
        "title": "Leave your luggage",
        "details": [
          "Check-in begins at 15:00. Ask the hotel whether you can leave your bags beforehand."
        ]
      },
      {
        "id": "day-1-lunch",
        "time": "Lunch",
        "title": "Lunch options around Namba",
        "details": [
          "Within walking distance: KITAN HIBIKI (around 10 minutes) or Wagyu Sukiyaki Okuwo (around 11 minutes).",
          "Further away: Naniwa Omuraisu (10-minute ride plus a 23-minute walk) or Usamitei Matsubaya (13-minute ride plus a 26-minute walk)."
        ]
      },
      {
        "id": "day-1-shopping",
        "time": "After lunch–16:00",
        "title": "Shinsaibashi & Dotonbori",
        "details": [
          "Walk from the hotel to Shinsaibashi-suji Shopping Street (around 10–20 minutes).",
          "Continue to Dotonbori (5–10 minutes), including the nearby Glico running-man sign."
        ]
      },
      {
        "id": "day-1-tsutenkaku-transfer",
        "time": "16:20–16:50",
        "title": "Head to Tsutenkaku",
        "details": [
          "Walk to Namba Station (5–15 minutes), then take the Osaka Metro to Dobutsuen-mae (15–20 minutes).",
          "Walk another 8–12 minutes to Tsutenkaku Tower."
        ]
      },
      {
        "id": "day-1-shinsekai",
        "time": "17:00–18:30",
        "title": "Tsutenkaku & Shinsekai",
        "details": [
          "Visit the observation deck, then explore the streets of Shinsekai."
        ]
      },
      {
        "id": "day-1-dinner",
        "time": "19:00",
        "title": "Dinner & return to Namba",
        "details": [
          "Try Osaka-style kushikatsu in Shinsekai, or head back to Namba for dinner.",
          "For the return journey, allow around 15–20 minutes by metro to Namba, then a 10–15-minute walk to the hotel."
        ]
      }
    ]
  },
  {
    "number": "02",
    "title": "Kyoto · Kiyomizu-dera, Gion & Nishiki Market",
    "description": "A morning at Kiyomizu-dera, kimono photos, and an afternoon around central Kyoto.",
    "stops": [
      {
        "id": "day-2-transfer",
        "time": "Depart 05:30",
        "title": "Osaka → Kyoto",
        "details": [
          "Walk to Namba Station (10–15 minutes), then take the Midosuji Line to Yodoyabashi (8–10 minutes).",
          "Transfer on foot (3–6 minutes) to the Keihan Railway for Gion-Shijo (45–55 minutes).",
          "From Gion-Shijo, walk to the bus stop (2–5 minutes), take a Kyoto city bus towards Kiyomizu-dera (10–20 minutes), then walk to the entrance (8–15 minutes).",
          "Allow at least 90 minutes for the journey. Check first-train times and connections before setting out."
        ]
      },
      {
        "id": "day-2-kiyomizu",
        "time": "On arrival–09:00",
        "title": "Kiyomizu-dera & Yasaka Shrine",
        "details": [
          "Visit Kiyomizu-dera, then walk through the surrounding streets towards Yasaka Shrine (around 20–30 minutes)."
        ]
      },
      {
        "id": "day-2-kimono",
        "time": "09:00",
        "title": "Kimono rental at Okamoto",
        "details": [
          "Head to the Kiyomizu branch to change into your kimono. Follow your booking time."
        ]
      },
      {
        "id": "day-2-photos",
        "time": "11:00–12:30",
        "title": "Gion photo walk",
        "details": [
          "Explore Hanamikoji Street and the Shirakawa area, allowing roughly 5–15 minutes of walking around each stop."
        ]
      },
      {
        "id": "day-2-lunch",
        "time": "Lunch",
        "title": "Lunch & a sweet stop",
        "details": [
          "Choose Ramen Nishiki (about 15 minutes by bus plus a 3–8-minute walk) or Menya Inoichi (around 5 minutes on foot).",
          "For dessert, consider GOKAGO (around a 5–15-minute walk, depending on where you are)."
        ]
      },
      {
        "id": "day-2-return-kimono",
        "time": "By 14:30",
        "title": "Return your kimono",
        "details": [
          "Walk back to the Okamoto rental shop (approximately 10–25 minutes). Confirm the return deadline with the shop."
        ]
      },
      {
        "id": "day-2-market",
        "time": "Afternoon",
        "title": "Nishiki Market & the Kamo River",
        "details": [
          "Walk from Gion or Kawaramachi to Nishiki Market (15–25 minutes), then continue to the Kamo River (10–20 minutes)."
        ]
      },
      {
        "id": "day-2-back-to-osaka",
        "time": "15:50–18:00",
        "title": "Return to Osaka",
        "details": [
          "Walk to Shijo Station (5–8 minutes), take the Karasuma Line to Kyoto Station (3–5 minutes), then allow 5–10 minutes to transfer to Kintetsu.",
          "Travel towards Osaka-Namba. Some services require a transfer, so check the route and journey time.",
          "Walk from Osaka-Namba Station to the hotel (approximately 10–15 minutes)."
        ]
      },
      {
        "id": "day-2-dinner",
        "time": "18:00",
        "title": "Dinner around Dotonbori",
        "details": [
          "Choose somewhere around Dotonbori or Kuromon Market, depending on where you end up (around 10–20 minutes on foot)."
        ]
      }
    ]
  },
  {
    "number": "03",
    "title": "Osaka Castle, Tenjinbashisuji & home",
    "description": "Morning coffee, Osaka Castle, a final shopping stop and the flight home.",
    "stops": [
      {
        "id": "day-3-coffee",
        "time": "07:15–08:30",
        "title": "Coffee at SOT COFFEE ROASTER",
        "details": [
          "Walk from the hotel to Namba Station (10–15 minutes), then take the Osaka Metro towards Tanimachi 4-chome (20–30 minutes, including transfers).",
          "Walk another 10–20 minutes to SOT COFFEE ROASTER."
        ]
      },
      {
        "id": "day-3-castle",
        "time": "08:30–11:30",
        "title": "Osaka Castle Park",
        "details": [
          "Walk to Osaka Castle Park (around 20 minutes) and allow roughly two hours for the castle.",
          "If you'd like a boat ride, check the queue or booking arrangements around 09:30. Allow another 30–60 minutes to walk around the grounds."
        ]
      },
      {
        "id": "day-3-shopping",
        "time": "11:30–15:00",
        "title": "Tenjinbashisuji Shopping Street",
        "details": [
          "Take the Osaka Metro to Ogimachi Station (around 35 minutes), then walk 3–8 minutes to the shopping street.",
          "Stop for lunch, local snacks and last-minute shopping."
        ]
      },
      {
        "id": "day-3-luggage",
        "time": "15:00",
        "title": "Collect your luggage",
        "details": [
          "Take the metro from Ogimachi back to Namba (25–35 minutes), then walk 10–15 minutes to the hotel."
        ]
      },
      {
        "id": "day-3-airport",
        "time": "Around 15:40",
        "title": "Head to Kansai Airport",
        "details": [
          "Walk to Nankai Namba Station (5–15 minutes) and take the Nankai Railway to KIX (45–55 minutes).",
          "Allow time for tickets, baggage drop and airport security."
        ]
      },
      {
        "id": "day-3-flight",
        "time": "20:20–22:55",
        "title": "Kansai Airport → Kaohsiung",
        "details": [
          "Return flight from KIX to Kaohsiung (local times)."
        ]
      }
    ]
  }
];

const content = {
  "locale": "en",
  "meta": {
    "title": "Three Days in Osaka & Kyoto | Kansai Travel Guide",
    "description": "Three days in Osaka and Kyoto: transport, food stops, practical Japanese, a packing checklist and the complete trip map."
  },
  "hero": {
    "eyebrow": "OSAKA · KYOTO · 3 DAYS",
    "title": "Three Days in Osaka & Kyoto",
    "description": "Your day-by-day route, places to eat and practical travel details—all in one guide.",
    "note": "Times and journey lengths are estimates. Check services, opening hours and bookings before travelling."
  },
  "navigation": {
    "label": "On this page",
    "language": "Choose page language",
    "itinerary": "Itinerary",
    "checklist": "Before you go",
    "phrases": "Useful Japanese",
    "reference": "Travel info",
    "map": "Places map"
  },
  "headings": {
    "reference": "Travel essentials",
    "referenceDescription": "Hotel address, check-in details and emergency contacts in Japan.",
    "itinerary": "Day-by-day itinerary",
    "itineraryDescription": "Expand each day for transport, sights and food options.",
    "checklist": "Before you leave",
    "phrases": "Useful Japanese phrases",
    "hotel": "Hotel details · Tap to copy",
    "emergency": "Emergency contacts in Japan"
  },
  "checklist": {
    "ready": "BEFORE YOU GO",
    "reset": "Reset",
    "share": "Share",
    "meetingTime": "Meet-up time (optional)",
    "unchecked": "Still to check",
    "none": "All done",
    "notSet": "not set",
    "summary": "Leaving-the-hotel checklist",
    "progress": "Checklist progress",
    "sectionTitles": {
      "essentials": "Everyday essentials",
      "weather": "Weather & clothing",
      "room": "Before leaving the room"
    }
  },
  "actions": {
    "copy": "Copy",
    "copied": "Copied!",
    "copyPrompt": "Copy the following details:",
    "sharePrompt": "Copy your checklist:",
    "listen": "▶ Listen",
    "phrasesHelp": "Tap Listen to hear each phrase in Japanese.",
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
    "title": "Osaka & Kyoto places map",
    "description": "All {places} places from the original map, grouped into {layers} categories. Search, browse or download the full KML.",
    "open": "View original map",
    "download": "Download all places (KML)",
    "directoryTitle": "Saved places ({places})",
    "directoryIntro": "Browse by category or name, then open a place in Google Maps.",
    "searchLabel": "Search saved places",
    "searchPlaceholder": "Search restaurants, cafes or sights…",
    "filterLabel": "Filter places by category",
    "allLayers": "All categories",
    "noResults": "No matching places. Try a different search.",
    "openPlace": "Open map",
    "instructions": "Create your own editable map",
    "steps": "Download the KML, create a new map in Google My Maps and import it. The file contains all {places} places and {layers} categories, ready for you to edit.",
    "caveat": "The embedded map's labels do not change with the page language. The KML keeps places and categories, but some custom icons are not included.",
    "iframeTitle": "Original Osaka and Kyoto trip map"
  },
  "checklistItems": {
    "passport": "Passport",
    "wallet": "Wallet",
    "yen": "Japanese yen",
    "credit-card": "Credit card",
    "transit-card": "ICOCA / Suica · check balance",
    "phone": "Phone charged to at least 50%",
    "charger": "Power bank & charging cable",
    "mobile-data": "Check eSIM / mobile data",
    "hotel-key": "Hotel key card",
    "rubbish-bag": "Small rubbish bag",
    "bathroom": "Use the bathroom",
    "shopping-bag": "Reusable shopping bag",
    "tax-free": "Tax-free shopping QR code, if needed",
    "cold-weather": "Check the weather forecast",
    "scarf-gloves": "Scarf and gloves, if needed",
    "extra-layer": "Extra warm layer, if needed",
    "sunny-weather": "Check UV levels and chance of rain",
    "sunscreen": "Sunscreen, if needed",
    "sunglasses": "Sunglasses, if needed",
    "appliances": "Switch off appliances (heater, hairdryer)",
    "windows": "Close the windows",
    "valuables": "Secure valuables"
  },
  "phraseTranslations": {
    "phrase-01": "Excuse me, where is the station?",
    "phrase-02": "Does this train go to Osaka?",
    "phrase-03": "Two tickets, please.",
    "phrase-04": "What would you recommend?",
    "phrase-05": "Could we have the bill, please?",
    "phrase-06": "Do you take credit cards?",
    "phrase-07": "Could you take a photo for us?",
    "phrase-08": "Where is the toilet?",
    "phrase-09": "How much is this?",
    "phrase-10": "Welcome! (What shop staff say.)",
    "phrase-11": "Hello / good afternoon.",
    "phrase-12": "Good evening.",
    "phrase-13": "How many people? (Asked by staff.)",
    "phrase-14": "Eating here? (Asked by staff.)",
    "phrase-15": "One person.",
    "phrase-16": "Two people.",
    "phrase-17": "Five people.",
    "phrase-18": "Yes.",
    "phrase-19": "No / no, thank you.",
    "phrase-20": "Please / thank you for your help.",
    "phrase-21": "Thank you very much.",
    "phrase-22": "Hello, a table for two, please.",
    "phrase-23": "I'm lost. Could you help me?"
  }
};

export default { ...content, days };
