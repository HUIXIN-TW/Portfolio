import React from "react";

const ProjectImage = ({ imageUrl, alt }) => {
  if (!imageUrl) return null; // If no imageUrl is provided, don't render the component

  return (
    <img className="gif-responsive flex items-center justify-center w-full h-full" src={imageUrl} alt={alt} />
  );
};

export default ProjectImage;
