import React from 'react'

function ImageItem({image, index}) {
  return (
    <div>
      <img className="object-cover w-48 h-48 rounded-md group relative cursor-pointer border border-gray-300 transition-transform hover:scale-105" 
      src={image.url} alt={image.title}  />
            <div className="p-3">
              <h2 className="text-lg font-semibold text-green-400">{image.title}</h2>
              <p className="text-sm text-gray-500">{image.description}</p>
            </div>
    </div>
  )
}

export default ImageItem
