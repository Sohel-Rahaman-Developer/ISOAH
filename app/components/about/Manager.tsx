import React from 'react';
import { FaUserTie, FaLaptopCode } from 'react-icons/fa';

const ManagerProfile = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 items-center">
            {/* Profile Picture and Name */}
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-50 h-50 rounded-full inline-flex items-center justify-center bg-gray-700 text-white overflow-hidden">
                <img
                  alt="Anubhav Khettry"
                  src="https://forensicshq.com/wp-content/uploads/2024/05/Anubhav-Khettry-faculty.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <h2 className="font-medium title-font text-gray-100 text-xl flex items-center gap-2">
                  <FaUserTie className="text-indigo-500" /> Mr. Anubhav Khettry
                </h2>
                <p className="text-sm text-gray-400">Manager</p>
                <div className="mt-2">
                  <p className="text-gray-400">
                    CHFI, CEH, CRTP
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 border-l border-gray-700 mt-4 pt-4 sm:mt-0">
              {/* Role & Expertise */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Role & Expertise:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  As the Manager of Cyber Security, Anubhav Khettry excels in managing projects, handling clients, ensuring project delivery, and leading teams. His expertise includes Network Security, Application Security, Source Code Review, Configuration Review, and Cloud Security. He focuses on fortifying end-user security, hardening infrastructure, and incident response using forensic analysis tools.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Technical Skills:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Skilled in Active Directory Penetration Testing, Red Teaming & Blue Teaming, VAPT for Web, Android, iOS, Thick Clients, and Cloud Security for AWS and Azure, he tackles modern security challenges effectively. He holds CRTP, CHFI, and CEH certifications, demonstrating his commitment to continuous learning.
                </p>
              </div>

              {/* Achievements & Vision */}
              <div>
                <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                  <FaLaptopCode className="text-indigo-500" /> Achievements & Vision:
                </h3>
                <p className="leading-relaxed text-gray-400">
                  Mr. Khettry has received a “Special Achievement Award” for his dedication and contributions. His goal is to implement robust security measures to prevent breaches and develop tools to assess and improve security posture. He has worked with clients from various industries, gaining a comprehensive understanding of their unique security needs. Anubhav believes in continuous growth and learning from mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerProfile;
