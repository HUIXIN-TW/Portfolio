// Localized Traditional Chinese copy. Times and ordering live in data/itinerary.js.
import { localizeDays } from "../data/itinerary.js";

const localizedDays = {
  "01": {
    "title": "大阪初印象 · 難波、心齋橋與新世界",
    "description": "從關西機場進大阪，逛心齋橋、道頓堀與新世界。",
    "stops": {
      "day-1-arrival": {
        "title": "抵達關西國際機場",
        "details": [
          "高雄（KHH）→ 關西國際機場（KIX）；預留入境及領取行李時間。"
        ]
      },
      "day-1-tickets": {
        "title": "購票與 ICOCA 儲值",
        "details": [
          "購買南海電鐵車票（預計使用信用卡），ICOCA 預計儲值 ¥3,500。",
          "從入境區步行至南海電鐵售票處／閘口（約 5–10 分）。"
        ]
      },
      "day-1-nankai": {
        "title": "搭乘南海電鐵前往難波",
        "details": [
          "關西機場站 → 難波站（約 45–55 分）。"
        ]
      },
      "day-1-hotel-walk": {
        "title": "步行前往飯店",
        "details": [
          "難波站 → 飯店（約 10–15 分）。"
        ]
      },
      "day-1-luggage": {
        "title": "寄放行李",
        "details": [
          "飯店 15:00 開始辦理入住；可先詢問是否能寄放行李。"
        ]
      },
      "day-1-lunch": {
        "title": "難波午餐（擇一）",
        "details": [
          "步行可達：㐂舌響 KITAN HIBIKI（約 10 分）、Wagyu Sukiyaki Okuwo（約 11 分）。",
          "需搭車：Naniwa Omuraisu（搭車約 10 分＋步行約 23 分）、Usamitei Matsubaya（搭車約 13 分＋步行約 26 分）。"
        ]
      },
      "day-1-shopping": {
        "title": "心齋橋與道頓堀",
        "details": [
          "飯店 → 心齋橋筋商店街（步行約 10–20 分）。",
          "心齋橋 → 道頓堀（約 5–10 分）；固力果招牌也在附近。"
        ]
      },
      "day-1-tsutenkaku-transfer": {
        "title": "前往通天閣",
        "details": [
          "飯店 → 難波站（步行約 5–15 分），搭大阪 Metro 至動物園前（約 15–20 分）。",
          "動物園前站 → 通天閣（步行約 8–12 分）。"
        ]
      },
      "day-1-shinsekai": {
        "title": "通天閣與新世界",
        "details": [
          "登上通天閣觀景台，接著散步逛新世界。"
        ]
      },
      "day-1-dinner": {
        "title": "新世界晚餐／返回難波",
        "details": [
          "可在新世界吃大阪炸串，或回難波用餐。",
          "回程：動物園前 → 難波（約 15–20 分），再步行回飯店（約 10–15 分）。"
        ]
      }
    }
  },
  "02": {
    "title": "京都散策 · 清水寺、和服與錦市場",
    "description": "清水寺晨間散步、和服體驗，再逛錦市場與鴨川。",
    "stops": {
      "day-2-transfer": {
        "title": "大阪 → 京都",
        "details": [
          "飯店 → 難波站（步行約 10–15 分），搭御堂筋線至淀屋橋（約 8–10 分）。",
          "步行轉乘京阪電鐵（約 3–6 分），淀屋橋 → 祇園四条（約 45–55 分）。",
          "祇園四条步行至公車站（約 2–5 分），搭京都市公車前往清水寺周邊（約 10–20 分），再步行至入口（約 8–15 分）。",
          "全程建議預留至少 90 分鐘，並確認當日首班車與轉乘時間。"
        ]
      },
      "day-2-kiyomizu": {
        "title": "清水寺與八坂神社",
        "details": [
          "先參觀清水寺，再沿街道步行前往八坂神社（約 20–30 分）。"
        ]
      },
      "day-2-kimono": {
        "title": "岡本和服（清水店）",
        "details": [
          "租借和服並完成著裝；以店家預約時間為準。"
        ]
      },
      "day-2-photos": {
        "title": "和服散步與拍照",
        "details": [
          "花見小路、白川南通，可各安排約 5–15 分鐘步行。"
        ]
      },
      "day-2-lunch": {
        "title": "京都午餐與甜點",
        "details": [
          "午餐：Ramen Nishiki（公車約 15 分＋步行 3–8 分），或 Menya Inoichi（步行約 5 分）。",
          "甜點可考慮 GOKAGO（依所在位置，步行約 5–15 分）。"
        ]
      },
      "day-2-return-kimono": {
        "title": "歸還和服",
        "details": [
          "從拍照區步行返回岡本和服店（約 10–25 分）；確認店家實際歸還期限。"
        ]
      },
      "day-2-market": {
        "title": "錦市場與鴨川",
        "details": [
          "祇園／河原町 → 錦市場（步行約 15–25 分），再走至鴨川（約 10–20 分）。"
        ]
      },
      "day-2-back-to-osaka": {
        "title": "搭車返回大阪",
        "details": [
          "錦市場 → 四条站（步行約 5–8 分），搭烏丸線至京都站（約 3–5 分）。",
          "步行轉乘近鐵（約 5–10 分），前往大阪難波；部分路線需轉車，請確認班次及車程。",
          "大阪難波站 → 飯店（步行約 10–15 分）。"
        ]
      },
      "day-2-dinner": {
        "title": "道頓堀或黑門市場晚餐",
        "details": [
          "回到難波後用餐，視位置步行約 10–20 分。"
        ]
      }
    }
  },
  "03": {
    "title": "大阪城與天神橋筋 · 返回高雄",
    "description": "大阪城、天神橋筋商店街，以及返程安排。",
    "stops": {
      "day-3-coffee": {
        "title": "前往 SOT COFFEE ROASTER",
        "details": [
          "飯店 → 難波站（步行約 10–15 分），搭大阪 Metro 至谷町四丁目（含轉乘約 20–30 分）。",
          "谷町四丁目站 → SOT COFFEE ROASTER（步行約 10–20 分）。"
        ]
      },
      "day-3-castle": {
        "title": "大阪城公園與天守閣",
        "details": [
          "咖啡店 → 大阪城公園（步行約 20 分）；參觀天守閣約 2 小時。",
          "若想搭乘御座船，可於約 09:30 先確認排隊與劃位方式；園內另外預留 30–60 分鐘步行。"
        ]
      },
      "day-3-shopping": {
        "title": "天神橋筋商店街",
        "details": [
          "搭大阪 Metro 前往扇町站（約 35 分），再步行約 3–8 分鐘。",
          "逛商店街，順便吃午餐與小吃。"
        ]
      },
      "day-3-luggage": {
        "title": "返回飯店取行李",
        "details": [
          "扇町 → 難波（搭大阪 Metro 約 25–35 分），再步行至飯店（約 10–15 分）。"
        ]
      },
      "day-3-airport": {
        "title": "前往關西國際機場",
        "details": [
          "飯店 → 南海難波站（步行約 5–15 分）；搭南海電鐵至 KIX（約 45–55 分）。",
          "預留購票、行李托運與機場安檢時間。"
        ]
      },
      "day-3-flight": {
        "title": "關西機場 → 高雄",
        "details": [
          "搭乘 KIX → 高雄的返程航班（當地時間）。"
        ]
      }
    }
  }
};
const days = localizeDays(localizedDays, "zh");

