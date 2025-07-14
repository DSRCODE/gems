import { motion } from "framer-motion";


export default function About() {

  return (

      <section className=" text-white px-4 md:px-10 py-20 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-cinzel">
            About Lunawat Gems
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Carving brilliance since 2006 with trust, technology & tradition.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
              Our Journey
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              Established in 2006, Lunawat Gems has carved out a unique name for
              itself in the gemstone manufacturing industry. Over the years we
              have successfully developed a trusted brand name and diverse
              customer base. We cater to the needs of not only the big brands in
              this industry but also budding individuals with the same
              dedication.
            </p>
            <p className="text-gray-300 mt-3">
              As a result, we have maintained a strong trading relationship with
              gemstone buyers from USA, UK, Italy, Spain, Germany, Australia,
              Japan, Latin America, Thailand & many other countries.
            </p>
          </motion.div>

          {/* Manufacturing & Quality */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
              Quality & Manufacturing
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              We have well-developed manufacturing units with highly experienced
              artisans and craftsmen. All gemstones are cut and polished in our
              own factories using sophisticated tools and technologies. This
              enables us to uphold the strictest standards for proportion,
              polish, size, and shape.
            </p>
            <p className="text-gray-300 mt-3">
              Our constant urge for innovation allows us to play a pioneering
              role in many developments in the industry.
            </p>
          </motion.div>

          {/* Sourcing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
              Sourcing
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              Our expertise in the gemstone industry helps us maintain strong
              relationships with ethically mined gemstone suppliers worldwide.
              Our main sources are the USA, Germany, Thailand, Hong Kong, Brazil
              & Tanzania.
            </p>
            <p className="text-gray-300 mt-3">
              We follow industry-standard protocols and ensure our suppliers
              employ skilled human resources with certifications. We at Lunawat
              Gems believe in exporting ethical & fine gemstones to our clients.
            </p>
          </motion.div>

          {/* Craftsmanship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
              Craftsmanship
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              Our team includes highly skilled craftsmen with a passion for
              innovation. We constantly take on challenging designs that keep us
              unique in the industry.
            </p>
          </motion.div>

          {/* Technology Driven */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
              Technology Driven Manufacturing
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              Our manufacturing unit is equipped with the latest technology
              tools, including fully automatic 3D CNC machines for precision
              cutting and carving. Our goal is to integrate modern technology
              with the gemstone industry, ensuring bulk production with
              consistent quality and reduced dependency on manual labor.
            </p>
          </motion.div>
        </div>
      </section>
  );
}
