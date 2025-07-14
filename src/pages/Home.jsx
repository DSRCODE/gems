import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CategoryHighlights from "../components/CategoryHighlights";
import ProductGrid from "../components/ProductGrid";
import TestimonialSection from "../components/TestimonialSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryHighlights/>
      <ProductGrid/>
      <WhyChooseUs/>
      <AboutSection/>
      <TestimonialSection/>
      <ContactSection/>
    </>
  );
}
