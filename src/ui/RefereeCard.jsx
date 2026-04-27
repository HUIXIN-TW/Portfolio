import React from "react";
import { card, cardMeta, cardPadding, cardTitle, mutedText } from "../styles/uiClasses";

const RefereeCard = ({ refereeName, refereeType, currentPosition, relationship, periodWorking }) => {
  return (
    <div className={`${card} ${cardPadding}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className={cardTitle}>
          {refereeName}, {currentPosition}
        </h3>
        <span className={cardMeta}>{periodWorking}</span>
      </div>
      <p className="text-sm text-slate-900">{refereeType}</p>
      <p className={mutedText}>{relationship}</p>
    </div>
  );
};

export default RefereeCard;
