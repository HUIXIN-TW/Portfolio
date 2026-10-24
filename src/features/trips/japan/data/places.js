// Complete place inventory extracted from the owner's full My Maps KMZ export.
// All coordinates and original layer membership are preserved, with English display names
// provided only where the source mixes languages or requires clarification.
// This is an independent, static snapshot; it does not synchronize with Google My Maps.
export const mapLayers = [
  {
    "id": "osaka-coffee",
    "label": {
      "zh": "咖啡 · 難波",
      "en": "Coffee · Namba"
    },
    "type": "coffee"
  },
  {
    "id": "osaka-lunch",
    "label": {
      "zh": "午餐 · 難波",
      "en": "Lunch · Namba"
    },
    "type": "lunch"
  },
  {
    "id": "osaka-dinner",
    "label": {
      "zh": "晚餐 · 難波",
      "en": "Dinner · Namba"
    },
    "type": "dinner"
  },
  {
    "id": "kyoto-coffee",
    "label": {
      "zh": "咖啡 · 京都",
      "en": "Coffee · Kyoto"
    },
    "type": "coffee"
  },
  {
    "id": "kyoto-lunch",
    "label": {
      "zh": "午餐 · 京都",
      "en": "Lunch · Kyoto"
    },
    "type": "lunch"
  },
  {
    "id": "osaka-breakfast",
    "label": {
      "zh": "早餐 · 大阪城",
      "en": "Breakfast · Osaka Castle"
    },
    "type": "breakfast"
  },
  {
    "id": "landmarks",
    "label": {
      "zh": "景點與住宿",
      "en": "Sights & stay"
    },
    "type": "sights"
  },
  {
    "id": "future",
    "label": {
      "zh": "未來想去",
      "en": "Future ideas"
    },
    "type": "future"
  }
];

