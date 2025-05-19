'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface NumbersSectionProps {
  fromService?: boolean;
}

const NumbersSection: React.FC<NumbersSectionProps> = ({ fromService = false }) => {
  const data = [
    { number: 40, suffix: '+', description: 'Qualified Employees' },
    { number: 60, suffix: '+', description: 'Clients Served' },
    { number: 4, suffix: '',  description: 'National Offices' },
    { number: 7500, suffix: '+', description: 'Students Taught', isThousand: true },
  ];

  return (
    <section className={`py-5 overflow-hidden ${fromService ? 'bg-white' : ''}`}>
      <div className={`max-w-7xl mx-auto px-5 py-16 ${fromService ? '' : 'shadow-2xl'} rounded-xl`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                fromService ? 'text-black' : 'text-white'
              }`}
            >
              Some Numbers
              <br />
              Which Mean the Most to Us
            </h2>
            <p
              className={`text-lg ${
                fromService ? 'text-gray-700' : 'text-gray-400'
              }`}
            >
              Our achievements speak volumes about our dedication and hard work.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-12">
            {data.map((item, index) => (
              <CountUpCard key={index} item={item} fromService={fromService} />
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
  fromService?: boolean;
}

const CountUpCard: React.FC<CountUpCardProps> = ({ item, fromService = false }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const endValue = item.isThousand ? item.number / 1000 : item.number;
  const suffix = item.isThousand ? 'K+' : item.suffix;

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const bgClass = 'bg-gradient-to-tr from-black-100 to-pink-400 text-white';

  return (
    <motion.div
      ref={ref}
      className={`text-center p-6 rounded-2xl ${fromService ? "" : ""} shadow-lg ${bgClass}`}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.h3
        className="text-5xl font-extrabold mb-2"
        initial="hidden"
        animate={controls}
        variants={numberVariants}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <CountUpAnimated end={endValue} suffix={suffix} start={inView} />
      </motion.h3>
      <p>{item.description}</p>
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
    if (!start) return;

    let count = 0;
    const duration = 2000;
    const interval = 50;
    const step = end / (duration / interval);

    const timer = setInterval(() => {
      count += step;
      if (count >= end) {
        count = end;
        clearInterval(timer);
      }
      setCurrent(count);
    }, interval);

    return () => clearInterval(timer);
  }, [end, start]);

  return end >= 1000
    ? `${(current / 1000).toFixed(1)}K${suffix}`
    : `${Math.floor(current)}${suffix}`;
};

export default NumbersSection;
