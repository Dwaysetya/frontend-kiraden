import { useState } from "react";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import Logo from "../logo/Logo";
import LogoMobile from "../../assets/images/navbar/image copy.png";
import NavMenu from "./NavMenu"; // Komponen NavMenu yang sudah ada untuk desktop
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import MobileOverlayMenu from "./MobileOverlaymenu";

const navLinks = [
  { label: "BERANDA", to: "beranda", type: "scroll" },
  { label: "GALERI", to: "/galeri", type: "route" },
  { label: "TENTANG KAMI", to: "/tentang-kami", type: "route" },
  { label: "BERITA", to: "berita-section", type: "scroll" },
  { label: "PROGRAM KELAS", to: "program-kelas-section", type: "scroll" },
  { label: "FAQ", to: "faq-section", type: "scroll" },
  { label: "KONTAK", to: "kontak-section", type: "scroll" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handler untuk tombol "Beranda" di navbar mobile bawah
  const handleBerandaClick = (e) => {
    const berandaLink = navLinks.find((link) => link.label === "BERANDA");
    if (berandaLink) {
      if (location.pathname === "/") {
        e.preventDefault(); // Mencegah RouterLink default behavior untuk '#'
        scroller.scrollTo(berandaLink.to, {
          smooth: true,
          offset: -70,
          duration: 500, // Gunakan durasi yang sama
        });
      } else {
        navigate("/", { state: { scrollTo: berandaLink.to } });
      }
    }
  };

  return (
    <>
      {/* Navbar Desktop (Tetap di atas, hidden di mobile) */}
      <nav className="hidden md:flex w-full md:fixed md:z-50 p-7 px-8 md:px-20 bg-black/30 justify-between items-center top-0">
        <div className="flex p-2 sm:flex-shrink-0 justify-start md:justify-center items-center">
          <RouterLink to="/">
            <Logo size="small" />
          </RouterLink>
        </div>
        <div className="text-white flex justify-center items-center gap-5">
          <NavMenu links={navLinks} />
        </div>
      </nav>

      {/* Navbar Mobile (Baru: di bawah, hidden di desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 text-white py-3 px-4 z-50 shadow-lg border-t border-gray-700">
        <div className="flex justify-between items-center h-12">
          {/* Kiri: Logo */}
          <div className="w-[10%] flex justify-center items-center">
            <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={LogoMobile} alt="" />
            </RouterLink>
          </div>

          {/* Tengah: Beranda / Home Icon */}
          <RouterLink
            to="/"
            className="flex flex-col items-center text-sm font-medium text-amber-500" // Berikan warna aktif default
            onClick={handleBerandaClick}
          >
            <HomeIcon className="w-6 h-6" />
            <span>Beranda</span>
          </RouterLink>

          {/* Kanan: Tombol Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:bg-gray-700 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" /> // Meskipun overlay punya X sendiri, ini bisa jadi indikator visual
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay Menu Mobile (Muncul ketika hamburger diklik) */}
      <MobileOverlayMenu
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu} // Fungsi untuk menutup overlay via tombol 'X' di dalamnya
        navLinks={navLinks}
        location={location}
        navigate={navigate}
      />
    </>
  );
}

export default Navbar;
