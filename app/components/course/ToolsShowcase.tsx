"use client";

import React from "react";
import type { Course } from "@/app/types/course";

interface ToolsShowcaseProps {
  tools: Course["tools"];
}

export default function ToolsShowcase({ tools }: ToolsShowcaseProps) {
  return (
    <section className="py-16 px-4 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Tools</h2>
          <p className="mt-2 text-lg text-blue-700">
            Practical experience using advanced digital forensic tools.
          </p>
        </div>
        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-6"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
