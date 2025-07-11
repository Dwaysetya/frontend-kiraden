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

function Footer() {
  return (
    <footer className="bg-[#202020] text-white py-12">
      {/* Logo di atas */}
      <div className="flex justify-center mb-10">
        <div className="text-center">
          <Logo size="small" />
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
            <h3 className="text-xl font-bold mb-4">Paranormal Academy</h3>
            <p className="text-sm mb-2 flex items-center gap-2">
              <MapPin size={16} /> 123 Mystical Lane, Shadow City
            </p>
            <p className="text-sm mb-2 flex items-center gap-2">
              <Phone size={16} /> (123) 456-7890
            </p>
            <p className="text-sm flex items-center gap-2">
              <Mail size={16} /> contact@paranormalacademy.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-gray-300 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-sm hover:text-gray-300 transition"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-sm hover:text-gray-300 transition"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm hover:text-gray-300 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Youtube size={24} />
              </a>
              <a
                href="mailto:contact@paranormalacademy.com"
                className="hover:text-gray-300 transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Paranormal Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
