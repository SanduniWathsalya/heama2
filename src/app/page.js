"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaSearch,
  FaFlask,
  FaPumpSoap,
  FaHandsWash
} from "react-icons/fa";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState("grid");

  const products = [
    {
      title: "Hydrogen Peroxide 50%",
      description:
        "Hydrogen Peroxide 50%, also known as H2O2, is a highly prevalent chemical compound that is renowned for its potent oxidizing properties and broad range of applications.",
      image: "/images/pro1.jpg",
    },
    {
      title: "Soda Ash Light",
      description:
        "Soda Ash Light, also known as sodium carbonate (Na₂CO₃), is a versatile and essential chemical compound widely used across various industries.",
      image: "/images/pro2.jpg",
    },
     {
      title: "Sodium sulfate",
      description:
        "Sodium sulfate  is the inorganic compound with formula Na2SO4 as well as several related hydrates.",
      image: "/images/pro3.jpg",
    },
    {
      title: "Tonsil Optimum 230 FF ",
      description:
        "TONSIL® OPTIMUM 230 FF is a highly active bleaching earth with superior filtration performance aimed for higher throughput. It is manufactured by acid activation of calcium bentonite, processed under strict control and monitoring of quality",
      image: "/images/pro4.jpg",
    },
     {
      title: "Calcium hypochlorite, hydrated",
      description:
        "Calcium hypochlorite, hydrated is a white granular solid or tablets compressed from the granules having an odor of chlorine. It is noncombustible, but it will accelerate the burning of combustible materials.",
      image: "/images/pro5.jpg",
    },
    {
      title: "Sodium Nitrate",
      description:
        "Used in fertilizers, explosives, and as a preservative in the food industry.",
      image: "/images/pro6.jpg",
    },
   
    {
      title: "Trichloroisocyanuric acid",
      description:
        "Trichloroisocyanuric acid is an organic compound with the formula (CONCl)3. It is used as an industrial disinfectant, bleaching agent and a reagent in organic synthesis.[1][2][3] This white crystalline powder, which has a strong chlorine odour,is sometimes sold in tablet or granule form for domestic and industrial use.",
      image: "/images/pro7.jpg",
    },

    {
      title: "Aluminium Sulphate 17% ",
      description:
        "Aluminium Sulphate 17% Iron free Al2O3 in sulphate form. Aluminium sulphate is used in water purification and as a mordant in dyeing and printing textiles.",
      image: "/images/pro8.jpg",
    },

    {
      title: "Magnesium sulfate heptahydrate",
      description:
        "Magnesium sulfate heptahydrate (MgSO4·7H2O), commonly known as Epsom salt, is a white crystalline solid that is highly soluble in water and has various applications in agriculture, medicine, and industry.",
      image: "/images/pro9.jpg",
    },

    {
      title: "Hydrated Lime Malaysia",
      description:
        "Hydrated Lime, or Calcium Hydroxide, is a white powder widely celebrated for its alkaline properties. With high solubility in water, its stability and compatibility have made it a preferred choice across diverse applications.",
      image: "/images/1000152735.jpg",
    },
    
    {
      title: "Nitric acid 68%",
      description:
        "Nitric acid (HNO3) at 68% concentration is a highly corrosive mineral acid commonly used in various industries. It is typically colorless but can acquire a yellow tint over time due to decomposition into nitrogen oxides.",
      image: "/images/pro11.jpg",
    },
   
    {
      title: "Caustic soda flakes",
      description:
        "Caustic soda flakes, or sodium hydroxide (NaOH), are highly versatile and widely used in various industries for their strong alkaline properties and effectiveness in chemical processes.",
      image: "/images/pro12.jpg",
    },

    
  ];

  const fadeInUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // State and ref for hero text animation
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroTextRef = useRef(null);

  // State and ref for images animation
  const imagesRef = useRef(null);
  const [imagesVisible, setImagesVisible] = useState(false);

  // Track visible chemical product items for animation
  const [visibleItems, setVisibleItems] = useState({});
  const productRefs = useRef([]);

  // Track visible Our Products items for animation
  const [visibleOurProducts, setVisibleOurProducts] = useState({});
  const ourProductsRefs = useRef([]);

  // button sections
  const [isWashButtonsVisible, setIsWashButtonsVisible] = useState(false);
const washButtonsRef = useRef(null);

