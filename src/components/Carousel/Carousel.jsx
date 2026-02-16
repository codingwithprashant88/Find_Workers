import React, { useState, useEffect } from "react";

function Carousel() {
  const [curr, setCurr] = useState(0); // current page
  const itemsPerSlide = 4; // show 4 images per slide

  const upperCarousel = [
    "https://img.freepik.com/premium-vector/comfort-construction-logo_1262410-8859.jpg?semt=ais_hybrid&w=740&q=80",
    "https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-image_317780.jpg",
    "https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-navy-blue-image_317812.jpg",
    "https://www.shutterstock.com/image-vector/construction-company-free-psd-logomodern-260nw-2288835517.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC98J8Mp118Z-mdwULPNXEQUgiItKdXgtm6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
    "https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-navy-blue-image_317812.jpg",
    "https://www.shutterstock.com/image-vector/construction-company-free-psd-logomodern-260nw-2288835517.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC98J8Mp118Z-mdwULPNXEQUgiItKdXgtm6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
    "https://www.shutterstock.com/image-vector/construction-company-free-psd-logomodern-260nw-2288835517.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC98J8Mp118Z-mdwULPNXEQUgiItKdXgtm6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
    "https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-navy-blue-image_317812.jpg",
    "https://www.shutterstock.com/image-vector/construction-company-free-psd-logomodern-260nw-2288835517.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC98J8Mp118Z-mdwULPNXEQUgiItKdXgtm6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
    "https://www.shutterstock.com/image-vector/construction-company-free-psd-logomodern-260nw-2288835517.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC98J8Mp118Z-mdwULPNXEQUgiItKdXgtm6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
    "https://www.shutterstock.com/image-vector/construction-company-free-psd-logomodern-260nw-2288835517.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC98J8Mp118Z-mdwULPNXEQUgiItKdXgtm6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6M8avSIyM32DC2-bO42v3w2vBS6IMeHcw&s",
  ];

  const totalPages = Math.ceil(upperCarousel.length / itemsPerSlide);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? totalPages - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === totalPages - 1 ? 0 : curr + 1));

  useEffect(() => {
    const initervel = setInterval(() => {
          next();
    }, 5000)
      return () => clearInterval(initervel)
  }, [curr])

  return (
    <div className="overflow-hidden relative ">
      {/* Carousel Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="flex w-full"
            style={{ flexShrink: 0 }}
          >
            {upperCarousel 
                   //start    0 * 4 = 0                  // end  0+1 = 1 = 1*4 = 4
              .slice(pageIndex * itemsPerSlide, (pageIndex + 1) * itemsPerSlide)
              .map((image, index) => (
                <div key={index} className="w-1/3 px-2">
                  <img
                    src={image}
                    alt={`Logo ${index}`}
                    className="w-full h-24  sm:h-28 object-contain"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurr(index)}
            className={`w-2 h-2 rounded-full ${
              curr === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;