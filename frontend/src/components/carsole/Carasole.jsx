

import React, { useState, useEffect } from "react";
import "./Carousel.css";

import Img1 from "../../assets/home/kerelioMax2.png";
import Img2 from "../../assets/home/sunscream2.png";
import Img3 from "../../assets/home/homeimg2.png";
import Img4 from "../../assets/home/qutifil2.png";
import Img5 from "../../assets/home/ideglow1.png";
import Img6 from "../../assets/home/pellegard.png";
// import Img7 from "../../assets/home/image.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={src} alt={`slide-${index}`} />
        </div>
      ))}

      {/* Dots */}
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
