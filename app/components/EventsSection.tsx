
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
        paddingTop: '80px', 
        paddingBottom: '100px',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
      }}
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-0 pb-4 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }}>
          <h2 
            className="font-bold text-white"
            style={{
              fontSize: '48px',
              fontFamily: 'var(--font-parkinsans)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Events
          </h2>
          <div 
            className="font-medium"
            style={{
              fontSize: '18px',
              fontFamily: 'var(--font-poppins)',
              color: '#FFFFFF',
              opacity: 0.9,
            }}
          >
            Discover Our Latest Events
          </div>
        </div>
        
        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" style={{ marginTop: '64px' }}>
          <EventCard title="First Edition" subtitle="Your Career Opportunities" />
          <EventCard title="First Edition" subtitle="Your Career Opportunities" />
          <EventCard title="First Edition" subtitle="Your Career Opportunities" />
        </div>

        {/* Discover Button */}
<div className="w-full flex justify-center">
  <Link
    href="/events"
    className="relative overflow-hidden rounded-full font-semibold px-12 py-4 shadow-lg transition-all duration-500 group border-2 border-transparent"
    style={{
      backgroundColor: 'white',
      color: '#FF8C3A',
      fontFamily: 'var(--font-poppins)',
      fontSize: '18px',
    }}
  >
    
    <span
      className="absolute inset-0 bg-linear-to-r from-[#FF8C3A] to-[#FFA258] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"
      style={{
        zIndex: 0,
      }}
    />

    
    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
      Discover
    </span>

    
    <style jsx>{`
      .group:hover {
        border-color: #ff8c3a;
        background-color: #fff5eb; /* light orange tint behind animation */
      }
    `}</style>
  </Link>
</div>

      </div>
    </section>
  );
}

