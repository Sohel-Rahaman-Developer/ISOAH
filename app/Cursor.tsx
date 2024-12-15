"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 bg-indigo-500 rounded-full"
        style={{
          width: 10,
          height: 10,
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Cursor Highlight */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full bg-indigo-500/20"
        style={{
          width: 50,
          height: 50,
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: 0.3,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </>
  );
};

export default Cursor;
