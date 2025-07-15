import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./logo/Logo";
import { TfiEmail } from "react-icons/tfi";
import { LuInstagram } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#202020] text-white py-12">
      {/* Logo di atas */}
      <div className="flex justify-center mb-10">
        <div className="text-center">
          <Logo size="large" />
          <p className="mt-4 text-sm text-gray-400">
            Menyingkap ilmu yang tak terlihat
          </p>
        </div>
      </div>

      {/* 3 kolom di bawah logo */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-amber-500">
              Sekolah Paranormal
            </h3>
            <p className="text-sm mb-2 flex flex-col md:flex-row items-center gap-2">
              <Phone size={16} /> 0851 3333 9854 / 0857 7161 8600
            </p>
            <p className="text-sm flex flex-col md:flex-row items-center gap-2">
              <Mail size={16} /> sekolahparanormal@gmail.com
            </p>
            <p className="text-xs mt-2 md:mt-4 flex flex-col md:flex-row items-center gap-2">
              <GrLocation className="text-xl md:text-5xl" /> Jl.BABU SALAM KP.
              RAWA GEMPOL NO.7 , RT: 003 / RW: 05 DESA TELUK NAGA KEC.TELUK NAGA
              KABUPATEN TANGGERANG BANTEN 15510.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-xl font-bold mb-4 text-amber-500">
              Quick Links
            </h3>
            <ul className="space-y-2 flex flex-col items-center">
              <li>
                <a
                  href="#galeri-section"
                  className="text-sm hover:text-amber-500 transition"
                >
                  Galeri
                </a>
              </li>
              <li>
                <Link
                  to="/tentang-kami"
                  className="text-sm hover:text-amber-500 transition"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <a
                  href="#berita-section"
                  className="text-sm hover:text-amber-500 transition"
                >
                  Berita
                </a>
              </li>
              <li>
                <a
                  href="#program-kelas-section"
                  className="text-sm hover:text-amber-500 transition"
                >
                  Program Kelas
                </a>
              </li>
              <li>
                <a
                  href="#kontak-section"
                  className="text-sm hover:text-amber-500 transition"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4 text-amber-500">Follow Us</h3>
            <div className="flex gap-2 items-end">
              <a
                href="https://www.instagram.com/sekolah_paranormal?igsh=MWR6dXVrdDV5eGQ0OQ=="
                className="hover:text-amber-500 transition flex text-right gap-2"
              >
                <LuInstagram size={24} />
              </a>
              <a
                href="mailto:sekolahparanormal@gmail.com"
                className="hover:text-amber-500 transition flex text-right gap-2"
              >
                <TfiEmail size={24} />
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition flex text-right gap-2"
              >
                <FiYoutube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@sekolahparanormal?_t=ZS-8xzFjysJeYj&_r=1"
                className="hover:text-amber-500 transition flex text-right gap-2"
              >
                <FaTiktok size={24} />
              </a>
              {/* <a
                href="mailto:contact@paranormalacademy.com"
                className="hover:text-amber-500 transition flex text-right gap-2"
              >
                <span>Sekolah paranormal</span>
                <Mail size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm mb-15 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} Sekolah Paranormal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
