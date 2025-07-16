import { useState, useEffect, useRef } from "react";
import { isiKabar } from "../utils/Constanta";
import FadeInOnScroll from "../animation/background/FadeInScroll";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function KabarBerita() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 390, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      // Tambahkan state baru ke history browser
      window.history.pushState({ modal: true }, "");

      // Ketika user menekan tombol back
      const handlePopState = () => {
        closeModal(); // tutup modal
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        // Kembalikan 1 step history jika modal ditutup
        if (window.history.state && window.history.state.modal) {
          window.history.back();
        }
      };
    }
  }, [isModalOpen]);

  const truncateText = (text, maxWords = 20) => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="flex w-full justify-center items-center px-5 md:px-20 py-10 bg-black">
        <div className="flex w-full max-w-7xl flex-col gap-2">
          <FadeInOnScroll once={false}>
            <h1 className="text-white font-bold text-3xl md:text-4xl">
              Kabar Berita
            </h1>
          </FadeInOnScroll>
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          >
            <div className="w-full flex gap-10 my-10 relative">
              {isiKabar.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e1e] p-6 rounded-lg shadow-md text-white flex flex-col gap-4
                    w-[calc(25%-1.5rem)] min-w-[100%] md:min-w-[22%] md: snap-start"
                >
                  <FadeInOnScroll once={false}>
                    <div>{item.judul}</div>
                    <div className="border-b-2 py-2 border-white w-full" />
                    <div className="text-sm py-2 text-gray-400">
                      {item.tanggal}
                    </div>
                    <div className="text-xs md:text-lg flex flex-col">
                      {truncateText(item.description)}
                      {item.description.split(" ").length > 20 && (
                        <span
                          className="text-blue-400 text-xs md:text-lg  cursor-pointer hover:text-blue-300"
                          onClick={() => openModal(item)}
                        >
                          lihat selengkapnya
                        </span>
                      )}
                    </div>
                  </FadeInOnScroll>
                </div>
              ))}
            </div>
            <div className="absolute w-[90%] z-50 md:hidden flex justify-between mt-50">
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
      </section>
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="px-6 pb-6">
              <img
                src={selectedItem.foto}
                alt={selectedItem.judul}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedItem.judul}
              </h2>
              <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{
                    __html: selectedItem.description.replace(/\n/g, "<br />"),
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default KabarBerita;
