import FadeInOnScroll from "../../animation/background/FadeInScroll";
import Foto from "../../assets/banner/FOTO.png";
import Foto2 from "../../assets/banner/profile.jpeg";
import ScrollToKontakButton from "./button/ButtonCustom";
import ButtonCustom from "./button/ButtonCustom";
import HoverSlideButton from "./button/ButtonSlideHover";

function Banner() {
  return (
    <section className="w-full justify-center items-center bg-cover bg-center bg-no-repeat mt-0 md:mt-20">
      <div className="w-full p-0 md:px-5 md:py-8  justify-center items-center">
        <div className="w-full flex relative">
          {/* Overlay untuk opacity background */}
          <div className="absolute inset-0 z-0"></div>
          {/* Content dengan z-index lebih tinggi */}
          <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto">
            <div className="flex flex-col px-5 gap-5 md:gap-7 md:py-30 w-full md:w-[50%] order-2 md:order-1">
              <div className="flex flex-col gap-2 mt-5">
                <div className="border-b-4 border-white w-16 md:w-20 "></div>
                <FadeInOnScroll once={false}>
                  <p className="text-white font-extrabold text-base md:text-lg">
                    Sampurasun
                  </p>
                  <p className="text-white font-extrabold text-base md:text-lg">
                    Salam santun rahayu
                  </p>
                  {/* <p className="text-white font-extrabold text-base md:text-lg">
                    Om swastiastu salom namo budaya
                  </p> */}
                </FadeInOnScroll>
              </div>
              <div className="flex flex-col gap-2">
                <FadeInOnScroll once={false}>
                  <h1 className="text-white text-2xl md:text-3xl">
                    Selamat datang di
                  </h1>
                  <h1
                    className=" text-4xl md:text-5xl font-extrabold tracking-wide"
                    style={{
                      background:
                        "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Sekolah Paranormal
                  </h1>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll once={false}>
                <div className="flex justify-center">
                  <p className="text-white text-sm md:text-base text-left font-cinzel ">
                    Kami adalah lembaga kursus pelatihan dunia metafisika sakti
                    tanpo aji mengajarkan dan mengupas tuntas segala keilmuan
                    klenik mistik supranatual dari berbagai sudut pandang yang
                    berbeda. Rasional dan tradisional & ilmiah/hikmah ( legal,
                    handal dan profesional )
                  </p>
                </div>
              </FadeInOnScroll>
              <div className="flex justify-center md:justify-start">
                <HoverSlideButton
                  text="Kontak Kami"
                  targetId="kontak-section"
                />
              </div>
            </div>
            <div className="flex w-full md:w-[50%] justify-center md:justify-end items-center order-1 md:order-2 py-0 md:py-0">
              {/* Desktop: Foto dengan padding dan styling */}
              <div className="hidden md:flex justify-center items-center w-[90%] px-5 py-10">
                <img src={Foto} alt="raden" />
              </div>

              {/* Mobile: Foto2 dengan w-full tanpa padding */}
              <div className="flex md:hidden w-full rounded-full mb-5">
                <img src={Foto2} alt="raden" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
