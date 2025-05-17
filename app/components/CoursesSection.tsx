"use client";

import React from "react";
import Link from "next/link";
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

const ProjectsSection: React.FC = () => (
  <section className="bg-gradient-to-t from-black-100 to-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center text-[30px] md:text-[38px] font-bold text-black mb-10">
        Our Certifications
      </h1>

      <div className="flex flex-wrap justify-center -mx-4">
        {courses.map((project: Course, idx: number) => (
          <motion.div
            key={project.id}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
          >
            <Link
              href={project.link}
              className="
                block
                border border-indigo-900 
                rounded-b-3xl rounded-tl-3xl 
                p-6 shadow-lg bg-white 
                h-full flex flex-col 
                transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl
              "
            >
              <img
                src={project.img}
                alt={project.title}
                className=" h-60 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-black mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 flex-grow">{project.des}</p>
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

export default ProjectsSection;