const content = {
  "locale": "zh",
  "meta": {
    "title": "大阪・京都三日旅行指南｜關西行程",
    "description": "大阪與京都三日行程：交通路線、景點、餐廳備選、出門清單、日語會話與完整地圖。"
  },
  "hero": {
    "eyebrow": "OSAKA · KYOTO · 3 DAYS",
    "title": "大阪・京都三日旅行指南",
    "description": "三天走訪大阪與京都，交通、餐廳選項與旅途實用資訊都整理在這裡。",
    "note": "行程時間與車程為估計值；出發前請確認班次、營業時間與預約資訊。"
  },
  "navigation": {
    "label": "頁面目錄",
    "language": "選擇頁面語言",
    "itinerary": "每日行程",
    "checklist": "出門檢查",
    "phrases": "實用日語",
    "reference": "旅行資訊",
    "map": "地點地圖"
  },
  "headings": {
    "reference": "旅行資訊",
    "referenceDescription": "飯店地址、入住時間與日本緊急聯絡電話。",
    "itinerary": "每日行程",
    "itineraryDescription": "展開每天的行程，查看交通、景點與用餐安排。",
    "checklist": "出門檢查",
    "checklistDescription": "出門前確認重要物品、天氣與房間安全。",
    "phrases": "實用日語",
    "phrasesDescription": "常用日語、羅馬拼音與發音，旅途中可快速查找。",
    "hotel": "飯店資訊",
    "emergency": "日本緊急聯絡電話"
  },
  "checklist": {
    "ready": "行前確認",
    "reset": "重設",
    "share": "分享",
    "meetingTime": "集合時間（選填）",
    "unchecked": "尚未勾選",
    "none": "全部完成",
    "notSet": "未設定",
    "summary": "出門前清單",
    "progress": "清單完成進度",
    "sectionTitles": {
      "essentials": "隨身必備",
      "weather": "天氣與穿著",
      "room": "離開房間前"
    }
  },
  "actions": {
    "copy": "複製",
    "copied": "已複製！",
    "copyPrompt": "請複製以下內容：",
    "sharePrompt": "請複製以下清單：",
    "listen": "朗讀",
    "phrasesHelp": "點選「朗讀」可聆聽日語發音。",
    "phraseCountUnit": "句"
  },
  "hotel": {
    "labels": {
      "name": "飯店名",
      "address": "地址",
      "phone": "電話",
      "checkin": "入住時間",
      "checkout": "退房時間"
    }
  },
  "emergency": {
    "police": "警察",
    "fire": "消防／救護車",
    "coast": "海上保安廳",
    "hotline": "觀光諮詢（多語）"
  },
  "map": {
    "title": "地點地圖",
    "description": "原始地圖的 {places} 個收藏地點，依 {layers} 個分類整理，可搜尋、查看或下載完整 KML。",
    "open": "開啟原始地圖",
    "download": "下載完整地點 KML",
    "directoryTitle": "收藏地點（{places}）",
    "directoryIntro": "依類別或名稱尋找地點，點選「開啟地圖」可查看位置。",
    "searchLabel": "搜尋收藏地點",
    "searchPlaceholder": "搜尋餐廳、咖啡廳或景點…",
    "filterLabel": "依分類篩選地點",
    "allLayers": "所有分類",
    "noResults": "找不到符合條件的地點，請試試其他關鍵字。",
    "openPlace": "開啟地圖",
    "steps": "想自行編輯地圖？下載 KML 並匯入 Google My Maps，即可修改全部 {places} 個地點及 {layers} 個分類。",
    "caveat": "嵌入地圖的標記名稱不會隨頁面語言切換；KML 保留地點與分類，但部分自訂圖示不會一併匯出。",
    "iframeTitle": "原始大阪京都旅遊地圖"
  },
  "checklistItems": {
    "passport": "護照",
    "wallet": "錢包",
    "yen": "日圓",
    "credit-card": "信用卡",
    "transit-card": "ICOCA／Suica（確認餘額）",
    "phone": "手機電量至少 50%",
    "charger": "行動電源與充電線",
    "mobile-data": "確認 eSIM／行動網路",
    "hotel-key": "飯店房卡",
    "rubbish-bag": "隨身小垃圾袋",
    "bathroom": "出門前先上廁所",
    "shopping-bag": "環保購物袋",
    "tax-free": "免稅購物 QR Code（如適用）",
    "cold-weather": "查看氣溫與天氣預報",
    "scarf-gloves": "視天氣攜帶圍巾、手套",
    "extra-layer": "視天氣多帶一件外套",
    "sunny-weather": "查看紫外線與降雨機率",
    "sunscreen": "視天氣攜帶防曬用品",
    "sunglasses": "視天氣攜帶太陽眼鏡",
    "appliances": "關閉電器（暖氣、吹風機）",
    "windows": "關好窗戶",
    "valuables": "收好貴重物品"
  },
  "phraseTranslations": {
    "phrase-01": "不好意思，車站在哪裡？",
    "phrase-02": "這班電車會到大阪嗎？",
    "phrase-03": "請給我兩張票。",
    "phrase-04": "有推薦的料理嗎？",
    "phrase-05": "請結帳。",
    "phrase-06": "可以使用信用卡嗎？",
    "phrase-07": "可以幫我拍照嗎？",
    "phrase-08": "廁所在哪裡？",
    "phrase-09": "這個多少錢？",
    "phrase-10": "歡迎光臨（店員常用語）。",
    "phrase-11": "你好／午安。",
    "phrase-12": "晚上好。",
    "phrase-13": "幾位？（店員詢問）",
    "phrase-14": "內用嗎？（店員詢問）",
    "phrase-15": "一位。",
    "phrase-16": "兩位。",
    "phrase-17": "五位。",
    "phrase-18": "是的。",
    "phrase-19": "不是／不用。",
    "phrase-20": "麻煩你了。",
    "phrase-21": "謝謝您。",
    "phrase-22": "你好，我們兩位，麻煩了。",
    "phrase-23": "我迷路了，請幫幫我。"
  }
};

export default { ...content, days };
