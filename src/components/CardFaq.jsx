import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { answerQuestions } from "../utils/Constanta";
import FadeInOnScroll from "../animation/background/FadeInScroll";

function CardFaq() {
  const [isOpen, setIsOpen] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);
  const toggledetails = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setIsOpen(null); // Close any open FAQ when toggling
  };

  const displayedQuestions = showAll
    ? answerQuestions
    : answerQuestions.slice(0, 5);

  return (
    <div className="w-full h-auto md:p-20 flex flex-col justify-center items-center">
      <div className="relative w-full">
        {displayedQuestions.map((item, i) => (
          <div
            key={i}
            id={i}
            className="w-full h-auto p-5 flex flex-col justify-center items-center"
          >
            <div
              className={`w-full flex ${
                isOpen === i ? "rounded-tl-4xl rounded-tr-4xl" : "rounded-full"
              } px-3 py-2 md:py-5 md:px-10 justify-between`}
              style={{
                background:
                  "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
              }}
            >
              <div className="self-center px-7 md:px-0">
                <FadeInOnScroll once={false}>
                  <h1 className="text-sm md:text-xl">{item.questions}</h1>
                </FadeInOnScroll>
              </div>
              <div
                className="self-center text-l md:text-2xl px-3 md:px-0"
                onClick={() => toggledetails(i)}
              >
                {isOpen === i ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            {isOpen === i && (
              <div className="bg-white p-5 w-full">
                <div className="px-5">
                  <FadeInOnScroll once={false}>
                    <h1>{item.answer}</h1>
                  </FadeInOnScroll>
                </div>
              </div>
            )}
          </div>
        ))}
        {!showAll && answerQuestions.length > 5 && (
          <div className="relative">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#202020] via-[#202020]/80 to-transparent pointer-events-none"></div>
          </div>
        )}
      </div>

      {answerQuestions.length > 5 && (
        <div className="mt-8 flex justify-center my-10">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua FAQ"}
          </button>
        </div>
      )}
    </div>
  );
}

export default CardFaq;
