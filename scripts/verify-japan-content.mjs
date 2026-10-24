import assert from "node:assert/strict";
import zh from "../src/features/trips/japan/content/zh.js";
import en from "../src/features/trips/japan/content/en.js";
import { hotel } from "../src/features/trips/japan/data/hotel.js";
import { mapLayers, mapPlaces, localizePlace } from "../src/features/trips/japan/data/places.js";
import { generateJapanKml } from "./generate-japan-kml.mjs";
import { checklistGroups, checklistIds } from "../src/features/trips/japan/data/checklist.js";
import { phrases } from "../src/features/trips/japan/data/phrases.js";
import { itineraryDays } from "../src/features/trips/japan/data/itinerary.js";

const unique = (values) => new Set(values).size === values.length;
assert.deepEqual([zh.locale, en.locale], ["zh", "en"]);
assert.deepEqual(zh.days.map((day) => day.number), itineraryDays.map((day) => day.number));
assert.ok(unique(itineraryDays.flatMap((day) => day.stops.map((stop) => stop.id))),
  "Shared stop IDs must be unique");
for (const localized of [zh, en]) {
  for (const day of localized.days) {
    const shared = itineraryDays.find((item) => item.number === day.number);
    assert.deepEqual(day.stops.map((stop) => stop.id), shared.stops.map((stop) => stop.id));
    for (let i = 0; i < shared.stops.length; i++) {
      const time = shared.stops[i].time;
      assert.equal(day.stops[i].time, typeof time === "string" ? time : time[localized.locale]);
    }
  }
}
assert.ok(unique(checklistIds), "Checklist IDs must be unique");
assert.ok(unique(phrases.map((item) => item.id)), "Phrase IDs must be unique");
assert.equal(checklistGroups.flatMap((group) => group.items).length, checklistIds.length);

for (const content of [zh, en]) {
  assert.equal(content.days.length, 3, content.locale + ": expected three days");
  assert.deepEqual(content.days.map((day) => day.number), ["01", "02", "03"]);
  assert.ok(content.meta.title && content.hero.title);
  for (const section of ["itinerary", "checklist", "phrases", "reference", "map"]) {
    assert.ok(content.navigation[section]?.trim(), content.locale + ": missing section label " + section);
  }
  assert.equal(Object.keys(content.checklistItems).length, checklistIds.length);
  assert.equal(Object.keys(content.phraseTranslations).length, phrases.length);
  assert.deepEqual(Object.keys(content.checklist.sectionTitles).sort(),
    checklistGroups.map((group) => group.id).sort());
  assert.ok(content.map.open && content.map.iframeTitle);
  assert.ok(content.hotel.labels.name && content.hotel.labels.address);
  assert.ok(hotel.address[content.locale]);

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
    assert.equal(new Set(day.stops.map((stop) => stop.id)).size, day.stops.length,
      content.locale + ": duplicate stop ID in " + day.number);
    for (const stop of day.stops) {
      assert.ok(stop.id?.trim(), content.locale + ": missing stable stop ID");
      assert.ok(stop.title?.trim(), content.locale + ": missing stop title");
      assert.ok(stop.details?.length, content.locale + ": stop missing details: " + stop.title);
      assert.ok(stop.details.every((detail) => typeof detail === "string" && detail.trim()),
        content.locale + ": invalid stop detail: " + stop.title);
    }
  }
}
assert.notEqual(zh.hero.title, en.hero.title, "Locales must use independently authored wording");
// The earlier checks already validate IDs, times and non-empty details.
for (const content of [zh, en]) {
  assert.ok(content.hero.description && content.hero.note, content.locale + ": missing travel guidance");
  assert.ok(content.headings.itineraryDescription, content.locale + ": missing itinerary intro");
}

console.log("Japan trip verified: zh and en, three days each, " + checklistIds.length +
  " checklist items, " + phrases.length + " phrases.");


// Imported directly from the complete KMZ: all eight original layers and 41 placemarks.
const expectedLayerCounts = [5, 5, 2, 4, 4, 2, 13, 6];
assert.equal(mapPlaces.length, 41, "Original KMZ has 41 places");
assert.equal(mapLayers.length, 8, "Original KMZ has 8 layers");
assert.ok(unique(mapPlaces.map((place) => place.id)), "Place IDs must be unique");
assert.ok(unique(mapPlaces.map((place) => place.lat.toFixed(6) + "," + place.lng.toFixed(6))),
  "Places must not reuse the same coordinates");

mapLayers.forEach((layer, index) => {
  assert.equal(mapPlaces.filter((place) => place.layer === layer.id).length, expectedLayerCounts[index]);
  assert.ok(layer.label.zh && layer.label.en);
});
for (const place of mapPlaces) {
  assert.ok(mapLayers.some((layer) => layer.id === place.layer));
  assert.ok(place.lat >= 34.5 && place.lat <= 35.2);
  assert.ok(place.lng >= 135.3 && place.lng <= 135.9);
  assert.ok(localizePlace(place, "zh") && localizePlace(place, "en"));
  assert.ok(["osaka", "kyoto"].includes(place.city), "Missing city for " + place.id);
  if (place.address) assert.ok(place.address.includes("Japan"), "Invalid place address: " + place.id);
}
for (const locale of ["zh", "en"]) {
  const kml = generateJapanKml(locale);
  assert.equal((kml.match(/<Folder>/g) || []).length, 8, locale + ": missing KML layers");
  assert.equal((kml.match(/<Placemark>/g) || []).length, 41, locale + ": missing KML places");
  assert.equal((kml.match(/<coordinates>/g) || []).length, 41, locale + ": missing KML coordinates");
  assert.ok(kml.includes("GRIDS PREMIUM HOTEL OSAKA NAMBA"), locale + ": missing hotel");
  assert.ok(kml.includes("Namba"), locale + ": missing Osaka label");
}
console.log("Full KMZ import verified: 41 unique places, eight layers and two editable KML exports.");


// Both languages use a 24-hour clock for itinerary times.
for (const content of [zh, en]) {
  assert.ok(content.navigation.reference, content.locale + ": reference navigation is required");
  assert.ok(content.headings.referenceDescription,
    content.locale + ": reference heading and description are required");
  for (const day of content.days) {
    for (const stop of day.stops) {
      assert.ok(typeof stop.time === "string" && stop.time.trim(),
        content.locale + ": missing timeline time for " + stop.title);
      assert.ok(!/\b(?:am|pm)\b/i.test(stop.time),
        content.locale + ": use 24-hour time, not am/pm: " + stop.time);
      const timeTokens = stop.time.match(/\d{2}:\d{2}/g) || [];
      for (const token of timeTokens) {
        const [hour, minute] = token.split(":").map(Number);
        assert.ok(hour <= 23 && minute <= 59, content.locale + ": invalid time " + token);
      }
    }
  }
}
