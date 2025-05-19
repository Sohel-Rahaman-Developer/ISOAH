"use client";

import React from "react";
import { motion } from "framer-motion";
import { Footer } from "@/app/components/Footer";
import Cursor from "@/app/Cursor";
import Navbar from "@/app/components/Header/Navbar";
import type { Blog } from "@/data/blogs";

interface Props {
  post: Blog;
}

// Hero image does a little spin-in + slide
const imageVariants = {
  hidden: { x: -200, opacity: 0, rotate: -5 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

// Container fades + scales in, then staggers children
const containerVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 100,
      damping: 30,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

// Categories slide from left
const categoriesVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Title pops in with a bounce
const titleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: [1.2, 0.9, 1],
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 12, duration: 0.6 },
  },
};

// Author fades softly
const authorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
};

// Body content fades up
const bodyVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// Tags bounce in
const tagVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [1.4, 0.9, 1],
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 15, duration: 0.8 },
  },
};

export default function BlogDetailClient({ post }: Props) {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Cursor />
      <div className="test">
        <Navbar />

        {/* 1) Hero Image */}
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div
            className="w-full bg-cover bg-center"
            style={{ height: 450, backgroundImage: `url(${post.image})` }}
            aria-label={post.title}
          />
          <div className="absolute top-0 left-0 bg-[#0000004a] w-full h-full" />
        </motion.div>

        {/* 2) Content Block */}
        <motion.div
          className="bg-white mx-auto p-5 sm:p-10 md:p-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-2xl mx-auto mt-6 text-white rounded-b-lg p-6">
            {/* Categories */}
            <motion.div variants={categoriesVariants} className="mb-2">
              {post.categories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 mr-2"
                >
                  {cat}
                </a>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={titleVariants}
              className="text-gray-900 font-bold text-3xl mb-4"
            >
              {post.title}
            </motion.h1>

            {/* Author */}
            <motion.p
              variants={authorVariants}
              className="text-gray-700 text-xs mb-6"
            >
              Written By:{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900"
              >
                {post.author.name}
              </a>
            </motion.p>

            {/* Main Content */}
            <motion.div
              variants={bodyVariants}
              className="prose prose-lg text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div variants={tagVariants} className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="inline-block text-xs text-indigo-600 font-medium hover:text-gray-900 px-3 py-1 border border-indigo-200 rounded-full"
                >
                  {tag}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="px-6 max-w-7xl mx-auto">
          <hr />
        </div>
        <Footer />
      </div>
    </main>
  );
}
