'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ManagerProfile = () => {
  return (
    <motion.section
      className="body-font"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 items-center">
            {/* Profile Picture and Name */}
            <motion.div
              className="sm:w-1/3 text-center sm:pr-8 sm:py-8"
              variants={slideInLeft}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-700 text-white overflow-hidden">
                <Image
                  alt="Anubhav Khettry"
                  src="https://forensicshq.com/wp-content/uploads/2024/05/Anubhav-Khettry-faculty.jpg"
                  width={300}
                  height={300}
                  className="max-w-[250px] h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <motion.h2
                  className="font-medium title-font text-gray-100 text-xl flex items-center gap-2"
                  variants={scaleUp}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <FaUserTie className="text-indigo-500" /> Mr. Anubhav Khettry
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-400"
                  variants={scaleUp}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Manager
                </motion.p>
                <motion.div
                  className="mt-2"
                  variants={scaleUp}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <p className="text-gray-400">CHFI, CEH, CRTP</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Details */}
            <motion.div
              className="sm:w-2/3 sm:pl-8 sm:py-8 border-l border-gray-700 mt-4 pt-4 sm:mt-0"
              variants={slideInRight}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Role & Expertise */}
              <motion.div
                className="mb-6"
                variants={scaleUp}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Role &amp; Expertise:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  As the Manager of Cyber Security, Anubhav Khettry excels in managing projects, handling clients, ensuring project delivery, and leading teams. His expertise includes Network Security, Application Security, Source Code Review, Configuration Review, and Cloud Security. He focuses on fortifying end-user security, hardening infrastructure, and incident response using forensic analysis tools.
                </p>
              </motion.div>

              {/* Technical Skills */}
              <motion.div
                className="mb-6"
                variants={scaleUp}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Technical Skills:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Skilled in Active Directory Penetration Testing, Red Teaming &amp; Blue Teaming, VAPT for Web, Android, iOS, Thick Clients, and Cloud Security for AWS and Azure, he tackles modern security challenges effectively. He holds CRTP, CHFI, and CEH certifications, demonstrating his commitment to continuous learning.
                </p>
              </motion.div>

              {/* Achievements & Vision */}
              <motion.div
                variants={scaleUp}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Achievements &amp; Vision:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Mr. Khettry has received a “Special Achievement Award” for his dedication and contributions. His goal is to implement robust security measures to prevent breaches and develop tools to assess and improve security posture. He has worked with clients from various industries, gaining a comprehensive understanding of their unique security needs. Anubhav believes in continuous growth and learning from mistakes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ManagerProfile;
