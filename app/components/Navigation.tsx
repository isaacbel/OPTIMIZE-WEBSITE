'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'About us', path: '/about-us' },
  { name: 'Contact', path: '/contact' },
];

const SCROLL_THRESHOLD = 100; // Change this to adjust when navbar hides

export default function Navigation() {
  const pathname = usePathname();
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Update pill position
  useEffect(() => {
    const updatePillPosition = () => {
      const activeIndex = navItems.findIndex(item => item.path === pathname);
      if (activeIndex !== -1 && navRef.current) {
        const activeLink = navRef.current.querySelector(
          `[data-index="${activeIndex}"]`
        ) as HTMLElement;
        if (activeLink) {
          const navRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          setPillStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
          });
        }
      }
    };

    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [pathname]);

  // Handle scroll with threshold
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY >= SCROLL_THRESHOLD) {
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        if (currentScrollY <= SCROLL_THRESHOLD) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`font-parkinsans w-full flex justify-center py-8 fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        ref={navRef}
        className="flex items-center justify-between relative px-8 font-[var(--font-poppins)]"
        style={{
          width: '700px',
          height: '75px',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          borderRadius: '37.5px',
        }}
      >
        {/* Animated pill */}
        <div
          className="absolute transition-all duration-500 ease-in-out"
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
            height: '45px',
            backgroundColor: '#FFFFFF',
            borderRadius: '22.5px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        />

        {/* Left items */}
        <div className="flex items-center gap-6 flex-1 relative z-10">
          {navItems.slice(0, 2).map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              data-index={index}
              className="flex items-center justify-center transition-all duration-300"
              style={{
                minWidth: '110px',
                height: '50px',
                borderRadius: '22.5px',
              }}
            >
              <span
                className="font-medium text-[20px]"
                style={{
                  color: pathname === item.path ? '#FFCF34' : 'rgba(255,255,255,0.9)',
                }}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <Image
            src="/optimize logo 1.png"
            alt="Optimize Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Right items */}
        <div className="flex items-center gap-6 flex-1 justify-end relative z-10">
          {navItems.slice(2).map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              data-index={index + 2}
              className="flex items-center justify-center transition-all duration-300"
              style={{
                minWidth: '100px',
                height: '45px',
                borderRadius: '22.5px',
              }}
            >
              <span
                className="font-medium text-[20px]"
                style={{
                  color: pathname === item.path ? '#FFCF34' : 'rgba(255,255,255,0.9)',
                }}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}