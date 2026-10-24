import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mapLayers, mapPlaces, localizePlace, localizeNote } from "../src/features/trips/japan/data/places.js";

const escapeXml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export function generateJapanKml(locale) {
  if (!["zh", "en"].includes(locale)) throw new Error("Unsupported locale: " + locale);
  const output = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<kml xmlns="http://www.opengis.net/kml/2.2">',
    '  <Document>',
    '    <name>' + escapeXml(locale === "en" ? "Osaka & Kyoto · Complete Place Collection" : "大阪京都三天美食文化之旅 · 完整地點清單") + '</name>',
    '    <description>' + escapeXml(`${mapPlaces.length} original placemarks in ${mapLayers.length} source layers. Static editable export.`) + '</description>',
  ];
  for (const layer of mapLayers) {
    output.push('    <Folder>');
    output.push('      <name>' + escapeXml(layer.label[locale]) + '</name>');
    for (const place of mapPlaces.filter((item) => item.layer === layer.id)) {
      output.push('      <Placemark>');
      output.push('        <name>' + escapeXml(localizePlace(place, locale)) + '</name>');
      const note = localizeNote(place, locale);
      if (note) output.push('        <description>' + escapeXml(note) + '</description>');
      output.push('        <Point><coordinates>' + place.lng + ',' + place.lat + ',0</coordinates></Point>');
      output.push('      </Placemark>');
    }
    output.push('    </Folder>');
  }
  output.push('  </Document>');
  output.push('</kml>');
  return output.join("\n") + "\n";
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const directory = fileURLToPath(new URL("../public/trips/japan/", import.meta.url));
  mkdirSync(directory, { recursive: true });
  for (const locale of ["zh", "en"]) {
    writeFileSync(resolve(directory, "places-" + locale + ".kml"), generateJapanKml(locale), "utf8");
  }
  process.stdout.write(`Generated full Japan KML downloads (${mapPlaces.length} places, ${mapLayers.length} layers, zh/en).\n`);
}
