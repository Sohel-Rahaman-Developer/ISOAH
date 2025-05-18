// components/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import Typewriter from "@/app/components/Typewriter";


export default function HeroSection() {
  return (
    <section className="relative w-full h-screen md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/services-bg.webp"
          alt="Digital security hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <p className="mb-4 text-sm md:text-base text-yellow-400">
          Reliability isn’t just a promise, it’s our practice. Partner with us—where trust and expertise meet.
        </p>

        {/* Typewriter effect on this headline */}
        <Typewriter
          text="Are you confident that your organization is safe from unseen digital threats?"
          speed={80}
          className="mb-4 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        />

        <p className="mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-white/90">
          Employing cutting-edge cyber defence technology and providing uninterrupted services 24×7. We ensure the security, integrity, and privacy of your digital assets.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center justify-center bg-yellow-500 rounded-full p-4">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div className="text-white text-lg sm:text-xl font-semibold">
            Call Us Today:{" "}
            <a href="tel:+919007902920" className="text-yellow-400 hover:underline">
              +91-9007902920
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
