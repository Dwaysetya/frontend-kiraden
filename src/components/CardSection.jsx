import React, { useState } from "react";

// Data contoh untuk kartu
const cardData = [
  {
    id: 1,
    logo: "https://via.placeholder.com/64",
    title: "Hipnoterapi",
    description:
      "Pelajari teknik hipnoterapi untuk penyembuhan dan pengembangan diri.",
    modalImage: "https://via.placeholder.com/600x400",
    modalDescription:
      "Hipnoterapi adalah metode yang menggunakan hipnosis untuk membantu individu mencapai perubahan positif dalam pikiran dan perilaku.",
    modalPoints: [
      "Mengatasi fobia dan kecemasan.",
      "Meningkatkan kepercayaan diri.",
      "Mendukung penyembuhan emosional.",
    ],
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/64",
    title: "Indra Keenam",
    description:
      "Kembangkan kemampuan intuitif dan persepsi ekstrasensor Anda.",
    modalImage: "https://via.placeholder.com/600x400",
    modalDescription:
      "Pelatihan indra keenam membantu Anda mengasah intuisi dan kemampuan metafisik untuk memahami dunia di luar panca indera.",
    modalPoints: [
      "Meningkatkan sensitivitas energi.",
      "Melatih clairvoyance dan clairsentience.",
      "Memahami sinyal alam semesta.",
    ],
  },
  {
    id: 3,
    logo: "https://via.placeholder.com/64",
    title: "Energi Metafisik",
    description:
      "Kuasai energi metafisik untuk keseimbangan dan kekuatan batin.",
    modalImage: "https://via.placeholder.com/600x400",
    modalDescription:
      "Pelajari cara mengelola dan memanfaatkan energi metafisik untuk kesehatan spiritual dan fisik.",
    modalPoints: [
      "Teknik meditasi energi.",
      "Pembersihan aura dan cakra.",
      "Penguatan energi pelindung.",
    ],
  },
];

const CardsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <section className="w-full py-10 bg-[#2f2f2f] rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Program Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-[#202020] rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.logo}
                alt={`${card.title} Logo`}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-amber-500 mb-2">
                {card.title}
              </h3>
              <p className="text-white text-sm md:text-base mb-4">
                {card.description}
              </p>
              <button
                onClick={() => openModal(card)}
                className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors duration-200"
              >
                Lihat Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedCard.modalImage}
                alt={`${selectedCard.title} Image`}
                className="w-full h-48 object-cover rounded-t-lg"
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
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {selectedCard.modalDescription}
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm md:text-base">
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
