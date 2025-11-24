'use client';

import Image from 'next/image';

const EVENT_SPONSORS = [
  '/image13862 1.png',
  '/image14142 1.png',
  '/optimze-logo-white 2.png',
  '/image13862 1.png',
  '/image14142 1.png',
];

export default function EventSponsorsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="font-black mb-4"
            style={{
              fontFamily: 'var(--font-parkinsans)',
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#2E2E2E',
            }}
          >
            Events Sponsors
          </h2>
        </div>

        {/* Sponsor Logos - Horizontal Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {EVENT_SPONSORS.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="relative group flex-shrink-0"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-20 w-32 sm:h-24 sm:w-40 md:h-28 md:w-48 transition-all duration-500 group-hover:scale-110 group-hover:opacity-90">
                <Image
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

