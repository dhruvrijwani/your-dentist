// import React from 'react';
// import './Gallery.css';
// import image1 from './img/1.jpg';
// import image2 from './img/2.jpg';
// import image3 from './img/3.jpg';
// import image4 from './img/4.jpg';
// import image5 from './img/5.jpg';
// import image6 from './img/6.jpg';
// import image7 from './img/7.jpg';
// // import other images as needed

// function Gallery() {
//   const images = [image1, image2, image3, image4, image5, image6, image7]; // Add other image variables here

//   return (
//     <div className="gallery_container">
//       <div className="gallery_heading">
//         <h3>Photo <span>Gallery</span></h3>
//       </div>
//       <div className="box">
//         {images.map((image, index) => (
//           <div className="dream" key={index}>
//             <img src={image} alt="" />
            
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default Gallery;


import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://yd-backend.onrender.com/api/images')
      .then(response => response.json())
      .then(data => {
        setImages(data.images.reverse());
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="gallery_container">
       <div className="gallery_heading">
         <h3>Photo <span>Gallery</span></h3>
       </div>
      <div className="box">
        {images.map(image => (
          <div key={image._id} >
            <img src={`https://yd-backend.onrender.com/${image.imageURL}`} alt={image.title} />
            {/* <p>{image.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


