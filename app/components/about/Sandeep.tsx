'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SandeepProfile = () => {
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
              className="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0"
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Professional Experience */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Experience:
                </h3>
                <p className="leading-relaxed text-gray-500">
                  With 21 years of experience working in India, New Zealand &amp; Singapore, Sandeep has excelled in the Information Security domain as an Ethical Hacker, ISO 27001 Lead Auditor/Tutor, and BS 10012 Privacy Lead Auditor. He has conducted security audits for companies such as ONGC, KPMG, PWC, Airtel, Vodafone, Accenture, Capgemini, Vedanta, PayU, Bandhan Bank, ABP, and more.
                </p>
              </div>

              {/* Speaking Engagements */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaShieldAlt className="text-indigo-500" /> Speaking &amp; Media:
                </h3>
                <p className="leading-relaxed text-gray-500">
                  Sandeep has been invited as a speaker at prominent events including FICCI, VIT (Vellore), Nasscom, CII, BCCI, ICAI, ISACA, CeBIT, and the US High Commission in Kolkata. He has also featured on television channels such as ABP, ETV, NDTV, AajTak, Times Now, among others.
                </p>
              </div>

              {/* Community Leadership */}
              <div>
                <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Community Leadership:
                </h3>
                <p className="leading-relaxed text-gray-500">
                  In 2005, Sandeep founded the online community “Hackers Library”, which grew to over 80,000 members, becoming the largest Indian forum for cyber-security professionals of its time. He is also a committee member at Nasscom (East) &amp; CII ICT-East.
                </p>
              </div>
            </motion.div>

            {/* Profile Picture and Name */}
            <motion.div
              className="sm:w-1/3 text-center sm:pr-8 sm:py-8 border-l border-gray-200"
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-200 text-white overflow-hidden">
                <Image
                  alt="Sandeep Sengupta"
                  src="https://forensicshq.com/wp-content/uploads/2024/05/Sandeep-Sengupta.jpg"
                  width={300}
                  height={300}
                  className="max-w-[250px] object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <h2 className="font-medium title-font text-white-900 text-xl flex items-center gap-2">
                  <FaUserTie className="text-indigo-500" /> Sandeep Sengupta
                </h2>
                <p className="text-sm text-white-500">
                  CISA, Certified Ethical Hacker, ISO 27001:2013 Lead Auditor, Lead Privacy Auditor, GDPR Implementer
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SandeepProfile;
