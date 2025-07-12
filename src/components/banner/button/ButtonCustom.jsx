// src/components/ScrollToKontakButton.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToKontakButton = ({ children = "Kontak Kami", className = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const SCROLL_DURATION = 500; // Durasi scroll, sesuaikan dengan NavMenu Anda

  const handleScrollToKontak = () => {
    const targetId = "kontak-section"; // ID dari bagian kontak di halaman beranda

    if (location.pathname !== "/") {
      // Jika TIDAK di halaman utama, navigasi ke home dan kirim target scroll
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      // Jika SUDAH di halaman utama, langsung scroll
      scroller.scrollTo(targetId, {
        smooth: true,
        offset: -70, // Sesuaikan dengan tinggi navbar Anda (misal: -70px)
        duration: SCROLL_DURATION,
      });
    }
  };

  return (
    <button
      onClick={handleScrollToKontak}
      className={`px-6 py-3 rounded-full font-semibold transition-opacity duration-300 ${className}`}
      style={{
        // Ini adalah properti yang benar untuk teks gradien
        backgroundImage:
          "linear-gradient(to top, #906126, #f3cb51, #f3cb51, #a87c2d)",
        WebkitBackgroundClip: "text", // Memotong background sesuai bentuk teks
        // Membuat teks transparan agar background terlihat
        backgroundClip: "text", // Standar W3C
      }}
    >
      {children}
    </button>
  );
};

export default ScrollToKontakButton;
