import { checklistIds } from "../data/checklist";

export const CHECKLIST_KEY = "japanTripChecklistV2";
export const MEETING_TIME_KEY = "japanTripMeetingTimeV2";

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
      return Object.fromEntries(checklistIds.map((id) => [id, saved[id] === true]));
    }
  } catch { /* Corrupt storage: try an older version. */ }
  try {
    const saved = JSON.parse(readStorage("preflightChecklist") || "null");
    if (Array.isArray(saved)) {
      return Object.fromEntries(checklistIds.map((id, index) => [id, saved[index] === true]));
    }
  } catch { /* No usable older version. */ }
  try {
    const saved = JSON.parse(readStorage("japanTripEnChecklist") || "null");
    if (saved && typeof saved === "object" && !Array.isArray(saved)) {
      const oldLabels = [
        "Passport", "Wallet", "Japanese yen", "Credit card", "ICOCA / Suica card — check balance",
        "Phone — at least 50% battery", "Power bank and charging cable", "eSIM / mobile data working",
        "Hotel key card", "Small rubbish bag", "Use the bathroom", "Reusable shopping bag",
        "Tax-free shopping QR code (if needed)", "Check the weather",
        "Warm layers, scarf and gloves if cold", "Warm layers, scarf and gloves if cold",
        "Check the weather", "Sunscreen and sunglasses if sunny", "Sunscreen and sunglasses if sunny",
        "Switch off room appliances", "Close the windows", "Secure valuables",
      ];
      return Object.fromEntries(checklistIds.map((id, index) => [id, saved[oldLabels[index]] === true]));
    }
  } catch { /* No usable older version. */ }
  return {};
}

export function readMeetingTime() {
  const current = readStorage(MEETING_TIME_KEY);
  return current !== null ? current : (readStorage("preflightMeetingTime") || readStorage("japanTripEnMeetingTime") || "");
}
export function saveChecklist(checked) {
  return writeStorage(CHECKLIST_KEY, JSON.stringify(checked));
}
