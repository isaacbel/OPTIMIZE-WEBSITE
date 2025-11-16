'use client';

import Image from 'next/image';
import Link from 'next/link';

const BENEFITS = [
  {
    title: 'Networking',
    description:
      'Our events bring together people with shared interests and goals, offering a chance to meet, exchange ideas, and build valuable connections',
    icon: '/Chalkboard-User--Streamline-Font-Awesome 1.png',
  },
  {
    title: 'Ideate',
    description:
      'Gain your knowledge and skills through our workshops, resources, and events that support your personal and professional growth',
    icon: '/gears-svgrepo-com 1.png',
  },
  {
    title: 'Learning',
    description:
      'Spark your creativity and bring new ideas to life. Our events provide a platform for brainstorming, idea sharing, and collaboration',
    icon: '/Chalkboard-User--Streamline-Font-Awesome 1.png',
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{
        // extra-light background blend of white and soft peach tones
        background: `
          radial-gradient(circle at 25% 25%, #FFF9F0 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, #FFF2E2 0%, transparent 45%),
          #FFFFFF
        `,
        fontFamily: 'var(--font-parkinsans)',
        fontWeight: 'bold',
      }}
    >
      {/* subtle ambient glow shadows behind cards */}
      <div
        className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: '#FFCF34' }}
      />
      <div
        className="absolute bottom-16 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: '#FFB178' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-[#2E2E2E] mb-4">
          Why Choose Optimize?
        </h2>
        <p className="text-base md:text-lg text-[#4F4F4F] max-w-3xl mx-auto font-medium">
          We're more than just an organization – we're a catalyst for transformation, empowering
          young minds to reach their full potential.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl bg-white px-12 py-14 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)', // clean neutral shadow
              }}
            >
              <div
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  backgroundColor: '#FFCF34',
                  boxShadow: '0 6px 20px rgba(255, 207, 52, 0.3)',
                }}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl text-[#252525] mb-4">{benefit.title}</h3>
              <p className="text-base text-[#5C5C5C] leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-14 py-4 text-white text-lg font-semibold transition-transform duration-300 hover:scale-110"
            style={{
              backgroundColor: '#FFCF34',
              boxShadow: '0 15px 40px rgba(255, 207, 52, 0.35)',
            }}
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
