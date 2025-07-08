import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "TENTANG KAMI", to: "/tentang kami" },
    { label: "PROGRAM KELAS", to: "/program kelas" },
    { label: "FAQ", to: "/faq" },
    { label: "KONTAK", to: "/kontak" },
  ];
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
    <nav className="w-full md:fixed md:z-99 p-5 px-8 md:px-20">
      <div className="w-full flex justify-between items-center">
        <div className="flex sm:flex-shrink-0 justify-start md:justify-center items-center">
          <Logo size="small" />
        </div>
        <div className="hidden md:flex text-white justify-center items-center gap-5">
          <NavMenu links={navLinks} />
        </div>
        {renderMobileMenuButton()}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-800">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-white hover:text-gray-300 px-4 py-2 text-left transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
