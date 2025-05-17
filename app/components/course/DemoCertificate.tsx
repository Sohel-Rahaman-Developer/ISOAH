// src/components/DemoCertificate.tsx
"use client";

import React from "react";
import { FiAward, FiUserCheck, FiTrendingUp } from "react-icons/fi";

export default function DemoCertificate() {
  return (
    <section className="bg-[#000319] py-16 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Certificate Image */}
        <div className="relative w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="absolute inset-0 bg-blue-700 rounded-xl transform md:translate-x-6 md:-translate-y-6"></div>
          <img
            src="https://forensicshq.com/wp-content/uploads/elementor/thumbs/certificate-certified-dark-web-forensics-expert-qpz41yvml94g7b5aiih1p2iuizr81308w2cgxj77uw.jpg"
            alt="Certificate of Completion"
            className="relative w-64 md:w-auto rounded-xl shadow-xl"
          />
        </div>

        {/* Text & Features */}
        <div className="w-full md:w-2/3 space-y-6 text-white">
          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Be in the spotlight by getting certified!
            </h2>
            <p className="mt-2 text-gray-200">
              A detailed overview of the course, including key topics,
              objectives, and module sequence.
            </p>
          </div>

          {/* Features Container */}
          <div className="bg-blue-600 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start space-y-3">
              <FiAward className="text-3xl text-white" />
              <h3 className="text-xl font-semibold">Industry-Recognized Certificate</h3>
              <p className="text-gray-200">
                Earn a certificate valued by top companies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start space-y-3">
              <FiUserCheck className="text-3xl text-white" />
              <h3 className="text-xl font-semibold">Stand Out in Job Market</h3>
              <p className="text-gray-200">
                Fortify your profile to increase credibility.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start space-y-3">
              <FiTrendingUp className="text-3xl text-white" />
              <h3 className="text-xl font-semibold">Your Passport to Career Growth</h3>
              <p className="text-gray-200">
                Access well-paying Data Analyst positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
