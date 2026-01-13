import React, { useState } from "react";

const resume = new URL("../assets/images/resume.svg", import.meta.url).href;
const resumeWhite = new URL("../assets/images/resume-white.svg", import.meta.url).href;

const ResumeButton = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <a
        href="https://huixin-tw.github.io/Resume/"
        className="black_btn" // Use hover state to toggle class names
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security for opening links in a new tab
      >
        <img src={isHovered ? resume : resumeWhite} alt="Resume Logo" width={20} height={20} />
        <span className="ml-2">{name}</span>
      </a>
    </div>
  );
};

export default ResumeButton;
