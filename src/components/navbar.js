"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 px-6 rounded-xl transition-colors duration-300
        ${scrolled ? "bg-blue-800/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
        text-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Heama Chemicals Logo"
            className="w-16 h-16 object-contain"
          />
          <span className="text-lg font-bold tracking-wide text-white">
            Heama Chemicals
          </span>
        </div>

        {/* Centered Navigation links (Desktop) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <ul className="flex flex-row space-x-8 text-base font-medium items-center">
            <li>
              <a
                href="#home"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded ml-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Social icons */}
        <div className="hidden md:flex space-x-4 text-lg flex-shrink-0 ml-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            <FaFacebookF className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
          >
            <FaTwitter className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
          >
            <FaLinkedinIn className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
          >
            <FaInstagram className="transition-transform duration-200 ease-in-out hover:scale-110" />
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-blue-800/90 rounded-b-xl px-6 py-4 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-base font-medium items-center">
            <li>
              <a
                href="#home"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-200 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}