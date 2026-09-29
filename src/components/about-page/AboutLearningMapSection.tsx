import AboutSectionHeading from "./AboutSectionHeading";
import DesktopJourneyMap from "./DesktopJourneyMap";
import MobileJourneyMap from "./MobileJourneyMap";

export default function AboutLearningMapSection() {
  return (
    <section>
      <AboutSectionHeading
        eyebrow="نقشه مسیر یادگیری"
        title={
          <>
            مسیر یادگیری را{" "}
            <span className="text-(--primary)">روی نقشه ببین</span>
          </>
        }
        description="شروع کن، یاد بگیر، تمرین کن و هر روز یک قدم به رشد نزدیک‌تر شو."
      />

      <div className="mt-8">
        <DesktopJourneyMap />
        <MobileJourneyMap />
      </div>
    </section>
  );
}
