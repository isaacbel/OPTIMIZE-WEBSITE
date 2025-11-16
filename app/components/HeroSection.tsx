'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import '../animations/hashtag-animations.css';
import '../animations/hero-animations.css';
import '../animations/common-animations.css';

export default function HeroSection() {
  const sunRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse-move parallax for the sun
  useEffect(() => {
    const handleMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      // Reduced parallax effect for smaller screens
      const parallaxFactor = 120; 
      const x = (e.clientX / innerWidth - 0.5) * parallaxFactor;
      const y = (e.clientY / innerHeight - 0.5) * parallaxFactor;
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

  // Define floating hashtag positions with responsive adjustments
  const floatingHashtags = [
    // Original positions (desktop/lg)
    { top: 180, left: 80, rotate: -6, text: '#Innovation', delay: 0, lg: true },
    { top: 480, left: 110, rotate: 7, text: '#Creativity', delay: 1.2, lg: true },
    { top: 580, left: 380, rotate: -9, text: '#Growth', delay: 0.8, lg: true },
    { top: 300, left: 420, rotate: 5, text: '#Inspiration', delay: 1.5, lg: true },
    { top: 500, right: 90, rotate: 8, text: '#Strategy', delay: 0.6, lg: true },
    { top: 180, right: 480, rotate: -7, text: '#Design', delay: 1.8, lg: true },
    { top: 260, right: 280, rotate: 4, text: '#Vision', delay: 1.0, lg: true },
    { top: 640, right: 300, rotate: -5, text: '#Excellence', delay: 1.4, lg: true },
    { top: 720, left: 200, rotate: -8, text: '#Future', delay: 0.4, lg: true },
    { top: 120, right: 120, rotate: 6, text: '#Impact', delay: 2.0, lg: true },
    // Mobile/Tablet-specific positions (visible on all screens, but fewer)
    { top: 100, left: 20, rotate: -6, text: '#Innovation', delay: 0, sm: true, md: true, lg: false },
    { top: 350, right: 10, rotate: 7, text: '#Creativity', delay: 1.2, sm: true, md: true, lg: false },
    { top: 600, left: 50, rotate: -9, text: '#Growth', delay: 0.8, sm: true, md: true, lg: false },
    { top: 200, right: 30, rotate: 5, text: '#Inspiration', delay: 1.5, sm: true, md: true, lg: false },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFCF34] to-white pt-[100px] sm:pt-[110px] md:pt-[120px]"
      style={{ fontFamily: 'var(--font-parkinsans)' }}
    >
      {/* ------------------- Parallax Sun ------------------- */}
      <div
        ref={sunRef}
        className="absolute top-[8%] left-[12%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-30 pointer-events-none transition-transform duration-500"
        style={{ filter: 'blur(80px)' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 animate-sunPulse" />
      </div>

      {/* ------------------- Floating Hashtags ------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHashtags.map((pos, i) => (
          <div
            key={i}
            // Use responsive classes to control visibility
            className={`absolute bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg text-xs sm:text-sm font-bold text-[#2E2E2E] animate-drift ${pos.lg ? 'hidden lg:block' : ''} ${pos.sm ? 'block sm:block' : 'hidden'} ${pos.md ? 'md:block' : 'md:hidden'}`}
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
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-300 rounded-full opacity-70 animate-particle"
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
        {/* Cloud 1: Top-Left */}
        <Image
          src="/cloudy1 1.png"
          width={340}
          height={190}
          alt="cloud"
          className="absolute top-[8%] left-[3%] opacity-85 animate-cloudDrift1 w-[200px] h-[110px] sm:w-[280px] sm:h-[155px] md:w-[340px] md:h-[190px]"
        />
        {/* Cloud 2: Top-Right */}
        <Image
          src="/cloudy1 1.png"
          width={320}
          height={170}
          alt="cloud"
          className="absolute top-[28%] right-[8%] opacity-80 animate-cloudDrift2 w-[180px] h-[95px] sm:w-[260px] sm:h-[140px] md:w-[320px] md:h-[170px]"
        />
        {/* Cloud 3: Mid-Left */}
        <Image
          src="/cloudy1 1.png"
          width={260}
          height={145}
          alt="cloud"
          className="absolute top-[58%] left-[12%] opacity-75 animate-cloudDrift3 w-[150px] h-[85px] sm:w-[210px] sm:h-[115px] md:w-[260px] md:h-[145px]"
        />
        {/* Cloud 4: Bottom-Right */}
        <Image
          src="/cloudy1 1.png"
          width={290}
          height={155}
          alt="cloud"
          className="absolute bottom-[12%] right-[12%] opacity-78 animate-cloudDrift4 w-[170px] h-[90px] sm:w-[240px] sm:h-[128px] md:w-[290px] md:h-[155px]"
        />
      </div>

      {/* ------------------- Main Content ------------------- */}
      <main className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
        {/* Cloud above logo */}
        <Image
          src="/cloudy1 1.png"
          width={420}
          height={170}
          alt="cloud"
          className="opacity-70 mb-6 sm:mb-7 md:mb-8 animate-floatCloud w-[280px] h-[113px] sm:w-[350px] sm:h-[141px] md:w-[420px] md:h-[170px]"
        />

        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-2">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 animate-pulseSlow">
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
            style={{ fontSize: 'clamp(40px, 10vw, 130px)' }} // Adjusted min font size
          >
            ptimize
          </h1>
        </div>

        <h2
          className="text-white font-black leading-none tracking-tight -mt-3 mb-10 sm:mb-12 md:mb-14 animate-slideInRight" // Adjusted negative margin and bottom margin
          style={{ fontSize: 'clamp(40px, 10vw, 130px)' }} // Adjusted min font size
        >
          Jijel
        </h2>

        <div className="relative mb-12 sm:mb-16 md:mb-20 animate-fadeInUp">
          <Image
            src="/cloudy1 2.png"
            width={720}
            height={320}
            alt="slogan cloud"
            className="object-contain w-[480px] h-[213px] sm:w-[600px] sm:h-[267px] md:w-[720px] md:h-[320px]" // Adjusted cloud size
          />
          <p
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 sm:px-14 md:px-16 leading-tight text-[#5B5B5B] font-medium" // Adjusted padding
            style={{
              fontFamily: 'var(--font-patua-one)',
              fontSize: 'clamp(16px, 3.5vw, 32px)', // Adjusted min font size
            }}
          >
            Reaching higher, together,
            <br />
            beyond limits toward new horizons
          </p>
        </div>

        <div className="flex flex-col items-center w-full mb-16 sm:mb-20 md:mb-32">
          <Link
            href="/about-us"
            className="group relative overflow-hidden px-8 py-2.5 sm:px-10 sm:py-3 md:px-12 md:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl mb-8 sm:mb-9 md:mb-10 transition-all duration-500 hover:scale-110 animate-ctaGlow" // Adjusted padding and font size
            style={{ background: '#000', color: '#fff' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              About Us
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </Link>

          <div className="w-[88%] max-w-6xl flex justify-around items-center gap-4 sm:gap-5 md:gap-6 px-8 sm:px-10 md:px-12 py-5 sm:py-5.5 md:py-6 rounded-full border-2 border-[#FFD978] bg-white/70 backdrop-blur-md shadow-[0_12px_30px_rgba(255,207,52,0.25)] animate-fadeIn">
            {[
              { number: '3', label: 'Events' },
              { number: '2500+', label: 'Attendance' },
              { number: '11+', label: 'Speakers' },
              { number: '12+', label: 'Workshops' },
            ].map((item, i) => (
              <div key={i} className="text-center flex-1"> {/* Added flex-wrap support */}
                <div
                  className="font-black text-[#FF8C42] animate-countUp"
                  style={{
                    fontFamily: 'var(--font-patua-one)',
                    fontSize: 'clamp(20px, 4vw, 36px)', // Adjusted min font size
                  }}
                >
                  {item.number}
                </div>
                <div
                  className="mt-1 font-bold uppercase tracking-wider text-[#FF8C42]"
                  style={{
                    fontFamily: 'var(--font-patua-one)',
                    fontSize: 'clamp(10px, 2.5vw, 24px)', // Adjusted min font size
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ------------------- ROCKET 1: Bottom-Right (SMALLER) ------------------- */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 right-4 sm:right-5 md:right-6 animate-rocketLaunch"> {/* Adjusted bottom/right for small screens */}
        <Image
          src="/rocket 1.png"
          width={260}
          height={350}
          alt="Rocket"
          className="relative z-10 drop-shadow-2xl w-[130px] h-[175px] sm:w-[180px] sm:h-[243px] md:w-[200px] md:h-[270px]" // Adjusted rocket size
        />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-18 md:h-20 bg-gradient-to-t from-orange-400/40 to-transparent blur-xl animate-rocketTrail" />
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

      {/* ------------------- ROCKET 2: Bottom-Left to Top-Right (SMALLER) ------------------- */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-4 sm:left-5 md:left-6 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-rocketFlyAcross"> {/* Adjusted container size and position */}
        <Image
          src="/rocket 1.png"
          width={240}
          height={320}
          alt="Rocket 2"
          className="relative z-10 drop-shadow-2xl w-[120px] h-[160px] sm:w-[165px] sm:h-[220px] md:w-[180px] md:h-[240px]" // Adjusted rocket size
          style={{ transform: 'rotate(-20deg)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-14 md:h-16 bg-gradient-to-t from-orange-500/50 to-transparent blur-lg animate-rocketTrail opacity-80" />
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
