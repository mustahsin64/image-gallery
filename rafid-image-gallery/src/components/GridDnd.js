import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";
  import React from 'react'
  import { useState } from "react";
import ImageItem from "./ImageItem";
  
export default function GridDnd({images}) {
    const [items, setItems] = useState([1, 2, 3, 4,5,6,7,8,9,10]); // supply your own state
    const [imageList,setImageList] = useState(images);
  
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
      const nextState = swap(imageList, sourceIndex, targetIndex);
      setImageList(nextState);
    }

    function onChange2(sourceId, sourceIndex, targetIndex, targetId) {
        const nextState = swap(items, sourceIndex, targetIndex);
        setItems(nextState);
      }
  
    return (
    //     <GridContextProvider onChange={onChange2}>
    //     <GridDropZone
    //       id="items"
    //       boxesPerRow={4}
    //       rowHeight={100}
    //       style={{ height: "400px" }}
    //     >
    //       {items.map(item => (
    //         <GridItem key={item}>
    //           <div
    //             className="flex justify-center p-4 m-4 bg-blue-300"
    //           >
    //             {item}
    //           </div>
    //         </GridItem>
    //       ))}
    //     </GridDropZone>
    //   </GridContextProvider>
    <div className="bg-gray-100 p-3">
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={5}
          rowHeight={220}
          style={{height:220*Math.ceil(imageList.length/5)}}
        >
          {imageList.map(image => (
            <GridItem key={image.id} onDragStart={(e) => {e.preventDefault()}}>
              {/* <div
                className="flex border border-gray-500 rounded-lg justify-center p-1 m-4 bg-white"
              > */}
               <ImageItem image={image}  />
                
              {/* </div> */}
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
      </div>
    );
  }