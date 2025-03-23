// components/Cursor.tsx
"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import useIsMobile from "./components/hooks/useIsMobile"; // Adjusted the import path

const Cursor = () => {
  const isMobile = useIsMobile();

  // Motion values for the main cursor
  const cursorX = useMotionValue(-100); // Initialize off-screen
  const cursorY = useMotionValue(-100);

  // Springs for smooth trailing
  const springConfig = { damping: 20, stiffness: 150 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  // Hover state
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [data-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Bubbles Following the Cursor */}
      <AnimatePresence>
        {[...Array(3)].map((_, index) => (
          <div
            key={`bubble-wrapper-${index}`} // Unique key for wrapper
            className="fixed pointer-events-none z-30"
            style={{
              left: 0,
              top: 0,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              key={`bubble-${index}`} // Fixed template literal
              className="rounded-full"
              style={{
                x: followerX, // Framer Motion x
                y: followerY, // Framer Motion y
                width: isHovering ? 60 : 40,
                height: isHovering ? 60 : 40,
                backgroundColor: isHovering
                  ? "rgba(79, 70, 229, 0.4)"
                  : "rgba(79, 70, 229, 0.2)",
                mixBlendMode: "difference",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 + index * 0.2 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            />
          </div>
        ))}
      </AnimatePresence>

      {/* Cursor Trails */}
      {[...Array(3)].map((_, index) => (
        <div
          key={`trail-wrapper-${index}`} // Unique key for wrapper
          className="fixed pointer-events-none z-40"
          style={{
            left: 0,
            top: 0,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            key={`trail-${index}`} // Fixed template literal
            className="rounded-full bg-indigo-500/10"
            style={{
              x: followerX, // Framer Motion x
              y: followerY, // Framer Motion y
              width: 50 + index * 5,
              height: 50 + index * 5,
            }}
            animate={{
              opacity: 0.3 - index * 0.05,
              scale: 1 + index * 0.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.05,
            }}
          />
        </div>
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className={`rounded-full border-2 ${
            isHovering ? "border-indigo-300" : "border-indigo-500"
          }`}
          style={{
            x: cursorX, // Framer Motion x
            y: cursorY, // Framer Motion y
            width: isHovering ? 20 : 10,
            height: isHovering ? 20 : 10,
            background: "linear-gradient(135deg, #4f46e5, #818cf8)",
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: 0.6,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>

      {/* Cursor Highlight */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className="rounded-full bg-indigo-500/20"
          style={{
            x: followerX, // Framer Motion x
            y: followerY, // Framer Motion y
            width: isHovering ? 70 : 50,
            height: isHovering ? 70 : 50,
          }}
          animate={{
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </>
  );
};

export default Cursor;
