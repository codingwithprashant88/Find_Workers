import React, { useEffect, useState } from "react";
import Card from "../Card";

function SecondCarousel() {
  const [current, setCurrent] = useState(0);

  const imageItem = [
    "https://thefederal.com/h-upload/2025/11/22/578875-labour-.webp",
    "https://c.ndtvimg.com/2024-05/rn21d4to_labour-day_625x300_01_May_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA0L3NyLWltYWdlLTA5MDQyNS1yZTA1LXMtMDU4XzEuanBn.jpg"
  ];

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? imageItem.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr === imageItem.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    setInterval(() => {
      next()
    }, 5000)
  }, [current])

  return (
    <>
      <div className="relative w-full h-56  md:h-96 overflow-hidden rounded-lg">
        {/* Slides */}
        {imageItem.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {imageItem.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 text-white text-6xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 text-white text-6xl"
        >
          ›
        </button>
      </div>

      <Card />
    </>
  );
}

export default SecondCarousel;
