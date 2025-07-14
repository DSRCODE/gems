import Slider from "react-slick";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    message:
      "Codantra helped us launch our MVP in record time. Their communication and delivery were beyond expectations.",
    rating: 5,
  },
  {
    name: "Anuj Patel",
    role: "CTO, Fintech",
    message:
      "The team brought technical expertise and creative insight that helped shape our AI platform beautifully.",
    rating: 4,
  },
  {
    name: "Sarah Ali",
    role: "Digital Marketer",
    message:
      "I loved how intuitive and clean the UI/UX was. The team really understood our goals and made it shine.",
    rating: 5,
  },
  {
    name: "Raj Mehta",
    role: "Product Manager",
    message:
      "Their understanding of product and tech together is commendable. A solid partner to work with.",
    rating: 4,
  },
  {
    name: "Ayesha Khan",
    role: "Founder, EdTech",
    message:
      "They helped bring our classroom app to life—smooth and simple experience with amazing support.",
    rating: 5,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const renderStars = (rating) => (
  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) =>
      i < rating ? (
        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
      ) : (
        <Star key={i} size={18} className="text-gray-600" />
      )
    )}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 px-6  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sm:text-4xl font-cinzel text-3xl md:text-4xl text-yellow-400 mb-2"
        >
          What Our Clients Say
        </motion.h2>

        <p className="text-gray-400 mb-10 italic text-sm">
          Trusted voices from the gem of our journey.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#111111] border border-yellow-600/30 rounded-xl shadow-xl p-6 md:p-8 text-center mx-4 hover:shadow-yellow-500/20 transition-all h-full">
                <p className="italic text-gray-300 mb-4">“{t.message}”</p>
                {renderStars(t.rating)}
                <h4 className="text-lg font-semibold mt-4 text-yellow-300">
                  {t.name}
                </h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
