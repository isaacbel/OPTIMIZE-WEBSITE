// app/components/CurvedDivider.tsx
'use client';
import '../animations/divider-animations.css';

type CurvedDividerProps = {
  direction?: 'top' | 'bottom';
  height?: string;
  color?: string;
  gradient?: { from: string; to: string };
  animate?: boolean;
};

export default function CurvedDivider({
  direction = 'bottom',
  height = '120px',
  color = '#6C5CE7',
  gradient,
  animate = false,
}: CurvedDividerProps) {
  const isTop = direction === 'top';

  return (
    <div
      className={`relative w-full ${isTop ? '-mt-1' : '-mb-1'}`}
      style={{ height }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ transform: isTop ? 'rotateX(180deg)' : 'none' }}
      >
        {gradient ? (
          <>
            <defs>
              <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradient.from} />
                <stop offset="100%" stopColor={gradient.to} />
              </linearGradient>
            </defs>
            <path
              fill="url(#dividerGradient)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
              className={animate ? 'animate-wave' : ''}
            />
          </>
        ) : (
          <path
            fill={color}
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            className={animate ? 'animate-wave' : ''}
          />
        )}
      </svg>

    </div>
  );
}