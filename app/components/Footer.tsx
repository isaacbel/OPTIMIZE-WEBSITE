'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0E0E0E] text-white pt-44 pb-24 overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Smooth Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[130px]"
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
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 relative z-10">
        {/* Column 1 */}
        <div className="flex flex-col">
          <Image
            src="/optimze-logo-white 3.png"
            alt="Optimize Jijel Logo"
            width={110}
            height={110}
            className="mb-6"
          />
          <p className="text-gray-300 text-[17px] leading-relaxed mb-8 max-w-[300px]">
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
                className="bg-[#FFCF34] hover:bg-[#FFD95A] transition-all duration-300 rounded-full p-3 w-12 h-12 flex items-center justify-center"
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[#FFCF34] font-semibold mb-6 text-xl tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-300 text-[17px]">
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
        <div>
          <h3 className="text-[#FFCF34] font-semibold mb-6 text-xl tracking-wide">
            Contact Info
          </h3>
          <ul className="space-y-5 text-gray-300 text-[17px]">
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#FFCF34]" />
              contact@optimizejijel.org
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#FFCF34]" />
              +213 34 XX XX XX
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-[#FFCF34]" />
              Jijel, Algeria
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter – Form slightly lower than top */}
        <div>
          <h3 className="text-[#FFCF34] font-semibold mb-6 text-xl tracking-wide">
            Newsletter
          </h3>
          <p className="text-gray-300 text-[17px] mb-6 leading-relaxed">
            Stay updated with our latest events and opportunities.
          </p>

          {/* Form: Just a little bit down from the top */}
          <form className="relative flex items-center max-w-[420px] mt-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full bg-[#1A1A1A] text-white placeholder-gray-400 text-[16px] px-6 py-4 pr-16 rounded-full border border-[#2A2A2A] focus:outline-none focus:border-[#FFCF34] transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FFCF34] hover:bg-[#FFD95A] text-black font-semibold text-[15px] px-5 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm md:text-base tracking-wide">
        © 2025 Optimize Jijel. All rights reserved.
      </div>
    </footer>
  );
}