"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { FaArrowDown, FaSearch, FaTh, FaList, FaFlask, FaHandsWash, FaPumpSoap } from "react-icons/fa";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState("grid");

  const products = [
    {
      title: "Basic Chromium Sulphate",
      description:
        "Used mainly in leather tanning, this compound provides excellent chromium content and stability.",
      image: "/images/pro1.jpg",
    },
    {
      title: "Basic Chromium Sulphate Liquid",
      description:
        "A liquid form of chromium sulphate for easier application in industrial tanning processes.",
      image: "/images/pro2.jpg",
    },
    {
      title: "Boric Acid",
      description:
        "Widely used in glass, ceramics, agriculture, and as a flame retardant in multiple industries.",
      image: "/images/pro3.jpg",
    },
    {
      title: "Manganese Dioxide",
      description:
        "Commonly used in dry-cell batteries and in the glass industry for coloring and oxidation.",
      image: "/images/pro4.jpg",
    },
    {
      title: "Saccharin Sodium",
      description:
        "A calorie-free artificial sweetener used in food and beverages as a sugar substitute.",
      image: "/images/pro5.jpg",
    },
    {
      title: "Sodium Nitrate",
      description:
        "Used in fertilizers, explosives, and as a preservative in the food industry.",
      image: "/images/pro6.jpg",
    },
    {
      title: "Saccharin Insoluble",
      description:
        "A form of saccharin used in specialized formulations, especially where solubility control is important.",
      image: "/images/pro7.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="relative">
      {/* Navbar */}
      <div className="absolute top-5 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[480px] w-full">
        <Image
          src="/images/hero-bg3.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-70 pt-24 z-10">
          <div className="w-full h-full flex flex-col items-center justify-center text-black px-4 text-center">
            <h2 className="text-sm uppercase">Home / Our Products</h2>
            <h1 className="text-3xl sm:text-5xl font-bold hover:underline transition-all duration-300 cursor-pointer">
              Products Portfolio
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll Prompt Section */}
      <div className="w-full flex flex-col items-center justify-center py-4 sm:py-6 bg-white relative z-20">
        <p className="text-base sm:text-lg font-medium mb-2 sm:mb-4 text-gray-700 animate-pulse">
          Click to see more
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={() => document.getElementById("our-products")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition duration-200 ease-in-out transform hover:-translate-y-1 hover:bg-blue-700 shadow-md hover:shadow-lg"
          >
            <FaPumpSoap className="text-white text-lg" />
            Our Products
          </button>

          <button
            onClick={() => document.getElementById("our-chemicals")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-medium transition duration-200 ease-in-out transform hover:-translate-y-1 hover:bg-blue-200 shadow-md hover:shadow-lg"
          >
            <FaFlask className="text-blue-700 text-lg" />
            Our Chemicals
          </button>
        </div>

        <div
          onClick={() => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })}
          className="cursor-pointer group relative"
        >
          <div className="flex flex-col items-center animate-bounce text-blue-700 text-2xl mt-2">
            <FaArrowDown />
          </div>
        </div>
      </div>

      {/* About Heama Section */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/images/logo.jpg"
            alt="Heama Logo"
            width={120}
            height={50}
            className="opacity-60"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
          About Heama Products
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          <strong>Heama Chemicals</strong> is a leading supplier and distributor of premium-quality industrial chemicals. With a strong commitment to safety, innovation, and customer satisfaction, we provide a wide range of chemical solutions for industrial, pharmaceutical, agricultural, and research applications worldwide.
        </p>
      </div>

      {/* Two Images Section - Stacked on Mobile */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-10 mb-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-20">
        <div className="overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] h-[150px]">
          <Image
            src="/images/im1.jpg"
            alt="Image One"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] h-[150px]">
          <Image
            src="/images/hero-bg4.jpg"
            alt="Image Two"
            width={400}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Our Products Section */}
      <div id="our-products" className="max-w-7xl mx-auto px-6 sm:px-10 mt-40 mb-12">
        <div className="text-center mb-20 relative">
          <h2 className="text-black text-3xl font-bold inline-block relative after:content-[''] after:block after:h-[3px] after:bg-blue-600 after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-0 after:animate-underline-draw">
            Our Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
          {[
            {
              title: "Hand Wash",
              description: "Gentle and effective formula for clean, soft hands.",
              image: "/images/handwash.jpg",
            },
            {
              title: "Dishwash",
              description: "Tough on grease, gentle on hands. Sparkling clean dishes every time.",
              image: "/images/dishwash.jpg",
            },
            {
              title: "Tile Cleaner",
              description: "Removes tough stains and restores shine to tiles and surfaces.",
              image: "/images/tilecleaner.jpg",
            },
            {
              title: "Sanitizer",
              description: "Fast-acting sanitizer to kill 99.9% of germs and bacteria.",
              image: "/images/sani.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={350}
                className="object-cover w-full h-60"
              />
              <div className="p-4 flex-1 w-full">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Chemicals Section */}
      <div id="our-chemicals" className="max-w-7xl mx-auto px-6 sm:px-10 mt-20">
        <div className="text-center relative">
          <h2 className="text-black text-3xl font-bold inline-block relative after:content-[''] after:block after:h-[3px] after:bg-blue-600 after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-0 after:animate-underline-draw">
            Our Chemicals
          </h2>
        </div>

        {/* View & Search Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-4 max-w-7xl mx-auto gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 rounded-full hover:bg-gray-200 ${viewType === "grid" ? "bg-gray-300" : ""}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-2 rounded-full hover:bg-gray-200 ${viewType === "list" ? "bg-gray-300" : ""}`}
            >
              <FaList />
            </button>
          </div>
          <div className="relative w-full sm:w-1/4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border text-gray-600 border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute top-2.5 right-3 text-gray-500" />
          </div>
        </div>

        {/* Chemical Products Section */}
        <div
          className={`text-black py-10 px-4 sm:px-10 grid gap-8 max-w-7xl mx-auto ${
            viewType === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                viewType === "grid"
                  ? "flex flex-col"
                  : "flex flex-col md:flex-row items-start gap-0 md:gap-4"
              }`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={viewType === "grid" ? 160 : 200}
                height={viewType === "grid" ? 100 : 150}
                className={`object-cover ${
                  viewType === "grid"
                    ? "w-full h-48"
                    : "w-full md:w-[200px] md:h-full"
                }`}
              />
              <div className="p-4 flex-1 w-full">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <a
                  href="#"
                  className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
