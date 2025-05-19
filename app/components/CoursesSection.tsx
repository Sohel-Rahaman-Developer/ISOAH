"use client";

import React from "react";
import Link from "next/link";
import Image, { ImageLoaderProps } from "next/image";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import type { Course } from "@/app/types/course";

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
    scale: 0.8,
  }),
  visible: { opacity: 1, x: 0, scale: 1 },
};

// loader that auto-prefixes "/" when needed
const localLoader = ({ src }: ImageLoaderProps) => {
  if (src.startsWith("/") || src.startsWith("http")) return src;
  return `/${src}`;
};

const CoursesSection: React.FC = () => (
  <section
    id="programs"
    className="py-12 min-h-[60vh] flex items-center justify-center"
    style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.97) 80%, #000319 100%)",
    }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center text-[30px] md:text-[38px] font-bold text-black mb-10">
        Our Certifications
      </h1>

      <div className="flex flex-wrap justify-center -mx-4">
        {courses.map((course: Course, idx: number) => (
          <motion.div
            key={course.id}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
          >
            <Link
              href={course.link}
              className="
                block
                border border-indigo-900 
                rounded-b-[50px] rounded-tl-[50px] 
                p-5 shadow-lg programs 
                h-full flex flex-col 
                transform transition-all duration-300
                hover:scale-105 
                hover:translate-y-[-10px]
                shadow-black hover:shadow-black
              "
            >
              <div className="relative w-full h-60 rounded-lg mb-4 overflow-hidden">
                <Image
                  loader={localLoader}
                  src={course.img}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-100 flex-grow">{course.des}</p>
              <div className="mt-4 text-center">
                <span className="inline-block bg-indigo-900 text-white text-sm px-4 py-2 rounded-full">
                  View Details →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