export const mapPlaces = [
  {
    "id": "osaka-coffee-01",
    "layer": "osaka-coffee",
    "name": "LiLo Coffee Roasters",
    "lat": 34.6740723,
    "lng": 135.4980336
  },
  {
    "id": "osaka-coffee-02",
    "layer": "osaka-coffee",
    "name": "Shinsaibashi Ujien honten",
    "en": "Shinsaibashi Ujien Main Store",
    "lat": 34.6731316,
    "lng": 135.5015213
  },
  {
    "id": "osaka-coffee-03",
    "layer": "osaka-coffee",
    "name": "wad",
    "lat": 34.6776883,
    "lng": 135.4989189
  },
  {
    "id": "osaka-coffee-04",
    "layer": "osaka-coffee",
    "name": "Streamer Coffee Company Shinsaibashi",
    "lat": 34.6736469,
    "lng": 135.4979898
  },
  {
    "id": "osaka-coffee-05",
    "layer": "osaka-coffee",
    "name": "aoma coffee",
    "lat": 34.6814346,
    "lng": 135.5024135
  },
  {
    "id": "osaka-lunch-01",
    "layer": "osaka-lunch",
    "name": "壽喜燒 - Wagyu Sukiyaki Okuwo",
    "en": "Wagyu Sukiyaki Okuwo",
    "lat": 34.668036,
    "lng": 135.5033968
  },
  {
    "id": "osaka-lunch-02",
    "layer": "osaka-lunch",
    "name": "Usamitei Matsubaya",
    "lat": 34.6779521,
    "lng": 135.5023727
  },
  {
    "id": "osaka-lunch-03",
    "layer": "osaka-lunch",
    "name": "Naniwa Omuraisu",
    "lat": 34.6765692,
    "lng": 135.5010843
  },
  {
    "id": "osaka-lunch-04",
    "layer": "osaka-lunch",
    "name": "Takoume Honten",
    "lat": 34.6688066,
    "lng": 135.5052767
  },
  {
    "id": "osaka-lunch-05",
    "layer": "osaka-lunch",
    "name": "㐂舌響 KITAN HIBIKI YAKINIKU&STEAK",
    "en": "Kitan Hibiki Yakiniku & Steak",
    "lat": 34.6680359,
    "lng": 135.502638,
    "note": "推午間套餐",
    "noteEn": "Lunch set recommended"
  },
  {
    "id": "osaka-dinner-01",
    "layer": "osaka-dinner",
    "name": "Nanichien",
    "lat": 34.6664459,
    "lng": 135.5020615
  },
  {
    "id": "osaka-dinner-02",
    "layer": "osaka-dinner",
    "name": "Itamae Yakiniku Ichigyu Shinsaibashi Main Store",
    "lat": 34.6776579,
    "lng": 135.5011832
  },
  {
    "id": "kyoto-coffee-01",
    "layer": "kyoto-coffee",
    "name": "GOKAGO",
    "lat": 34.9956509,
    "lng": 135.7818524
  },
  {
    "id": "kyoto-coffee-02",
    "layer": "kyoto-coffee",
    "name": "Okutan Kiyomizu",
    "lat": 34.9979753,
    "lng": 135.7807786
  },
  {
    "id": "kyoto-coffee-03",
    "layer": "kyoto-coffee",
    "name": "French cafe CHASEN 高台寺",
    "en": "French Café Chasen · Kodaiji",
    "lat": 34.9996062,
    "lng": 135.7807879
  },
  {
    "id": "kyoto-coffee-04",
    "layer": "kyoto-coffee",
    "name": "抹茶 - KUMONOCHA Nishiki Ichiba Store",
    "en": "Kumonocha · Nishiki Market",
    "lat": 35.0048595,
    "lng": 135.762974,
    "note": "抹茶",
    "noteEn": "Matcha"
  },
  {
    "id": "kyoto-lunch-01",
    "layer": "kyoto-lunch",
    "name": "Men-ya Inoichi",
    "lat": 35.0013284,
    "lng": 135.7669639
  },
  {
    "id": "kyoto-lunch-02",
    "layer": "kyoto-lunch",
    "name": "Pontocho Shabu-shabu Sukiyaki Kiraku",
    "lat": 35.0042039,
    "lng": 135.7710409
  },
  {
    "id": "kyoto-lunch-03",
    "layer": "kyoto-lunch",
    "name": "Ramen Nishiki",
    "lat": 35.0056945,
    "lng": 135.7763292
  },
  {
    "id": "kyoto-lunch-04",
    "layer": "kyoto-lunch",
    "name": "錦市場 - Nishiki Market",
    "en": "Nishiki Market",
    "lat": 35.0050258,
    "lng": 135.764723
  },
  {
    "id": "osaka-breakfast-01",
    "layer": "osaka-breakfast",
    "name": "SOT COFFEE ROASTER - Osaka Tenmabashi",
    "lat": 34.6858163,
    "lng": 135.5150125
  },
  {
    "id": "osaka-breakfast-02",
    "layer": "osaka-breakfast",
    "name": "Culmal （マフィンと焼き菓子の店 クルマル）",
    "en": "Culmal · Muffins & Baked Goods",
    "lat": 34.6858025,
    "lng": 135.5158509
  },
  {
    "id": "landmarks-01",
    "layer": "landmarks",
    "name": "GRIDS PREMIUM HOTEL OSAKA NAMBA",
    "lat": 34.6647549,
    "lng": 135.4987477
  },
  {
    "id": "landmarks-02",
    "layer": "landmarks",
    "name": "清水寺 - Kiyomizu-dera",
    "en": "Kiyomizu-dera Temple",
    "lat": 34.9946662,
    "lng": 135.784661,
    "note": "清水寺",
    "noteEn": "Kiyomizu-dera Temple"
  },
  {
    "id": "landmarks-03",
    "layer": "landmarks",
    "name": "大阪城公園 - Osaka Castle Park",
    "en": "Osaka Castle Park",
    "lat": 34.6864797,
    "lng": 135.5262114
  },
  {
    "id": "landmarks-04",
    "layer": "landmarks",
    "name": "八阪神社 - Yasaka Shrine",
    "en": "Yasaka Shrine",
    "lat": 35.0036559,
    "lng": 135.7785534,
    "note": "八阪神社",
    "noteEn": "Yasaka Shrine"
  },
  {
    "id": "landmarks-05",
    "layer": "landmarks",
    "name": "通天閣 - Tsutenkaku",
    "en": "Tsutenkaku Tower",
    "lat": 34.6524992,
    "lng": 135.5063058
  },
  {
    "id": "landmarks-06",
    "layer": "landmarks",
    "name": "大阪木津卸売市場 Osaka Kizu Market",
    "en": "Osaka Kizu Wholesale Market",
    "lat": 34.6573279,
    "lng": 135.5001719
  },
  {
    "id": "landmarks-07",
    "layer": "landmarks",
    "name": "黑門市場",
    "en": "Kuromon Ichiba Market",
    "lat": 34.6668559,
    "lng": 135.5060812
  },
  {
    "id": "landmarks-08",
    "layer": "landmarks",
    "name": "天神橋筋商店街 Tenjinbashisuji Shopping Street",
    "en": "Tenjinbashisuji Shopping Street",
    "lat": 34.7025505,
    "lng": 135.5115036,
    "note": "天神橋筋商店街Tenjinbashisuji Shopping Street - 大阪",
    "noteEn": "Tenjinbashisuji Shopping Street"
  },
  {
    "id": "landmarks-09",
    "layer": "landmarks",
    "name": "鴨川 - Kamo River",
    "en": "Kamo River",
    "lat": 35.0002575,
    "lng": 135.7696674
  },
  {
    "id": "landmarks-10",
    "layer": "landmarks",
    "name": "中之島 - Nakanoshima",
    "en": "Nakanoshima",
    "lat": 34.6917217,
    "lng": 135.4910214
  },
  {
    "id": "landmarks-11",
    "layer": "landmarks",
    "name": "難波八阪神社 - Namba Yasaka Jinja",
    "en": "Namba Yasaka Shrine",
    "lat": 34.6615592,
    "lng": 135.4967039
  },
  {
    "id": "landmarks-12",
    "layer": "landmarks",
    "name": "二年坂 - Ninenzaka",
    "en": "Ninenzaka",
    "lat": 34.9981744,
    "lng": 135.7808578
  },
  {
    "id": "landmarks-13",
    "layer": "landmarks",
    "name": "岡本和服清水店 - 2-chōme-237 Kiyomizu",
    "en": "Okamoto Kimono Rental · Kiyomizu",
    "lat": 34.996224,
    "lng": 135.7813769
  },
  {
    "id": "future-01",
    "layer": "future",
    "name": "Yakitori Ichimatsu",
    "lat": 34.695967,
    "lng": 135.497041
  },
  {
    "id": "future-02",
    "layer": "future",
    "name": "Onigiri Gorichan",
    "lat": 34.7071179,
    "lng": 135.5058786
  },
  {
    "id": "future-03",
    "layer": "future",
    "name": "Wagyu Ryotei Bungo Gion",
    "lat": 35.0058007,
    "lng": 135.7741863
  },
  {
    "id": "future-04",
    "layer": "future",
    "name": "Seiyosakan (Western Tea House)",
    "lat": 34.703166,
    "lng": 135.5115388
  },
  {
    "id": "future-05",
    "layer": "future",
    "name": "Paris-h",
    "lat": 34.6931849,
    "lng": 135.4925411
  },
  {
    "id": "future-06",
    "layer": "future",
    "name": "(THISIS)SHIZEN",
    "lat": 35.009357,
    "lng": 135.7599419
  }
];

export function localizePlace(place, locale) {
  return locale === "en" ? (place.en || place.name) : place.name;
}
export function localizeNote(place, locale) {
  return locale === "en" ? (place.noteEn || place.note || "") : (place.note || "");
}
