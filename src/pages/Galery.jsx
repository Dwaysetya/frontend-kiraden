import React from "react";
import Navbar from "../components/navbar/Navbar";
import CardGallery from "../components/CardGaleri";
import Footer from "../components/Footer";

function Galery() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="py-0 md:py-30">
        <CardGallery />
      </section>
      <footer className="flex flex-col">
        <div className="w-[90%] border-b-2 border-white self-center" />
        <Footer />
      </footer>
    </main>
  );
}

export default Galery;
