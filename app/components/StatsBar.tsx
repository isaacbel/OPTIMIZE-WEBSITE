// app/components/StatsBar.tsx
'use client';

import { LucideIcon } from 'lucide-react';

type StatItem = {
  number: string;
  label: string;
  icon?: LucideIcon;
};

type StatsBarProps = {
  stats: StatItem[];
  numberColor?: string;
  labelColor?: string;
  borderColor?: string;
  bgOpacity?: number;
  shadowColor?: string;
  height?: string;        // New: control height
  paddingX?: string;      // New: control horizontal padding
  className?: string;
};

export default function StatsBar({
  stats,
  numberColor = '#FF6B00',
  labelColor = '#FF6B00',
  borderColor = '#FFD978',
  bgOpacity = 0.95,
  shadowColor = 'rgba(255,107,0,0.2)',
  height = '120px',       // Taller like in your screenshot
  paddingX = 'px-16',     // More spacious
  className = '',
}: StatsBarProps) {
  return (
    <div
      className={`w-[90%] sm:w-[80%] md:w-[70%] max-w-6xl flex flex-wrap sm:flex-nowrap justify-around items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 rounded-full border-2 ${paddingX} py-6 sm:py-8 backdrop-blur-md animate-fadeIn ${className}`}
      style={{
        minHeight: height,
        height: 'auto',
        borderColor,
        background: `rgba(255, 255, 255, ${bgOpacity})`,
        boxShadow: `0 12px 30px ${shadowColor}, 0 0 40px rgba(255,215,120,0.3)`,
        border: `2px solid ${borderColor}`,
      }}
    >
      {stats.map((item, i) => (
        <div key={i} className="text-center flex-1 flex flex-col items-center justify-center min-w-[80px] sm:min-w-0">
          {/* Optional Icon */}
          {item.icon && (
            <item.icon
              className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 animate-pulse"
              style={{ color: numberColor }}
            />
          )}

          {/* Number */}
          <div
            className="font-black animate-countUp"
            style={{
              fontFamily: 'var(--font-patua-one)',
              fontSize: 'clamp(24px, 4vw, 48px)',
              color: numberColor,
              lineHeight: 1,
            }}
          >
            {item.number}
          </div>

          {/* Label */}
          <div
            className="mt-1 font-bold uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-patua-one)',
              color: labelColor,
              letterSpacing: '0.1em',
              fontSize: 'clamp(8px, 1.5vw, 12px)',
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}