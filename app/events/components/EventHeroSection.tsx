'use client';

import StatsBar from '../../components/StatsBar';

type EventHeroSectionProps = {
  title: string;
  subtitle: string;
  date: string;
};

export default function EventHeroSection({ title, subtitle, date }: EventHeroSectionProps) {
  return (
    <section 
      className="relative flex items-center justify-center w-full"
      style={{
        minHeight: '100vh',
        height: '100vh',
        backgroundImage: 'url(/event-page-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
        borderBottomLeftRadius: 'clamp(1.5rem, 4vw, 3.5rem)',
        borderBottomRightRadius: 'clamp(2rem, 5vw, 5rem)',
        overflow: 'hidden',
      }}
    >
      {/* Dark gradient overlay (top to bottom) - lighter opacity to show image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 
          className="text-white font-black text-center mb-4"
          style={{
            fontFamily: 'var(--font-parkinsans)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            lineHeight: '1.1',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p 
          className="text-white text-center mb-6"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(18px, 3vw, 32px)',
            fontWeight: '400',
          }}
        >
          {subtitle}
        </p>

        {/* Date */}
        <p 
          className="text-white text-center mb-8"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(14px, 2vw, 20px)',
            fontWeight: '300',
          }}
        >
          {date}
        </p>

        {/* Rotating Rocket/Arrow Icon */}
        <div className="mb-12 animate-spin" style={{ animationDuration: '3s' }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFCF34"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 sm:w-20 sm:h-20"
          >
            {/* Paper airplane/arrow shape */}
            <path d="M21 16v-6l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V5l-8 5v6l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>

        {/* Stats Bar - Using consistent StatsBar component */}
        <div className="w-full flex justify-center px-2 sm:px-4">
          <StatsBar
            stats={[
              { number: '800+', label: 'Attendance' },
              { number: '7+', label: 'Speaker' },
              { number: '5+', label: 'Workshop' },
            ]}
            numberColor="#FFFFFF"
            labelColor="#FFFFFF"
            borderColor="rgba(255, 255, 255, 0.3)"
            bgOpacity={0.15}
            shadowColor="rgba(0,0,0,0.1)"
            height="140px"
            paddingX="px-4 sm:px-8 md:px-20"
            className="bg-black/15 backdrop-blur-md border-2 max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
}

