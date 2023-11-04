import React, {useState} from 'react'


function ImageItem({image, selected, onToggleSelect, index}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        if (selected) return;
        setIsHovered(false);
      };

  return (
    <div
      className="w-48 h-48 flex justify-center mx-3 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="object-cover w-48 h-48 border border-gray-400 rounded-md relative group cursor-pointer hover:scale-105 transition-transform hover:shadow-lg" 
      src={image.url} alt={image.title}  />
      {isHovered && (
        <div className="absolute top-1 right-1">
        <input
            type="checkbox"
            checked={selected}
            onChange={() => onToggleSelect(image.id)}
          />
        </div>
      )}
      </div>
        
    
  )
}

export default ImageItem
