"use client";

import React from "react";
import type { Course } from "@/app/types/course";
import { FiAward, FiUserCheck, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";

interface DemoCertificateProps {
  features: Course["certificateFeatures"];
}

const iconMap = {
  FiAward: <FiAward className="text-3xl text-white" />,
  FiUserCheck: <FiUserCheck className="text-3xl text-white" />,
  FiTrendingUp: <FiTrendingUp className="text-3xl text-white" />,
};

export default function DemoCertificate({ features }: DemoCertificateProps) {
  return (
    <section className="bg-[#000319] py-16 md:px-0 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Certificate Image */}
        <div className="relative w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="absolute inset-0 bg-blue-700 rounded-xl transform md:translate-x-6 md:-translate-y-6"></div>
          <Image
            src={features[0]?.icon /* you can swap this for a dedicated image */}
            alt="Certificate"
            width={400}
            height={300}
            className="relative important-w-full md:w-auto rounded-xl shadow-xl"
          />
        </div>

        {/* Text & Features */}
        <div className="w-full md:w-2/3 space-y-6 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Be in the spotlight by getting certified!
            </h2>
            <p className="mt-2 text-gray-200">
              A detailed overview of the course, including key topics,
              objectives, and module sequence.
            </p>
          </div>

          <div className="bg-blue-600 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center text-center md:text-left md:items-start space-y-3"
              >
                {iconMap[f.icon as keyof typeof iconMap]}
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-200">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
