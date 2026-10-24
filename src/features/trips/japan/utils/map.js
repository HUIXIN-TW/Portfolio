import { mapLayers, mapPlaces, localizeNote } from "../data/places.js";

const layersById = new Map(mapLayers.map((layer) => [layer.id, layer]));

function matchesPlace(place, term, locale) {
  if (!term) return true;
  const layer = layersById.get(place.layer);
  return [place.name, place.en || "", localizeNote(place, locale), layer?.label[locale] || ""]
    .some((part) => part.toLocaleLowerCase().includes(term));
}

export function filterMapPlaces(layerId, query, locale) {
  const term = query.trim().toLocaleLowerCase();
  return mapPlaces.filter((place) =>
    (layerId === "all" || place.layer === layerId) && matchesPlace(place, term, locale));
}

export function matchingLayerIds(places) {
  const ids = new Set(places.map((place) => place.layer));
  return mapLayers.filter((layer) => ids.has(layer.id)).map((layer) => layer.id);
}

export function getGoogleMapsUrl(place) {
  // Coordinates alone drop a pin. Search by name and location to resolve a place listing.
  const name = place.en || place.name;
  const city = place.city === "kyoto" ? "Kyoto" : "Osaka";
  return "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(name + ", " + (place.address || city + ", Japan"));
}
