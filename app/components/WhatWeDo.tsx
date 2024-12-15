/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

const WhatWeDo: React.FC = () => {
  // Hook to respect user preferences for reduced motion
  const shouldReduceMotion = useReducedMotion();

  // Define animation variants for the Left Section
  const leftSectionVariants: Variants = {
    hidden: { x: -100, opacity: 0 }, // Starts 100px to the left and fully transparent
    visible: { x: 0, opacity: 1 },    // Moves to original position and fully opaque
  };

  // Define animation variants for cards
  const cardVariants: Variants = {
    hiddenTop: { y: -50, opacity: 0 },
    hiddenRight: { x: 50, opacity: 0 },
    hiddenBottom: { y: 50, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  return (
    <section className="py-10 px-5 lg:px-20  text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          className="lg:w-[40%] flex justify-center items-center p-2"
          variants={leftSectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { type: "tween", duration: 2, ease: "easeInOut" }
          }
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated Gradient Border Wrapper */}
          <div className="rounded-lg p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-rotate bg-[200%_200%] h-full transform transition duration-500 hover:scale-95">
            {/* Inner Content */}
            <motion.div
              className="lg:w-full h-full me-5 flex flex-col justify-center p-6 bg-slate-900 rounded-lg shadow-lg "
              variants={leftSectionVariants}
              initial="hidden"
              animate="visible"
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "tween", duration: 2, ease: "easeInOut" }
              }
            >
              <h3 className="text-md tracking-wide text-white uppercase">
                Empowering Cyber Resilience Globally
              </h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                What We Do
              </h2>
              <div className="space-y-4">
                <p className="text-base text-white leading-relaxed">
                  Specialized training programs designed to develop highly skilled Digital Forensics professionals.
                </p>
                <p className="text-base text-white leading-relaxed">
                  Partner with organizations to strengthen their defenses against intricate digital evidence tampering and complex data breaches.
                </p>
                <p className="text-base text-white leading-relaxed">
                  Investigate digital incidents and uncover forensically sound intelligence to support legal investigations and secure crucial evidence.
                </p>
              </div>
              <motion.button
                id="box-shining"
                className="mt-6 px-6 py-3 text-white rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
                aria-label="Learn More About What We Do"
                // No Framer Motion hover effects needed here as CSS handles it
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 lg:mt-0">
          {/* Card 1: Comprehensive Investigation (From Top) */}
          <motion.div
            className="bg-slate-800 rounded-lg shadow-lg p-5"
            variants={cardVariants}
            initial="hiddenTop"
            whileInView="visible"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 100, damping: 30, duration: 1 }
            }
            viewport={{ once: true, amount: 0.3 }} // Changed amount to 0.3
            whileHover={
              !shouldReduceMotion
                ? { y: -10, scale: 1.01, transition: { type: "spring", stiffness: 300 } }
                : {}
            }
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl">📋</span>
              <h4 className="text-xl font-semibold ms-2">
                Comprehensive Investigation
              </h4>
            </div>
            <p className="text-base">
              We conduct thorough and systematic examinations of digital evidence,
              with a 100% hands-on practical approach so that students get ready
              for cyber-related incidents.
            </p>
          </motion.div>

          {/* Card 2: Incident Response Expertise (From Right) */}
          <motion.div
            className="bg-slate-800 rounded-lg shadow-lg p-5"
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 100, damping: 20, duration: 1 }
            }
            viewport={{ once: true, amount: 0.3 }} // Changed amount from 1 to 0.3
            whileHover={
              !shouldReduceMotion
                ? { y: -10, scale: 1.01, transition: { type: "spring", stiffness: 300 } }
                : {}
            }
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl">📑</span>
              <h4 className="text-xl font-semibold ms-2">
                Incident Response Expertise
              </h4>
            </div>
            <p className="text-base">
              Learn how to immediately respond to incidents, minimize damage, and
              provide actionable recommendations to prevent future threats.
            </p>
          </motion.div>

          {/* Card 3: Continuous Learning and Adaptation (From Bottom) */}
          <motion.div
            className="bg-slate-800 rounded-lg shadow-lg p-5"
            variants={cardVariants}
            initial="hiddenBottom"
            whileInView="visible"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 100, damping: 20, duration: 1 }
            }
            viewport={{ once: true, amount: 0.3 }} // Changed amount to 0.3
            whileHover={
              !shouldReduceMotion
                ? { y: -10, scale: 1.01, transition: { type: "spring", stiffness: 300 } }
                : {}
            }
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl">📚</span>
              <h4 className="text-xl font-semibold ms-2">
                Continuous Learning and Adaptation
              </h4>
            </div>
            <p className="text-base">
              We make our students always adaptive with the latest academic
              curriculum in the world of evolving cyber threats and challenges.
            </p>
          </motion.div>

          {/* Card 4: Advanced Tools & Techniques (From Bottom) */}
          <motion.div
            className="bg-slate-800 rounded-lg shadow-lg p-5 card-animation"
            variants={cardVariants}
            initial="hiddenBottom"
            whileInView="visible"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 100, damping: 20, duration: 0.9 }
            }
            viewport={{ once: true, amount: 0.3 }} // Changed amount from 0.5 to 0.3
            whileHover={
              !shouldReduceMotion
                ? { y: -10, scale: 1, transition: { type: "spring", stiffness: 300 } }
                : {}
            }
          >
            <div className="flex items-center mb-3 relative z-10">
              <span className="text-2xl">🛠️</span>
              <h4 className="text-xl font-semibold ms-2">
                Advanced Tools & Techniques
              </h4>
            </div>
            <p className="text-base relative z-10">
              Our proficiency lies in the advanced practical lab with
              cutting-edge methodologies so that students can enhance their
              skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
