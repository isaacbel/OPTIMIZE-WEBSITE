'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper function to get initial particle position
const getInitialPosition = () => {
  if (typeof window !== 'undefined') {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }
  // Fallback for SSR - these values will be replaced on client side
  return { x: 0, y: 0 };
};

export default function AboutHeader() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State to hold initial positions after client-side rendering
  const [initialPositions, setInitialPositions] = useState<Array<{ x: number, y: number }>>([]);

  useEffect(() => {
    // Initialize particle positions on the client side
    setInitialPositions(
      [...Array(6)].map(() => getInitialPosition())
    );

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-50" />
      
      {/* Floating Particles - Use initialPositions state */}
      {initialPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          initial={{ 
            x: pos.x,
            y: pos.y
          }}
          animate={{
            y: [null, -100],
            x: [null, Math.sin(i) * 50],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${(i * 16.6)}%`,
          }}
        />
      ))}

      {/* Rocket Animation (flies in from bottom-left) - Adjusted position and size for mobile */}
      <motion.div
        className="absolute bottom-5 left-5 md:bottom-20 md:left-20"
        initial={{ x: -300, y: 300, rotate: -45 }}
        animate={{ 
          x: [null, 100, -50],
          y: [null, -200, -100],
          rotate: [-45, -30, -45]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      >
        <RocketSVG size={50} mdSize={80} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Title - Letter by Letter Stagger - Adjusted text size for mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-patua-one">
          {"About Us".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.08,
                ease: "easeOut"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle - Adjusted text size and margin for mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-poppins leading-relaxed"
        >
          Discover the story behind our passion and purpose
        </motion.p>
      </motion.div>

      {/* REMOVED: Mouse-follow glow */}
    </section>
  );
}

// Rocket SVG Component - Now accepts a size prop
function RocketSVG({ size, mdSize }: { size: number, mdSize: number }) {
  return (
    <svg
      // Use dynamic size based on props
      width={size}
      height={size}
      className={`drop-shadow-lg md:w-[${mdSize}px] md:h-[${mdSize}px]`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M13 10V3L4 14h7v7l9-11h-7z"
        stroke="url(#rocketGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
      />
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* Flame */}
      <motion.path
        d="M12 18c-1.5-2-2-4-2-6 0-1 .5-2 1.5-3"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "12px 18px" }}
      />
    </svg>
  );
}
