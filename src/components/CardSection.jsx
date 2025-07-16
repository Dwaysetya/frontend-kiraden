import { useState, useRef } from "react";
import { cardRespons } from "../utils/Constanta";
import FadeInOnScroll from "../animation/background/FadeInScroll";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CardsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 48;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 48;
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const renderCard = () => {
    return (
      <>
        {cardRespons.map((card, index) => (
          <div
            key={index}
            ref={index === 0 ? cardRef : null}
            className="bg-[#202020] min-w-[100%] md:min-w-[30%] rounded-lg shadow-lg p-6 flex flex-col justify-between items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <FadeInOnScroll once={false}>
              <img
                src={card.logo}
                alt={`${card.title} Logo`}
                className="w-30 h-30 mb-4 object-contain"
              />
            </FadeInOnScroll>
            <FadeInOnScroll once={false}>
              <h3 className="text-xl font-semibold text-amber-500 mb-2">
                {card.title}
              </h3>
              <p className="text-white text-sm md:text-base mb-4">
                {card.description}
              </p>
            </FadeInOnScroll>
            <button
              onClick={() => openModal(card)}
              className="px-4 py-2 text-black rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              style={{
                background:
                  "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-t from-[#a87c2d] via-[#f3cb51] to-[#906126] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Lihat Selengkapnya</span>
            </button>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="w-full py-10 bg-[#2f2f2f] rounded-4xl relative">
      <div className="absolute top-20 sm:top-20 md:top-20 lg:top-20 left-0 right-0 h-0.5 bg-white z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full flex justify-center items-center mb-8">
          <div className="bg-[#2f2f2f] border-2 border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-2">
            <FadeInOnScroll once={false}>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center whitespace-nowrap p-2"
                style={{
                  background:
                    "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Program Kelas
              </h2>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Grid untuk cards */}
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap py-5 gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        >
          {renderCard()}
          <div className="absolute w-[92%] z-99 md:hidden flex justify-between mt-50">
            <button
              onClick={scrollLeft}
              className="absolute left-1 sm:left-4 top-1/2 transform-translate-y-1/2 bg-black/10 bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 sm:p-2 shadow-lg transition-all duration-200"
            >
              <IoIosArrowBack className="text-white" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-1 sm:right-4 top-1/2 transform-translate-y-1/2 bg-black/10 bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 sm:p-2 shadow-lg transition-all duration-200"
            >
              <IoIosArrowForward className="text-white" />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="relative flex justify-center items-center p-5">
              <img
                src={selectedCard.modalImage}
                alt={`${selectedCard.title} Image`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg transition duration-300 ease-in-out"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedCard.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-lgmd:text-base mb-4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: selectedCard.modalDescription.replace(
                      /\n/g,
                      "<br />"
                    ),
                  }}
                />
              </p>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-lg">
                {selectedCard.modalPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardsSection;
