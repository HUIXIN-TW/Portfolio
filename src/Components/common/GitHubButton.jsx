import React, { useState } from "react";
import github from "../../assets/images/socials/github-mark.svg";
import githubWhite from "../../assets/images/socials/github-mark-white.svg";

const GitHubButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <a
        href="https://github.com/HUIXIN-TW"
        className="black_btn" // Use hover state to toggle class names
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security for opening links in a new tab
      >
        <img src={isHovered ? github : githubWhite} alt="GitHub Logo" width={20} height={20} />
        <span className="ml-2">GitHub</span>
      </a>
    </div>
  );
};

export default GitHubButton;
