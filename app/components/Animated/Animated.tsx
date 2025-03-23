import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

type Direction = "left" | "right" | "top" | "bottom" | "scale" | "fade";

interface AnimatedProps {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  className?: string;
  // Optionally, allow passing a custom hover animation
  hoverAnimation?: any;
}

const getVariants = (direction: Direction): Variants => {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      };
    case "top":
      return {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      };
    case "bottom":
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    case "fade":
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const Animated: React.FC<AnimatedProps> = ({
  children,
  direction = "fade",
  duration = 0.5,
  delay = 0,
  className = "",
  hoverAnimation, // Optional prop to override hover animation
}) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      // Add a whileHover prop to handle hover animations:
      whileHover={
        hoverAnimation ??
        {
          // For example, slide the element a bit to the right on hover:
          x: 5,
        }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
