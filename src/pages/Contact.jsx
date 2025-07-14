import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen px-4 py-24 md:px-10 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-cinzel">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Have a query about gemstones, custom orders, or bulk buying? We’re
          here to help!
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] rounded-xl p-8 border border-yellow-500/10 shadow-lg"
        >
          <div className="mb-6">
            <label className="block mb-2 text-yellow-300 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-black text-white border border-yellow-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-yellow-300 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-black text-white border border-yellow-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-yellow-300 text-sm font-medium">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              className="w-full p-3 bg-black text-white border border-yellow-500/20 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-yellow-400 text-black py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between bg-[#111] rounded-xl p-8 border border-yellow-500/10 shadow-lg"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Office Address
              </h3>
              <p className="text-gray-300">
                Lunawat Gems, Jaipur, Rajasthan, India
                <br />
                Pincode - 302003
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Contact Info
              </h3>
              <p className="text-gray-300 flex items-center gap-2">
                <Phone className="text-yellow-400" size={18} />
                +91 97824 88408
              </p>
              <p className="text-gray-300 flex items-center gap-2 mt-1">
                <Mail className="text-yellow-400" size={18} />
                contact@lunawatgems.com
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919782488408?text=Hi, I have an enquiry about your gemstones"
            target="_blank"
            rel="noreferrer"
            className="mt-8 text-center border border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full text-sm transition"
          >
            Enquire via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
