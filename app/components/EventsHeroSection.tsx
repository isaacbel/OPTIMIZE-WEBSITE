'use client';

import StatsBar from './StatsBar';
import Image from 'next/image';
import { Calendar, Users, Mic, Briefcase } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        fontFamily: 'var(--font-parkinsans)',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-events-image.png"
          alt="Events background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-20">
        {/* Title */}
        <h1 
          className="font-normal text-white text-center mb-8 animate-slideIn"
          style={{
            fontFamily: 'var(--font-patua-one)',
            fontSize: 'clamp(60px, 8vw, 130px)',
            lineHeight: 'normal',
            letterSpacing: '0',
          }}
        >
          Our Events
        </h1>

        {/* Description */}
        <p 
          className="font-normal text-white text-center max-w-4xl px-6 animate-slideIn"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(20px, 1.9vw, 30px)',
            lineHeight: '1.6',
            letterSpacing: '0',
            animationDelay: '0.2s',
          }}
        >
          Discover our past events, explore the topics we covered,
          <br />
          meet the speakers, and browse the photo gallery
        </p>
      </div>

      {/* StatsBar at Bottom */}
      <div className="relative z-10 w-full flex justify-center pb-8 px-6 animate-slideIn" style={{ animationDelay: '0.6s' }}>
        <StatsBar
          stats={[
            { number: '3', label: 'Events', icon: Calendar },
            { number: '+2500', label: 'Attendance', icon: Users },
            { number: '+11', label: 'Speakers', icon: Mic },
            { number: '+12', label: 'Workshops', icon: Briefcase },
          ]}
          numberColor="#FFFFFF"
          labelColor="#FFFFFF"
          borderColor="rgba(255, 255, 255, 0.3)"
          bgOpacity={0.15}
          shadowColor="rgba(0,0,0,0.1)"
          height="140px"
          paddingX="px-20"
          className="bg-black/15 backdrop-blur-md border-2"
        />
      </div>
    </section>
  );
}

