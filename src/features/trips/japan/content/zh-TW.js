// Localized content only. Layout and behavior live in JapanTripPage.jsx.
const days = [
  {
    "number": "01",
    "title": "大阪初印象 · 難波、心齋橋與新世界",
    "stops": [
      {
        "id": "day-1-stop-1",
        "title": "抵達",
        "details": [
          "07:05–10:55 飛行：高雄 → 關西國際機場（KIX）"
        ]
      },
      {
        "id": "day-1-stop-2",
        "title": "購票＋ICOCA",
        "details": [
          "10:55–11:30",
          "買：南海電鐵車票（信用卡）／ICOCA 儲值 ¥3,500",
          "步行：機場入境區 → 南海電鐵售票／閘口（約 5–10 分，依航廈位置）"
        ]
      },
      {
        "id": "day-1-stop-3",
        "title": "機場 → 難波（信用卡買票）",
        "details": [
          "11:30–12:20 南海電鐵 Nankai Railway",
          "關西機場站 → 難波站（約 45–55 分）",
          "12:20–12:35 步行：難波站 → 飯店（約 10–15 分）"
        ]
      },
      {
        "id": "day-1-stop-4",
        "title": "寄放行李／入住",
        "details": [
          "12:35–12:50 飯店寄放行李",
          "15:00 飯店 Check-in（若先寄放，15:00 再回來）"
        ]
      },
      {
        "id": "day-1-stop-5",
        "title": "午餐（擇一，含步行時間）",
        "details": [
          "方案 A（步行）：㐂舌響 KITAN HIBIKI（約 10 分）",
          "方案 A（步行）：Wagyu Sukiyaki Okuwo（約 11 分）",
          "方案 B（搭車＋步行）：Naiwa Omeriasu（搭車約 10 分＋步行約 23 分）",
          "方案 B（搭車＋步行）：Usamitei Matsubaya（搭車約 13 分＋步行約 26 分）"
        ]
      },
      {
        "id": "day-1-stop-6",
        "title": "心齋橋・道頓堀逛街",
        "details": [
          "午餐後–16:00 區域內步行移動",
          "飯店 ↔ 心齋橋筋（約 10–20 分）",
          "心齋橋 ↔ 道頓堀（約 5–10 分）",
          "道頓堀 ↔ 固力果看板（多在同區，步行 5–10 分內）"
        ]
      },
      {
        "id": "day-1-stop-7",
        "title": "前往通天閣",
        "details": [
          "16:20–16:50",
          "步行：飯店 → 難波站（約 5–15 分）",
          "大阪 Metro：難波 → 動物園前（約 15–20 分）",
          "步行：動物園前站 → 通天閣（約 8–12 分）"
        ]
      },
      {
        "id": "day-1-stop-8",
        "title": "通天閣・新世界",
        "details": [
          "17:00–18:30 通天閣觀景台＋新世界散步",
          "19:00 新世界晚餐（炸串）或回難波吃",
          "若回難波：動物園前 → 難波（約 15–20 分）",
          "步行：難波站 → 飯店（約 10–15 分）"
        ]
      }
    ]
  },
  {
    "number": "02",
    "title": "京都散策 · 清水寺、和服與錦市場",
    "stops": [
      {
        "id": "day-2-stop-1",
        "title": "大阪 → 京都（含步行）",
        "details": [
          "05:30 出發；建議預留約 90 分鐘以上，並依當日班次調整。",
          "步行：飯店 → 難波站（約 10–15 分）",
          "大阪 Metro 御堂筋線：難波 → 淀屋橋（約 8–10 分）",
          "步行：淀屋橋地鐵 → 京阪淀屋橋站（約 3–6 分）",
          "京阪電鐵：淀屋橋 → 祇園四条（約 45–55 分）",
          "步行：祇園四条站 → 公車站牌（約 2–5 分）",
          "京都市公車：祇園四条附近 → 清水寺周邊（約 10–20 分）",
          "步行：下車站牌 → 清水寺入口（約 8–15 分）"
        ]
      },
      {
        "id": "day-2-stop-2",
        "title": "清水寺 → 八坂神社（步行）",
        "details": [
          "06:30–09:00",
          "清水寺 Kiyomizu-dera",
          "步行：清水寺 → 八坂神社（約 20–30 分）"
        ]
      },
      {
        "id": "day-2-stop-3",
        "title": "岡本和服（含步行）",
        "details": [
          "09:00 岡本和服清水店",
          "11:00–12:30 步行拍照",
          "花見小路（5–15 分）",
          "白川南通（5–15 分）"
        ]
      },
      {
        "id": "day-2-stop-4",
        "title": "午餐（擇一，含步行）",
        "details": [
          "Ramen Nishiki（搭公車約 15 分＋步行 3–8 分）",
          "Menya Inoichi（步行約 5 分）",
          "GOKAGO（甜點店多為步行 5–15 分內）"
        ]
      },
      {
        "id": "day-2-stop-5",
        "title": "還和服",
        "details": [
          "14:30 前",
          "步行：拍照區 → 岡本和服店（約 10–25 分）"
        ]
      },
      {
        "id": "day-2-stop-6",
        "title": "錦市場・鴨川（含步行）",
        "details": [
          "下午",
          "步行：祇園／河原町 → 錦市場（約 15–25 分）",
          "步行：錦市場 → 鴨川（約 10–20 分）"
        ]
      },
      {
        "id": "day-2-stop-7",
        "title": "回大阪（含步行）",
        "details": [
          "15:50–18:00",
          "步行：錦市場 → 四条站（約 5–8 分）",
          "京都市營地鐵 烏丸線：四条 → 京都（約 3–5 分）",
          "步行：京都地鐵/JR 區 → 近鐵京都站（約 5–10 分）",
          "近鐵路線：京都 → 大阪難波（需轉乘，出發前確認最新班次與總車程）",
          "步行：大阪難波站 → 飯店（約 10–15 分）",
          "18:00 晚餐：道頓堀／黑門市場（步行 10–20 分）"
        ]
      }
    ]
  },
  {
    "number": "03",
    "title": "大阪城與天神橋筋 · 返回高雄",
    "stops": [
      {
        "id": "day-3-stop-1",
        "title": "飯店 → 咖啡店（含步行）",
        "details": [
          "07:15–08:30",
          "步行：飯店 → 難波站（約 10–15 分）",
          "大阪 Metro：難波 → 谷町四丁目（約 20–30 分，含轉乘）",
          "步行：谷町四丁目站 → SOT COFFEE ROASTER（約 10–20 分）"
        ]
      },
      {
        "id": "day-3-stop-2",
        "title": "咖啡店 → 大阪城（步行）",
        "details": [
          "08:30–11:30",
          "步行：咖啡店 → 大阪城公園（約 20 分）",
          "天守閣（預計 2 小時）",
          "御座船：建議 09:30 先去排/劃位",
          "園區內步行通常再加 30–60 分"
        ]
      },
      {
        "id": "day-3-stop-3",
        "title": "大阪城 → 天神橋筋商店街（含步行）",
        "details": [
          "11:30–15:00",
          "大阪 Metro 約 35 分，目的地：扇町站",
          "步行：扇町站 → 天神橋筋商店街（約 3–8 分）",
          "午餐小吃、逛街"
        ]
      },
      {
        "id": "day-3-stop-4",
        "title": "回飯店取行李（含步行）",
        "details": [
          "15:00",
          "大阪 Metro：扇町 → 難波（約 25–35 分）",
          "步行：難波站 → 飯店（約 10–15 分）"
        ]
      },
      {
        "id": "day-3-stop-5",
        "title": "難波 → 關西機場（信用卡買票）",
        "details": [
          "15:40",
          "步行：飯店 → 南海難波站（約 5–15 分）",
          "南海電鐵：難波 → KIX（約 45–55 分）",
          "20:20–22:55 KIX → 高雄"
        ]
      }
    ]
  }
];

