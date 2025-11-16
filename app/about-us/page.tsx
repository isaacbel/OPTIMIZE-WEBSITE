import AboutHeader from "./components/AboutHeader";
import MissionValues from "./components/MissionValuesSection";
import VideoSection from "./components/VideoSection";
import Description from "./components/DescriptionSection";

export default function AboutUsPage() {
  return (
    <main className="font-poppins min-h-screen">
      {/* Dark Full-Width Header */}
      <AboutHeader />

      {/* Full-Width Light Section with Extra Bottom Space */}
      <section className="py-12 px-6 md:px-12 lg:px-24 pb-24 md:pb-32 lg:pb-40">
        <div className="w-full bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <Description />
          <VideoSection />
          <MissionValues />
        </div>
      </section>

      {/* Optional: Extra Spacer if Footer is Fixed */}
      <div className="h-16 md:h-24"></div>
    </main>
  );
}
