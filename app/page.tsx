import BrandCarousel from "./components/BrandCarousel";
import CoursesSection from "./components/CoursesSection";
import { Footer } from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import NumbersSection from "./components/NumbersSection";
import ParallaxSlider from "./components/ParallaxSlider";
// import RecentProjects from './components/RecentProjects';
import TestimonialSlider from "./components/TestimonialSlider";
import Timeline from "./components/VerticalTimelineComponent";
import WhatWeDo from "./components/WhatWeDo";
import WhyForensicsHQ from "./components/WhyForensicsHQ";
import Cursor from "./Cursor";
// import ParticlesBackground from './ParticlesBackground';

const HomePage = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "/images/image1.webp",
      title: "Expert Digital Forensics Services at Your Fingertips",
      subtitle:
        "Empowering justice with fast, reliable, and confidential forensic solutions.",
    },
    {
      id: 2,
      imageUrl: "/images/image2.webp",
      title: "No. 1 Platform for Learning Cyber Forensics",
      subtitle:
        "Master the art of digital investigation with our industry-led training programs.",
    },
    {
      id: 3,
      imageUrl: "/images/image3.webp",
      title:
        "Unlock hidden digital evidence with our cutting-edge mobile forensics solutions",
      subtitle:
        "Retrieve, analyze, and preserve mobile data with precision and accuracy.",
    },
    {
      id: 4,
      imageUrl: "/images/image4.webp",
      title:
        "Protect your organisation’s reputation with our digital forensics expertise",
      subtitle:
        "Mitigate risks and respond to cyber incidents with confidence.",
    },
  ];

  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />
        <ParallaxSlider slides={slides} />
        <WhyForensicsHQ />
        <WhatWeDo />
        <NumbersSection />
        <BrandCarousel />
        {/* <RecentProjects /> */}
        <CoursesSection />
        <Timeline />
        <section className="overflow-hidden">
          <div className="w-full  max-w-7xl mx-auto px-4 md:px-6 py-24">
            <h2 className="text-4xl font-bold mb-10 text-white text-center">
              Our Students Feedback
            </h2>
            <div className="flex justify-center">
              <TestimonialSlider />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