const content = {
  "locale": "zh-TW",
  "meta": {
    "title": "關西三日旅行手冊｜大阪・京都",
    "description": "大阪與京都三日自由行：每日路線、飯店資訊、出門清單、實用日語與可自訂地圖。"
  },
  "hero": {
    "eyebrow": "OSAKA · KYOTO · 3 DAYS",
    "title": "關西三日旅行手冊",
    "description": "從大阪街區走到京都古寺，把路線、必備物品與實用日文整理在同一頁。",
    "note": "行程時間僅供規劃參考；出發前請再次確認交通、營業時間與預約。"
  },
  "navigation": {
    "label": "頁面目錄",
    "language": "選擇頁面語言",
    "itinerary": "每日行程",
    "checklist": "出門檢查",
    "phrases": "實用日文",
    "map": "行程地圖"
  },
  "headings": {
    "itinerary": "每日行程",
    "itineraryDescription": "點開每日行程，查看交通方式、步行安排與餐廳選項。",
    "checklist": "出發前檢查 · 重要物品與房間安全",
    "phrases": "旅途中常用日文 · 點擊朗讀",
    "hotel": "住宿資訊 · 一鍵複製",
    "emergency": "日本緊急聯絡電話"
  },
  "checklist": {
    "ready": "出發前確認",
    "reset": "重設",
    "share": "分享",
    "meetingTime": "集合時間（選填）",
    "unchecked": "未勾項目",
    "none": "無",
    "notSet": "未填",
    "summary": "出飯店前檢查",
    "progress": "清單完成進度",
    "sectionTitles": [
      "隨身重要物品",
      "天氣對應",
      "安全與細節"
    ]
  },
  "actions": {
    "copy": "複製",
    "copied": "已複製！",
    "copyPrompt": "請複製以下內容：",
    "sharePrompt": "請複製以下清單：",
    "listen": "朗讀",
    "phrasesHelp": "點選朗讀按鈕，練習日文發音。"
  },
  "hotel": {
    "name": "GRIDS PREMIUM HOTEL OSAKA NAMBA",
    "address": "大阪府大阪市浪速区難波中1丁目7-7",
    "phone": "+81 6-6635-0810",
    "checkin": "15:00",
    "checkout": "11:00",
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
    "title": "地點與地圖",
    "description": "可在地圖中探索行程地點，也能下載地點清單，建立自己的可編輯地圖。",
    "open": "開啟原始地圖",
    "download": "下載地點 CSV",
    "instructions": "如何建立可編輯的副本？",
    "steps": "下載 CSV → 開啟 Google My Maps 並建立新地圖 → 匯入 CSV，以 Location 欄定位、Name 欄命名。此副本由你自行管理，不需要取得原地圖編輯權限。",
    "caveat": "嵌入的 My Maps 標記名稱由原地圖決定，切換語言不會自動翻譯。下載的 CSV 提供繁體中文地點名稱。",
    "iframeTitle": "大阪與京都旅遊地圖"
  },
  "checklistItems": {
    "passport": "護照",
    "wallet": "錢包",
    "yen": "日圓 JPY",
    "credit-card": "信用卡",
    "transit-card": "ICOCA / Suica（是否有餘額）",
    "phone": "手機（確認電量 ≥ 50%）",
    "charger": "行動電源 & 充電線",
    "mobile-data": "eSIM / 網路是否正常",
    "hotel-key": "飯店房卡",
    "rubbish-bag": "隨身小垃圾袋",
    "bathroom": "出門前先上廁所",
    "shopping-bag": "帶購物用大袋 / 折疊袋",
    "tax-free": "免稅購物 QR Code（如適用）",
    "cold-weather": "確認氣溫與當日天氣預報",
    "scarf-gloves": "確認是否需要圍巾、手套",
    "extra-layer": "確認是否需要多帶一件外套",
    "sunny-weather": "確認紫外線與降雨機率",
    "sunscreen": "確認是否需要防曬",
    "sunglasses": "確認是否需要太陽眼鏡",
    "appliances": "房間電器是否關好（暖氣、吹風機）",
    "windows": "窗戶是否關",
    "valuables": "貴重物品是否已收好（或放保險箱）"
  },
  "phraseTranslations": {
    "phrase-01": "不好意思，車站在哪裡？",
    "phrase-02": "這班電車會到大阪嗎？",
    "phrase-03": "請給我兩張票。",
    "phrase-04": "推薦的料理是什麼？",
    "phrase-05": "請結帳。",
    "phrase-06": "可以使用信用卡嗎？",
    "phrase-07": "可以幫我拍照嗎？",
    "phrase-08": "廁所在哪裡？",
    "phrase-09": "這個多少錢？",
    "phrase-10": "歡迎光臨。",
    "phrase-11": "你好（白天）。",
    "phrase-12": "你好（晚上）。",
    "phrase-13": "幾位？",
    "phrase-14": "內用嗎？",
    "phrase-15": "一人。",
    "phrase-16": "兩人。",
    "phrase-17": "五人。",
    "phrase-18": "是的。",
    "phrase-19": "不是。",
    "phrase-20": "麻煩了／拜託。",
    "phrase-21": "謝謝您。",
    "phrase-22": "你好，我們兩位，麻煩了。",
    "phrase-23": "我迷路了，請幫幫我。"
  }
};

export default { ...content, days };
