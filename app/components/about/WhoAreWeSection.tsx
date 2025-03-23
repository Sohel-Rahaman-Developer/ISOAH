import React from 'react';
import Image from 'next/image';

export default function WhoAreWeSectionDark() {
  return (
    <section className=" text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://source.unsplash.com/random/800x600/?teamwork"
            alt="Team"
            width={800}
            height={600}
            className="object-cover w-full h-auto rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Who Are We?</h2>
          <p className="text-gray-300 mb-4">
            We help people to build incredible brands and superior products. Our perspective is to furnish outstanding, captivating services.
          </p>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida orci a lectus molestie,
            vitae tempus erat fermentum. Sed lobortis quam nec pulvinar accumsan.
          </p>

          {/* Highlighted Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-700 rounded-md">
              <h3 className="font-semibold text-lg mb-2">Versatile Brand</h3>
              <p className="text-sm text-gray-400">
                We craft a digital method that addresses core needs across all mediums.
              </p>
            </div>
            <div className="p-4 border border-gray-700 rounded-md">
              <h3 className="font-semibold text-lg mb-2">Digital Agency</h3>
              <p className="text-sm text-gray-400">
                We believe in innovation by integrating primary vision with elaborate ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
