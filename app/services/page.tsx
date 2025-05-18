import React from "react";
import Cursor from "../Cursor";
import Navbar from "../components/Header/Navbar";
import { Footer } from "../components/Footer";
import HeroSection from "./components/HeroSection";
import WhyAppropriate from "./components/WhyAppropriate";
import PremierSolutions from "./components/PremierSolutions";
import BrandCarousel from "../components/about/BrandCarousel";
import ServicesSection from "./components/ServicesSection";
import NumbersSection from "../components/about/NumberSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ContactSection from "./components/ContactSection";

const page = () => {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <div className=" relative z-10 text-white">
          <HeroSection />
          <WhyAppropriate />
          <PremierSolutions />
          <div className="bg-white">
            <BrandCarousel fromService/>
          </div>
          <ServicesSection />
          <NumbersSection fromService/>
          <TestimonialsCarousel />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default page;
