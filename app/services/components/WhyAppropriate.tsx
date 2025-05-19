// components/WhyAppropriate.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhyAppropriate() {
  return (
    <section className="relative bg-[#07060c] text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Text Block */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Are We Appropriate for You?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
            Running with 26+ years of experience dedicated industry
            professionals specializing in digital security from incident
            handling to IoT forensics. Our services are designed for entities
            and individuals aiming to enhance their digital resilience and
            safeguard sensitive data.
          </p>
          <hr className="border-gray-700 mb-8" />
          <Link href="/about" legacyBehavior>
            <span className="inline-block cursor-pointer bg-white text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Click Here
            </span>
          </Link>
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-tl-[60px] rounded-br-[60px]">
            <Image
              src="/dark-web-course-objective-right.webp"
              alt="Appropriate for you"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
