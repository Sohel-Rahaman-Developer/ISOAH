import React from 'react';
import { FaUserTie, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';

const GulabProfile = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 items-center">
            {/* Profile Picture and Name */}
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-200 text-white overflow-hidden">
                <img
                  alt="Gulab Mondal"
                  src="https://forensicshq.com/wp-content/uploads/2024/05/Gulab-Mondal-faculty.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <h2 className="font-medium title-font text-white-900 text-xl flex items-center gap-2">
                  <FaUserTie className="text-indigo-500" /> Gulab Mondal
                </h2>
                <p className="text-sm text-white-500">Founder</p>
                <div className="mb-6">
                {/* <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaShieldAlt className="text-indigo-500" /> Certifications:
                </h3> */}
                <p className="text-white-800">
                  CHFI | OSCE | CISSP | OSCP | CEH | OT/SCADA Security | IOT Security | VCISO | Consultant | Master’s Digital Forensics
                </p>
              </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 border-l border-gray-200 mt-4 pt-4 sm:mt-0">
              {/* Certifications */}


              {/* Career Journey */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Career Journey:
                </h3>
                <p className="leading-relaxed text-gray-500">
                  Starting as a Self-taught pentester, Gulab holds Certified Information Systems Security Professional (CISSP), Offensive Security Certified Expert (OSCE), Offensive Security Certified Professional (OSCP) & Certified Ethical Hacker (CEH) Certifications.
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Achievements:
                </h3>
                <p className="leading-relaxed text-gray-500">
                  As a startup Director, Gulab has worked towards building a stable and reliable digital forensics firm with remarkable growth. Under his leadership, the organization has increased its delivering value to customers, resulting in 200% business growth compared to previous years.
                </p>
              </div>

              {/* Notable Projects */}
              <div>
                <h3 className="text-lg font-bold text-white-900 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Notable Projects:
                </h3>
                <p className="leading-relaxed text-gray-500">
                  Gulab also acts as the technical team lead for security projects and has successfully delivered cyber security projects for companies like TATA STEEL, BANDHAN BANK, VEDANTA, AMRI HOSPITALS, AMBUJA NEOTIA, ELECTRO STEEL, DIAMOND BEVERAGE, CESC, SRMB, OnProcess, RIVET HAMMER, GLOBSYN, BALCO, TATA Medical Center & many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GulabProfile;
