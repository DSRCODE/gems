import { useState } from "react";
import { motion } from "framer-motion";
import gem1 from "../assets/gem1.avif";
import gem2 from "../assets/gem2.avif";
import { Star, Sparkles, Crown, Award, Gem, ShieldCheck } from "lucide-react";

const products = [
  {
    id: "ruby123",
    name: "Natural Ruby",
    category: "Ruby",
    image: gem1,
    price: "₹25,000",
    origin: "Burma",
    description: "Deep red ruby known for elegance & energy.",
  },
  {
    id: "emerald456",
    name: "Certified Emerald",
    category: "Emerald",
    image: gem2,
    price: "₹30,000",
    origin: "Colombia",
    description: "Lush green emerald symbolizing wisdom.",
  },
  {
    id: "sapphire789",
    name: "Blue Sapphire",
    category: "Sapphire",
    image: gem1,
    price: "₹28,000",
    origin: "Sri Lanka",
    description: "Premium blue sapphire of calm & strength.",
  },
  {
    id: "yellow111",
    name: "Yellow Sapphire",
    category: "Sapphire",
    image: gem2,
    price: "₹20,000",
    origin: "Thailand",
    description: "Yellow sapphire with positive vibrations.",
  },
];

const categories = ["All", "Ruby", "Emerald", "Sapphire"];

export default function ProductPage() {
  const floatingElements = [
    { icon: <Star size={24} />, delay: 0, duration: 4 },
    { icon: <Sparkles size={20} />, delay: 1, duration: 5 },
    { icon: <Crown size={28} />, delay: 2, duration: 3.5 },
    { icon: <Award size={22} />, delay: 0.5, duration: 4.5 },
    { icon: <Gem size={26} />, delay: 1.5, duration: 3 },
    { icon: <ShieldCheck size={24} />, delay: 2.5, duration: 4 },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
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

      <section className=" min-h-screen text-white py-20 px-4 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-cinzel">
            Discover Our Collection
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Finest gemstones curated with care, authenticity, and elegance.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 border rounded-full transition ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 shadow-lg hover:shadow-yellow-700/30 transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl text-yellow-300 font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-yellow-400 font-medium">
                    {product.price}
                  </span>
                  <span className="text-gray-500">
                    Origin: {product.origin}
                  </span>
                </div>
                <a
                  href={`https://wa.me/919782488408?text=Hi, I want to enquire about: ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-center border border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full text-sm transition w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
