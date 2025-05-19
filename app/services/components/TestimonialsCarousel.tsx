// components/TestimonialsCarousel.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
  quote: string;
  logo: string;
  client: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The expertise brought to us by the team of CISA, OSCE, OSCP certified professionals of ForensicsHQ has given us immense value addition in maturing overall information security of our assets and processes.",
    logo: "/logos/tata-steel.png",
    client: "TATA STEEL",
  },
  {
    quote:
      "We acknowledge the dedication, professionalism, and hard work demonstrated by the team throughout the duration of the project. Their commitment to excellence has been instrumental in the successful completion of the job.",
    logo: "/logos/vedanta.png",
    client: "Vedanta Limited",
  },
  {
    quote:
      "ForensicsHQ has been providing consultancy for establishing, implementing, maintaining and continually improving the Information Security Management System (ISMS) at our office through intensive testing and insightful recommendations.",
    logo: "/logos/eyo-solutions.png",
    client: "EYO Solutions",
  },
  {
    quote:
      "The expertise brought to us by the team of CISA, OSCE, OSCP certified professionals of ForensicsHQ has given us immense value addition in maturing overall information security of our assets and processes.",
    logo: "/logos/tata-steel.png",
    client: "TATA STEEL",
  },
  {
    quote:
      "We acknowledge the dedication, professionalism, and hard work demonstrated by the team throughout the duration of the project. Their commitment to excellence has been instrumental in the successful completion of the job.",
    logo: "/logos/vedanta.png",
    client: "Vedanta Limited",
  },
  {
    quote:
      "ForensicsHQ has been providing consultancy for establishing, implementing, maintaining and continually improving the Information Security Management System (ISMS) at our office through intensive testing and insightful recommendations.",
    logo: "/logos/eyo-solutions.png",
    client: "EYO Solutions",
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="bg-gray-900">
      <section className="py-16 bg-gray-900 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-white">Our Happy Clients!</h2>
          <div className="mt-2 h-1 w-16 bg-gray-700 mx-auto" />
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          slidesPerGroup={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
          className="px-4"
        >
          {testimonials.map(({ quote, logo, client }, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-gray-800 p-6 rounded-r-xl rounded-bl-[50px] shadow-2xl h-full flex flex-col justify-between">
                <p className="text-white text-base leading-relaxed mb-8">
                  {quote}
                </p>
                <div className="flex items-center">
                   <Image
                    src={logo}
                    alt={client}
                    width={48}
                    height={48}
                    className="object-contain rounded-full bg-white p-2 w-12 h-12"
                  />
                  <span className="ml-4 text-white font-semibold">
                    {client}
                  </span>
                </div>
                <FaQuoteRight className="absolute bottom-4 right-4 text-2xl text-gray-600" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
