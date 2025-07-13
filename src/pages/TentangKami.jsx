import { useEffect } from "react";
import Background from "../assets/section2/12 copy.png";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import { abouteGaleri } from "../utils/Constanta";
import FadeInOnScroll from "../animation/background/FadeInScroll";

function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function rendergaleri() {
    return (
      <div className="flex flex-wrap justify-center">
        {" "}
        {abouteGaleri.map((tentang, index) => (
          <div key={index} className="w-[45%] md:w-[25%] p-2">
            {" "}
            <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-lg">
              {" "}
              <img
                src={tentang.img}
                alt={tentang.alt || `Gambar Galeri ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <main
      className="w-full min-h-screen justify-center items-center bg-cover bg-center bg-no-repeat absolute inset-0 h-full object-contain object-center z-0"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <header>
        <Navbar />
      </header>

      {/* Hero Section - Tentang Kami */}
      <section className="w-full text-white py-20 md:py-32 px-4 md:px-20 bg-black/5 backdrop-blur-sm">
        <div className="container mx-auto mt-16 md:mt-24">
          {" "}
          {/* mt disesuaikan dengan tinggi navbar */}
          <FadeInOnScroll once={false}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Tentang Kami
            </h1>
            <p className="text-base md:text-lg max-w-3xl text-justify">
              Sekolah Paranormal Indonesia adalah lembaga pendidikan spiritual
              modern yang didirikan pada tanggal 30 Mei 2024 oleh Rifki
              Rahmadani, mempersiapkan individu dan pembimbing spiritual yang
              berbakat, serta mampu menghadapi tantangan spiritual dan
              kompleksitas hidup dengan kebijaksanaan.
            </p>
          </FadeInOnScroll>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Konten Utama - Tentang Kami (Detail) */}
      <section className="w-full h-auto bg-[#202020] text-white py-10 md:py-20 px-4 md:px-20">
        <div className="container mx-auto">
          {/* Navigasi Sub-menu (Tentang Kami, Visi Misi, Struktur Sekolah) */}
          <div className="flex gap-4 md:gap-8 border-b border-gray-700 pb-4 mb-8 text-sm md:text-base">
            <a
              href="#tentang-kami-detail"
              className="underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              Tentang Kami
            </a>
            <a
              href="#visi-misi-nilai"
              className="hover:underline hover:decoration-amber-500 hover:decoration-2 hover:underline-offset-4"
            >
              Visi, Misi, dan Tata Nilai
            </a>
            <a
              href="#mitra-kami"
              className="hover:underline hover:decoration-amber-500 hover:decoration-2 hover:underline-offset-4"
            >
              Mitra Kami
            </a>
          </div>

          <div id="tentang-kami-detail">
            {" "}
            <FadeInOnScroll once={false}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tentang Kami
              </h2>
            </FadeInOnScroll>
            <div className="text-base md:text-lg leading-relaxed space-y-4 text-justify">
              <FadeInOnScroll once={false}>
                <p>
                  Sekolah Paranormal Indonesia adalah lembaga pendidikan
                  spiritual modern yang didirikan pada tanggal 30 Mei 2024 oleh
                  Rifki Rahmadani, mempersiapkan individu dan pembimbing
                  spiritual yang berbakat, serta mampu menghadapi tantangan
                  spiritual dan kompleksitas hidup dengan kebijaksanaan. Kami
                  berkomitmen untuk membentuk generasi baru para profesional
                  spiritual yang berintegritas, berpengetahuan luas, dan mampu
                  memberikan dampak positif bagi siapa pun yang ingin
                  menjelajahi jalan spiritual mereka.
                </p>
                <p>
                  Berpijak pada akar budaya Nusantara yang kaya akan ajaran
                  spiritual dan penyembuhan alami, sekolah ini berdiri bukan
                  sekadar sebagai tempat menimba ilmu, melainkan sebagai
                  padepokan modern — tempat bersemedi, bertanya, dan kembali
                  menemukan jati diri sejati.
                </p>
                <p>
                  Bidang yang kami tekuni mencakup:
                  <ul className="list-disc text-amber-400">
                    <li>
                      Pendidikan Kesehatan Holistik, sebagai jalan menjaga
                      keselarasan antara raga, rasa, dan jiwa.
                    </li>
                    <li>
                      Olah Pikir dan Metafisika, untuk mengasah ketajaman batin,
                      intuisi, dan kesadaran lintas dimensi.
                    </li>
                    <li>
                      Terapi dan Pengobatan Tradisional, yang merujuk pada
                      kearifan lokal dalam menyembuhkan, merawat, dan menjaga
                      keharmonisan tubuh dan alam.
                    </li>
                  </ul>
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll once={false}>
                <p>
                  Dengan semangat ngelmu tanpa pamrih, kami memanggil para
                  pejalan batin, penyembuh, dan pencari kebenaran untuk belajar,
                  berbagi, dan tumbuh bersama. Sekolah ini bukan sekadar tempat
                  belajar ilmu gaib, tetapi juga tempat untuk menempa watak dan
                  membangun etika spiritual, agar setiap kemampuan digunakan
                  demi keseimbangan semesta dan kemaslahatan sesama.
                </p>
              </FadeInOnScroll>
            </div>
            <div className="my-10"></div>
          </div>
          <div className="w-ful p-0 md:p-10 flex justify-between items-center">
            {rendergaleri()}
          </div>
          {/* Bagian Visi, Misi, dan Tata Nilai */}
          <div id="visi-misi-nilai" className="mt-16 md:mt-24">
            {" "}
            <FadeInOnScroll once={false}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visi, Misi, dan Tata Nilai
              </h2>
            </FadeInOnScroll>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Visi */}
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <FadeInOnScroll once={false}>
                  <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                    Visi
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll once={false}>
                  <ul className="list-disc list-inside text-base md:text-lg text-justify">
                    <li>
                      Menjadi padepokan ilmu batin Nusantara yang melahirkan
                      warisan leluhur, membentuk karakter spiritual yang
                      tangguh, membangkitkan kesadaran ruhani, dan menuntun
                      generasi pewaris ilmu gaib menuju terang kebenaran dan
                      keseimbangan semesta.
                    </li>
                  </ul>
                </FadeInOnScroll>
              </div>
              {/* Misi */}
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <FadeInOnScroll once={false}>
                  <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                    Misi
                  </p>
                </FadeInOnScroll>
                <ul className="list-disc list-inside text-base md:text-lg text-justify space-y-8">
                  <FadeInOnScroll once={false}>
                    <li>
                      Menyelenggarakan pendidikan dan pelatihan ilmu paranormal
                      yang terstruktur, berbasis pengetahuan, etika, dan
                      universal serta dapat dipertanggungjawabkan secara etika
                      dan spiritual.
                    </li>
                  </FadeInOnScroll>
                  <FadeInOnScroll once={false}>
                    <li>
                      Mengembangkan potensi batin dan spiritual siswa melalui
                      pendekatan yang seimbang antara praktik dan teori,
                      termasuk meditasi, penyembuhan energi, intuisi, dan
                      komunikasi lintas dimensi.
                    </li>
                  </FadeInOnScroll>
                  <FadeInOnScroll once={false}>
                    <li>
                      Melestarikan dan menggali ilmu-ilmu warisan leluhur
                      Nusantara, seperti ilmu kebatinan, penyembuhan
                      tradisional, dan keilmuan metafisika Indonesia secara
                      ilmiah dan modern.
                    </li>
                  </FadeInOnScroll>
                  <FadeInOnScroll once={false}>
                    <li>
                      Menanamkan nilai-nilai etika, tanggung jawab, dan kasih
                      dalam penggunaan ilmu spiritual, serta mendorong siswa/i
                      untuk menjadi agen perubahan positif bagi masyarakat dan
                      lingkungan.
                    </li>
                  </FadeInOnScroll>
                  <FadeInOnScroll once={false}>
                    <li>
                      Membangun jaringan dan komunitas penggemar ilmu paranormal
                      yang terbuka, serta mendorong pengembangan riset dan
                      kolaborasi dengan disiplin ilmu lain.
                    </li>
                  </FadeInOnScroll>
                </ul>
              </div>
              {/* Tata Nilai */}
              <div className="md:w-1/3 flex flex-col text-center gap-5">
                <div className="">
                  <FadeInOnScroll once={false}>
                    <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                      Tata Nilai
                    </p>
                  </FadeInOnScroll>
                  <FadeInOnScroll once={false}>
                    <ul className="list-disc list-inside text-base md:text-lg text-left">
                      <li>Integritas</li>
                      <li>Etika</li>
                      <li>Kearifan Lokal</li>
                      <li>Tanggung Jawab</li>
                      <li>Pengembangan Diri</li>
                    </ul>
                  </FadeInOnScroll>
                </div>
                <div className="">
                  <FadeInOnScroll once={false}>
                    <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                      7 SYARAT MENUNTUT ILMU
                    </p>
                  </FadeInOnScroll>
                  <FadeInOnScroll once={false}>
                    <ul className="list-decimal list-inside text-base md:text-lg text-left">
                      <li>Beradab</li>
                      <li>Kecerdasan</li>
                      <li>Niat yang kuat</li>
                      <li>Bersungguh sungguh</li>
                      <li>Dirhamun/ biaya</li>
                      <li>Dekat dengan guru</li>
                      <li>Istiqomah</li>
                    </ul>
                  </FadeInOnScroll>
                </div>
              </div>
            </div>
          </div>
          {/* Bagian Struktur Sekolah (Kosong dulu) */}
          <div id="mitra-kami" className="mt-16 md:mt-24">
            {" "}
            <FadeInOnScroll once={false}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mitra Kami
              </h2>
            </FadeInOnScroll>
            <div className="text-base md:text-lg leading-relaxed space-y-4 text-justify">
              <FadeInOnScroll once={false}>
                <p className=" text-amber-400">
                  Sekolah Paranormal Indonesia merupakan lembaga pengembangan
                  ilmu spiritual dan hipnoterapi yang legal, handal, dan
                  profesional.
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll once={false}>
                <p>
                  Legalitas dan kredibilitas lembaga ini diperkuat dengan adanya
                  kerja sama resmi bersama ELPIKHI (Lembaga Pendidikan Ilmu
                  Kesehatan Holistik Indonesia), sebuah lembaga yang telah
                  berpengalaman dalam bidang pendidikan kesehatan holistik dan
                  pengembangan potensi diri secara menyeluruh.
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll once={false}>
                <p>
                  Selain itu, Rifki Rahmdani (Ki Raden Surya Mudana), seorang
                  praktisi sekaligus trainer berpengalaman sebagai trainer di
                  dunia keilmuan Metafisika Supranatural, Olah Pikir Hipnotis
                  dan Kesehatan Holistik secara resmi menjabat sebagai Kepala
                  Cabang ELPIKHI Provinsi Banten, yang turut memastikan bahwa
                  seluruh proses pembelajaran dan praktik di wilayah tersebut
                  berjalan sesuai standar dan etika profesional yang berlaku.
                </p>
              </FadeInOnScroll>
            </div>
            {/* Gambar di bawah paragraf */}
            <div className="my-10"></div>
          </div>
        </div>
      </section>
      {/* End Konten Utama */}
      <footer className="flex flex-col">
        <div className="w-[90%] border-b-2 border-white self-center" />
        <Footer />
      </footer>
    </main>
  );
}

export default TentangKami;
