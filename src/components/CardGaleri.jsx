import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CardGallery() {
  const [galeri, setGaleri] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [page, setPage] = useState(1);

  const LIMIT = 12;
  const OFFSET = (page - 1) * LIMIT;
  const TOTAL = Math.ceil(galeri.length / LIMIT);

  useEffect(() => {
    fetch("/data/gallery_data.json")
      .then((res) => res.json())
      .then((data) => setGaleri(data))
      .catch((err) => console.error("Gagal load galeri:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#202020] text-white px-6 py-12">
      <h1 className="text-3xl md:text-5xl text-center font-serif text-white mb-10 tracking-wider">
        ✦ Paranormal Gallery ✦
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galeri.slice(OFFSET, OFFSET + LIMIT).map((image, index) => (
          <motion.div
            key={image.id || index}
            className="relative cursor-pointer group overflow-hidden border-4 border-yellow-600 rounded-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedImg(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt || `Paranormal activity ${index + 1}`}
              className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
              Klik untuk perbesar
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap w-full justify-center items-center gap-3 py-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="button-pagination"
        >
          <IoIosArrowBack />
          Prev
        </button>

        <div className="flex flex-wrap gap-1 mx-2">
          {Array.from({ length: TOTAL }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-3 py-1.5 text-sm rounded-md transition ${
                page === index + 1
                  ? "bg-yellow-600 text-white font-semibold"
                  : "bg-white text-black hover:bg-yellow-100 hover:text-yellow-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page * LIMIT >= galeri.length}
          className="button-pagination"
        >
          Next
          <IoIosArrowForward />
        </button>
      </div>

      {/* ✅ Modal Preview */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)} // ✅ tutup modal
        >
          <motion.img
            src={selectedImg}
            alt="Preview"
            className="max-w-3xl max-h-[80vh] rounded-xl border-4 border-yellow-600 shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </div>
      )}
    </div>
  );
}

export default CardGallery;
