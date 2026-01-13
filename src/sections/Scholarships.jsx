import React from "react";
import styled from "styled-components";
import scholarshipsData from "../data/scholarships.json";

// Styled components
const ScholarshipsContainer = styled.section`
  width: 100%;
  padding: 60px;

  @media (max-width: 768px) {
    /* Adjust 768px to your needs */
    padding: 20px;
  }
`;

const ScholarshipGroup = styled.div`
  margin-bottom: 40px;
`;

const ScholarshipCard = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const ScholarshipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ScholarshipTitle = styled.h3`
  text-align: left;
`;

const ScholarshipGroupTitle = styled.h2`
  margin-bottom: 15px;
  text-align: left;
`;

const ScholarshipPeriod = styled.span`
  text-align: right;
  font-style: italic;
`;

const ScholarshipInstitution = styled.span`
  display: block;
  margin-top: 5px;
`;

const ScholarshipDescription = styled.p`
  font-size: 0.9em;
  white-space: pre-line;
`;

const Scholarships = () => {
  const scholarshipItems = scholarshipsData.filter((item) => item.category === "Scholarship");

  return (
    <ScholarshipsContainer>
      <ScholarshipGroup>
        <ScholarshipGroupTitle>Scholarships</ScholarshipGroupTitle>
        {scholarshipItems.map((scholarship, index) => (
          <ScholarshipCard key={`scholarship-${index}`}>
            <ScholarshipHeader>
              <ScholarshipTitle>{scholarship.name}</ScholarshipTitle>
              {scholarship.period && <ScholarshipPeriod>{scholarship.period}</ScholarshipPeriod>}
            </ScholarshipHeader>
            {scholarship.institution && <ScholarshipInstitution>{scholarship.institution}</ScholarshipInstitution>}
            {scholarship.description && <ScholarshipDescription>{scholarship.description}</ScholarshipDescription>}
          </ScholarshipCard>
        ))}
      </ScholarshipGroup>
    </ScholarshipsContainer>
  );
};

export default Scholarships;
