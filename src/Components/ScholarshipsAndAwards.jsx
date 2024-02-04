import React from "react";
import styled from "styled-components";
import scholarships_and_awardsData from "../data/scholarships_and_awards.json";

// Styled components
const AwardsContainer = styled.section`
  width: 95%;
  padding: 20px;
`;

const AwardCard = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const AwardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const AwardTitle = styled.h3`
  color: #333;
`;

const AwardPeriod = styled.span`
  text-align: left;
  font-style: italic;
`;

const AwardInstitution = styled.span`
  display: block;
  margin-top: 5px;
`;

const AwardDescription = styled.p`
  font-size: 0.9em;
`;

const ScholarshipsAndAwards = () => {
  return (
    <AwardsContainer>
      {scholarships_and_awardsData.map((award, index) => (
        <AwardCard key={index}>
          <AwardHeader>
            <AwardTitle>{award.name}</AwardTitle>
            <AwardPeriod>{award.period}</AwardPeriod>
          </AwardHeader>
          <AwardInstitution>{award.institution}</AwardInstitution>
          <AwardDescription>{award.description}</AwardDescription>
        </AwardCard>
      ))}
    </AwardsContainer>
  );
};

export default ScholarshipsAndAwards;
