import React from 'react';
import ImageCard from './ImageCard';
import frontend from '../assets/frontend.png'
const ProjectContainer = () => {
  const images = [
    {
      src: {frontend},
      alt: 'Image 1',
      title: 'Image 1 Title',
      description: 'Image 1 Description',
    },
    // Add more images here
  ];

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
};

export default ProjectContainer;

