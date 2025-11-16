'use client';

import Image from 'next/image';
import '../animations/contact-animations.css';

export default function ContactSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
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
        <div className="absolute top-20 left-16 w-96 h-96 bg-gradient-to-r from-[#FFD700]/15 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-l from-[#FF8C3A]/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeIn">
          <h2
            className="text-5xl md:text-6xl font-black text-[#2E2E2E] drop-shadow-sm animate-slideInUp"
            style={{ fontFamily: 'var(--font-patua-one)' }} // Keep header bold
          >
            Contact Us
          </h2>
          <p className="mt-5 text-lg md:text-xl text-[#4F4F4F] max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-200 font-medium">
            If you have any questions, please don&apos;t hesitate to reach out. We&apos;re here to help.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          {/* Left Card – Form */}
          <div className="rounded-3xl bg-white p-10 shadow-2xl animate-fadeInUp delay-100">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-8 animate-slideUp">
              Send us a Message
            </h3>

            <form className="space-y-6">
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
                  rows={5}
                  className="w-full rounded-2xl border-2 border-[#FFD978] px-5 py-4 text-[#2E2E2E] focus:outline-none focus:ring-4 focus:ring-[#FFB24C]/30 transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full px-8 py-4 font-bold text-lg text-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FFCF34 0%, #FFB24C 100%)',
                  cursor: 'pointer',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2.5" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </button>
            </form>
          </div>

          {/* Right Card – Contact Info + Animated Logo */}
          <div className="flex flex-col items-center lg:items-stretch space-y-10">
            {/* Contact Info Card */}
            <div className="rounded-3xl bg-white p-8 shadow-2xl w-full animate-fadeInUp delay-200">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-8 animate-slideUp">
                Contact Information
              </h3>

              <div className="space-y-6">
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
              <div className="relative h-80 w-80 drop-shadow-2xl">
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
        className="w-full rounded-2xl border-2 border-[#FFD978] px-5 py-4 text-[#2E2E2E] focus:outline-none focus:ring-4 focus:ring-[#FFB24C]/30 transition-all duration-300 font-medium"
        placeholder={`Enter your ${label.toLowerCase()}...`}
      />
    </div>
  );
}

// Reusable Info Row
type InfoRowProps = { icon?: string; label: string; value: string };
function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-5 group">
      {icon && (
        <div
          className="flex items-center justify-center h-12 w-12 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: '#FFCF34',
            boxShadow: '0px 6px 20px rgba(255, 207, 52, 0.35)',
          }}
        >
          <Image src={icon} alt={label} width={24} height={24} className="drop-shadow-sm" />
        </div>
      )}
      <div>
        <div className="text-sm font-bold text-[#2E2E2E]">{label}</div>
        <div className="text-base text-[#4F4F4F] font-medium">{value}</div>
      </div>
    </div>
  );
}