import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import CommunitySection from './components/CommunitySection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EventsSection />
      <CommunitySection />
    </div>
  );
}
