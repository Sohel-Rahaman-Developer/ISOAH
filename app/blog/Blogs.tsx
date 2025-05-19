// app/blog/Blogs.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Blog, blogs } from "../../data/blogs";

export default function Blogs() {
  const [visibleCount, setVisibleCount] = useState(15);
  const topPosts = blogs.slice(0, 3);
  const gridPosts = blogs.slice(3, visibleCount);

  // 1) Carousel fade-down
  const carouselVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // 2) Grid container stagger
  const gridContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  // 3) Grid items slide in from left/right
  const gridItem = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
      scale: 0.95
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };

  return (
    <div className="relative z-10 text-white pt-20">
      {/* Carousel */}
      <motion.div variants={carouselVariants} initial="hidden" animate="visible">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full h-96"
        >
          {topPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <div className="h-full bg-black bg-opacity-40 flex flex-col justify-end p-8">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm md:text-base opacity-75">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Grid */}
      <div className="container mx-auto mt-12 px-4">
        <motion.div
          className="flex flex-wrap -mx-3"
          variants={gridContainer}
          initial="hidden"
          animate="visible"
        >
          {gridPosts.map((post: Blog, idx: number) => {
            const isFull = idx % 2 === 0;
            return (
              <motion.div
                key={post.id}
                custom={idx}
                variants={gridItem}
                className="md:w-1/2 w-full px-3 mb-6"
              >
                {isFull ? (
                  /* Full-background card */
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block w-full h-full flex flex-col bg-cover bg-center p-5 rounded overflow-hidden"
                    style={{ backgroundImage: `url(${post.image})` }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {post.title}
                    </h3>
                    <p className="opacity-60 mb-auto">{post.excerpt}</p>
                    <div className="flex items-center mt-4">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <div>{post.author.name}</div>
                        <div className="text-xs opacity-60">{post.date}</div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  /* Split image/text card */
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex w-full h-full bg-gray-800 rounded overflow-hidden"
                  >
                    <div className="w-2/6 relative h-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-4/6 p-5 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">
                        {post.title}
                      </h3>
                      <p className="opacity-60 mb-auto">{post.excerpt}</p>
                      <div className="flex items-center mt-4">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="rounded-full mr-3"
                        />
                        <div>
                          <div>{post.author.name}</div>
                          <div className="text-xs opacity-60">{post.date}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Show More */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-6 mb-6">
            <motion.button
              onClick={() => setVisibleCount(blogs.length)}
              className="border border-gray-600 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-600 hover:text-white transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
            >
              Show More
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
