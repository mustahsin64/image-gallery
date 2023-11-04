import React from "react";
import ImageItem from "./components/ImageItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Gallery = ({ images }) => {
  return (
    <div className="container mx-auto p-4">
      <DragDropContext
        onDragEnd={(result, provided) => {
          // TODO: implement onDragEnd
        }}
      >
      <div
            //   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100">
            className="container mx-auto">
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div
              className="grid grid-cols-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                    {/* <img src={image.url} alt={image.title}/> */}
                      <ImageItem  image={image} index={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            
          )}
        </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
