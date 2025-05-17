// src/components/CourseDetails.tsx
"use client";

import React from "react";
import { FaLinkedin, FaUserTie, FaUniversity } from "react-icons/fa";
import CourseSecondComponent from "./CourseSecondComponent";

export default function CourseDetails() {
  return (
    <section className="bg-[#000319] py-12 ">
      <div className="container mx-auto px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Certified Dark Web Forensics Expert
              </h2>
              <span className="inline-block bg-yellow-400 text-blue-800 font-medium text-sm px-3 py-1 rounded-full mt-3">
                AI Powered
              </span>
            </div>
            <div className="space-y-2">
              {/* <h3 className="text-xl font-semibold">Ethical Hacking Course</h3> */}
              <p className="text-gray-200 leading-relaxed">
                Certified Dark Web Forensics Expert This course will take you on
                a journey into the dark corners of the digital underworld.
                Participants in this thorough programme will delve deeply into
                the techniques, tools, and procedures used in the investigation
                and analysis of dark web activities. This course, created by
                industry experts, provides aspiring professionals with the
                knowledge needed to navigate the dark corners of the internet
                and uncover the mysteries hidden inside.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">₹14 LPA</span>
                <span className="text-sm text-gray-300">Average CTC</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinkedin className="text-2xl text-yellow-400" />
                <span className="mt-1 text-sm text-gray-300">
                  2600+ Jobs on LinkedIn Alone
                </span>
              </div>
              <div className="flex flex-col items-center">
                <FaUserTie className="text-2xl text-yellow-400" />
                <span className="mt-1 text-sm text-gray-300">
                  4+ Industry Mentors
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="w-full sm:w-auto bg-white text-blue-800 font-semibold px-6 py-3 rounded-md shadow hover:shadow-lg transition">
                Book Demo Now
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-800 transition">
                Download Curriculum
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/images/bootcamp-class.jpg"
                alt="Bootcamp class"
                className="w-full h-48 object-cover"
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition"
                aria-label="Play Demo"
              >
                ▶
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Cohort Start */}
              <div className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">
                Cohort starts on <strong>12th May, 25</strong>
              </div>

              {/* Pricing */}
              <div className="border-t border-b border-gray-200 py-4 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="line-through text-gray-400">$515</span>
                  <span className="text-2xl font-bold text-gray-800">
                    $414
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  No cost EMI options available.
                </p>
              </div>

              {/* Demo Offer */}
              <div className="border border-dashed border-yellow-400 bg-yellow-50 text-yellow-800 text-sm px-4 py-2 rounded-md flex items-center">
                ✓ Experience our demo class for just  $10 (refundable)
              </div>

              {/* Apply Button */}
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition">
                Apply Now
              </button>

              {/* Fine Print */}
              <p className="text-xs text-gray-500">
                The Cohort Fee can be paid via custom payment link offered by
                Program Advisor at the point of enrollment. The fees paid are
                non-refundable, non-transferable and cannot be applied to other
                courses, services, or individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


