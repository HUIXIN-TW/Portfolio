import { useState } from "react";
import { mapLayers, mapPlaces, localizePlace, localizeNote } from "../data/places";
import { filterMapPlaces, matchingLayerIds, getGoogleMapsUrl } from "../utils/map";
import styles from "../JapanTrip.module.css";

const mapId = "1I-jR7-sL_QXOJdqcB0a8Go19_VI2dsE";
const mapPageUrl = "https://www.google.com/maps/d/viewer?mid=" + mapId;

function formatMapCopy(value) {
  return value.replaceAll("{places}", String(mapPlaces.length))
    .replaceAll("{layers}", String(mapLayers.length));
}

export default function TripMap({ content }) {
  const { map, locale } = content;
  const [layerId, setLayerId] = useState("all");
  const [query, setQuery] = useState("");
  const [expandedLayers, setExpandedLayers] = useState([]);
  const params = new URLSearchParams({ mid: mapId, hl: locale });

  const visible = filterMapPlaces(layerId, query, locale);

  const changeSearch = (value) => {
    setQuery(value);
    setExpandedLayers(value.trim()
      ? matchingLayerIds(filterMapPlaces(layerId, value, locale))
      : layerId === "all" ? [] : [layerId]);
  };

  const selectLayer = (id) => {
    setLayerId(id);
    setExpandedLayers(id !== "all"
      ? [id]
      : query.trim() ? matchingLayerIds(filterMapPlaces("all", query, locale)) : []);
  };
  const toggleLayer = (id) => {
    setExpandedLayers((previous) =>
      previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]);
  };

  const groups = mapLayers.map((layer) => ({
    ...layer,
    places: visible.filter((place) => place.layer === layer.id),
  })).filter((group) => group.places.length > 0);

  return (
    <section id="trip-map" className={styles.mapSection} aria-labelledby="trip-map-title">
      <div className={styles.mapIntroduction}>
        <div>
          <span className={styles.sectionKicker}>05 / MAP</span>
          <h2 className={styles.sectionTitle} id="trip-map-title">{content.navigation.map}</h2>
          <p>{formatMapCopy(map.description)}</p>
        </div>
        <div className={styles.mapActions}>
          <a href={"/trips/japan/places-" + locale + ".kml"} download
            className={styles.primaryButton}>{map.download}</a>
          <a href={mapPageUrl} target="_blank" rel="noopener noreferrer"
            className={styles.secondaryButton}>{map.open} ↗</a>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <iframe
          title={map.iframeTitle}
          className={styles.frame}
          src={"https://www.google.com/maps/d/embed?" + params}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className={styles.placesDirectory}>
        <div className={styles.directoryHeading}>
          <div>
            <h3>{formatMapCopy(map.directoryTitle)}</h3>
            <p>{map.directoryIntro}</p>
          </div>
          <span className={styles.placesCount} aria-live="polite">
            {visible.length} / {mapPlaces.length}
          </span>
        </div>
        <label className={styles.placesSearch}>
          <span className={styles.srOnly}>{map.searchLabel}</span>
          <input type="search" value={query} onChange={(event) => changeSearch(event.target.value)}
            placeholder={map.searchPlaceholder} />
        </label>
        <div className={styles.layerFilters} role="group" aria-label={map.filterLabel}>
          <button type="button" aria-pressed={layerId === "all"}
            className={layerId === "all" ? styles.layerActive : ""}
            onClick={() => selectLayer("all")}>{map.allLayers} · {mapPlaces.length}</button>
          {mapLayers.map((layer) => (
            <button key={layer.id} type="button" aria-pressed={layerId === layer.id}
              className={layerId === layer.id ? styles.layerActive : ""}
              onClick={() => selectLayer(layer.id)}>
              {layer.label[locale]} · {mapPlaces.filter((place) => place.layer === layer.id).length}
            </button>
          ))}
        </div>
        {groups.length === 0 && <p className={styles.emptyResults}>{map.noResults}</p>}
        <div className={styles.layerDirectory}>
          {groups.map((group) => (
            <details key={group.id} className={styles.layerGroup}
              open={expandedLayers.includes(group.id)}>
              <summary onClick={(event) => { event.preventDefault(); toggleLayer(group.id); }}>
                <strong>{group.label[locale]}</strong>
                <span>{group.places.length}</span>
              </summary>
              <div className={styles.placeGrid}>
                {group.places.map((place) => (
                  <div className={styles.placeRow} key={place.id}>
                    <div>
                      <strong>{localizePlace(place, locale)}</strong>
                      {localizeNote(place, locale) && <small>{localizeNote(place, locale)}</small>}
                    </div>
                    <a href={getGoogleMapsUrl(place)} target="_blank"
                      rel="noopener noreferrer" aria-label={map.openPlace + ": " + localizePlace(place, locale)}>
                      {map.openPlace} ↗
                    </a>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
      <div className={styles.mapHelp}>
        <p>{map.steps} <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener noreferrer">Google My Maps ↗</a></p>
        <p className={styles.mapDisclaimer}>{map.caveat}</p>
      </div>
    </section>
  );
}
