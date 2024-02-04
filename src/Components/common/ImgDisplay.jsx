import React from "react";

const ImgDisplay = ({ imgUrl }) => {
  if (!imgUrl) return null; // If no imgUrl is provided, don't render the component

  return (
    <div className="gif-responsive flex items-center justify-center w-full h-full">
      <img src={imgUrl} alt="IMG Display" className="w-full" />
    </div>
  );
};

export default ImgDisplay;
