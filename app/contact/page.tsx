'use client';

import ContactSection from '../components/ContactSection';
import ContactHero from '../components/ContactHero';

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* FULL-WIDTH ROUNDED CARD */}
      <div className="relative -mt-12 md:-mt-16">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
          {/* YELLOW HALF-CIRCLE (bottom-right, behind content) */}
          

          {/* CONTACT SECTION (100% untouched) */}
          <div className="px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
}