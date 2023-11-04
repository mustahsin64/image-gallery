import React from 'react';
import Gallery from './Gallery';
import ImageGallery from './ImageGallery';
import GridDnd from './components/GridDnd';

function App() {

  const images = [
    {
      id:'1',
      url: 'https://thesweetsetup.com/wp-content/uploads/2021/12/Must-Have-Apps-2022-Hero-2.jpg',
      title: 'apple.jpg',
      description: 'Image 1 Description',
    },
    {
      id:'2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Apple_iPhone_13_Pro_on_MacBook_Pro_08.jpg',
      title: 'second.jpg',
      description: 'Image 2 Description',
    },
    {
      id:'3',
      url: 'https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy',
      title: 'third',
      description: 'Image 2 Description',
    },
    {
      id:'4',
      url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2826&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'fourth image.jpg',
      description: 'Image 2 Description',
    },
    {
      id:'5',
      url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'fifth',
      description: 'Image 2 Description',
    },
    {
      id:'6',
      url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      id:'7',
      url: 'https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?auto=format&fit=crop&q=80&w=2796&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      id:'8',
      url: 'https://images.unsplash.com/photo-1532198528077-0d9e4ca9bb40?auto=format&fit=crop&q=80&w=2894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      id:'9',
      url: 'https://images.unsplash.com/photo-1532198528077-0d9e4ca9bb40?auto=format&fit=crop&q=80&w=2894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      id:'10',
      url: 'https://images.unsplash.com/photo-1532198528077-0d9e4ca9bb40?auto=format&fit=crop&q=80&w=2894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    {
      id:'11',
      url: 'https://images.unsplash.com/photo-1532198528077-0d9e4ca9bb40?auto=format&fit=crop&q=80&w=2894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image2',
      description: 'Image 2 Description',
    },
    // Add more images as needed
  ];

  return (
    <div className='bg-gray-300 h-screen'>
        <div className='bg-white rounded-md'>
          
          <GridDnd images={images}/>
          {/* <ImageGallery images={images} /> */}
        </div>
        
        {/* <Gallery images={images} /> */}
    </div>
  );
}

export default App;
