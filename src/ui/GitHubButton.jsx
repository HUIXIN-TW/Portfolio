import React, { useState } from "react";

const github = new URL("../assets/images/socials/github-mark.svg", import.meta.url).href;
const githubWhite = new URL("../assets/images/socials/github-mark-white.svg", import.meta.url).href;

const GitHubButton = ({ name }) => {
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
        <span className="ml-2">{name}</span>
      </a>
    </div>
  );
};

export default GitHubButton;
