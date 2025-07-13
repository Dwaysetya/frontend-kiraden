import React, { useState, useEffect } from "react";
import { slides } from "../../../utils/Constanta";
import FadeInOnScroll from "../../../animation/background/FadeInScroll";

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getVisibleItems = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setCurrentSlide(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = slides.length - visibleItems + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getTranslateX = () => {
    return currentSlide * (100 / visibleItems);
  };

  return (
    <FadeInOnScroll once={false}>
      <div className="w-full mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
          Galeri
        </h2>
        <div className="relative overflow-hidden bg-gray-500 rounded-2xl p-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${getTranslateX()}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 px-2 ${
                  visibleItems === 1
                    ? "w-full"
                    : visibleItems === 2
                    ? "w-1/2"
                    : "w-1/4"
                }`}
              >
                <div
                  className={`${slide.color}  bg-cover bg-center bg-no-repeat rounded-xl h-32 flex items-center justify-between text-white shadow-lg transform hover:scale-105 transition-all duration-300 px-4 sm:px-6`}
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  {/* <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm">{slide.content}</p>
                  </div> */}
                  {/* <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                    <span className="text-xs sm:text-sm font-bold">
                      {slide.id}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/10 bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 sm:p-2 shadow-lg transition-all duration-200"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/10 bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 sm:p-2 shadow-lg transition-all duration-200"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2 px-4 overflow-x-auto">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                currentSlide === index
                  ? "bg-amber-500 w-6 sm:w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="mt-3 sm:mt-4 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-amber-500 h-1 rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / maxSlides) * 100}%` }}
          />
        </div>
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-sm sm:text-base text-white">
            Menampilkan slide {currentSlide + 1} dari {maxSlides}
            {/* <span className="ml-2 text-xs sm:text-sm">
              Tampilan: {visibleItems} kotak • Auto-slide setiap 3 detik
            </span> */}
          </p>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default AutoCarousel;
