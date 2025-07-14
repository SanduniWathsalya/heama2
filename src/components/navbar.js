import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-b-xl shadow-lg flex items-center justify-between">
      {/* Logo & Title */}
      <div className="flex items-center gap-2">
        <img src="/images/logo-removebg-preview.png" alt="logo" className="h-10 w-10 object-contain rounded-full" />
        <h1 className="font-bold text-lg sm:text-xl">Heama Chemicals</h1>
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex gap-6 font-medium text-sm sm:text-base">
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Products</li>
        <li className="hover:text-gray-300 cursor-pointer">Why Us</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-4 text-white text-lg">
        <FaFacebookF className="cursor-pointer hover:text-gray-300" />
        <FaTwitter className="cursor-pointer hover:text-gray-300" />
        <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
        <FaInstagram className="cursor-pointer hover:text-gray-300" />
      </div>
    </nav>
  );
}
