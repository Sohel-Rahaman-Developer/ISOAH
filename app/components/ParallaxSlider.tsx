/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Spotlight } from './ui/Spotlight';
import Typewriter from './Typewriter'; // Import the Typewriter component

interface ParallaxSliderProps {
    slides: {
        id: number;
        imageUrl: string;
        title: string;
        subtitle: string;
    }[];
}

const ParallaxSlider: React.FC<ParallaxSliderProps> = ({ slides }) => {
    // State to track active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    // Preload images to prevent white flashes
    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.imageUrl;
        });
    }, [slides]);

    // Animation variants for text content
    const textVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    // Animation variants for buttons (optional)
    const buttonVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="relative w-full h-[60vh] sm:h-[40vh] md:h-[60vh] xl:h-screen overflow-hidden  bck">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-[27rem] md:-top-20 h-[60vh] sm:h-[40vh] md:h-[60vh] xl:[95vh]"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative  test">

                        <motion.div
                            className="absolute z-[-10] top-0 left-0 w-full h-full fadinghero test"
                            style={{
                                backfaceVisibility: 'hidden',
                                willChange: 'transform',
                            }}
                        >
                            <img
                                src={slide.imageUrl}
                                alt={slide.title}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <div className="absolute inset-0 test text-center text-white p-4 z-20">
                            <div className='max-w-7xl absolute inset-0 mx-auto flex px-4 flex-col items-start justify-center'>
                                <motion.div
                                    initial="hidden"
                                    animate={activeIndex === index ? 'visible' : 'hidden'}
                                    variants={textVariants}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                >
                                    {/* Replace h1 with Typewriter */}
                                    {activeIndex === index && (
                                        <Typewriter
                                            text={slide.title}
                                            speed={150}
                                            delay={500}
                                            className="text-3xl md:text-5xl font-extrabold text-start"
                                        />
                                    )}
                                    <p className="text-xl mt-4 text-start">{slide.subtitle}</p>
                                </motion.div>

                                <motion.div
                                    className="flex space-x-4 mt-6"
                                    initial="hidden"
                                    animate={activeIndex === index ? 'visible' : 'hidden'}
                                    variants={buttonVariants}
                                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                                >
                                    <button className="px-3 md:px-6 py-2 md:py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition">
                                        Start Training
                                    </button>
                                    <button className="px-3 md:px-6 py-2 md:py-3 bg-transparent border border-white font-bold text-white rounded-md hover:bg-white hover:text-black transition">
                                        Buy My Voucher
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ParallaxSlider;
