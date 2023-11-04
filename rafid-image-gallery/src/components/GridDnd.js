import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import React from "react";
import { useState } from "react";
import ImageItem from "./ImageItem";

export default function GridDnd({ images }) {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [imageList, setImageList] = useState(
    images.map((image) => ({
      ...image,
      selected: false,
    }))
  );

  const handleToggleSelect = (imageId) => {
    setImageList((prevImageList) =>
      prevImageList.map((image) =>
        image.id === imageId ? { ...image, selected: !image.selected } : image
      )
    );
  };

  const countSelectedImages = () => {
    return imageList.filter((image) => image.selected).length;
  };

  // target id will only be set if dragging from one dropzone to another.
  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(imageList, sourceIndex, targetIndex);
    setImageList(nextState);
  }

  return (
    <div className="bg-gray-100 p-3">
      <h1 className="text-2xl mb-2">
        {countSelectedImages() > 0
          ? `Selected: ${countSelectedImages()}`
          : "Image Gallery"}
      </h1>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={5}
          rowHeight={220}
          style={{ height: 220 * Math.ceil(imageList.length / 5) }}
        >
          {imageList.map((image,index) => (
            <GridItem
              key={image.id}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            >
              {/* <div
                className="flex border border-gray-500 rounded-lg justify-center p-1 m-4 bg-white"
              > */}
              <ImageItem
                image={image}
                selected={image.selected}
                onToggleSelect={handleToggleSelect}
                index={index}
              />

              {/* </div> */}
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}
