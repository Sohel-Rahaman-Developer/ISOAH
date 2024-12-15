/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Framer Motion Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const NumbersSection: React.FC = () => {
  // Define your data with numerical values and their corresponding suffixes
  const data = [
    { number: 40, suffix: '+', description: 'Qualified Employees' },
    { number: 60, suffix: '+', description: 'Clients Served' },
    { number: 4, suffix: '', description: 'National Offices' },
    { number: 7500, suffix: '+', description: 'Students Taught', isThousand: true },
  ];

  return (
    <section className="bg-gradient-to-b from-black-100 to-white py-16 overflow-hidden">
      <div className="bg-white max-w-7xl mx-auto px-5 py-16 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Some Numbers
              <br />
              Which Mean the Most to Us
            </h2>
            <p className="text-gray-600 text-lg">
              Our achievements speak volumes about our dedication and hard work.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-12">
            {data.map((item, index) => (
              <CountUpCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface CountUpCardProps {
  item: {
    number: number;
    suffix: string;
    description: string;
    isThousand?: boolean;
  };
}

const CountUpCard: React.FC<CountUpCardProps> = ({ item }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    triggerOnce: true, // Animate only once
  });

  // Calculate end value and suffix for thousands
  const endValue = item.isThousand ? item.number / 1000 : item.number;
  const suffix = item.isThousand ? 'K+' : item.suffix;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-gradient-to-tr from-black-100 to-pink-400 rounded-2xl shadow-lg"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.h3
        className="text-5xl font-extrabold text-white mb-2"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={numberVariants}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <CountUpAnimated end={endValue} suffix={suffix} start={inView} />
      </motion.h3>
      <p className="text-white text-lg">{item.description}</p>
    </motion.div>
  );
};

interface CountUpAnimatedProps {
  end: number;
  suffix: string;
  start: boolean;
}

const CountUpAnimated: React.FC<CountUpAnimatedProps> = ({ end, suffix, start }) => {
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!start) return; // Do not start counting if not triggered

    let startCount = 0;
    const duration = 2000; // Total duration of the count-up in ms
    const incrementTime = 50; // Interval time in ms
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      startCount += step;
      if (startCount >= end) {
        startCount = end;
        clearInterval(timer);
      }
      setCurrent(startCount);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <>
      {end >= 1000 ? (
        `${(current / 1000).toFixed(1)}K${suffix}`
      ) : (
        `${Math.floor(current)}${suffix}`
      )}
    </>
  );
};

export default NumbersSection;
