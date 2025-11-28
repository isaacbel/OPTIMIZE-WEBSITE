'use client';

import StatsBar from './StatsBar';
import { Calendar, Users, Mic, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../animations/common-animations.css';

const getInitialPosition = () => {
  if (typeof window !== 'undefined') {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }
  return { x: 0, y: 0 };
};

export default function EventsHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [initialPositions, setInitialPositions] = useState<Array<{ x: number, y: number }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.animate-countUp').forEach((el) => el.classList.add('counting'));
        }
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setInitialPositions(
      [...Array(10)].map(() => getInitialPosition())
    );

    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev.slice(-30),
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
      ]);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black"
      style={{
        fontFamily: 'var(--font-parkinsans)',
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b0e] via-black to-[#1a0f05] opacity-95" />
      
      {/* Animated Nebula Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-[#FFCF34]/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 md:w-[400px] md:h-[400px] bg-orange-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 right-1/4 w-56 h-56 md:w-[350px] md:h-[350px] bg-amber-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.3s' }} />
      </div>

      {/* Floating Particles */}
      {initialPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FFCF34] rounded-full opacity-60"
          initial={{ 
            x: pos.x,
            y: pos.y
          }}
          animate={{
            y: [null, -150],
            x: [null, Math.sin(i) * 80],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${(i * 10)}%`,
          }}
        />
      ))}

      {/* Rising Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-[#FFCF34] rounded-full animate-rise opacity-60"
          style={{
            left: p.x,
            bottom: -10,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20"
      >
        {/* Title */}
        <motion.h1 
          className="font-normal text-white text-center mb-8"
          style={{
            fontFamily: 'var(--font-patua-one)',
            fontSize: 'clamp(60px, 8vw, 130px)',
            lineHeight: 'normal',
            letterSpacing: '0',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {"Our Events".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.05,
                ease: "easeOut"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="font-normal text-white text-center max-w-4xl px-6"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(20px, 1.9vw, 30px)',
            lineHeight: '1.6',
            letterSpacing: '0',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Discover our past events, explore the topics we covered,
          <br />
          meet the speakers, and browse the photo gallery
        </motion.p>
      </motion.div>

      {/* StatsBar at Bottom */}
      <motion.div 
        className="relative z-10 w-full flex justify-center pb-6 sm:pb-8 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <StatsBar
          stats={[
            { number: '3', label: 'Events', icon: Calendar },
            { number: '+2500', label: 'Attendance', icon: Users },
            { number: '+11', label: 'Speakers', icon: Mic },
            { number: '+12', label: 'Workshops', icon: Briefcase },
          ]}
          numberColor="#FFFFFF"
          labelColor="#FFFFFF"
          borderColor="rgba(255, 255, 255, 0.3)"
          bgOpacity={0.15}
          shadowColor="rgba(0,0,0,0.1)"
          height="140px"
          paddingX="px-4 sm:px-8 md:px-20"
          className="bg-black/15 backdrop-blur-md border-2"
        />
      </motion.div>
    </section>
  );
}

