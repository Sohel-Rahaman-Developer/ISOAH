import React from 'react';
import GulabProfile from './Gulab';
import SandeepProfile from './Sandeep';
import ManagerProfile from './Manager';
import SagarProfile from './SagarProfile';
import BrandCarousel from './BrandCarousel';


export default function About() {
    return (
        <main className="text-gray-100 min-h-screen w-full font-sans">
            {/* 
        =======================================
        LAYOUT 1: Hero + 3 Gradient Cards
        (Who Are We, Our Mission, What We Do)
        =======================================
      */}
            <section
                className="
          relative 
          flex 
          flex-col
          items-center
          justify-center
          text-center
          py-20
          px-6
        "

            >
                <div
                    className='bg-cover
          bg-center absolute inset-0  bg-gradient-to-br from-[#000319] to-purple-600  opacity-50 shadow-[inset_0_0_0_4px_#290048]
' style={{
                        backgroundImage:
                            "url('https://recfaces.com/wp-content/uploads/2021/01/12_bsc-hons-in-computer-science-with-a-specialism-in-digital-forensics.jpg')",
                    }}>

                </div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70  bg-gradient-to-br from-[#000319] to-purple-600 shadow-[inset_0_0_200px_4px_#000319]
" />
                {/* Hero Content */}
                <div className="relative z-20 max-w-4xl mt-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        About Us
                    </h1>
                    <h2 className="text-3xl md:text-2xl font-semibold text-indigo-400 mb-6">
                        Welcome to ForensicsHQ
                    </h2>
                    <p className="text-xl md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                        digital digital digital Welcome to the heart of our team’s journey,
                        where passion for digital forensics ignited the spark that led to the
                        creation of our company.
                    </p>
                </div>
            </section>

            {/* Improved 3 Gradient Cards Section */}
            <section className="relative w-full -mt-12 pb-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* WHO ARE WE */}
                    <div
                        className="rounded-lg shadow-lg p-6 bg-gradient-to-br from-[#290048] to-purple-600 transform transition hover:scale-105"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">Who Are We</h3>
                        <p className="text-white leading-relaxed">
                            Eastern India’s premier destination for advanced digital forensics
                            solutions is run by a team of professionals, specializing in
                            uncovering digital evidence and delivering expert investigations.
                        </p>
                    </div>

                    {/* OUR MISSION */}
                    <div
                        className="rounded-lg shadow-lg p-6 bg-gradient-to-br from-[#290048] to-purple-600 transform transition hover:scale-105"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                        <p className="text-white leading-relaxed">
                            We equip our students to become future experts in Digital
                            Forensics, providing them with advanced knowledge and hands-on
                            skills, driven by an unwavering dedication to justice and the
                            precise discovery of truth in every investigation.
                        </p>
                    </div>

                    {/* WHAT WE DO */}
                    <div
                        className="rounded-lg shadow-lg p-6 bg-gradient-to-br from-[#290048] to-purple-600 transform transition hover:scale-105"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">What We Do</h3>
                        <ul className="list-disc list-inside space-y-2 text-white">
                            <li>Mobile Forensics</li>
                            <li>Operating System Forensics</li>
                            <li>Cloud Forensics</li>
                            <li>Drone Forensics</li>
                            <li>IoT Forensics</li>
                            <li>Dark Web Forensics</li>
                        </ul>
                    </div>
                </div>
            </section>
            <BrandCarousel />

            {/* 
        =======================================
        WHY CHOOSE US? (Example using a simple layout)
        =======================================
      */}
            <section className="py-12 px-4 border-t border-gray-700">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We specialize in state-of-the-art digital forensics solutions,
                        shaping the future of security in Eastern India. Our dedicated team
                        of experts crafts comprehensive strategies, from educational
                        foundations to advanced digital forensics services, tailored to meet
                        the complex needs of modern enterprises globally. We are
                        transforming students into industry-ready professionals, utilizing
                        top-tier lab infrastructure for hands-on training. We collaborate
                        closely with clients to develop robust strategies that not only
                        respond to incidents but also prevent them. Choose ForensicsHQ to
                        enhance your digital forensics capabilities and safeguard your
                        critical data against emerging threats.
                    </p>
                </div>
            </section>


            {/* 
        =======================================
        OUR TEAM (Intro)
        =======================================
      */}
            <section
                id="our-team"
                className="
                        py-12 
                        px-4 
                        border-t 
                        border-gray-700 
                        text-center 
                        bg-gradient-to-b 
                        from-[#290048]
                        to-transparent
                        rounded-t-3xl
                    "
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Team
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Meet the professionals who are pioneering digital forensics at
                        ForensicsHQ— each with a unique background, wealth of experience, and a
                        shared passion for uncovering truth in every investigation.
                    </p>
                </div>
            </section>


            {/* 
        =======================================
        TEAM MEMBER PROFILES
        (Layout similar to the "Layout 3" style)
        =======================================
      */}

            {/* Gulab Mondal */}
            <GulabProfile />
            <hr />
            {/* Sandeep Sengupta */}
            <SandeepProfile />
            <hr className='my-2' />
            <hr />
            {/* Mr. Anubhav Khettry */}
            <ManagerProfile />
            <hr />
            {/* Sagar Neogi */}
            <SagarProfile />
            <hr />

        </main>
    );
}
