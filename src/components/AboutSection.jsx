import { motion } from "framer-motion";
import { Gem, Globe2, UserCheck, Award } from "lucide-react";

const stats = [
  { icon: <Gem size={32} />, number: 250, label: "Gemstone Designs" },
  { icon: <UserCheck size={32} />, number: 500, label: "Happy Clients" },
  { icon: <Award size={32} />, number: 15, label: "Years of Legacy" },
  { icon: <Globe2 size={32} />, number: 20, label: "Countries Served" },
];

export default function AboutSection() {
  return (
    <section className=" text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-cinzel text-3xl md:text-4xl text-yellow-400 mb-2">
            About Us
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Established in 2006, Lunawat Gems has carved out a unique name for
            itself in the gemstone manufacturing industry.
          </p>
          <p className="text-gray-400 mb-4">
            Over the years, we have successfully developed a trusted brand name
            and a diverse customer base. We cater not only to the big brands but
            also to emerging talents in the industry with equal dedication.
          </p>
          <p className="text-gray-400 mb-4">
            Our consistent service has led to strong trading relationships with
            gemstone buyers from the USA, UK, Italy, Spain, Germany, Australia,
            Japan, Latin America, Thailand & many more countries.
          </p>
          <p className="text-gray-400">
            With experienced artisans and state-of-the-art manufacturing units,
            we ensure top-quality gemstones cut and polished in our own
            factories. We uphold strict standards for polish, proportion, and
            size, driving innovation and excellence across the industry.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-yellow-600/30 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-yellow-500/20 transition-all"
            >
              <div className="text-yellow-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-bold text-yellow-300">
                {item.number}+
              </h3>
              <p className="text-sm text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
