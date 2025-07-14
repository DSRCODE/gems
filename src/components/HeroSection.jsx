import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gem1 from "../assets/gem1.avif";
import gem2 from "../assets/gem2.avif";

const images = [gem1, gem2];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Background image slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`gem ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-40"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white  mb-4 w-full">
          WELCOME TO{" "}
          <span className="text-yellow-400 font-semibold">LUNAWAT GEMS</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg mb-6"
        >
          Discover timeless treasures and elegant natural stones crafted for
          royalty. We bring you authenticity, rarity, and refined luxury through
          our exquisite gem collection.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="inline-block border border-yellow-500 text-white hover:bg-yellow-500 hover:text-black transition px-10 py-3 rounded-full font-medium text-base md:text-lg"
        >
          Shop Now
        </motion.a>
      </motion.div>
    </section>
  );
}
