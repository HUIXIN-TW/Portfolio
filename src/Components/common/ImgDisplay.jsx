import React from "react";

const ImgDisplay = ({ imgUrl }) => {
  if (!imgUrl) return null; // If no imgUrl is provided, don't render the component

  return (
    <img
      className="gif-responsive flex items-center justify-center w-full h-full"
      src={imgUrl}
      alt="IMG Display"
    />
  );
};

export default ImgDisplay;
