'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Example animation variant (you can reuse or create more as needed)
const fadeInFromTop: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <main className="text-gray-100 min-h-screen w-full font-sans">
      {/* HERO / INTRO SECTION */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center pt-20 pb-10 px-6 bg-gradient-to-br from-[#000319] to-purple-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-20 max-w-4xl mt-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            variants={fadeInFromTop}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-2xl font-semibold text-indigo-400 mb-6"
            variants={fadeInFromTop}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Contact for our programs
          </motion.h2>
          <motion.p
            className="text-xl md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInFromTop}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Book a call with us or walk in to our nearest branch
          </motion.p>
        </div>
      </motion.section>
      <hr className="max-w-7xl mx-auto" />

      {/* CONTACT FORM + MAP SECTION */}
      <section className="max-w-7xl mx-auto text-gray-400 body-font relative">
        <div className="container px-5 pb-24 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Left side: Map + Address/Contact Info */}
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 pt-0 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3684.236452074432!2d88.4351563!3d22.5702581!3m2!1i1024!2i768!4f13.1!2m1!1siframe%20for%204th%20Floor%20Plot%20J%20Kariwala%20Towers%201-5%20opposite%20TCS%20Eden%20EP%20Block%20Sector%20V%20Bidhannagar%20Kolkata%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1742748782313!5m2!1sen!2sin"
              style={{ filter: 'grayscale(0.3) contrast(0.8) opacity(1)' }}
            ></iframe>

            {/* Address Card */}
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1 text-gray-400">
                  4th Floor, Plot J, Kariwala Towers<br/>
                  1-5, opposite TCS Eden, EP Block<br/>
                  Sector V, Bidhannagar, Kolkata, West Bengal 700091
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:gulab@isoeh.com" className="text-indigo-400 leading-relaxed">gulab@isoeh.com</a>
                <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-gray-400">+91 9007902920</p>
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded">
            <h2 className="text-gray-100 text-xl mb-1 font-semibold title-font">Request Free Consultation</h2>
            <p className="leading-relaxed mb-5 text-gray-400">
              Feel free to reach out to us using the form below.
            </p>

            {/* Name */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Name"
              />
            </div>

            {/* Phone */}
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm text-gray-400">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              className="mt-1 rounded-md w-full bg-blue-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#ddd] transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>
      <hr className="max-w-7xl mx-auto" />
    </main>
  );
}
