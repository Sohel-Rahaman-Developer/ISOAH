/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
// import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

// Animation Variants
const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInFromBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInFromTop: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* Logo Section */}
          <motion.div
            className="text-blue-600"
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <img src="/f.webp" className='h-10 w-10 me-3' alt="" /> <div className='text-[25px] md:text-[30px] '>ForensicsHQ</div>
          </motion.div>

          {/* Grid Sections */}
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* Newsletter Section */}
            <motion.div
              className="col-span-2"
              variants={fadeInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-white">Get the latest news!</h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                  molestias.
                </p>
              </div>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              className="col-span-2 lg:col-span-3 lg:flex lg:items-end"
              variants={fadeInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only"> Email </label>

                <div
                  className="border border-gray-100 p-2 h-full focus-within:ring sm:flex sm:items-center sm:gap-4"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="test@gmail.com"
                    className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  />

                  <button
                    className="mt-1 w-full bg-blue-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Services List */}
            <motion.div
              className="col-span-2 sm:col-span-1"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <p className="font-medium text-white">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">1on1 Coaching</a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Company Review</a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Accounts Review</a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">HR Consulting</a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">SEO Optimisation</a>
                </li>
              </ul>
            </motion.div>

            {/* Company List */}
            <motion.div
              className="col-span-2 sm:col-span-1"
              variants={fadeInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <p className="font-medium text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">About</a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Meet the Team</a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Accounts Review</a>
                </li>
              </ul>
            </motion.div>

            {/* Our Branches */}
            <motion.div
              className="col-span-2 sm:col-span-1"
              variants={fadeInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <p className="font-medium text-white">Our Branches</p>

              <div>
                <ul className="space-y-6 text-sm">
                  <li className="border-b border-gray-700 text-gray-700 pb-4">
                    <p>
                      Our address is Plot Number 23, 2nd Floor, Lane Number 2, District Center,
                      Chandrasekharpur, Bhubaneswar, Odisha 751016.
                    </p>
                  </li>
                  <li className="border-b border-gray-700 text-gray-700 pb-4">
                    <p>
                      Our address is Baghajatin Park Main Road, Sub-Registry Office Building,
                      1st Floor. Beside Axis Bank.
                    </p>
                  </li>
                  <li className="border-b border-gray-700 text-gray-700 pb-4">
                    <p>
                      Our address is Danphelink PVT LTD, 2nd Floor, Rem Work Building,
                      Kamalpokhari 01, Kathmandu, Nepal 44600.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div
              className="col-span-2 sm:col-span-1 lg:col-span-2"
              variants={fadeInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.608393436587!2d88.41958531534334!3d22.571094539842994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d5bbd6408b%3A0x16d07174f5cb9f11!2sForensicsHQ%20(Digital%20Forensics%20%26%20Cyber%20Security%20Institute)!5e0!3m2!1sen!2sin!4v1680418200174!5m2!1sen!2sin"
                  className="w-full h-48 lg:h-64 rounded-md"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></motion.iframe>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-400">Kariwala Tower</p>
                  <p className="text-sm text-gray-400">
                    J1-5, EP Block, Salt Lake City, Kolkata – 700091
                  </p>
                  <p className="text-sm text-gray-400">gulab@isoeh.com</p>
                  <p className="text-sm text-gray-400">+91 9007902920</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.ul
              className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end"
              variants={fadeInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;
