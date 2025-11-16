'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../animations/contact-animations.css';

const SPONSORS = [
  '/image13862 1.png',
  '/image14142 1.png',
  '/optimze-logo-white 2.png',
  '/image13862 1.png',
  '/image14142 1.png',
];

export default function SponsorsSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, #FFF9F0 0%, transparent 35%),
          radial-gradient(circle at 75% 65%, #FFF2E2 0%, transparent 40%),
          radial-gradient(circle at 50% 90%, #FFF8EB 0%, transparent 30%),
          #FFFFFF
        `,
      }}
    >
      {/* Subtle Animated Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-l from-[#FF8C3A]/10 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="animate-fadeIn">
          <h2
            className="text-5xl md:text-6xl font-black text-[#2E2E2E] drop-shadow-sm animate-slideInUp"
            style={{ fontFamily: 'var(--font-patua-one)' }}
          >
            Our Sponsors
          </h2>
          <p className="mt-5 text-lg md:text-xl text-[#4F4F4F] max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-200">
            We&apos;re proud to partner with industry leaders who share our vision of empowering the next generation.
          </p>
        </div>

        {/* Sponsor Logos – Animated Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
          {SPONSORS.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="relative group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-20 w-40 p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-2">
                <Image
                  src={logo}
                  alt="Sponsor logo"
                  fill
                  className="object-contain p-2 drop-shadow-sm"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button – Magnetic & Glowing */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full px-14 py-5 font-bold text-lg shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            style={{
              background: 'linear-gradient(135deg, #FFC832 0%, #FFA226 100%)',
              color: 'white',
              fontFamily: 'var(--font-parkinsans)',
            }}
          >
            {/* Gradient Shine */}
            <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />

            {/* Pulsing Ring */}
            <span className="absolute inset-0 rounded-full bg-white/20 scale-100 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />

            <span className="relative z-10 flex items-center gap-3">
              Become a Sponsor
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700]/30 rounded-full animate-float-sponsors"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          />
        ))}
      </div>

    </section>
  );
}