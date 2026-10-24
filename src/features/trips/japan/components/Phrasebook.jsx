import { phrases } from "../data/phrases";
import { speakJapanese } from "../utils/browser";
import styles from "../JapanTrip.module.css";

export default function Phrasebook({ content }) {
  return (
    <details id="phrases" className={styles.card}>
      <summary className={styles.cardSummary}>
        <span className={styles.sectionKicker}>03 / PHRASEBOOK</span>
        <h2 className={styles.sectionTitle}>
          {content.navigation.phrases}
          <span className={styles.phraseCount}>{phrases.length} {content.actions.phraseCountUnit}</span>
        </h2>
        <p className={styles.sectionIntro}>{content.headings.phrasesDescription}</p>
      </summary>
      <div className={styles.cardBody}>
        <p className={styles.helperText}>{content.actions.phrasesHelp}</p>
        <ol className={styles.sentenceList}>
          {phrases.map(({ id, japanese, romaji }) => (
            <li key={id}>
              <span className={styles.jp} lang="ja">{japanese}</span>
              <span className={styles.romaji}>{romaji}</span>
              <span className={styles.translation}>{content.phraseTranslations[id]}</span>
              <button type="button" className={styles.speakButton} onClick={() => speakJapanese(japanese)}
                aria-label={content.actions.listen + ": " + content.phraseTranslations[id]}>
                {content.actions.listen}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}
