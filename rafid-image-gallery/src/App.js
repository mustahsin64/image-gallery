import React from 'react';
import Gallery from './Gallery';

function App() {

  const images = [
    {
      url: 'https://thesweetsetup.com/wp-content/uploads/2021/12/Must-Have-Apps-2022-Hero-2.jpg',
      title: 'apple.jpg',
      description: 'Image 1 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    // Add more images as needed
  ];

  return (
    <div>
        <h1>Image Gallery</h1>
        <Gallery images={images} />
    </div>
  );
}

export default App;
