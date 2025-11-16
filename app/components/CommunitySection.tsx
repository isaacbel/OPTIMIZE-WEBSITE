'use client';

import WhyChooseSection from './WhyChooseSection';
import SponsorsSection from './SponsorsSection';
import ContactSection from './ContactSection';

export default function CommunitySection() {
  return (
    <section
      className="w-full"
      style={{
        background: `
          radial-gradient(circle at 20% 15%, rgba(255, 244, 232, 0.9) 0%, transparent 45%),
          radial-gradient(circle at 80% 30%, rgba(255, 232, 204, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 50% 85%, rgba(255, 233, 194, 0.9) 0%, transparent 50%),
          linear-gradient(180deg, #FFF6DA 0%, #FFE4AB 100%)
        `,
      }}
    >
      <WhyChooseSection />
      <SponsorsSection />
      <ContactSection />
    </section>
  );
}


