import { motion } from "framer-motion";
import gemDisplay from "../assets/gem1.avif"; // Replace with a gem image in assets

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={gemDisplay}
            alt="Lunawat Gems Display"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl text-yellow-400 mb-6">
            Why Choose Lunawat Gems?
          </h2>
          <p className="text-gray-300 mb-6">
            Our handcrafted gems are a symbol of elegance and authenticity. We
            blend tradition with modern design to bring you timeless pieces:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span> 100% Certified &
              Natural Stones
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span> Royal-Grade Luxury
              Quality
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span> Trusted by 5000+
              Satisfied Clients
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400">✔</span> Customized Gemstone
              Recommendations
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
