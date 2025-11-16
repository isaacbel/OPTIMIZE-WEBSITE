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
        group relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-[#FFEBB4] to-[#FFD166]
        p-8 shadow-xl transition-all duration-500
        hover:shadow-2xl hover:-translate-y-3
        animate-fadeInUp-fast
      `}
      style={{
        width: '100%',
        maxWidth: '420px',
        height: '520px',
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* ---------- Title Section (Original Font & Size) ---------- */}
      <div className="mb-7">
        <div
          className="font-medium leading-tight"
          style={{
            fontSize: '14px',
            fontFamily: 'var(--font-poppins)',
            color: '#8B6B00',
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
        <div
          className="font-bold mt-1 mb-3 leading-tight"
          style={{
            fontSize: '22px',
            fontFamily: 'var(--font-poppins)',
            color: '#5A4200',
          }}
        >
          {title}
        </div>
        <div
          style={{
            height: '2px',
            width: '200px',
            backgroundColor: 'rgba(90, 66, 0, 0.3)',
            borderRadius: '1px',
          }}
        />
      </div>

      {/* ---------- Image Section (Same Photo in All Cards) ---------- */}
      <div className="relative overflow-hidden rounded-2xl" style={{ height: '350px' }}>
        <Image
          src="/Mask-group.png"
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 420px"
        />

        {/* Arrow Button – appears on hover */}
        <Link
          href={href}
          className={`
            absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center
            rounded-full bg-white shadow-lg backdrop-blur-sm
            transition-all duration-300 hover:scale-110
            group-hover:opacity-100 opacity-0
            border-2
          `}
          style={{ borderColor: 'rgba(255, 209, 102, 0.3)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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
