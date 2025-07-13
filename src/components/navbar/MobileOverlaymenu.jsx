// src/components/navbar/MobileOverlayMenu.jsx
import React from "react";
import { X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { scroller } from "react-scroll";

const MobileOverlayMenu = ({
  isOpen,
  onClose,
  navLinks,
  location,
  navigate,
}) => {
  if (!isOpen) return null;

  const SCROLL_DURATION = 500;

  return (
    // UBAH KELAS DI SINI:
    <div className="fixed bottom-0 left-0 w-full h-2/5 bg-black/90 z-[999] flex flex-col items-center justify-start p-4 rounded-t-lg">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 text-white hover:bg-gray-800 rounded-lg" // Sesuaikan padding/ukuran jika perlu
        aria-label="Close mobile menu"
      >
        <X className="w-6 h-6" /> {/* Sesuaikan ukuran ikon jika perlu */}
      </button>

      {/* Konten menu */}
      {/* Sesuaikan layout agar konten muat di 1/4 layar */}
      <nav className="grid grid-rows-4 space-y-2 text-lg font-semibold ">
        {" "}
        {/* Sesuaikan ukuran teks & spasi */}
        {navLinks.map((link, index) => {
          const isHomePage = location.pathname === "/";

          if (link.type === "route") {
            return (
              <RouterLink
                key={index}
                to={link.to}
                className="text-white hover:text-amber-500 flex justify-center items-center transition-colors"
              >
                {link.label}
              </RouterLink>
            );
          } else {
            return (
              <RouterLink
                key={index}
                to={isHomePage ? "#" : "/"}
                className="text-white hover:text-amber-500 flex justify-center items-center transition-colors"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    scroller.scrollTo(link.to, {
                      smooth: true,
                      offset: -70,
                      duration: SCROLL_DURATION,
                    });
                  } else {
                    navigate("/", { state: { scrollTo: link.to } });
                  }
                }}
              >
                {link.label}
              </RouterLink>
            );
          }
        })}
      </nav>
    </div>
  );
};

export default MobileOverlayMenu;
