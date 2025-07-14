import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#0b0b0b] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-cinzel text-3xl md:text-4xl text-yellow-400 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6">
            Have a question, a special request, or want to know more about our
            gemstones? We’d love to hear from you!
          </p>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-500" size={18} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-500" size={18} />
              <span>info@lunawatgems.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-500" size={18} />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            WhatsApp Us Now
          </a>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (hook not implemented yet)");
          }}
        >
          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              required
              className="w-full bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              required
              className="w-full bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              rows="5"
              required
              className="w-full bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
              placeholder="Enter your query"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
