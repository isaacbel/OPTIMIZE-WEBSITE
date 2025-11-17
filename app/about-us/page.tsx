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
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40">
        <div className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-sm">
          <Description />
          <VideoSection />
          <MissionValues />
        </div>
      </section>

      {/* Optional: Extra Spacer if Footer is Fixed */}
      <div className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24"></div>
    </main>
  );
}