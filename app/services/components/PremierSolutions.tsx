// components/PremierSolutions.tsx
"use client";

import React from "react";


export default function PremierSolutions() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900">
            Premier Solutions at Your Fingertips
          </h2>
          <p className="text-lg sm:text-xl text-blue-800 font-medium">
            Join the many who trust ForensicsHQ for fast, accurate solutions
          </p>
        </div>

        {/* Right Paragraph */}
        <div>
          <p className="text-base sm:text-lg text-blue-700 leading-relaxed">
            Explore our range of cutting-edge digital forensics services designed
            to strengthen your security approach. From IoT forensics to incident
            response, our expert team delivers precise, timely results that
            safeguard your business. Our clients experience enhanced resilience
            and reduced risks by relying on us for in-depth investigations and
            fast data recovery. Join the growing number of satisfied partners
            who have turned challenges into opportunities with ForensicsHQ’s
            expert digital forensics services.
          </p>
        </div>
      </div>
    </section>
);
}
