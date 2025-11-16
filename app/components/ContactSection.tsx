'use client';

import Image from 'next/image';
import '../animations/contact-animations.css';

export default function ContactSection() {
  return (
    <section
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden" // Adjusted vertical padding
      style={{
        background: `
          radial-gradient(circle at 15% 25%, #FFF9F0 0%, transparent 35%),
          radial-gradient(circle at 85% 75%, #FFF6E8 0%, transparent 40%),
          radial-gradient(circle at 50% 90%, #FFF8EB 0%, transparent 30%),
          #FFFFFF
        `,
        fontFamily: 'var(--font-parkinsans)', // ← GLOBAL FONT CHANGE
      }}
    >
      {/* Animated Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Reduced size and blur for smaller screens */}
        <div className="absolute top-10 left-5 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#FFD700]/15 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-l from-[#FF8C3A]/15 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted horizontal padding */}
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fadeIn"> {/* Adjusted bottom margin */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#2E2E2E] drop-shadow-sm animate-slideInUp" // Adjusted font size
            style={{ fontFamily: 'var(--font-patua-one)' }} // Keep header bold
          >
            Contact Us
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-200 font-medium">
            If you have any questions, please don&apos;t hesitate to reach out. We&apos;re here to help.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start"> {/* Adjusted gap */}
          {/* Left Card – Form */}
          <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl animate-fadeInUp delay-100"> {/* Adjusted padding and border radius */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] mb-6 sm:mb-8 animate-slideUp"> {/* Adjusted font size and margin */}
              Send us a Message
            </h3>

            <form className="space-y-5 sm:space-y-6"> {/* Adjusted vertical spacing */}
              <Input label="Full Name" type="text" name="name" />
              <Input label="Email Address" type="email" name="email" />
              <Input label="Phone Number" type="tel" name="phone" />

              <div>
                <label className="block text-sm font-semibold text-[#5A5A5A] mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4} // Reduced rows for smaller screens
                  className="w-full rounded-xl sm:rounded-2xl border-2 border-[#FFD978] px-4 py-3 sm:px-5 sm:py-4 text-[#2E2E2E] focus:outline-none focus:ring-4 focus:ring-[#FFB24C]/30 transition-all duration-300 resize-none" // Adjusted padding and border radius
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full px-6 py-3 sm:px-8 sm:py-4 font-bold text-base sm:text-lg text-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105" // Adjusted padding and font size
                style={{
                  background: 'linear-gradient(135deg, #FFCF34 0%, #FFB24C 100%)',
                  cursor: 'pointer',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3"> {/* Adjusted gap */}
                  Send Message
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24"> {/* Adjusted icon size */}
                    <path stroke="currentColor" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </button>
            </form>
          </div>

          {/* Right Card – Contact Info + Animated Logo */}
          <div className="flex flex-col items-center lg:items-stretch space-y-8 sm:space-y-10"> {/* Adjusted vertical spacing */}
            {/* Contact Info Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl w-full animate-fadeInUp delay-200"> {/* Adjusted padding and border radius */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] mb-6 sm:mb-8 animate-slideUp"> {/* Adjusted font size and margin */}
                Contact Information
              </h3>

              <div className="space-y-5 sm:space-y-6"> {/* Adjusted vertical spacing */}
                <InfoRow
                  icon="/email_logo.png"
                  label="Email"
                  value="contact@optimizejijel.org"
                />
                <InfoRow
                  icon="/phone_logo.png"
                  label="Phone"
                  value="+213 34 30 00 00"
                />
              </div>
            </div>

            {/* Animated Logo – Entrance + Float + Pulse */}
            <div className="flex justify-center animate-logoEntrance delay-300">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 drop-shadow-2xl"> {/* Adjusted logo size */}
                <Image
                  src="/optimze-logo-white 2.png"
                  alt="Optimize rocket logo"
                  fill
                  className="object-contain animate-floatPulse"
                  priority
                />
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 blur-3xl animate-pulse scale-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700]/40 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          />
        ))}
      </div>

    </section>
  );
}

// Reusable Input
type InputProps = { label: string; name: string; type: string };
function Input({ label, name, type }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#5A5A5A] mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-xl sm:rounded-2xl border-2 border-[#FFD978] px-4 py-3 sm:px-5 sm:py-4 text-[#2E2E2E] focus:outline-none focus:ring-4 focus:ring-[#FFB24C]/30 transition-all duration-300 font-medium" // Adjusted padding and border radius
        placeholder={`Enter your ${label.toLowerCase()}...`}
      />
    </div>
  );
}

// Reusable Info Row
type InfoRowProps = { icon?: string; label: string; value: string };
function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-4 sm:gap-5 group"> {/* Adjusted gap */}
      {icon && (
        <div
          className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110" // Adjusted size
          style={{
            backgroundColor: '#FFCF34',
            boxShadow: '0px 6px 20px rgba(255, 207, 52, 0.35)',
          }}
        >
          <Image src={icon} alt={label} width={20} height={20} className="drop-shadow-sm" /> {/* Adjusted icon size */}
        </div>
      )}
      <div>
        <div className="text-sm font-bold text-[#2E2E2E]">{label}</div>
        <div className="text-sm sm:text-base text-[#4F4F4F] font-medium">{value}</div> {/* Adjusted font size */}
      </div>
    </div>
  );
}
