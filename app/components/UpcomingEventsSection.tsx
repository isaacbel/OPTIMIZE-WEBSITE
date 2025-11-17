'use client';

export default function UpcomingEventsSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Upcoming Events Section */}
        <div className="animate-fadeInUp">
          <h2 
            className="font-bold text-[#2E2E2E] mb-6"
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontFamily: 'var(--font-patua-one)',
            }}
          >
            Upcoming Events
          </h2>
          
          <div 
            className="text-[#2E2E2E]"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
            }}
          >
            <p className="mb-4">
              <strong className="font-semibold">New and exciting events are on the horizon!</strong> We'll be announcing all upcoming activities, speakers, and topics right here and on our social media pages, so make sure to stay connected and keep an eye out for updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

