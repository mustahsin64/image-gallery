import React from 'react'
import ImageItem from './components/ImageItem'
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd'
import { useState } from 'react';



function ImageGallery({images}) {

    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        console.log(sourceIndex + ' --->  ' + targetIndex);
        //console.log('imageList' + JSON.stringify(imageList));
        const nextState = swap(imageList,sourceIndex,targetIndex);
        setImageList(nextState); 
        //console.log('new imageList' + JSON.stringify(imageList));
    }

    const [imageList,setImageList] = useState(images);

    return (
        <GridContextProvider onChange={onChange}>
        <div className="bg-gray-100">
        
            <GridDropZone 
            boxesPerRow={4} 
            rowHeight={280} 
            style={{height:280*(imageList.length/4)}}
            id="images">
        {imageList.map((image, index) => (
            <GridItem key={image.id}>
                <ImageItem image={image}  />
            </GridItem>
        ))}
        </GridDropZone>
        </div>
        </GridContextProvider>
        
      );
}

export default ImageGallery
