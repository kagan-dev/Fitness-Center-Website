import React from "react";

const Gallery = () => {
  const gallery = [
    "../images/img1.webp",
    "../images/img2.jpg",
    "../images/img3.jpg",
    "../images/img4.jpg",
    "../images/img7.jpg",
    "../images/img8.jpg",
    "../images/img5.jpg",
    "../images/img6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