const [isCategoryButtonsVisible, setIsCategoryButtonsVisible] = useState(false);
const categoryButtonsRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (heroTextRef.current) {
      observer.observe(heroTextRef.current);
    }

    return () => {
      if (heroTextRef.current) {
        observer.unobserve(heroTextRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const imagesObserver = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setImagesVisible(true);
          obs.unobserve(entry.target); // Only trigger once
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (imagesRef.current) {
      imagesObserver.observe(imagesRef.current);
    }

    return () => {
      if (imagesRef.current) {
        imagesObserver.unobserve(imagesRef.current);
      }
    };
  }, []);

  // Intersection Observer for chemical products (filteredProducts)
  useEffect(() => {
    productRefs.current = productRefs.current.slice(0, filteredProducts.length);

    const observers = [];

    productRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(ref);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [filteredProducts]);

  // Intersection Observer for "Our Products" section
  useEffect(() => {
    // We have 4 fixed products in Our Products
    ourProductsRefs.current = ourProductsRefs.current.slice(0, 4);

    const observers = [];

    ourProductsRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleOurProducts((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(ref);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

   // button sections
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsWashButtonsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 }
  );
  if (washButtonsRef.current) observer.observe(washButtonsRef.current);
  return () => {
    if (washButtonsRef.current) observer.unobserve(washButtonsRef.current);
  };
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsCategoryButtonsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 }
  );
  if (categoryButtonsRef.current) observer.observe(categoryButtonsRef.current);
  return () => {
    if (categoryButtonsRef.current) observer.unobserve(categoryButtonsRef.current);
  };
}, []);

  return (
    <>
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes slideDownFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-down-fade-in {
          animation: slideDownFadeIn 0.8s ease forwards;
        }

        /* For the underline animation used on titles */
        .animate-underline-loop::after {
          content: "";
          display: block;
          height: 3px;
          background: #2563eb; /* Tailwind blue-600 */
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          animation: underlineLoop 2s infinite;
        }
        @keyframes underlineLoop {
          0%,
          100% {
            width: 0;
          }
          50% {
            width: 100%;
          }
        }
      `}</style>

      <main className="relative bg-gradient-to-r from-blue-50 via-white to-cyan-50 ">
        <div className="absolute top-5 left-0 w-full z-50 ">
          <Navbar />
        </div>

        {/* Hero Section */}
       <div className="relative h-[500px] sm:h-[500px] w-full">
  <Image
    src="/images/3696093.jpg"
    alt="Hero"
    layout="fill"
    objectFit="fill"
    className="z-0 filter blur-sm"
  />
  <div className="absolute inset-0 bg-transparent bg-opacity-70 pt-24 z-10 flex flex-col items-center justify-center text-black px-4 text-center">
    <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
            Our Products
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            Our products are designed to deliver reliable performance and meet industry standards across cleaning, industrial, and specialty applications.
          </p>
        </div>
  </div>
</div>


        {/* Scroll Prompt Section */}
        <div className="w-full flex flex-col items-center justify-center py-4 sm:py-6  relative z-20">
          <p className="text-base sm:text-lg font-medium mb-2 sm:mb-4 text-gray-700 animate-pulse">
            Click to see more
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={() =>
                document
                  .getElementById("our-products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
               className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
              <FaPumpSoap className="text-white text-lg" />
              Our Products
            </button>

            <button
  onClick={() =>
    document
      .getElementById("our-chemicals")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="inline-flex items-center gap-2 bg-gray-200 text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 transition duration-300 transform hover:scale-105 will-change-transform animate-fade-in-up delay-300"
>
  <FaFlask className="text-blue-700 text-lg" />
  Our Chemicals
</button>

          </div>

          <div
            onClick={() =>
              document
                .getElementById("products-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer group relative"
          >
            <div className="flex flex-col items-center animate-bounce text-blue-700 text-2xl ">
              <FaArrowDown />
            </div>
          </div>
        </div>

{/* ✅ Additional Wash/Cleaning Product Buttons */}
<div
  ref={washButtonsRef}
  className={`mt-4 px-6 py-4 flex flex-wrap justify-center gap-10 transform transition-all duration-700 ease-out ${
    isWashButtonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {["Body Wash", "Face Wash", "Dish Wash", "Air Freshner", "Car Shampoo"].map(
    (item, index) => (
      <button
        key={index}
        className="flex items-center gap-2 bg-white text-blue-900 font-medium px-4 py-2 rounded-full border border-blue-300 hover:bg-blue-200 transition duration-200 shadow-sm"
      >
        <FaHandsWash className="text-blue-700" />
        {item}
      </button>
    )
  )}
</div>

 {/* ✅ Product Category Buttons Section */}
<div
  ref={categoryButtonsRef}
  className={`mt-5 px-6 py-6 space-y-4 transform transition-all duration-700 ease-out ${
    isCategoryButtonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="flex flex-wrap justify-center gap-4">
    {[
      "Tonsil Optimum 230 FF",
      "Aluminium Sulphate",
      "Hydrogen Peroxide",
      "Soda Ash Light",
      "Sodium sulfate",
      "Sodium Nitrate",
      "Nitric acid",
      ,
    ].map((product, index) => (
      <button
        key={index}
        className="flex items-center gap-2 bg-blue-200 text-blue-900 font-medium px-4 py-2 rounded-full hover:bg-blue-300 transition duration-200 shadow-sm"
      >
        <FaFlask className="text-blue-800" />
        {product}
      </button>
    ))}
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black inline-block relative after:content-[''] after:block after:h-[3px] after:bg-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 animate-underline-loop">
            About Heama Products
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Heama Chemicals</strong> is a leading supplier and
            distributor of premium-quality industrial chemicals. With a strong
            commitment to safety, innovation, and customer satisfaction, we
            provide a wide range of chemical solutions for industrial,
            pharmaceutical, agricultural, and research applications worldwide.
          </p>
        </div>

        {/* Two Images Section - Stacked on Mobile */}
       
<div
  ref={imagesRef}
  className="max-w-7xl mx-auto px-6 sm:px-10 mt-10 mb-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-20"
>
  <div
    className={`overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] h-[250px] ${
      imagesVisible ? "slide-down-fade-in" : "opacity-0"
    }`}
  >
    <Image
      src="/images/4118ac4f-cecc-4d26-83bf-c9de8a101980.jpg"
      alt="Image One"
      width={400}
      height={300}
      className="object-fit w-full h-full"
    />
  </div>
  <div
    className={`overflow-hidden rounded-lg shadow-lg w-full sm:w-[300px] h-[250px] ${
      imagesVisible ? "slide-down-fade-in" : "opacity-0"
    }`}
  >
    <Image
      src="/images/hero-bg4.jpg"
      alt="Image Two"
      width={400}
      height={800}
      className="object-cover w-full h-full"
    />
  </div>
</div>

{/* ✅ Scroll Target Space for "Our Products" */}
<div id="our-products" className="h-10 sm:h-20"></div>

{/* ✅ Our Products Section (renamed ID) */}
<div
  id="products-content"
  className="max-w-7xl mx-auto px-6 sm:px-10 mt-20 mb-12 lg:mb-40"
>
  <div className="text-center mb-20 relative">
    <h2 className="text-3xl font-bold text-black inline-block relative after:content-[''] after:block after:h-[3px] after:bg-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 animate-underline-loop">
      Our Products
    </h2>
  </div>
 <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-20 mb-12 lg:mb-40 space-y-20 text-black">
      
      {/* 1. Body Wash */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.img
          src="/images/WhatsApp Image 2025-07-15 at 14.13.13_8aac698b.jpg"
          alt="Body Wash"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-72"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        />
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Body Wash</h3>
          <p className="text-gray-700 leading-relaxed">
            Discover the perfect balance of cleanliness and care with <span className="font-semibold text-blue-900">Jonis Body Wash</span>.
            Crafted with skin-loving ingredients and nourishing botanicals, our formula gently cleanses while locking in moisture,
            leaving your skin feeling soft, smooth, and rejuvenated after every wash. Infused with a refreshing fragrance that lingers just right,
            <span className="font-semibold text-blue-900"> Jonis Body Wash</span> transforms your daily shower into a luxurious self-care ritual.
            Whether you're starting your morning or winding down at night, our body wash revitalizes your skin and senses.
            <br /><br />
            <span className="font-serif text-[1.1rem] block mt-2 text-gray-800">
              Elevate your shower routine with <span className="font-semibold text-blue-900">Jonis Body Wash</span> — where clean meets comfort.
            </span>
          </p>
        </motion.div>
      </div>

      {/* 2. Personal Care Essentials */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <motion.img
          src="/images/WhatsApp Image 2025-07-15 at 14.13.13_90787025.jpg"
          alt="Personal Care Essentials"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-72"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        />
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Personal Care Essentials</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Face Wash:</strong> Gently cleanses and refreshes your skin, removing dirt and excess oil for a radiant glow.</li>
            <li><strong>Body Lotion:</strong> Deeply hydrates and softens your skin, leaving it smooth and nourished all day long.</li>
            <li><strong>Shampoo:</strong> Cleanses and revitalizes hair, promoting healthy shine and strength from root to tip.</li>
            <li><strong>Hair Oil:</strong> Nourishes the scalp and strengthens hair, reducing breakage and promoting healthy growth.</li>
            <li><strong>Nail Polish Remover:</strong> Quickly removes polish while conditioning nails, leaving them clean and residue-free.</li>
          </ul>
        </motion.div>
      </div>

      {/* 3. Cleaning Essentials */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.img
          src="/images/WhatsApp Image 2025-07-15 at 14.13.14_d48018e9.jpg"
          alt="Cleaning Essentials"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-72"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        />
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Cleaning Essentials</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Car Shampoo:</strong> Removes dirt and grime gently while protecting your car’s finish.</li>
            <li><strong>Dish Wash:</strong> Cuts through grease and food residue, leaving dishes sparkling clean.</li>
            <li><strong>Toilet Bowl Cleaner:</strong> Powerfully eliminates stains and bacteria for a fresh and sanitized toilet.</li>
          </ul>
        </motion.div>
      </div>

      {/* 4. Glycerine (Vegetable) Glycerol */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <motion.img
          src="/images/WhatsApp Image 2025-07-15 at 14.13.15_03ee6694.jpg"
          alt="Glycerine (Vegetable) Glycerol"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-72"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        />
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Glycerine (Vegetable) Glycerol</h3>
          <p className="text-gray-700 leading-relaxed">
            Glycerine (Vegetable) Glycerol is a natural, colorless, and odorless liquid derived from plant-based oils such as coconut, palm, or soy.
            It is a versatile, non-toxic compound known for its excellent moisturizing and humectant properties, which means it attracts and retains moisture.
            Widely used in cosmetics, personal care products, and pharmaceuticals, vegetable glycerine helps to soften and soothe the skin,
            making it an ideal ingredient in lotions, creams, soaps, and facial cleansers. It is also valued for its gentle nature,
            making it suitable for sensitive skin types. Additionally, glycerine is used as a sweetener and preservative in food products
            and as a base in pharmaceutical formulations.
          </p>
        </motion.div>
      </div>
    </div>
  
</div>


      {/* Our Chemicals Section */}
        {/* ✅ Scroll Target Space for "Our Chemicals" */}
<div id="our-chemicals" className="h-4 sm:h-2"></div>

{/* ✅ Our Chemicals Section (renamed ID) */}
<div
  id="chemicals-content"
  className="max-w-7xl mx-auto px-6 sm:px-10 mt-20"
>
  <div className="text-center relative">
    <h2 className="text-black text-3xl font-bold inline-block relative after:content-[''] after:block after:h-[3px] after:bg-blue-600 after:absolute after:left-0 after:bottom-0 after:w-0 animate-underline-loop">
      Our Chemicals
    </h2>
  </div>

  {/* View & Search Controls */}
  <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-4 max-w-7xl mx-auto gap-4">
    <div className="flex items-center gap-4"></div>
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
    className={`text-black  py-10 px-4 sm:px-10 grid gap-8 max-w-7xl mx-auto ${
      viewType === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
    }`}
  >
    {filteredProducts.map((product, index) => (
      <div
        key={index}
        ref={(el) => (productRefs.current[index] = el)}
        className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
          viewType === "grid"
            ? "flex flex-col"
            : "flex flex-col md:flex-row items-start gap-0 md:gap-4"
        } ${visibleItems[index] ? "fade-in-up" : "opacity-0"}`}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={viewType === "grid" ? 160 : 200}
          height={viewType === "grid" ? 100 : 150}
          className={`object-scale-down ${
            viewType === "grid"
              ? "w-full h-48"
              : "w-full md:w-[200px] md:h-full"
          }`}
        />
        <div className="p-4 flex-1 w-full">
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          
        </div>
      </div>
    ))}
  </div>
</div>

      </main>
    </>
  );
}
