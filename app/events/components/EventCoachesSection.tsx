'use client';

import Image from 'next/image';

type CoachCardProps = {
  name: string;
  role: string;
  badge: string;
  image: string;
  index: number;
};

function CoachCard({ name, role, badge, image, index }: CoachCardProps) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`,
        minHeight: '400px',
        height: '100%',
      }}
    >
      {/* Full Card Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Badge - Glassmorphism Effect */}
      <div 
        className="absolute top-3 left-3 rounded-lg px-3 py-1.5 backdrop-blur-md border border-white/30"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <span
          className="text-white text-xs font-medium"
          style={{
            fontFamily: 'var(--font-poppins)',
          }}
        >
          {badge}
        </span>
      </div>

      {/* Text Content - Overlaid on Image */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <h3
          className="text-white font-bold mb-1"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(16px, 2vw, 20px)',
          }}
        >
          {name}
        </h3>
        <p
          className="text-white text-sm"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            fontWeight: '400',
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export default function EventCoachesSection() {
  const coaches = Array(6).fill({
    name: 'Meziane Dahou',
    role: 'Tech Entrepreneur',
    badge: 'Digital Skills and Entrepreneurship',
    image: '/speaker-coach-img.svg',
  });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFCF34' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16">
          <h2
            className="font-black mb-2 sm:mb-0"
            style={{
              fontFamily: 'var(--font-parkinsans)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              color: '#000000',
            }}
          >
            Coaches
          </h2>
          <p
            className="text-black"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: '400',
            }}
          >
            Second Day
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              name={coach.name}
              role={coach.role}
              badge={coach.badge}
              image={coach.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

