// app/components/EventsHeroSection.tsx
'use client';

import StatsBar from './StatsBar';

import { Calendar, Users, Mic, Briefcase } from 'lucide-react';
import { useEffect, useRef } from 'react';
import EventsSection from './EventsSection';

export default function EventsHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-between px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 50%, #D6BCFA 100%)',
          fontFamily: 'var(--font-parkinsans)',
        }}
      >
        {/* Floating orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
            style={{ background: 'radial-gradient(circle, #FFFFFF, transparent)' }}
          />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, #9F7AEA, transparent)',
              animationDelay: '1s',
            }}
          />
        </div>

        {/* Top Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mt-32 space-y-12">
          <h1
            className="text-white font-black leading-tight drop-shadow-lg animate-slideIn"
            style={{
              fontSize: 'clamp(56px, 9vw, 90px)',
              textShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            Our Events
          </h1>

          <p
            className="text-white/90 leading-relaxed max-w-2xl mx-auto animate-slideIn"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(19px, 2.6vw, 24px)',
              animationDelay: '0.3s',
            }}
          >
            Discover our past events, explore the topics we covered,
            <br className="hidden sm:block" />
            meet the speakers, and browse the photo gallery
          </p>
        </div>

        {/* StatsBar */}
        <div className="w-full flex justify-center mb-8 animate-slideIn" style={{ animationDelay: '0.6s' }}>
          <StatsBar
            stats={[
              { number: '3', label: 'Events', icon: Calendar },
              { number: '+2500', label: 'Attendance', icon: Users },
              { number: '+11', label: 'Speakers', icon: Mic },
              { number: '+12', label: 'Workshops', icon: Briefcase },
            ]}
            numberColor="#FF6B00"
            labelColor="#FF6B00"
            borderColor="#FFD978"
            bgOpacity={0.95}
            shadowColor="rgba(255,107,0,0.2)"
            height="140px"
            paddingX="px-20"
            className="bg-white/95 backdrop-blur-xl"
          />
        </div>

        {/* CURVED DIVIDER */}
        
      </section>

      {/* NEXT SECTION (EventsSection) */}
      <EventsSection />
    </>
  );
}