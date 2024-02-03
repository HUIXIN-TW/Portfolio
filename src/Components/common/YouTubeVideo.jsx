import React from "react";

// YouTube video component
const YouTubeVideo = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playlist=${videoId}&loop=1`; // Add additional parameters as needed
  return (
    <div className="video-responsive flex items-center justify-center w-full h-full">
      {" "}
      {/* Flexbox centering */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {" "}
        {/* 16:9 Aspect Ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          allow="encrypted-media"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default YouTubeVideo;
