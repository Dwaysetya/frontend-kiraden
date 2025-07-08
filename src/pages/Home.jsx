import Navbar from "../components/navbar/Navbar";
import Background from "../../src/assets/banner/RETANGLE ATAS-2.png";
import AutoCarousel from "../components/banner/carousel/carousel";
import Banner from "../components/banner/Banner";
import Section2 from "../../src/assets/section2/12 copy.png";
import HoverSlideButton from "../components/banner/button/ButtonSlideHover";
import CardsSection from "../components/CardSection";
import { iconRespons } from "../utils/Constanta";

function Home() {
  const renderIcon = () => {
    return (
      <>
        <div className=" w-full mt-20 md:mt-2 flex relative justify-center items-center">
          <div className="border-b-4 border-white w-full self-center"></div>
          <div className="w-[80%] flex absolute p-5 bg-[#202020] h-auto rounded-full justify-center items-center border-r-2 border-l-2 border-white flex-wrap">
            {iconRespons.map((item, index) => (
              <div
                className="w-auto flex h-auto justify-center items-center
             basis-1/3 sm:basis-1/5 lg:basis-auto
             mb-2 sm:mb-0"
                key={index}
              >
                <img
                  className="w-[80%] max-w-[40px] sm:max-w-[80px]"
                  src={item.img}
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <main
      className="w-full min-h-screen justify-center items-center bg-cover bg-center bg-no-repeat absolute inset-0 h-full object-contain object-center z-0"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <header>
        <Navbar />
      </header>
      <section className="w-full pb-20">
        <Banner />
        <div className="w-full px-5 md:px-20 flex justify-center items-center">
          <div className="border-b-2 border-white w-[80%] md:w-150 self-center"></div>
        </div>
        <div className="w-full md:px-18 pb-30 mt-20 md:mt-0">
          <AutoCarousel />
        </div>
        {renderIcon()}
      </section>
      <section
        className="w-full min-h-[400px] md:min-h-screen mt-15"
        id="tentang"
      >
        <div className="w-full relative">
          <img
            src={Section2}
            alt="Section Background"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex sm:flex-col justify-center items-center sm:items-start gap-3 md:gap-5 px-4 py-1 md:p-10 lg:p-20 text-white">
            <div className="flex flex-col gap-2 md:gap-5 w-full md:w-[40%] max-w-md">
              <p className="text-xs sm:text-sm md:text-lg lg:text-2xl">
                SEKILAS SEKOLAH PARANORMAL
              </p>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">
                Tentang Kami
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Didirikan pada tanggal 30 Mei 2024 oleh Rifki Rahmdani, Sekolah
                Paranormal Indonesia hadir sebagai wadah pembelajaran ilmu-ilmu
                adiluhur warisan leluhur.
              </p>
            </div>
            <div className="flex text-xs md:text-lg">
              <HoverSlideButton
                text="Selengkapnya"
                onClick={() => alert("Tombol diklik!")}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <CardsSection />
      </section>
      <footer></footer>
    </main>
  );
}

export default Home;
