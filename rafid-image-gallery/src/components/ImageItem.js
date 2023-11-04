import React from 'react'


function ImageItem({image}) {
  return (
      <img className="object-cover w-48 h-48 border border-gray-400 rounded-md group relative cursor-pointer hover:scale-105 transition-transform hover:shadow-lg" 
      src={image.url} alt={image.title}  />
        
    
  )
}

export default ImageItem
