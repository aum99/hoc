"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientFloatingProps {
  children: ReactNode;
}

export const GradientFloating = ({ children }: GradientFloatingProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center z-10">
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full blur-[60px] opacity-40 z-0"
        initial={{ scale: 1.8 }}
        animate={{
          x: ["-15%", "15%", "-15%"], // Simplified movement
          y: ["-10%", "20%", "-10%"],
        }}
        transition={{
          duration: 20, // Even slower for less frequent updates
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ willChange: "transform", contain: "paint" }} // Added paint containment
      />
      <div className="relative h-full w-full items-center justify-center text-white z-50 pointer-events-none">
        <div className="pointer-events-auto">{children}</div>
      </div>
    </div>
  );
};
