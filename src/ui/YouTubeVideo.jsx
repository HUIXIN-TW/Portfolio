import React from "react";

// YouTube video component
const YouTubeVideo = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1`; // Add additional parameters as needed
  return (
    <iframe
      className="w-full h-full" // Ensure full width and height within its container
      src={src}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
      autoPlay="0"
    ></iframe>
  );
};

export default YouTubeVideo;
