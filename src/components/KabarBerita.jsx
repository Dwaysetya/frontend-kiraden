import React, { useState } from "react";

function KabarBerita() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isiKabar = [
    {
      tanggal: "30 Mei 2024",
      judul: "Pendirian Sekolah Paranormal Indonesia",
      description:
        "Didirikan pada tanggal 30 Mei 2024 oleh Rifki Rahmdani, Sekolah Paranormal Indonesia hadir sebagai wadah pembelajaran ilmu-ilmu adiluhur warisan leluhur. Sekolah ini bertujuan untuk melestarikan dan mengembangkan pengetahuan spiritual tradisional Indonesia yang telah diwariskan turun-temurun. Dengan pendekatan yang menggabungkan tradisi dan modernitas, Sekolah Paranormal Indonesia menjadi tempat yang tepat bagi mereka yang ingin mendalami ilmu kebatinan dan spiritual.",
      foto: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      tanggal: "15 Juni 2024",
      judul: "Atraksi Debus - Seni Tradisional Indonesia",
      description:
        "Sekolah Paranormal mengadakan Atraksi Debus, MENGANGKAT SENI TRADISIONAL ASLI INDONESIA. Pertunjukan ini menampilkan keahlian spiritual dan kekuatan batin yang telah dipelajari para siswa. Debus merupakan salah satu warisan budaya Indonesia yang memadukan unsur spiritual, seni, dan kekuatan mental. Melalui pertunjukan ini, Sekolah Paranormal Indonesia membuktikan bahwa ilmu spiritual tradisional masih relevan dan dapat diapresiasi di era modern.",
      foto: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    },
    {
      tanggal: "20 Juli 2024",
      judul: "Halal Bihalal Tahunan",
      description:
        "Halal Bihalal adalah acara yang kita adakan setiap tahunnya, mengingat dengan adanya ini, menjalin tali silahturahmi dengan sesama anggota. Acara ini menjadi momen penting untuk mempererat hubungan antaranggota komunitas Sekolah Paranormal Indonesia. Dalam suasana yang hangat dan penuh kekeluargaan, para anggota berbagi pengalaman, pengetahuan, dan saling mendoakan. Tradisi ini juga menjadi wadah untuk merencanakan program-program ke depan yang akan dilaksanakan oleh sekolah.",
      foto: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    },
    {
      tanggal: "5 Agustus 2024",
      judul: "Kunjungan Tamu Spesial Internasional",
      description:
        "Kedatangan tamu yang sangat spesial bagi Sekolah PARANORMAL, menjadikan Sekolah Paranormal semakin mendunia. Kunjungan ini membawa dampak positif dalam pengembangan jaringan internasional dan pertukaran pengetahuan spiritual lintas budaya. Para tamu memberikan apresiasi tinggi terhadap kearifan lokal Indonesia yang diajarkan di sekolah. Momen bersejarah ini menandai dimulainya kerjasama internasional dalam bidang studi paranormal dan spiritual.",
      foto: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    },
    {
      tanggal: "12 September 2024",
      judul: "Seminar Spiritual dan Kebatinan",
      description:
        "Sekolah Paranormal Indonesia mengadakan seminar besar tentang spiritual dan kebatinan yang dihadiri oleh ratusan peserta dari berbagai daerah. Acara ini menghadirkan narasumber-narasumber terkemuka dalam bidang spiritual dan paranormal. Peserta mendapat kesempatan untuk belajar langsung dari para ahli dan praktisi berpengalaman. Seminar ini juga menjadi ajang diskusi dan berbagi pengalaman antarpenggiat ilmu spiritual di Indonesia.",
      foto: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    },
    {
      tanggal: "28 Oktober 2024",
      judul: "Workshop Pengembangan Diri",
      description:
        "Workshop pengembangan diri yang diselenggarakan Sekolah Paranormal Indonesia bertujuan untuk membantu peserta memahami potensi spiritual dalam diri mereka. Melalui berbagai teknik meditasi, visualisasi, dan latihan spiritual, peserta dibimbing untuk mencapai keseimbangan jiwa dan raga. Program ini dirancang khusus untuk pemula yang ingin memulai perjalanan spiritual mereka dengan bimbingan yang tepat dan terarah.",
      foto: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    },
    {
      tanggal: "15 November 2024",
      judul: "Pelatihan Instruktur Baru",
      description:
        "Program pelatihan instruktur baru diluncurkan untuk mempersiapkan generasi penerus yang akan mengajarkan ilmu spiritual dan paranormal. Calon instruktur menjalani pelatihan intensif selama beberapa bulan untuk memastikan kualitas pengajaran tetap terjaga. Program ini mencakup teori, praktik, dan metodologi pengajaran yang efektif. Lulusan program ini akan menjadi ujung tombak dalam menyebarkan ilmu spiritual ke seluruh Indonesia.",
      foto: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ];

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
          {/* Judul */}
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            Kabar Sekolah Paranormal
          </h1>

          {/* Konten */}
          <div className="flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <div className="w-full flex gap-10 my-10">
              {isiKabar.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e1e] p-6 rounded-lg shadow-md text-white flex flex-col gap-4
                       w-[calc(25%-1.5rem)] min-w-[100%] md: snap-start"
                >
                  <div className="border-b-2 border-white w-full" />
                  <div className="text-sm text-gray-400">{item.tanggal}</div>
                  <div className="text-base flex flex-col">
                    {truncateText(item.description)}
                    {item.description.split(" ").length > 20 && (
                      <span
                        className="text-blue-400 cursor-pointer hover:text-blue-300"
                        onClick={() => openModal(item)}
                      >
                        lihat selengkapnya
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal content */}
            <div className="px-6 pb-6">
              {/* Foto */}
              <img
                src={selectedItem.foto}
                alt={selectedItem.judul}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Judul */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedItem.judul}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default KabarBerita;
