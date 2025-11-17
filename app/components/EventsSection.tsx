'use client';

import EventCard from './EventCard';
import Link from 'next/link';

export default function EventsSection() {
  return (
    <section
      className="w-full"
      style={{
        background: 'linear-gradient(180deg, #FFD03A 0%, #FFA258 100%)',
        minHeight: '100vh',
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 'clamp(60px, 12vw, 100px)',
        borderTopLeftRadius: 'clamp(20px, 5vw, 40px)',
        borderTopRightRadius: 'clamp(20px, 5vw, 40px)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-0 pb-3 sm:pb-4 border-b gap-3 sm:gap-0" style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }}>
          <h2 
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(32px, 8vw, 48px)',
              fontFamily: 'var(--font-parkinsans)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Events
          </h2>
          <div 
            className="font-medium"
            style={{
              fontSize: 'clamp(14px, 3vw, 18px)',
              fontFamily: 'var(--font-poppins)',
              color: '#FFFFFF',
              opacity: 0.9,
            }}
          >
            Discover Our Latest Events
          </div>
        </div>
        
        {/* Event Cards Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16 justify-items-center" 
          style={{ marginTop: 'clamp(40px, 8vw, 64px)' }}
        >
          <EventCard title="First Edition" subtitle="Your Career Opportunities" index={0} />
          <EventCard title="First Edition" subtitle="Your Career Opportunities" index={1} />
          <EventCard title="First Edition" subtitle="Your Career Opportunities" index={2} />
        </div>

        {/* Discover Button */}
        <div className="w-full flex justify-center">
          <Link
            href="/events"
            className="relative overflow-hidden rounded-full font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 shadow-lg transition-all duration-500 group border-2 border-transparent"
            style={{
              backgroundColor: 'white',
              color: '#FF8C3A',
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(15px, 3vw, 18px)',
            }}
          >
            {/* Animated gradient fill (left to right) */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#FF8C3A] to-[#FFA258] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"
              style={{
                zIndex: 0,
              }}
            />

            {/* Text on top */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Discover
            </span>

            {/* Border & background color change on hover */}
            <style jsx>{`
              .group:hover {
                border-color: #ff8c3a;
                background-color: #fff5eb;
              }
            `}</style>
          </Link>
        </div>
      </div>
    </section>
  );
}