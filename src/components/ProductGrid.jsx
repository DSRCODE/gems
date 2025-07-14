import { motion } from "framer-motion";
import gem1 from "../assets/gem1.avif";
import gem2 from "../assets/gem2.avif";
// import gem3 from "../assets/gem3.avif";

const products = [
  {
    name: "Natural Ruby",
    image: gem1,
    id: "ruby123",
  },
  {
    name: "Certified Emerald",
    image: gem2,
    id: "emerald456",
  },
  {
    name: "Blue Sapphire",
    image: gem1,
    id: "sapphire789",
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
            className="bg-[#111] rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-yellow-300 font-semibold mb-2">
                {product.name}
              </h3>
              <a
                href={`https://wa.me/919782488408?text=Hi, I want to enquire about: ${product.name}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-2 rounded-full text-sm transition"
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
