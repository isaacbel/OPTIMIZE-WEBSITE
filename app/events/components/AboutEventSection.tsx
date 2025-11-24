'use client';

import Image from 'next/image';

export default function AboutEventSection() {
  return (
    <section 
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          className="text-center mb-12 sm:mb-16"
          style={{
            fontFamily: 'var(--font-parkinsans)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '900',
            color: '#FFCF34',
          }}
        >
          About the Events
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Left: Description */}
          <div className="flex items-center">
            <p 
              className="text-white italic leading-relaxed"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: '300',
                lineHeight: '1.8',
              }}
            >
              Held on November 19, 2022, this event aimed to guide students and young professionals in shaping their career paths. Through workshops and talks led by experienced speakers like Meziane Dahou.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/about-events-img.png"
              alt="Event attendees"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left: Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/about-events-img.png"
              alt="Event participants"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Description */}
          <div className="flex items-center order-1 md:order-2">
            <p 
              className="text-white italic leading-relaxed"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: '300',
                lineHeight: '1.8',
              }}
            >
              Participants discovered practical strategies for growth, networking, and making the most of opportunities in the tech and professional world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

