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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  // Update pill position
  useEffect(() => {
    const updatePillPosition = () => {
      // Only calculate pill position for desktop view
      if (window.innerWidth >= 768) {
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const NavLink = ({ item, index, isMobile = false }) => {
    const isActive = pathname === item.path;
    const baseClasses = "flex items-center justify-center transition-all duration-300";
    const desktopStyle = {
      minWidth: index < 2 ? '110px' : '100px',
      height: index < 2 ? '50px' : '45px',
      borderRadius: '22.5px',
    };
    const mobileClasses = "w-full py-3 text-center";

    return (
      <Link
        key={item.path}
        href={item.path}
        data-index={index}
        className={`${baseClasses} ${isMobile ? mobileClasses : ''}`}
        style={isMobile ? {} : desktopStyle}
      >
        <span
          className={`font-medium ${isMobile ? 'text-lg' : 'text-[20px]'}`}
          style={{
            color: isActive ? '#FFCF34' : isMobile ? '#2E2E2E' : 'rgba(255,255,255,0.9)',
            backgroundColor: isMobile && isActive ? '#FEE5A8' : 'transparent',
            padding: isMobile ? '8px 16px' : '0',
            borderRadius: isMobile ? '12px' : '0',
          }}
        >
          {item.name}
        </span>
      </Link>
    );
  };

  return (
    <div
      className={`font-parkinsans w-full flex justify-center py-4 md:py-8 fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Desktop Navigation */}
      <nav
        ref={navRef}
        className="hidden md:flex items-center justify-between relative px-8 font-[var(--font-poppins)] max-w-[700px] w-[90%] h-[75px] bg-white/25 backdrop-blur-md rounded-[37.5px]"
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
            <NavLink key={item.path} item={item} index={index} />
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
            <NavLink key={item.path} item={item} index={index + 2} />
          ))}
        </div>
      </nav>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="md:hidden w-[90%] max-w-md mx-auto">
        <div className="flex items-center justify-between px-4 py-3 bg-white/25 backdrop-blur-md rounded-full shadow-lg">
          {/* Logo on Mobile */}
          <div className="flex items-center justify-center">
            <Image
              src="/optimize logo 1.png"
              alt="Optimize Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-white/50 backdrop-blur-sm transition-colors duration-200 hover:bg-white/70"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#2E2E2E]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[90%] max-w-md mt-2 p-4 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <NavLink key={item.path} item={item} index={index} isMobile={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
