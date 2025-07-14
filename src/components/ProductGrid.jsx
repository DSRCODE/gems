import { motion } from "framer-motion";
import gem1 from "../assets/gem1.avif";
import gem2 from "../assets/gem2.avif";
import { Star, Sparkles, Crown, Award, Gem, ShieldCheck } from "lucide-react";

const products = [
  {
    name: "Natural Ruby",
    image: gem1,
    id: "ruby123",
    price: "₹25,000",
    origin: "Burma",
    description:
      "A deep red natural ruby known for its vibrant energy and elegance.",
  },
  {
    name: "Certified Emerald",
    image: gem2,
    id: "emerald456",
    price: "₹30,000",
    origin: "Colombia",
    description: "A lush green emerald that signifies wisdom and prosperity.",
  },
  {
    name: "Blue Sapphire",
    image: gem1,
    id: "sapphire789",
    price: "₹28,000",
    origin: "Sri Lanka",
    description: "A premium blue sapphire radiating calmness and strength.",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-cinzel text-yellow-400 mb-4">
          Our Finest Collection
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Handpicked and certified by gem experts. Start your gemstone journey
          with trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product, index) => (
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
                <span className="text-gray-500">Origin: {product.origin}</span>
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
  );
}
