"use client";

import StatisticsSection from "../../../src/components/home-page/StatisticsSection";
import AboutCtaSection from "../../../src/components/about-page/AboutCtaSection";
import AboutEcosystemSection from "../../../src/components/about-page/AboutEcosystemSection";
import AboutIntro from "../../../src/components/about-page/AboutIntro";
import AboutLearningMapSection from "../../../src/components/about-page/AboutLearningMapSection";
import AboutValuesSection from "../../../src/components/about-page/AboutValuesSection";

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen cursor-default overflow-hidden bg-[#f7f8f8] pb-20 text-(--text) md:pb-0"
    >
      <div className="-mt-[clamp(2rem,4vw,4.5rem)]">
        <StatisticsSection />
      </div>

      <div className="mx-auto w-full max-w-[90rem] space-y-[clamp(3rem,5vw,5.5rem)] px-4 sm:px-6 lg:px-8">
        <AboutIntro />
        <AboutEcosystemSection />
        <AboutLearningMapSection />
        <AboutValuesSection />
        <AboutCtaSection />
      </div>
    </main>
  );
}
