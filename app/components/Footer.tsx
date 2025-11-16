'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0E0E0E] text-white pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Smooth Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[100px] md:h-[130px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
             82.39-16.31,168.19-17.07,250.45-.39,
             86.39,17.54,172.1,48.56,258.5,66.1,
             70.55,14.31,146.68,16.41,217.66-1.85,
             30.44-7.91,59-19.43,80-32.56V0H0V27.35
             A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 sm:px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 relative z-10">
        {/* Column 1 */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src="/optimze-logo-white 3.png"
            alt="Optimize Jijel Logo"
            width={110}
            height={110}
            className="mb-6"
          />
          <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-[300px]">
            Empowering youth through science, entrepreneurship, and personal
            growth — unlocking potential and shaping a brighter future for
            Algeria and beyond.
          </p>

          <div className="flex gap-3">
            {[
              { href: '#', src: '/linkdin.png', alt: 'LinkedIn' },
              { href: '#', src: '/twiter.png', alt: 'Twitter' },
              { href: '#', src: '/insta.png', alt: 'Instagram' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="bg-[#FFCF34] hover:bg-[#FFD95A] transition-all duration-300 rounded-full p-2.5 sm:p-3 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center"
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="text-center sm:text-left">
          <h3 className="text-[#FFCF34] font-semibold mb-5 sm:mb-6 text-lg sm:text-xl tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-gray-300 text-[15px] sm:text-[16px] md:text-[17px]">
            {['Home', 'Events', 'About Us', 'Contact', 'Sponsors'].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-[#FFCF34] transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center sm:text-left">
          <h3 className="text-[#FFCF34] font-semibold mb-5 sm:mb-6 text-lg sm:text-xl tracking-wide">
            Contact Info
          </h3>
          <ul className="space-y-4 sm:space-y-5 text-gray-300 text-[15px] sm:text-[16px] md:text-[17px]">
            <li className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <Mail size={18} className="text-[#FFCF34] sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-all">contact@optimizejijel.org</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <Phone size={18} className="text-[#FFCF34] sm:w-5 sm:h-5 flex-shrink-0" />
              +213 34 XX XX XX
            </li>
            <li className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <MapPin size={18} className="text-[#FFCF34] sm:w-5 sm:h-5 flex-shrink-0" />
              Jijel, Algeria
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-[#FFCF34] font-semibold mb-5 sm:mb-6 text-lg sm:text-xl tracking-wide">
            Newsletter
          </h3>
          <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] mb-6 leading-relaxed">
            Stay updated with our latest events and opportunities.
          </p>

          <form className="relative flex items-center max-w-[420px] mt-3 mx-auto sm:mx-0">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full bg-[#1A1A1A] text-white placeholder-gray-400 text-[14px] sm:text-[15px] md:text-[16px] px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 pr-14 sm:pr-15 md:pr-16 rounded-full border border-[#2A2A2A] focus:outline-none focus:border-[#FFCF34] transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FFCF34] hover:bg-[#FFD95A] text-black font-semibold text-[13px] sm:text-[14px] md:text-[15px] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 sm:mt-18 md:mt-20 border-t border-gray-800 pt-6 text-center text-gray-400 text-xs sm:text-sm md:text-base tracking-wide px-4">
        © 2025 Optimize Jijel. All rights reserved.
      </div>
    </footer>
  );
}