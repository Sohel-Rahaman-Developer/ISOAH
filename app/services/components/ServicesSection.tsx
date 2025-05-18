// components/ServicesSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  FiShield,
  FiLock,
  FiSearch,
  FiDatabase,
  FiSmartphone,
  FiCpu,
  FiGlobe,
} from "react-icons/fi";

interface Service {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    title: "Incident Response",
    description:
      "Swift and effective management of data breaches to minimize impact and restore data integrity.",
    Icon: FiShield,
  },
  {
    title: "Security Operations Center (SOC)",
    description:
      "Continuous monitoring and management of your security landscape to detect and respond in real time.",
    Icon: FiLock,
  },
  {
    title: "Forensic Investigation",
    description:
      "In-depth investigations to uncover the facts behind digital incidents using advanced techniques.",
    Icon: FiSearch,
  },
  {
    title: "Data Recovery",
    description:
      "Expert recovery of lost or corrupted data from all types of digital devices and platforms.",
    Icon: FiDatabase,
  },
  {
    title: "Mobile Forensics",
    description:
      "Comprehensive analysis of mobile devices to retrieve crucial information for personal and legal use.",
    Icon: FiSmartphone,
  },
  {
    title: "IoT Forensics",
    description:
      "Specialized forensic services to secure and analyze Internet of Things (IoT) devices.",
    Icon: FiCpu,
  },
  {
    title: "Dark Web Forensics",
    description:
      "Exploration and monitoring of the dark web to identify threats and recover stolen data.",
    Icon: FiGlobe,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">What Can We Do for You?</h2>
        <p className="mt-4 text-sm uppercase tracking-widest">
          At ForensicsHQ, we provide a comprehensive suite of digital forensic
          services tailored to meet the challenges of the digital age. Our
          services are designed to deliver precision, efficiency, and
          confidentiality. Explore our key offerings:
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="bg-gray-700 p-6 rounded-lg flex flex-col items-center text-center hover:bg-gray-600 transition"
          >
            <Icon className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
