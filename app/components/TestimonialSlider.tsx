"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

const testimonialsData: Testimonial[] = [
  {
    img: "https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-01.jpg",
    quote:
      "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
    name: "Jessie J",
    role: "Acme LTD",
  },
  {
    img: "https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-02.jpg",
    quote:
      "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    name: "Nick V",
    role: "Malika Inc.",
  },
  {
    img: "https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-03.jpg",
    quote:
      "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
    name: "Amelia W",
    role: "Panda AI",
  },
];

const TestimonialSlider: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showFullQuote, setShowFullQuote] = useState<boolean>(false);

  const autorotateTiming = 3000;
  const autorotateInterval = useRef<NodeJS.Timeout | null>(null);

  // Start the auto-rotation
  const startAutorotate = () => {
    stopAutorotate(); // Clear any existing intervals
    autorotateInterval.current = setInterval(() => {
      setActive((prev) => (prev + 1 === testimonialsData.length ? 0 : prev + 1));
      setShowFullQuote(false); // Reset Read More state
    }, autorotateTiming);
  };

  // Stop the auto-rotation
  const stopAutorotate = () => {
    if (autorotateInterval.current) {
      clearInterval(autorotateInterval.current);
      autorotateInterval.current = null;
    }
  };

  // Handle autorotation when hovering
  useEffect(() => {
    if (!isHovered) startAutorotate();
    return () => stopAutorotate();
  }, [isHovered]);

  // Button click handler
  const handleButtonClick = (index: number) => {
    stopAutorotate(); // Stop autorotate when manually clicking
    setActive(index); // Update active testimonial
    setShowFullQuote(false); // Reset Read More state
    startAutorotate(); // Restart autorotation
  };

  return (
    <section className="overflow-hidden">
      <div
        className="w-full max-w-4xl mx-auto text-center px-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Testimonial Image */}
        <div className="relative h-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
            <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 -z-10 transition-transform duration-700 ${
                    active === index ? "opacity-100 rotate-0" : "opacity-0 rotate-[60deg]"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.68,-0.3,0.32,1)",
                    pointerEvents: active === index ? "auto" : "none",
                  }}
                >
                  {active === index && (
                    <Image
                      className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                      src={testimonial.img}
                      width={56}
                      height={56}
                      alt={testimonial.name}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="mb-9">
          <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  active === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                } transition-all duration-500 delay-200`}
                style={{
                  position: active === index ? "relative" : "absolute",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                {active === index && (
                  <div className="text-2xl font-bold text-white before:content-['\201C'] after:content-['\201D']">
                    {showFullQuote
                      ? testimonial.quote
                      : `${testimonial.quote.slice(0, 110)}...`}
                    {testimonial.quote.length > 101 && (
                      <button
                        className="ml-2 text-indigo-400 hover:underline"
                        onClick={() => setShowFullQuote(!showFullQuote)}
                      >
                        {showFullQuote ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center -m-0">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={index}
              className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 transition-colors duration-150 ${
                active === index
                  ? "bg-indigo-500 text-white shadow-indigo-950/10"
                  : "bg-white hover:bg-indigo-100 text-slate-900"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <span>{testimonial.name}</span>{" "}
              <span className={active === index ? "text-indigo-200" : "text-slate-300"}>-</span>{" "}
              <span>{testimonial.role}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
