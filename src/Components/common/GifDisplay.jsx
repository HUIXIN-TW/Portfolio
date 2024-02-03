import React from "react";

const GIFDisplay = ({ gifUrl }) => {
  if (!gifUrl) return null; // If no gifUrl is provided, don't render the component

  return (
    <div className="gif-responsive flex items-center justify-center w-full h-full">
      <img src={gifUrl} alt="GIF Display" className="w-full" />
    </div>
  );
};

export default GIFDisplay;
