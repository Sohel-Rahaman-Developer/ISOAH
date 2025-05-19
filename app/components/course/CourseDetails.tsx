"use client";

import React from "react";
import { FaLinkedin, FaUserTie } from "react-icons/fa";
import type { Course } from "@/app/types/course";
import Image from "next/image";

interface CourseDetailsProps {
  details: Course["details"];
}

export default function CourseDetails({ details }: CourseDetailsProps) {
  return (
    <section className="bg-[#000319] py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                {details.title}
              </h2>
              <span className="inline-block bg-yellow-400 text-blue-800 font-medium text-sm px-3 py-1 rounded-full mt-3">
                {details.tagline}
              </span>
            </div>
            <p className="text-gray-200 leading-relaxed">
              {details.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">
                  {details.stats.averageCtc}
                </span>
                <span className="text-sm text-gray-300">Average CTC</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinkedin className="text-2xl text-yellow-400" />
                <span className="mt-1 text-sm text-gray-300">
                  {details.stats.linkedinJobs}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <FaUserTie className="text-2xl text-yellow-400" />
                <span className="mt-1 text-sm text-gray-300">
                  {details.stats.mentors}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {details.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`w-full sm:w-auto font-semibold px-6 py-3 rounded-md transition ${
                    action.type === "primary"
                      ? "bg-white text-blue-800 hover:shadow-lg"
                      : "bg-transparent border border-white text-white hover:bg-white hover:text-blue-800"
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={details.heroImage}
                alt={details.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <a
                href={details.playDemoLink}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition"
                aria-label="Play Demo"
              >
                ▶
              </a>
            </div>

            <div className="p-6 space-y-4">
              {/* Cohort Start */}
              <div className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">
                Cohort starts on{" "}
                <strong>{new Date(details.cohortStart).toLocaleDateString()}</strong>
              </div>

              {/* Pricing */}
              <div className="border-t border-b border-gray-200 py-4 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="line-through text-gray-400">
                    {details.pricing.currency} {details.pricing.original}
                  </span>
                  <span className="text-2xl font-bold text-gray-800">
                    {details.pricing.currency} {details.pricing.discounted}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {details.pricing.emiInfo}
                </p>
              </div>

              {/* Demo Offer */}
              <div className="border border-dashed border-yellow-400 bg-yellow-50 text-yellow-800 text-sm px-4 py-2 rounded-md flex items-center">
                {details.demoOffer.icon} {details.demoOffer.text}
              </div>
                  {/* Apply Button */}
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Fine Print */}
        <p className="mt-6 text-xs text-gray-400">{details.finePrint}</p>
      </div>
    </section>
  );
}
