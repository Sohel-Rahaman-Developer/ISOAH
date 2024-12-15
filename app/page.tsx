import BrandCarousel from './components/BrandCarousel';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import NumbersSection from './components/NumbersSection';
import ParallaxSlider from './components/ParallaxSlider';
import RecentProjects from './components/RecentProjects';
import TestimonialSlider from './components/TestimonialSlider';
import Timeline from './components/VerticalTimelineComponent';
import WhatWeDo from './components/WhatWeDo';
import WhyForensicsHQ from './components/WhyForensicsHQ';
import Cursor from './Cursor';
// import ParticlesBackground from './ParticlesBackground'; 

const HomePage = () => {
  const slides = [
    {
      id: 1,
      imageUrl: '/images/image1.webp',
      title: 'Welcome to Hacking World',
      subtitle: 'Experience the Artistic Effect',
    },
    {
      id: 2,
      imageUrl: '/images/image2.webp',
      title: 'Creative Design',
      subtitle: 'Beautiful and Engaging UI/UX',
    },
    {
      id: 3,
      imageUrl: '/images/image3.webp',
      title: 'Innovative Ideas',
      subtitle: 'Bringing Your Vision to Life',
    },
    {
      id: 4,
      imageUrl: '/images/image4.webp',
      title: 'Innovative Ideas',
      subtitle: 'Bringing Your Vision to Life',
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
        <RecentProjects />
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
