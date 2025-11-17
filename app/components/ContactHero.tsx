'use client';

import { Mail, Send, MessageCircle, Sparkles, Zap, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import '../animations/common-animations.css';

export default function ContactHero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Generate floating particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a001a] to-black" />
      
      {/* Animated Nebula Orbs - Adjusted for responsiveness */}
      <div className="absolute inset-0">
        {/* Orb 1: Smaller on mobile, positioned differently */}
        <div className="absolute top-5 left-5 w-64 h-64 md:top-10 md:left-10 md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        {/* Orb 2: Smaller on mobile, positioned differently */}
        <div className="absolute bottom-10 right-5 w-48 h-48 md:bottom-20 md:right-20 md:w-[400px] md:h-[400px] bg-yellow-500/15 rounded-full blur-3xl animate-pulse delay-700" />
        {/* Orb 3: Smaller on mobile, positioned differently */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating 3D Icons with Parallax - Adjusted for mobile visibility (smaller icons) */}
      <Floating3DIcon left="8%" top="12%" delay="0s" icon={<Mail className="w-8 h-8 md:w-14 md:h-14" />} depth={30} />
      <Floating3DIcon left="72%" top="18%" delay="2s" icon={<Send className="w-7 h-7 md:w-12 md:h-12 rotate-12" />} depth={40} />
      <Floating3DIcon left="18%" top="62%" delay="4s" icon={<MessageCircle className="w-7 h-7 md:w-13 md:h-13" />} depth={25} />
      <Floating3DIcon left="68%" top="68%" delay="6s" icon={<Rocket className="w-6 h-6 md:w-11 md:h-11 -rotate-45" />} depth={35} />

      {/* Floating Particles (rising from bottom) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-300 rounded-full animate-rise"
          style={{
            left: p.x,
            bottom: -10,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Glowing "OPTIMIZE" Text - Adjusted position for better flow on mobile */}
      <div className="absolute bottom-16 md:bottom-32 left-1/2 -translate-x-1/2 z-20">
        <div className="relative">
          {/* Multi-layer glow */}
          <div className="absolute inset-0 bg-yellow-400 blur-3xl animate-ping opacity-60 scale-150" />
          <div className="absolute inset-0 bg-orange-400 blur-2xl animate-ping opacity-40 scale-125 delay-300" />
          <div className="absolute inset-0 bg-purple-500 blur-xl animate-ping opacity-30 scale-110 delay-600" />

          {/* Gradient + 3D Text */}
          <h3 className="relative text-xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 bg-clip-text text-transparent animate-fade-in delay-700 drop-shadow-2xl">
            OPTIMIZE
          </h3>

          {/* Orbiting Sparkles */}
          <OrbitSparkle delay="0s" />
          <OrbitSparkle delay="0.5s" />
          <OrbitSparkle delay="1s" />
        </div>
      </div>

      {/* Typing Dots – HIGHER (above text) - Adjusted position for better flow on mobile */}
      <div className="absolute bottom-28 md:bottom-44 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        <Dot3D delay="0s" />
        <Dot3D delay="0.2s" />
        <Dot3D delay="0.4s" />
      </div>

      {/* Hero Text with Parallax - Adjusted text sizes */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
        <h1
          className="text-5xl sm:text-6xl md:text-9xl font-bold text-white drop-shadow-2xl animate-fade-in"
          style={{ fontFamily: "var(--font-patua-one)" }}
        >
          Contact Us
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl animate-fade-in delay-300">
          Get in touch with us for more details about our activities, partnerships, or events.
        </p>
      </div>

      {/* Ambient Sparkles */}
      <Sparkle left="12%" top="22%" delay="1.2s" />
      <Sparkle left="78%" top="38%" delay="3.4s" />
      <Sparkle left="28%" top="72%" delay="5.6s" />
      <Sparkle left="50%" top="15%" delay="2.8s" />
    </section>
  );
}

/* 3D Floating Icon with Parallax */
function Floating3DIcon({ left, top, delay, icon, depth }: { left: string; top: string; delay: string; icon: React.ReactNode; depth: number }) {
  return (
    <div
      className="absolute animate-float-3d"
      style={{ left, top, animationDelay: delay }}
    >
      <div
        className="text-yellow-400 opacity-85 drop-shadow-2xl"
        style={{ transform: `translateZ(${depth}px)` }}
      >
        {icon}
      </div>
    </div>
  );
}

/* 3D Typing Dot */
function Dot3D({ delay }: { delay: string }) {
  return (
    <div
      className="w-3 h-3 md:w-5 md:h-5 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full animate-bounce-3d shadow-lg"
      style={{ animationDelay: delay }}
    />
  );
}


/* Orbiting Sparkle around "Send Message" */
function OrbitSparkle({ delay }: { delay: string }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 bg-white rounded-full animate-orbit"
      style={{ animationDelay: delay }}
    />
  );
}

/* Sparkle */
function Sparkle({ left, top, delay }: { left: string; top: string; delay: string }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 bg-white rounded-full animate-ping"
      style={{ left, top, animationDelay: delay }}
    />
  );
}
