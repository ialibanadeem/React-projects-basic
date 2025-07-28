import React, { useState } from 'react';
import './styles.css';

export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1037/600/300",
    "https://picsum.photos/id/1041/600/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt="slide"
        className="slide-image"
      />

      <button className="nav left" onClick={goToPrevious}>
        ❮
      </button>
      <button className="nav right" onClick={goToNext}>
        ❯
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
