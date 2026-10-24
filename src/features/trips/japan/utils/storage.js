import { checklistIds } from "../data/checklist";

const CHECKLIST_KEY = "trip:japan:checklist";
const MEETING_TIME_KEY = "trip:japan:meetingTime";

function read(key) {
  try { return window.localStorage.getItem(key); }
  catch { return null; }
}

function write(key, value) {
  try { window.localStorage.setItem(key, value); }
  catch { /* Storage is optional; React state remains usable. */ }
}

export function readChecklist() {
  try {
    const saved = JSON.parse(read(CHECKLIST_KEY) || "null");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(checklistIds.map((id) => [id, saved[id] === true]));
  } catch {
    return {};
  }
}

export function saveChecklist(checked) {
  write(CHECKLIST_KEY, JSON.stringify(checked));
}

export function readMeetingTime() {
  return read(MEETING_TIME_KEY) || "";
}

export function saveMeetingTime(value) {
  write(MEETING_TIME_KEY, value);
}
