'use client';

type EditionSwitcherProps = {
  activeEdition: string;
  onEditionChange: (edition: string) => void;
};

export default function EditionSwitcher({ activeEdition, onEditionChange }: EditionSwitcherProps) {
  const editions = ['First Edition', 'Second Edition', 'Third Edition'];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 md:-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Separate buttons */}
        <div className="flex flex-col sm:hidden gap-3">
          {editions.map((edition) => (
            <button
              key={edition}
              onClick={() => onEditionChange(edition)}
              className={`w-full py-4 px-6 rounded-full transition-all duration-300 ${
                activeEdition === edition
                  ? 'bg-[#FFCF34] text-black shadow-md hover:shadow-lg hover:scale-105'
                  : 'bg-transparent border-2 border-gray-400/60 text-white hover:bg-white/5'
              }`}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                fontWeight: activeEdition === edition ? '700' : '400',
              }}
            >
              {edition}
            </button>
          ))}
        </div>

        {/* Desktop: Single horizontal bar container */}
        <div className="hidden sm:flex flex-row items-center justify-center rounded-full border border-gray-400/60 overflow-hidden bg-transparent shadow-lg backdrop-blur-sm">
          {editions.map((edition, index) => (
            <button
              key={edition}
              onClick={() => onEditionChange(edition)}
              className={`flex-1 py-5 md:py-6 lg:py-7 px-4 md:px-6 lg:px-8 transition-all duration-300 ${
                activeEdition === edition
                  ? 'bg-[#FFCF34] text-black rounded-full shadow-md hover:shadow-lg hover:scale-105'
                  : `bg-transparent text-white ${
                      index === 0 ? 'rounded-l-full' : ''
                    } ${
                      index === editions.length - 1 ? 'rounded-r-full' : ''
                    }`
              }`}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(16px, 2.5vw, 22px)',
                fontWeight: activeEdition === edition ? '700' : '400',
              }}
            >
              {edition}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

