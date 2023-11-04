import React from 'react';
import ImageItem from './components/ImageItem';

const Gallery = ({ images }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
            <ImageItem image={image} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
