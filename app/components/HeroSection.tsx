'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import '../animations/hashtag-animations.css';
import '../animations/hero-animations.css';
import '../animations/common-animations.css';

export default function HeroSection() {
  const sunRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse-move parallax for the sun
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 120;
      const y = (e.clientY / innerHeight - 0.5) * 120;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    if (sunRef.current) {
      sunRef.current.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
    }
  }, [mousePos]);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFCF34] to-white pt-[120px]"
      style={{ fontFamily: 'var(--font-parkinsans)' }}
    >
      {/* ------------------- Parallax Sun ------------------- */}
      <div
        ref={sunRef}
        className="absolute top-[8%] left-[12%] w-48 h-48 opacity-30 pointer-events-none transition-transform duration-500"
        style={{ filter: 'blur(80px)' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 animate-sunPulse" />
      </div>

      {/* ------------------- Floating Hashtags ------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: 180, left: 80, rotate: -6, text: '#Innovation', delay: 0 },
          { top: 480, left: 110, rotate: 7, text: '#Creativity', delay: 1.2 },
          { top: 580, left: 380, rotate: -9, text: '#Growth', delay: 0.8 },
          { top: 300, left: 420, rotate: 5, text: '#Inspiration', delay: 1.5 },
          { top: 500, right: 90, rotate: 8, text: '#Strategy', delay: 0.6 },
          { top: 180, right: 480, rotate: -7, text: '#Design', delay: 1.8 },
          { top: 260, right: 280, rotate: 4, text: '#Vision', delay: 1.0 },
          { top: 640, right: 300, rotate: -5, text: '#Excellence', delay: 1.4 },
          { top: 720, left: 200, rotate: -8, text: '#Future', delay: 0.4 },
          { top: 120, right: 120, rotate: 6, text: '#Impact', delay: 2.0 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute bg-white px-6 py-3 rounded-full shadow-lg text-sm font-bold text-[#2E2E2E] animate-drift"
            style={{
              top: `${pos.top}px`,
              left: pos.left ? `${pos.left}px` : undefined,
              right: pos.right ? `${pos.right}px` : undefined,
              transform: `rotate(${pos.rotate}deg)`,
              animationDelay: `${pos.delay}s`,
            }}
          >
            {pos.text}
          </div>
        ))}
      </div>

      {/* ------------------- Floating Sparkles ------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-particle"
            style={{
              top: `${15 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${12 + i}s`,
            }}
          />
        ))}
      </div>

      {/* ------------------- Animated Clouds ------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/cloudy1 1.png"
          width={340}
          height={190}
          alt="cloud"
          className="absolute top-[8%] left-[3%] opacity-85 animate-cloudDrift1"
        />
        <Image
          src="/cloudy1 1.png"
          width={320}
          height={170}
          alt="cloud"
          className="absolute top-[28%] right-[8%] opacity-80 animate-cloudDrift2"
        />
        <Image
          src="/cloudy1 1.png"
          width={260}
          height={145}
          alt="cloud"
          className="absolute top-[58%] left-[12%] opacity-75 animate-cloudDrift3"
        />
        <Image
          src="/cloudy1 1.png"
          width={290}
          height={155}
          alt="cloud"
          className="absolute bottom-[12%] right-[12%] opacity-78 animate-cloudDrift4"
        />
      </div>

      {/* ------------------- Main Content ------------------- */}
      <main className="relative z-10 flex flex-col items-center justify-start px-6">
        <Image
          src="/cloudy1 1.png"
          width={420}
          height={170}
          alt="cloud"
          className="opacity-70 mb-8 animate-floatCloud"
        />

        <div className="flex items-center justify-center gap-5 mb-2">
          <div className="relative w-44 h-44 animate-pulseSlow">
            <Image
              src="/optimze-logo-white 1.png"
              alt="Optimize Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1
            className="text-white font-black leading-none tracking-tight animate-slideInLeft"
            style={{ fontSize: 'clamp(76px, 11vw, 130px)' }}
          >
            ptimize
          </h1>
        </div>

        <h2
          className="text-white font-black leading-none tracking-tight -mt-3 mb-14 animate-slideInRight"
          style={{ fontSize: 'clamp(76px, 11vw, 130px)' }}
        >
          Jijel
        </h2>

        <div className="relative mb-20 animate-fadeInUp">
          <Image
            src="/cloudy1 2.png"
            width={720}
            height={320}
            alt="slogan cloud"
            className="object-contain"
          />
          <p
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-16 leading-tight text-[#5B5B5B] font-medium"
            style={{
              fontFamily: 'var(--font-patua-one)',
              fontSize: 'clamp(24px, 3.5vw, 32px)',
            }}
          >
            Reaching higher, together,
            <br />
            beyond limits toward new horizons
          </p>
        </div>

        <div className="flex flex-col items-center w-full mb-32">
          <Link
            href="/about-us"
            className="group relative overflow-hidden px-12 py-4 rounded-full font-bold text-lg shadow-xl mb-10 transition-all duration-500 hover:scale-110 animate-ctaGlow"
            style={{ background: '#000', color: '#fff' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              About Us
              <span className="inline-block transition-transform group-hover:translate-x-1">
                Arrow Right
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </Link>

          <div className="w-[88%] max-w-6xl flex justify-around items-center gap-6 px-12 py-6 rounded-full border-2 border-[#FFD978] bg-white/70 backdrop-blur-md shadow-[0_12px_30px_rgba(255,207,52,0.25)] animate-fadeIn">
            {[
              { number: '3', label: 'Events' },
              { number: '2500+', label: 'Attendance' },
              { number: '11+', label: 'Speakers' },
              { number: '12+', label: 'Workshops' },
            ].map((item, i) => (
              <div key={i} className="text-center flex-1">
                <div
                  className="font-black text-[#FF8C42] animate-countUp"
                  style={{
                    fontFamily: 'var(--font-patua-one)',
                    fontSize: 'clamp(28px, 4vw, 36px)',
                  }}
                >
                  {item.number}
                </div>
                <div
                  className="mt-1 font-bold uppercase tracking-wider text-[#FF8C42]"
                  style={{
                    fontFamily: 'var(--font-patua-one)',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ------------------- ROCKET 1: Bottom-Right ------------------- */}
      <div className="absolute bottom-28 right-6 animate-rocketLaunch">
        <Image
          src="/rocket 1.png"
          width={260}
          height={350}
          alt="Rocket"
          className="relative z-10 drop-shadow-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-orange-400/40 to-transparent blur-xl animate-rocketTrail" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`spark-r1-${i}`}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-rocketSpark"
            style={{
              bottom: `${20 + i * 12}px`,
              right: `${30 + i * 8}px`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      
      {/* ------------------- ROCKET 2: Bottom-Left to Top-Right ------------------- */}
<div className="absolute bottom-32 left-6 w-64 h-64 animate-rocketFlyAcross">
  <Image
    src="/rocket 1.png"
    width={240}
    height={320}
    alt="Rocket 2"
    className="relative z-10 drop-shadow-2xl"
    style={{ transform: 'rotate(-20deg)' }} // Matches first rocket's upward direction
  />
  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-orange-500/50 to-transparent blur-lg animate-rocketTrail opacity-80" />
  {Array.from({ length: 6 }).map((_, i) => (
    <div
      key={`spark-r2-${i}`}
      className="absolute w-1 h-1 bg-yellow-100 rounded-full animate-rocketSpark"
      style={{
        bottom: `${15 + i * 10}px`,
        left: `${20 + i * 6}px`,
        animationDelay: `${i * 0.12}s`,
      }}
    />
  ))}
</div>

    </section>
  );
}