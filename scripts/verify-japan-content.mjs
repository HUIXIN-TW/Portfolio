import assert from "node:assert/strict";
import zhTW from "../src/features/trips/japan/content/zh-TW.js";
import en from "../src/features/trips/japan/content/en.js";
import { checklistGroups, checklistIds } from "../src/features/trips/japan/data/checklist.js";
import { phrases } from "../src/features/trips/japan/data/phrases.js";

const unique = (values) => new Set(values).size === values.length;
assert.ok(unique(checklistIds), "Checklist IDs must be unique");
assert.ok(unique(phrases.map((item) => item.id)), "Phrase IDs must be unique");
assert.equal(checklistGroups.flatMap((group) => group.items).length, checklistIds.length);

for (const content of [zhTW, en]) {
  assert.equal(content.days.length, 3, content.locale + ": expected three days");
  assert.deepEqual(content.days.map((day) => day.number), ["01", "02", "03"]);
  assert.ok(content.meta.title && content.hero.title);
  assert.equal(Object.keys(content.checklistItems).length, checklistIds.length);
  assert.equal(Object.keys(content.phraseTranslations).length, phrases.length);
  assert.equal(content.checklist.sectionTitles.length, checklistGroups.length);

  for (const id of checklistIds) {
    assert.ok(content.checklistItems[id]?.trim(), content.locale + ": missing checklist item " + id);
  }
  for (const phrase of phrases) {
    assert.ok(phrase.japanese && phrase.romaji);
    assert.ok(content.phraseTranslations[phrase.id]?.trim(),
      content.locale + ": missing translation for " + phrase.id);
  }
  for (const day of content.days) {
    assert.ok(day.title && day.stops.length >= 5, content.locale + ": incomplete " + day.number);
    for (const stop of day.stops) {
      assert.ok(stop.title?.trim(), content.locale + ": missing stop title");
      assert.ok(stop.details?.length, content.locale + ": stop missing details: " + stop.title);
      assert.ok(stop.details.every((detail) => typeof detail === "string" && detail.trim()),
        content.locale + ": invalid stop detail: " + stop.title);
    }
  }
}

assert.notEqual(zhTW.hero.title, en.hero.title, "Locales must have distinct native wording");
console.log("Japan trip content verified: 3 days per language, " +
  checklistIds.length + " checklist items and " + phrases.length + " Japanese phrases.");
