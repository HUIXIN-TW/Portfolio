import React from "react";
import styled from "styled-components";

const RefereeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const RefereeTitle = styled.h3`
  text-align: left;
`;

const RefereePeriod = styled.span`
  text-align: right;
  font-style: italic;
`;

const RefereeCard = ({
  refereeName,
  refereeType,
  currentPosition,
  relationship,
  periodWorking,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 ml-5 mr-5">
      <RefereeHeader>
        <RefereeTitle>
          {refereeName}, {currentPosition}
        </RefereeTitle>
        <RefereePeriod className="text-gray-600">{periodWorking}</RefereePeriod>
      </RefereeHeader>
      <p className="text-sm text-gray-900">{refereeType}</p>
      <p className="text-sm text-gray-500">{relationship}</p>
    </div>
  );
};

export default RefereeCard;
