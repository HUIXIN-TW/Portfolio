import { useEffect, useRef, useState } from "react";

export function useTripMetadata(meta, locale) {
  useEffect(() => {
    const root = document.documentElement;
    const beforeLang = root.lang;
    const beforeTitle = document.title;
    const existing = document.querySelector('meta[name="description"]');
    const beforeDescription = existing?.getAttribute("content");
    const description = existing || document.createElement("meta");
    if (!existing) {
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    root.lang = locale;
    document.title = meta.title;
    description.setAttribute("content", meta.description);
    return () => {
      root.lang = beforeLang;
      document.title = beforeTitle;
      if (!existing) description.remove();
      else if (beforeDescription === null) description.removeAttribute("content");
      else description.setAttribute("content", beforeDescription);
    };
  }, [locale, meta.title, meta.description]);
}

export function useCopyFeedback() {
  const [copiedField, setCopiedField] = useState(null);
  const timeoutRef = useRef(null);
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  const copy = async (id, value, fallbackLabel) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      setCopiedField(id);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopiedField(null), 1800);
    } catch {
      window.prompt(fallbackLabel, value);
    }
  };
  return { copy, copiedField };
}

export async function shareText(message, copyPrompt) {
  if (navigator.share) {
    try {
      await navigator.share({ text: message });
      return "shared";
    } catch (error) {
      if (error?.name === "AbortError") return "cancelled";
    }
  }
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(message);
    return "copied";
  } catch {
    window.prompt(copyPrompt, message);
    return "manual";
  }
}

export function speakJapanese(phrase) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "ja-JP";
  const voice = window.speechSynthesis.getVoices().find((item) =>
    item.lang?.toLowerCase().startsWith("ja"));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
  return true;
}
