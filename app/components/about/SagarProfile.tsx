import React from 'react';
import { FaUserTie, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';

const SagarProfile = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 items-center">
            {/* Profile Details */}
            <div className="sm:w-2/3 sm:pr-8 sm:py-8 mt-4 pt-4 sm:mt-0">
              {/* Experience */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Experience:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Have an experience of 5 years in handling various VAPT projects including Web Applications, Android, IOS, Cloud, Source Code Reviews, Enterprise Network and Active Directory environments. Have also performed various security testing for AMAZON AWS.
                </p>
              </div>
              {/* Area of Expertise */}
              <div>
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaShieldAlt className="text-indigo-500" /> Area of Expertise:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Active Directory Penetration Testing and Hardening of Enterprise Network Security, OT/SCADA Penetration Testing and IOT/Hardware based hacking and penetration testing.
                </p>
              </div>
            </div>

            {/* Profile Picture and Name */}
            <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8 border-l border-gray-700">
              <div className="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-700 text-white overflow-hidden">
                <img
                  alt="Sagar Neogi"
                  src="https://forensicshq.com/wp-content/uploads/2024/05/Sagar-Neogi-faculty.jpg" // Replace with actual image URL if available
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <h2 className="font-medium title-font text-gray-100 text-xl flex items-center gap-2">
                  <FaUserTie className="text-indigo-500" /> Sagar Neogi
                </h2>
                <p className="text-sm text-gray-400">
                  Manager – Cybersecurity
                </p>
                <p className="text-sm text-gray-400">
                  OSCP, CRTP, CEH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SagarProfile;
