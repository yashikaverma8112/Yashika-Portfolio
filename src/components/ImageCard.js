import React, { useState } from 'react';

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="image-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={image.src} alt={image.alt} />
      {isHovered && (
        <div className="image-details">
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
