import { useEffect, useState } from "react";
import { checklistGroups, checklistIds } from "../data/checklist";
import { readChecklist, saveChecklist, readMeetingTime, saveMeetingTime } from "../utils/storage";
import { shareText } from "../utils/browser";
import styles from "../JapanTrip.module.css";

export default function Checklist({ content }) {
  const [checked, setChecked] = useState(readChecklist);
  const [meetingTime, setMeetingTime] = useState(readMeetingTime);
  const [feedback, setFeedback] = useState("");

  useEffect(() => { saveChecklist(checked); }, [checked]);
  useEffect(() => { saveMeetingTime(meetingTime); }, [meetingTime]);

  const completed = checklistIds.filter((id) => checked[id] === true).length;
  const total = checklistIds.length;
  const percent = Math.round((completed / total) * 100);
  const t = content.checklist;

  const share = async () => {
    const remaining = checklistIds.filter((id) => checked[id] !== true).map((id) => content.checklistItems[id]);
    let message;
    if (content.locale === "en") {
      message = t.summary + ": " + completed + "/" + total + " checked (" + percent + "%). " +
        (remaining.length ? t.unchecked + ": " + remaining.join(", ") : t.none) +
        ". " + t.meetingTime + ": " + (meetingTime || t.notSet) + ".";
    } else {
      message = t.summary + "：" + completed + "/" + total + "（" + percent + "%）。" +
        t.unchecked + "：" + (remaining.length ? remaining.join("、") : t.none) +
        "。" + t.meetingTime + "：" + (meetingTime || t.notSet) + "。";
    }
    const result = await shareText(message, content.actions.sharePrompt);
    setFeedback(result === "copied" ? (content.locale === "en" ? "Checklist copied." : "清單已複製") : "");
  };

  return (
    <details id="checklist" className={styles.card} open>
      <summary className={styles.cardSummary}>
        <span className={styles.sectionKicker}>02 / CHECKLIST</span>
        <h2 className={styles.sectionTitle}>{content.navigation.checklist}</h2>
        <p className={styles.sectionIntro}>{content.headings.checklistDescription}</p>
      </summary>
      <div className={styles.cardBody}>
        <div className={styles.preflight}>
          <div className={styles.preflightProgress}>
            <div className={styles.preflightProgressHeader}>
              <span>{t.ready}</span>
              <div className={styles.preflightProgressActions}>
                <strong>{percent}%</strong>
                <button type="button" className={styles.resetButton} onClick={() => { setChecked({}); setFeedback(""); }}>{t.reset}</button>
                <button type="button" className={styles.shareButton} onClick={share}>{t.share}</button>
              </div>
            </div>
            <div className={styles.preflightProgressBar} role="progressbar" aria-label={t.progress} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
              <span className={styles.preflightProgressFill} style={{ width: percent + "%" }} />
            </div>
            <label className={styles.preflightTime}>
              <span>{t.meetingTime}</span>
              <input type="time" value={meetingTime} onChange={(event) => setMeetingTime(event.target.value)} />
            </label>
            {feedback && <p role="status" className={styles.helperText}>{feedback}</p>}
          </div>
          {checklistGroups.map((group, index) => (
            <div className={styles.preflightSection} data-group={group.id} key={group.id}>
              <div className={styles.preflightHeader}>
                <span className={styles.preflightIndex}>{index + 1}</span>
                <span className={styles.preflightTitle}>{t.sectionTitles[group.id]}</span>
              </div>
              <div className={styles.preflightList}>
                {group.items.map((id) => (
                  <div className={styles.preflightRow} key={id}>
                    <label className={styles.checkItem}>
                      <input type="checkbox" checked={checked[id] === true} onChange={(event) => setChecked((previous) => ({ ...previous, [id]: event.target.checked }))} />
                      <span>{content.checklistItems[id]}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
