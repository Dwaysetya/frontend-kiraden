// navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { label: "BERANDA", to: "beranda", type: "scroll" }, // Assuming Beranda is always a route to home
  { label: "GALERI", to: "galeri-section", type: "scroll" }, // Changed to scroll, assuming "galeri-section" is the ID of your gallery section
  { label: "TENTANG KAMI", to: "/tentang-kami", type: "route" }, // Changed to route
  { label: "BERITA", to: "berita-section", type: "scroll" }, // Changed to scroll
  { label: "PROGRAM KELAS", to: "program-kelas-section", type: "scroll" }, // Changed to scroll
  { label: "FAQ", to: "faq-section", type: "scroll" }, // Changed to scroll
  { label: "KONTAK", to: "kontak-section", type: "scroll" }, // Changed to scroll
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMobileMenuButton = () => (
    <button
      onClick={toggleMobileMenu}
      className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
      aria-label="Toggle mobile menu"
    >
      {isMobileMenuOpen ? (
        <X className="w-6 h-6 text-[#9599a2]" />
      ) : (
        <Menu className="w-6 h-6 text-[#9599a2]" />
      )}
    </button>
  );

  return (
    <nav className="w-full md:fixed md:z-99 p-7 px-8 md:px-20 bg-black/30">
      <div className="w-full flex justify-between items-center">
        <div className="flex p-2 sm:flex-shrink-0 justify-start md:justify-center items-center">
          <Logo size="small" />
        </div>
        <div className="hidden md:flex text-white justify-center items-center gap-5">
          {/* Pass the navLinks to NavMenu */}
          <NavMenu links={navLinks} />
        </div>
        {renderMobileMenuButton()}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-800">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => {
              // Conditionally render RouterLink or ScrollLink based on link.type
              if (link.type === "route") {
                return (
                  <RouterLink
                    key={index}
                    to={link.to}
                    className="text-white hover:text-gray-300 px-4 py-2 text-left transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </RouterLink>
                );
              }
              return (
                <ScrollLink
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white hover:text-blue-400 cursor-pointer px-4 py-2 text-left transition-colors" // Added classes for consistency
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on scroll link click
                >
                  {link.label}
                </ScrollLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
