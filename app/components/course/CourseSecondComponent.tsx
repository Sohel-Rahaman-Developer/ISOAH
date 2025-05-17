// src/components/course/CourseSecondComponent.tsx
"use client";

import React from "react";
import type { Course } from "@/app/types/course";
import { FaRegStar, FaLightbulb, FaHourglassHalf } from "react-icons/fa";

interface CourseSecondComponentProps {
  overview: Course["overview"];
  objectives: Course["objectives"];
}

export default function CourseSecondComponent({
  overview,
  objectives,
}: CourseSecondComponentProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* Left: Large Image */}
          <div className="w-full md:w-1/2 flex justify-end relative">
            <img
              src="https://forensicshq.com/wp-content/uploads/2024/05/dark-web-course-brief-left.jpg"
              alt="Course Brief"
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
              <p className="mt-2 text-gray-600">{overview.eligibility}</p>
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
                {overview.learningOutcome}
              </p>
              <div className="absolute top-1/2 left-[-80px] transform -translate-y-1/2 flex flex-col items-center space-y-8">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaLightbulb className="text-2xl text-gray-800" />
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 mt-6 relative">
              {overview.statsRow.map((stat) => (
                <div key={stat.label} className="flex-1 text-center">
                  <h4 className="text-lg font-bold text-gray-900">
                    {stat.label}
                  </h4>
                  <div className="mt-2 inline-block bg-black text-white px-6 py-2 rounded-full">
                    {stat.value}
                  </div>
                </div>
              ))}
              <div className="absolute top-1/2 left-[-80px] transform -translate-y-1/2 flex flex-col items-center space-y-8">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaHourglassHalf className="text-2xl text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Objectives */}
      <div className="container mx-auto px-4 max-w-7xl mt-12 border-t border-gray-200 pt-8">
        <h3 className="text-2xl font-bold text-gray-900">Course Objective</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
          {objectives.map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
