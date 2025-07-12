import { useEffect } from "react";
import Background from "../assets/section2/12 copy.png"; // Ini untuk gambar latar belakang halaman secara keseluruhan
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-base md:text-lg max-w-3xl text-justify">
            Sekolah Paranormal Indonesia adalah lembaga pendidikan spiritual
            modern yang didirikan pada tanggal 30 Mei 2024 oleh Rifki Rahmadani,
            mempersiapkan individu dan pembimbing spiritual yang berbakat, serta
            mampu menghadapi tantangan spiritual dan kompleksitas hidup dengan
            kebijaksanaan.
          </p>
          <p className="text-base md:text-lg max-w-3xl mt-2 text-justify">
            Dengan semangat ngeluruk tanpa bala, kami memanggil para praktisi,
            pebisnis, dan pemerhati ilmu spiritual untuk bergabung dengan kami.
            Sekolah Paranormal Indonesia adalah tempat yang tepat untuk
            memperdalam dan mengembangkan etika spiritual agar setiap
            keterampilan digunakan demi membangun dan mengembangkan komunitas
            serta lingkungan.
          </p>
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
              href="#struktur-sekolah"
              className="hover:underline hover:decoration-amber-500 hover:decoration-2 hover:underline-offset-4"
            >
              Struktur Sekolah
            </a>
          </div>

          <div id="tentang-kami-detail">
            {" "}
            {/* ID untuk scroll atau navigasi internal */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang Kami
            </h2>
            <div className="text-base md:text-lg leading-relaxed space-y-4 text-justify">
              <p>
                Sekolah Paranormal Indonesia adalah lembaga pendidikan spiritual
                modern yang didirikan pada tanggal 30 Mei 2024 oleh Rifki
                Rahmadani, mempersiapkan individu dan pembimbing spiritual yang
                berbakat, serta mampu menghadapi tantangan spiritual dan
                kompleksitas hidup dengan kebijaksanaan. Kami berkomitmen untuk
                membentuk generasi baru para profesional spiritual yang
                berintegritas, berpengetahuan luas, dan mampu memberikan dampak
                positif bagi siapa pun yang ingin menjelajahi jalan spiritual
                mereka.
              </p>
              <p>
                Dengan semangat ngeluruk tanpa bala, kami memanggil para
                praktisi, pebisnis, dan pemerhati ilmu spiritual untuk bergabung
                dengan kami. Melalui kurikulum yang komprehensif, kami
                menyediakan pembelajaran yang mendalam tentang berbagai aspek
                ilmu spiritual, termasuk pengembangan intuisi, meditasi,
                penyelarasan energi, dan teknik penyembuhan spiritual. Sekolah
                Paranormal Indonesia adalah tempat yang tepat untuk memperdalam
                dan mengembangkan etika spiritual agar setiap keterampilan
                digunakan demi membangun dan mengembangkan komunitas serta
                lingkungan.
              </p>
              <p>
                Sekolah ini bukan sekadar tempat untuk mengumpulkan ilmu
                supranatural, tetapi juga pusat transformasi kesadaran. Kami
                percaya bahwa setiap individu memiliki potensi spiritual yang
                luar biasa, dan tugas kami adalah membantu para siswa (murid)
                kami menemukan dan mengembangkan kekuatan batin mereka, memahami
                hakikat kehidupan, serta mengalami pertumbuhan spiritual yang
                mendalam.
              </p>
              <p>
                Filosofi kami berakar pada keyakinan bahwa ilmu dapat timbul
                dari hati yang tulus dan pengakuan tulus. Setiap proses belajar
                di Sekolah Paranormal Indonesia dimulai dari pembentukan
                karakter spiritual yang kuat, penguasaan teknik, serta juga
                etika yang tinggi. Kami menekankan pentingnya kebijaksanaan,
                kerendahan hati, dan tanggung jawab dalam setiap praktik
                spiritual yang kami ajarkan.
              </p>
            </div>
            {/* Gambar di bawah paragraf */}
            <div className="my-10"></div>
          </div>

          {/* Bagian Visi, Misi, dan Tata Nilai */}
          <div id="visi-misi-nilai" className="mt-16 md:mt-24">
            {" "}
            {/* ID untuk scroll atau navigasi internal */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visi, Misi, dan Tata Nilai
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Visi */}
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                  Visi
                </p>
                <ul className="list-disc list-inside text-base md:text-lg text-justify">
                  <li>
                    Menjadi padepokan ilmu batin Nusantara yang melahirkan
                    warisan leluhur, membentuk karakter spiritual yang tangguh,
                    menguasai ilmu gaib, serta menjunjung tinggi kebenaran dan
                    keseimbangan semesta.
                  </li>
                </ul>
              </div>
              {/* Misi */}
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                  Misi
                </p>
                <ul className="list-disc list-inside text-base md:text-lg text-justify space-y-8">
                  <li>
                    Menyelenggarakan pendidikan dan pelatihan ilmu paranormal
                    yang terstruktur, berbasis pengetahuan, etika, dan universal
                    serta dapat dipertanggungjawabkan secara etika dan
                    spiritual.
                  </li>
                  <li>
                    Mengembangkan potensi batin dan spiritual siswa/i melalui
                    pendekatan yang komprehensif, meliputi pengembangan intuisi,
                    meditasi, penyelarasan energi, dan teknik penyembuhan
                    spiritual.
                  </li>
                  <li>
                    Melestarikan dan menggali ilmu spiritual warisan leluhur
                    Nusantara, seperti ilmu kebatinan, penyembuhan tradisional,
                    dan kearifan lokal, melalui metode inovatif dan relevan.
                  </li>
                  <li>
                    Menanamkan nilai-nilai etika, tanggung jawab, dan kasih
                    dalam penggunaan ilmu spiritual, serta mendorong siswa/i
                    untuk menjadi agen perubahan positif bagi masyarakat dan
                    lingkungan.
                  </li>
                  <li>
                    Membangun jaringan dan komunitas penggemar ilmu paranormal
                    yang terbuka, serta mendorong pengembangan riset dan
                    kolaborasi dengan disiplin ilmu lain.
                  </li>
                </ul>
              </div>
              {/* Tata Nilai */}
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-400">
                  Tata Nilai
                </p>
                <ul className="list-disc list-inside text-base md:text-lg text-left">
                  <li>Integritas</li>
                  <li>Etika</li>
                  <li>Kearifan Lokal</li>
                  <li>Tanggung Jawab</li>
                  <li>Pengembangan Diri</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bagian Struktur Sekolah (Kosong dulu) */}
          <div id="struktur-sekolah" className="mt-16 md:mt-24">
            {" "}
            {/* ID untuk scroll atau navigasi internal */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Struktur Sekolah
            </h2>
            <p className="text-base md:text-lg">
              Konten struktur sekolah akan ditambahkan di sini.
            </p>
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
