import { Gem, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: <Gem size={36} className="text-yellow-400" />,
    title: "Precious Gems",
    desc: "Explore rare, certified rubies, emeralds, sapphires and diamonds.",
  },
  {
    icon: <Star size={36} className="text-yellow-400" />,
    title: "Astrological Stones",
    desc: "Authentic stones based on your Kundli, Rashi, and Nakshatra.",
  },
  {
    icon: <ShieldCheck size={36} className="text-yellow-400" />,
    title: "Customized Jewelry",
    desc: "We craft custom rings, pendants & lockets in gold/silver settings.",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-cinzel text-yellow-400 mb-4">
          Explore Our Categories
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Every gem has a story. Discover collections curated for luxury,
          purpose, and power.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-black border border-yellow-500/20 hover:border-yellow-400/40 rounded-xl p-6 text-center transition"
          >
            <div className="flex justify-center mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {cat.title}
            </h3>
            <p className="text-gray-400 text-sm">{cat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
