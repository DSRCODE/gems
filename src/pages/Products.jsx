import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: "₹25,000",
    image: "/assets/ring1.jpg",
  },
  {
    id: 2,
    name: "Ruby Necklace",
    price: "₹40,000",
    image: "/assets/necklace1.jpg",
  },
];

export default function Products() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white shadow-md rounded-xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.price}</p>
          <a
            href={`https://wa.me/919782488408?text=I'm interested in ${product.name}`}
            target="_blank"
            className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Enquire on WhatsApp
          </a>
        </motion.div>
      ))}
    </div>
  );
}
