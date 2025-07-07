import React, { useState, useEffect, useRef } from "react";
import Card from "./Card/Card";
import "./Carousel.css";

const Carousel = ({ data, renderCard }) => {
  const baseData = data;
  const Extendeddata = [
    baseData[baseData.length - 1],
    ...baseData,
    baseData[0],
  ]; // clone last and first

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slidesRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentSlide === data.length + 1) {
      setIsTransitioning(false);
      setCurrentSlide(1); // jump to real first
    } else if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(data.length); // jump to real last
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <section className="carousel-wrapper" aria-roledescription="carousel"
      aria-label="Image carousel showing featured destinations">
      <div
        ref={slidesRef}
        className="carousel-slides-container"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
         role="group"
        aria-live="off"
      >
        {Extendeddata.map((item, index) => (
          <div
            key={index}
            className="card-container"
            role="group"
            aria-label={`Slide ${
              ((index + baseData.length) % baseData.length) + 1
            } of ${baseData.length}`}
          >
            {renderCard(item)}
          </div>
        ))}
      </div>

      <div className="carousel-btn-container">
        <button
          onClick={prevSlide}
          className="carousel-btn"
          aria-label="Previous slide"
        >
          <span aria-hidden="true">{`<`}</span>
          <p>Previous</p>
        </button>

        <div
          className="carousel-slide-indicator-container"
          role="presentation"
          aria-hidden="true"
        >
          <div
            className="carousel-slide-tracker"
            style={{
              width: `${100 / baseData.length}%`,
              transform: `translateX(${(currentSlide - 1) * 100}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          ></div>
        </div>

        <div
          onClick={nextSlide}
          className="carousel-next-btn"
          aria-label="Next slide"
        >
          <p>Next</p>
          <span aria-hidden="true">{`>`}</span>
        </div>
      </div>

      {/* Slide count */}
      <div aria-label="Slide position">
        <span>
          {((currentSlide - 1 + baseData.length) % baseData.length) + 1}
        </span>
        <span>/</span>
        <span>{baseData.length}</span>
      </div>
    </section>
  );
};

export default Carousel;
