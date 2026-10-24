import { useEffect, useRef, useState } from "react";

export function useTripMetadata(meta, locale) {
  useEffect(() => {
    const canonicalUrl = "https://trips.huixinyang.com" + (locale === "en" ? "/japan/en" : "/japan");
    const changes = [];
    const setMeta = (selector, tag, attributes) => {
      let element = document.head.querySelector(selector);
      const created = !element;
      if (!element) {
        element = document.createElement(tag);
        document.head.appendChild(element);
      }
      const before = Object.fromEntries(Object.keys(attributes).map((name) =>
        [name, element.getAttribute(name)]));
      for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
      changes.push(() => {
        if (created) element.remove();
        else for (const [name, value] of Object.entries(before)) {
          if (value === null) element.removeAttribute(name);
          else element.setAttribute(name, value);
        }
      });
    };
    const beforeLang = document.documentElement.lang;
    const beforeTitle = document.title;
    document.documentElement.lang = locale === "en" ? "en" : "zh-Hant";
    document.title = meta.title;
    setMeta('meta[name="description"]', "meta", { name: "description", content: meta.description });
    setMeta('meta[property="og:title"]', "meta", { property: "og:title", content: meta.title });
    setMeta('meta[property="og:description"]', "meta", { property: "og:description", content: meta.description });
    setMeta('meta[property="og:url"]', "meta", { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:locale"]', "meta", { property: "og:locale", content: locale === "en" ? "en_US" : "zh_TW" });
    setMeta('link[rel="canonical"]', "link", { rel: "canonical", href: canonicalUrl });
    return () => {
      for (const undo of changes.reverse()) undo();
      document.documentElement.lang = beforeLang;
      document.title = beforeTitle;
    };
  }, [locale, meta.title, meta.description]);
}

async function writeClipboard(text) {
  if (!navigator.clipboard?.writeText) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function useCopyFeedback() {
  const [copiedField, setCopiedField] = useState(null);
  const timeoutRef = useRef(null);
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  const copy = async (id, value, fallbackLabel) => {
    try {
      if (!(await writeClipboard(value))) throw new Error("Clipboard unavailable");
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
    if (!(await writeClipboard(message))) throw new Error("Clipboard unavailable");
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
