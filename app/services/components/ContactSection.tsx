// components/ContactSection.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
        {/* Left column */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Reach Out for Excellence
          </h2>
          <p className="text-gray-700">
            At ForensicsHQ, we’re not just experts; we’re your dedicated
            partners who ensure that you stay ahead of any digital forensic
            challenges before they affect your peace of mind.
          </p>
          <ul className="space-y-4">
            {[
              ["Expertise and Experience", "Over 26 years of leading the industry in digital forensics."],
              ["Certified Professionals", "Our team consists of certified experts in various aspects of digital forensics."],
              ["State-of-the-Art Technology", "Utilizing the latest tools and technologies to ensure the best results."],
              ["Client Confidentiality", "We guarantee the highest level of secrecy and security for all client data."],
              ["Global Reach", "Serving clients around the world with our extensive network."],
              ["Custom Solutions", "Tailored services to meet specific client needs and circumstances."],
              ["Rapid Response", "Quick deployment of our team to manage and mitigate security incidents."],
              ["Comprehensive Reporting", "Detailed and clear reports to provide insights and support decision-making."],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-start">
                <span className="mt-1 mr-3 text-purple-600">
                  {/* a little arrow bullet */}
                  <svg width="8" height="8" fill="currentColor" viewBox="0 0 8 8"><path d="M0 4l4-4v8z" /></svg>
                </span>
                <div>
                  <strong className="text-gray-900">{title}:</strong>{" "}
                  <span className="text-gray-700">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            Contact us now to learn how we can tailor our services to your needs
            and help secure your digital future.
          </p>
        </div>

        {/* Right column */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src="/testimonial.webp"
              alt="Digital forensics illustration"
              fill
              className="object-cover"
            />
          </div>
          <form
            action="#"
            className="p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}