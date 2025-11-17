'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../animations/hero-animations.css';

type EventCardProps = {
  title: string;
  subtitle: string;
  href?: string;
  index?: number;
};

export default function EventCard({
  title,
  subtitle,
  href = '#',
  index = 0,
}: EventCardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl sm:rounded-3xl
        bg-gradient-to-br from-[#FFEBB4] to-[#FFD166]
        p-5 sm:p-6 md:p-8 shadow-xl transition-all duration-500
        hover:shadow-2xl hover:-translate-y-3
        animate-fadeInUp-fast
      `}
      style={{
        width: '100%',
        maxWidth: '420px',
        height: 'auto',
        minHeight: '440px',
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* ---------- Title Section ---------- */}
      <div className="mb-5 sm:mb-6 md:mb-7">
        <div
          className="font-medium leading-tight"
          style={{
            fontSize: 'clamp(12px, 2.5vw, 14px)',
            fontFamily: 'var(--font-poppins)',
            color: '#8B6B00',
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
        <div
          className="font-bold mt-1 mb-2 sm:mb-3 leading-tight"
          style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            fontFamily: 'var(--font-poppins)',
            color: '#5A4200',
          }}
        >
          {title}
        </div>
        <div
          style={{
            height: '2px',
            width: 'min(200px, 80%)',
            backgroundColor: 'rgba(90, 66, 0, 0.3)',
            borderRadius: '1px',
          }}
        />
      </div>

      {/* ---------- Image Section ---------- */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl" style={{ height: 'clamp(280px, 60vw, 350px)' }}>
        <Image
          src="/Mask-group.png"
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 420px"
        />

        {/* Arrow Button – appears on hover */}
        <Link
          href={href}
          className={`
            absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5
            flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center
            rounded-full bg-white shadow-lg backdrop-blur-sm
            transition-all duration-300 hover:scale-110
            group-hover:opacity-100 opacity-0
            border-2
          `}
          style={{ borderColor: 'rgba(255, 209, 102, 0.3)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px]">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="#FFB300"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">View event</span>
        </Link>
      </div>

      {/* Subtle shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}