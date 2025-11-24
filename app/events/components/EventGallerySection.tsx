'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function EventGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const galleryImages = Array(5).fill('/event-page-hero.png');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFCF34' }}>
      {/* Glow animation styles */}
      <style jsx global>{`
        @keyframes galleryButtonGlow {
          0%, 100% { 
            box-shadow: 0 15px 40px rgba(255, 207, 52, 0.35), 0 0 20px rgba(255, 207, 52, 0.2);
          }
          50% { 
            box-shadow: 0 15px 50px rgba(255, 207, 52, 0.5), 0 0 30px rgba(255, 207, 52, 0.4);
          }
        }
        .gallery-nav-btn {
          animation: galleryButtonGlow 3s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2
            className="font-black mb-4"
            style={{
              fontFamily: 'var(--font-parkinsans)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              color: '#000000',
            }}
          >
            Galerie
          </h2>
          <p
            className="text-black"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: '400',
            }}
          >
            Discover the Gallery of the Event
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center overflow-x-visible pb-4">
          {/* Images Container */}
          <div className="relative w-full max-w-6xl h-48 sm:h-64 md:h-80 lg:h-[500px] flex items-center justify-center" style={{ paddingLeft: 'clamp(40px, 10vw, 120px)' }}>
            {/* Overlapping Images */}
            {galleryImages.slice(0, 3).map((image, index) => {
              const mobileOffset = index * 40; 
              const tabletOffset = index * 60; 
              const desktopOffset = index * 100; 
              const rotation = (index - 1) * 5; 
              const zIndex = index + 1; 
              const delay = index * 200; 
              
              return (
                <div
                  key={index}
                  className={`absolute rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-0 hover:z-50 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{
                    left: `clamp(${mobileOffset}px, ${tabletOffset}px, ${desktopOffset}px)`,
                    width: 'clamp(140px, 35vw, 320px)',
                    height: 'clamp(180px, 50vh, 85%)',
                    maxHeight: '85%',
                    transform: `rotate(${rotation}deg)`,
                    zIndex: zIndex,
                    cursor: 'pointer',
                    transitionDelay: `${delay}ms`,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, 400px"
                  />
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
                </div>
              );
            })}
          </div>

          {/* Navigation Button */}
          <button
            onClick={nextImage}
            className={`gallery-nav-btn group relative overflow-hidden absolute right-2 sm:right-4 md:right-8 lg:right-12 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-28 lg:h-28 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 z-20 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
            style={{
              transitionDelay: '600ms',
              background: 'linear-gradient(135deg, #FFCF34 0%, #FFB24C 100%)',
            }}
            aria-label="Next image"
          >
            {/* Gradient overlay on hover */}
            <span 
              className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"
            />
            
            {/* Icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black relative z-10 transition-transform duration-300 group-hover:translate-x-1 sm:w-8 sm:h-8 md:w-10 md:h-10"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            
            {/* Pulse ring effect */}
            <span 
              className="absolute inset-0 rounded-full border-2 border-black/20 group-hover:border-black/40 transition-all duration-500"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

