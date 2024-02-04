import React from "react";
import styled from "styled-components";
import { uniqueTechnologies } from "./UniqueTechnologies";

const sortedTechnologies = [...uniqueTechnologies].sort();

const StyledButton = styled.button`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 0px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 3px;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;

const TechnologiesButton = ({ onTechnologyClick }) => {
  return (
    <div>
      <StyledButton onClick={() => onTechnologyClick(null)}>#All</StyledButton>
      {sortedTechnologies.map((technology, index) => (
        <StyledButton key={index} onClick={() => onTechnologyClick(technology)}>
          #{technology}
        </StyledButton>
      ))}
    </div>
  );
};

export default TechnologiesButton;
