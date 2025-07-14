import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Crown, Award, Gem, ShieldCheck } from "lucide-react";

// Sample gem images for demo
import gem1 from "../assets/gem1.avif";
import gem2 from "../assets/gem2.avif";

const images = [gem1, gem2, gem1];

const floatingElements = [
  { icon: <Star size={24} />, delay: 0, duration: 4 },
  { icon: <Sparkles size={20} />, delay: 1, duration: 5 },
  { icon: <Crown size={28} />, delay: 2, duration: 3.5 },
  { icon: <Award size={22} />, delay: 0.5, duration: 4.5 },
  { icon: <Gem size={26} />, delay: 1.5, duration: 3 },
  { icon: <ShieldCheck size={24} />, delay: 2.5, duration: 4 },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    // Set loaded state after a brief delay
    setTimeout(() => setIsLoaded(true), 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Background image slider with enhanced transitions */}

      {/* Enhanced gradient overlay with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 z-10" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400/20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6 text-sm text-yellow-300"
        >
          <Crown size={16} />
          <span>Premium Gem Collection</span>
        </motion.div>

        {/* Main heading with animated letters */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              WELCOME TO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent font-bold relative"
            >
              LUNAWAT GEMS
              {/* Decorative underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </motion.span>
          </h1>
        </motion.div>

        {/* Enhanced description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-8 max-w-3xl mx-auto"
        >
          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
            Discover timeless treasures and elegant natural stones crafted for
            royalty. We bring you authenticity, rarity, and refined luxury
            through our exquisite gem collection.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-yellow-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <Gem size={14} />
              <span>Certified Authentic</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <Star size={14} />
              <span>Premium Quality</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <ShieldCheck size={14} />
              <span>Lifetime Guarantee</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <motion.a
            href="#products"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Shop Now</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles size={20} />
            </motion.div>

            {/* Button shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="https://wa.me/919782488408?text=Hi, I want to explore your gem collection"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 border-2 border-yellow-400 hover:border-yellow-300 text-yellow-400 hover:text-yellow-300 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm bg-black/20 hover:bg-black/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us</span>
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
