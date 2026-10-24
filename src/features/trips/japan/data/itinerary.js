// Stable schedule shared by both language editions.
// Times remain planned display labels; localized prose lives in content/{zh,en}.js.
export const itineraryDays = [
  {
    "number": "01",
    "stops": [
      {
        "id": "day-1-arrival",
        "time": "07:05–10:55"
      },
      {
        "id": "day-1-tickets",
        "time": "10:55–11:30"
      },
      {
        "id": "day-1-nankai",
        "time": "11:30–12:20"
      },
      {
        "id": "day-1-hotel-walk",
        "time": "12:20–12:35"
      },
      {
        "id": "day-1-luggage",
        "time": "12:35–12:50"
      },
      {
        "id": "day-1-lunch",
        "time": {
          "zh": "午餐",
          "en": "Lunch"
        }
      },
      {
        "id": "day-1-shopping",
        "time": {
          "zh": "午餐後–16:00",
          "en": "After lunch–16:00"
        }
      },
      {
        "id": "day-1-tsutenkaku-transfer",
        "time": "16:20–16:50"
      },
      {
        "id": "day-1-shinsekai",
        "time": "17:00–18:30"
      },
      {
        "id": "day-1-dinner",
        "time": "19:00"
      }
    ]
  },
  {
    "number": "02",
    "stops": [
      {
        "id": "day-2-transfer",
        "time": {
          "zh": "05:30 出發",
          "en": "Depart 05:30"
        }
      },
      {
        "id": "day-2-kiyomizu",
        "time": {
          "zh": "抵達後–09:00",
          "en": "On arrival–09:00"
        }
      },
      {
        "id": "day-2-kimono",
        "time": "09:00"
      },
      {
        "id": "day-2-photos",
        "time": "11:00–12:30"
      },
      {
        "id": "day-2-lunch",
        "time": {
          "zh": "午餐",
          "en": "Lunch"
        }
      },
      {
        "id": "day-2-return-kimono",
        "time": {
          "zh": "14:30 前",
          "en": "By 14:30"
        }
      },
      {
        "id": "day-2-market",
        "time": {
          "zh": "下午",
          "en": "Afternoon"
        }
      },
      {
        "id": "day-2-back-to-osaka",
        "time": "15:50–18:00"
      },
      {
        "id": "day-2-dinner",
        "time": "18:00"
      }
    ]
  },
  {
    "number": "03",
    "stops": [
      {
        "id": "day-3-coffee",
        "time": "07:15–08:30"
      },
      {
        "id": "day-3-castle",
        "time": "08:30–11:30"
      },
      {
        "id": "day-3-shopping",
        "time": "11:30–15:00"
      },
      {
        "id": "day-3-luggage",
        "time": "15:00"
      },
      {
        "id": "day-3-airport",
        "time": {
          "zh": "約 15:40",
          "en": "Around 15:40"
        }
      },
      {
        "id": "day-3-flight",
        "time": "20:20–22:55"
      }
    ]
  }
];

export function localizeDays(dictionary, locale) {
  return itineraryDays.map((day) => {
    const translated = dictionary[day.number];
    if (!translated) throw new Error("Missing translated day " + day.number + " for " + locale);
    const expected = day.stops.map((stop) => stop.id);
    const actual = Object.keys(translated.stops);
    if (expected.length !== actual.length || expected.some((id) => !actual.includes(id))) {
      throw new Error("Inconsistent itinerary stops in " + locale + " day " + day.number);
    }
    return {
      number: day.number,
      title: translated.title,
      description: translated.description,
      stops: day.stops.map(({ id, time }) => ({
        id,
        time: typeof time === "string" ? time : time[locale],
        ...translated.stops[id],
      })),
    };
  });
}
