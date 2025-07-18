import Navbar from "../components/navbar/Navbar";
import Background from "../../src/assets/banner/RETANGLE ATAS-2.png";
import AutoCarousel from "../components/banner/carousel/carousel";
import Banner from "../components/banner/Banner";
import Section2 from "../../src/assets/section2/12 copy.png";
import HoverSlideButton from "../components/banner/button/ButtonSlideHover";
import CardsSection from "../components/CardSection";
import { iconRespons } from "../utils/Constanta";
import CardFaq from "../components/CardFaq";
import CardKontak from "../components/CardKontak";
import KabarBerita from "../components/KabarBerita";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import FadeInOnScroll from "../animation/background/FadeInScroll";
import FloatingParticles from "../animation/background/FloatingParticle";
import Pencapaian from "../components/PencapaianKami";

function Home() {
  const Navigate = useNavigate();

  const handleSelengkapnya = () => {
    Navigate("/tentang-kami");
  };
  const renderIcon = () => {
    return (
      <>
        <div className="w-full md:mt-2 flex relative justify-center items-center">
          <div className="border-b-4 border-amber-500 w-full self-center" />
          <div className="w-[80%] md:justify-between flex absolute bg-[#202020] h-auto rounded-full justify-center items-center border-r-2 border-l-2 border-y border-amber-500 overflow-hidden">
            <div className="flex md:flex-wrap px-2 py-3 md:p-5 w-full overflow-x-auto md:overflow-x-visible md:justify-between justify-start items-center gap-2 md:gap-0">
              {iconRespons.map((item, index) => (
                <div
                  className="flex-shrink-0 w-auto flex p-1 md:p-0 h-auto justify-center items-center
                   min-w-[51px] md:min-w-0
                   md:basis-auto
                   transition-all duration-300 ease-in-out
                   hover:-translate-y-3 hover:scale-110 hover:drop-shadow-lg
                   cursor-pointer
                   group"
                  key={index}
                >
                  <img
                    className="w-[35px] sm:w-[45px] md:w-[80px] 
                             max-w-[35px] sm:max-w-[45px] md:max-w-[80px]
                             transition-all duration-300 ease-in-out
                             group-hover:brightness-110"
                    src={item.img}
                    alt="icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <main
      className="w-full min-h-screen justify-center items-center bg-cover bg-center bg-no-repeat absolute inset-0 h-full object-contain object-center z-0"
      style={{ backgroundImage: `url(${Background})` }}
      id="beranda"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <FloatingParticles />
      </div>
      <header>
        <Navbar />
      </header>
      <section className="w-full py-0 md:py-20">
        <Banner />
        <div className="w-full px-5 md:px-20 flex justify-center items-center my-10">
          <div className="border-b-2 border-white w-[80%] md:w-150 self-center" />
        </div>
        <div
          className="w-full md:px-18 pb-30 mt-20 md:mt-0"
          id="galeri-section"
        >
          <AutoCarousel />
        </div>
        <FadeInOnScroll once={false}>
          <div className="mb-35 md:my-20">{renderIcon()}</div>
        </FadeInOnScroll>
      </section>
      <section
        className="w-full h-auto md:min-h-auto bg-amber-300 my-10"
        id="tentang"
      >
        <FadeInOnScroll once={false}>
          <div className="w-full relative">
            <img
              src={Section2}
              alt="Section Background"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex sm:flex-col justify-center items-center sm:items-start gap-3 md:gap-5 px-4 py-1 md:p-10 lg:p-20 text-white">
              <div className="flex flex-col gap-2 md:gap-5 w-full md:w-[80%] max-w-md">
                <p className="text-xs hidden md:flex sm:text-sm md:text-lg lg:text-2xl">
                  Tentang Kami
                </p>
                <h1
                  className="text-[11px] sm:text-3xl md:text-4xl font-bold"
                  style={{
                    background:
                      "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  SEKILAS SEKOLAH PARANORMAL
                </h1>
                <p className="text-[10px] text-justify sm:text-sm md:text-base lg:text-lg">
                  Didirikan pada tanggal 30 Mei 2024 oleh Rifki Rahmdani,
                  Sekolah Paranormal Indonesia hadir sebagai wadah pembelajaran
                  ilmu-ilmu adiluhung warisan leluhur yang menghubungkan
                  kekuatan batin, kesehatan holistik, dan kebijaksanaan
                  metafisika.
                </p>
              </div>
              <div className="flex md:flex-row flex-col text-xs md:text-lg gap-5">
                <HoverSlideButton
                  text="Selengkapnya"
                  customOnClick={handleSelengkapnya}
                />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
      <section className="w-full my-10" id="berita-section">
        <KabarBerita />
      </section>
      <section id="program-kelas-section">
        <CardsSection />
      </section>
      <section>
        <Pencapaian />
      </section>
      <section
        className=" w-full flex flex-col justify-center items-center"
        id="faq-section"
      >
        <FadeInOnScroll once={false}>
          <div className="flex justify-center items-center mt-20">
            <h1 className="text-md md:text-4xl font-bold text-white">
              FAQ (Frequently Ask Questions)
            </h1>
          </div>
        </FadeInOnScroll>
        <CardFaq />
      </section>
      <section id="kontak-section">
        <CardKontak />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Home;
