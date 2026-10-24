import { phrases } from "../data/phrases";
import { speakJapanese } from "../utils/browser";
import styles from "../JapanTrip.module.css";

export default function Phrasebook({ content }) {
  return (
    <details id="phrases" className={styles.card}>
      <summary className={styles.cardSummary}>
        {content.headings.phrases}
        <span className={styles.phraseCount}>{phrases.length} {content.actions.phraseCountUnit}</span>
      </summary>
      <div className={styles.cardBody}>
        <p className={styles.helperText}>{content.actions.phrasesHelp}</p>
        <ol className={styles.sentenceList}>
          {phrases.map(({ id, japanese, romaji }) => (
            <li key={id}>
              <span className={styles.jp} lang="ja">{japanese}</span>
              <span className={styles.romaji}>{romaji}</span>
              <span className={styles.zh}>{content.phraseTranslations[id]}</span>
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
