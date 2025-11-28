'use client';

import StatsBar from '../../components/StatsBar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../../animations/common-animations.css';

type EventHeroSectionProps = {
  title: string;
  subtitle: string;
  date: string;
};

const getInitialPosition = () => {
  if (typeof window !== 'undefined') {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }
  return { x: 0, y: 0 };
};

export default function EventHeroSection({ title, subtitle, date }: EventHeroSectionProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [initialPositions, setInitialPositions] = useState<Array<{ x: number, y: number }>>([]);

  useEffect(() => {
    setInitialPositions(
      [...Array(5)].map(() => getInitialPosition())
    );

    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
      ]);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative flex items-center justify-center w-full overflow-hidden bg-black"
      style={{
        minHeight: '100vh',
        height: '100vh',
        borderBottomLeftRadius: 'clamp(1.5rem, 4vw, 3.5rem)',
        borderBottomRightRadius: 'clamp(2rem, 5vw, 5rem)',
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b0e] via-black to-[#1a0f05] opacity-95" />
      
      {/* Animated Nebula Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-[#FFCF34]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-20 w-48 h-48 md:w-[400px] md:h-[400px] bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-yellow-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      </div>

      {/* Floating Particles */}
      {initialPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FFCF34] rounded-full opacity-40"
          initial={{ 
            x: pos.x,
            y: pos.y
          }}
          animate={{
            y: [null, -100],
            x: [null, Math.sin(i) * 50],
          }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${(i * 20)}%`,
          }}
        />
      ))}

      {/* Rising Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-[#FFCF34] rounded-full animate-rise opacity-40"
          style={{
            left: p.x,
            bottom: -10,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center"
      >
        {/* Title */}
        <motion.h1 
          className="text-white font-black text-center mb-4"
          style={{
            fontFamily: 'var(--font-parkinsans)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: '1.1',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-white text-center mb-6"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(18px, 3vw, 32px)',
            fontWeight: '400',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>

        {/* Date */}
        <motion.p 
          className="text-white text-center mb-8"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(14px, 2vw, 20px)',
            fontWeight: '300',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {date}
        </motion.p>

        {/* Rotating Rocket/Arrow Icon */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ 
            duration: 1, 
            delay: 0.9,
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFCF34"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 sm:w-20 sm:h-20"
          >
            <path d="M21 16v-6l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V5l-8 5v6l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </motion.div>

        {/* Stats Bar  */}
        <motion.div 
          className="w-full flex justify-center px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <StatsBar
            stats={[
              { number: '800+', label: 'Attendance' },
              { number: '7+', label: 'Speaker' },
              { number: '5+', label: 'Workshop' },
            ]}
            numberColor="#FFFFFF"
            labelColor="#FFFFFF"
            borderColor="rgba(255, 255, 255, 0.3)"
            bgOpacity={0.15}
            shadowColor="rgba(0,0,0,0.1)"
            height="140px"
            paddingX="px-4 sm:px-8 md:px-20"
            className="bg-black/15 backdrop-blur-md border-2 max-w-4xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

