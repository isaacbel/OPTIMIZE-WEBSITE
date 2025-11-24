'use client';

import { useState } from 'react';
import EventHeroSection from '../components/EventHeroSection';
import EditionSwitcher from '../components/EditionSwitcher';
import AboutEventSection from '../components/AboutEventSection';
import EventSpeakersSection from '../components/EventSpeakersSection';
import EventCoachesSection from '../components/EventCoachesSection';
import EventGallerySection from '../components/EventGallerySection';
import EventSponsorsSection from '../components/EventSponsorsSection';

export default function EventDetailPage({ params }: { params: { eventId: string } }) {
  const [activeEdition, setActiveEdition] = useState('First Edition');

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <EventHeroSection
        title="First Edition"
        subtitle="Optimize Your Career Opportunities"
        date="November 19, 2022"
      />
      <EditionSwitcher
        activeEdition={activeEdition}
        onEditionChange={setActiveEdition}
      />
      <AboutEventSection />
      <EventSpeakersSection />
      <EventCoachesSection />
      <EventGallerySection />
      <EventSponsorsSection />
    </div>
  );
}

