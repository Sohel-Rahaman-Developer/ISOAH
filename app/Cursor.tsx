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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.img
      src="/f.webp"
      alt="Custom Mouse Pointer"
      className="fixed pointer-events-none z-50"
      style={{
        width: 30, // adjust size as needed
        height: 30,
        top: position.y,
        left: position.x,
        transform: "translate(-10%, -20%)",
      }}
    />
  );
};

export default Cursor;
