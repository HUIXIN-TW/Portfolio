import React from "react";
import styled from "styled-components";

const image = new URL("../assets/images/under-constructure.jpg", import.meta.url).href;

// Styled components
const TerminalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #8ec07c;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  padding: 20px;
`;

const TerminalTitle = styled.h1`
  font-size: 1.5em;
  padding: 5px 10px;
  margin-top: 75px;
  border-bottom: 2px solid #555; // Separator line
  width: 100%; // Full width
  text-align: center; // Center the title
`;

const TerminalText = styled.div`
  font-size: 1em;
  padding: 10px;
  margin-top: 10px;
  text-align: left; // Align text to the left
  width: 100%; // Full width

  a {
    color: #8ec07c;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Highlight = styled.span`
  color: #d3d3d3;
  padding: 2px 5px;
  background-color: #444; // Slight background for highlight
  border-radius: 3px; // Rounded corners for highlight
`;

const StyledImage = styled.img`
  max-width: 100%; // Ensure the image is not larger than its container
  height: auto; // Keep image aspect ratio
  margin-top: 20px; // Space between text and image
  border: 2px solid #555; // Border to match the terminal style
`;

const Contact = () => {
  return (
    <TerminalContainer>
      <TerminalTitle>Stay Tuned!</TerminalTitle>
      <TerminalText>
        Our contact form is currently under construction. In the meantime, feel free to reach out to us at{" "}
        <Highlight>
          <a href="mailto:huixin.yang.tw@gmail.com" className="highlight">
            huixin.yang.tw@gmail.com
          </a>{" "}
        </Highlight>
        or download{" "}
        <a href="https://huixin-tw.github.io/Resume/" target="_blank" rel="noopener noreferrer" className="highlight">
          Resume powered by github.io.
        </a>
      </TerminalText>
      <TerminalText>
        Our new feature harnesses <Highlight>Firebase</Highlight> for seamless real-time data synchronization and secure
        backend operations.
      </TerminalText>
      <StyledImage src={image} alt="Under Construction" />
    </TerminalContainer>
  );
};

export default Contact;
