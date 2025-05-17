// src/components/CourseSecondComponent.tsx
"use client";

import React from "react";
import { FaRegStar, FaLightbulb, FaHourglassHalf } from "react-icons/fa";
import CourseCurriculum from "./CourseCurriculum";

export default function CourseSecondComponent() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* Left: Large Image */}
          <div className="w-full md:w-1/2 flex justify-end relative">
            <img
              src="https://forensicshq.com/wp-content/uploads/2024/05/dark-web-course-brief-left.jpg"
              alt="Dark Web Forensics"
              className="w-full h-auto max-h-[700px] rounded-lg shadow-lg object-cover"
            />
            {/* Center: Floating Icons */}
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 space-y-6 md:ps-6">
            {/* Eligibility */}
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900">
                Eligibility
              </h3>
              <p className="mt-2 text-gray-600">
                Knowledge of Computer Forensics or CHFI certification with a
                basic understanding of the TOR Browser.
              </p>
              <div className="absolute top-1/2 left-[-80px] transform -translate-y-1/2 flex flex-col items-center space-y-8">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaRegStar className="text-2xl text-gray-800" />
                </div>
              </div>
            </div>

            {/* What Will You Learn */}
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900">
                What Will You Learn
              </h3>
              <p className="mt-2 text-gray-600">
                Participants in this Certified Dark Web Forensics Expert course
                will gain the skills to explore, investigate, and analyze dark
                web activities. This program covers everything from anonymous
                network analysis to cryptocurrency forensics and incident
                response workflows.
              </p>
              <div className="absolute top-1/2 left-[-80px] transform -translate-y-1/2 flex flex-col items-center space-y-8">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaLightbulb className="text-2xl text-gray-800" />
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 mt-6 relative">
              <div className="flex-1 text-center">
                <h4 className="text-lg font-bold text-gray-900">Duration</h4>
                <div className="mt-2 inline-block bg-black text-white px-6 py-2 rounded-full">
                  40 hrs
                </div>
              </div>
              <div className="flex-1 text-center">
                <h4 className="text-lg font-bold text-gray-900">Course Fees</h4>
                <div className="mt-2 inline-block bg-black text-white px-6 py-2 rounded-full">
                  $414
                </div>
              </div>
              <div className="absolute top-1/2 left-[-80px] transform -translate-y-1/2 flex flex-col items-center space-y-8">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaHourglassHalf className="text-2xl text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Accordion */}

      {/* Course Objective */}
      <div className="container mx-auto px-4 max-w-7xl mt-12 border-t border-gray-200 pt-8">
        <h3 className="text-2xl font-bold text-gray-900">Course Objective</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
          <li>Know how to navigate the dark web effectively and safely</li>
          <li>Learn how to use cutting-edge search and analytic techniques</li>
          <li>
            Learn how to trace and analyse cryptocurrency transactions in order
            to detect illegal activity
          </li>
          <li>
            Get hands-on experience with the most up-to-date forensic tools
          </li>
          <li>
            Learn how unlawful goods and services are traded and how to detect
            and combat cybercrime
          </li>
          <li>
            Create a strategy for incident response in the dark web context
          </li>
          <li>
            Improve your capacity to deal with practical issues in a safe
            atmosphere
          </li>
        </ul>
      </div>
    </section>
  );
}
