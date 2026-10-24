import { checklistIds } from "../data/checklist";

export const CHECKLIST_KEY = "trip:japan:checklist";
export const MEETING_TIME_KEY = "trip:japan:meetingTime";

export function readStorage(key) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}

export function writeStorage(key, value) {
  try { window.localStorage.setItem(key, value); return true; } catch { return false; }
}

export function readChecklist() {
  try {
    const saved = JSON.parse(readStorage(CHECKLIST_KEY) || "null");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(checklistIds.map((id) => [id, saved[id] === true]));
  } catch {
    return {};
  }
}

export function readMeetingTime() {
  return readStorage(MEETING_TIME_KEY) || "";
}

export function saveChecklist(checked) {
  return writeStorage(CHECKLIST_KEY, JSON.stringify(checked));
}
