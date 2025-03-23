'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SagarProfile = () => {
  return (
    <motion.section
      className="body-font"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 items-center">
            {/* Profile Details */}
            <motion.div
              className="sm:w-2/3 sm:pr-8 sm:py-8 mt-4 pt-4 sm:mt-0"
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Experience */}
              <motion.div
                className="mb-6"
                variants={fadeIn}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Experience:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Have an experience of 5 years in handling various VAPT projects including Web Applications, Android, IOS, Cloud, Source Code Reviews, Enterprise Network and Active Directory environments. Have also performed various security testing for AMAZON AWS.
                </p>
              </motion.div>
              {/* Area of Expertise */}
              <motion.div
                variants={fadeIn}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaShieldAlt className="text-indigo-500" /> Area of Expertise:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Active Directory Penetration Testing and Hardening of Enterprise Network Security, OT/SCADA Penetration Testing and IOT/Hardware based hacking and penetration testing.
                </p>
              </motion.div>
            </motion.div>

            {/* Profile Picture and Name */}
            <motion.div
              className="sm:w-1/3 text-center sm:pl-8 sm:py-8 border-l border-gray-700"
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-200 text-white overflow-hidden">
                <img
                   alt="Sagar Neogi"
                   src="https://forensicshq.com/wp-content/uploads/2024/05/Sagar-Neogi-faculty.jpg" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4 min-w-[300px]">
                <motion.h2
                  className="font-medium title-font text-gray-100 text-xl flex items-center gap-2"
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <FaUserTie className="text-indigo-500" /> Sagar Neogi
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-400"
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Manager – Cybersecurity
                </motion.p>
                <motion.p
                  className="text-sm text-gray-400"
                  variants={fadeIn}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  OSCP, CRTP, CEH
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SagarProfile;
