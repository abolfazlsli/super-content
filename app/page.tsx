import HomeContent from "../src/components/home-page/HomeContent";
import QuickLinks from "../src/components/quick-links/QuickLinks";
import EducationLevelSelector from "../src/components/home-page/EducationLevelSelector";
import GradeLevels from "../src/components/grade-levels/GradeLevels"
import TrendingContents from "../src/components/home-page/TrendigContents";
import PopularContents from "../src/components/home-page/PopularContents";
import TrendingCourses from "../src/components/home-page/TrendigCourses";
import StatisticsSection from "../src/components/home-page/StatisticsSection";

export default function HomePage() {
  return (
    <main className="app">

      <HomeContent
        beforeResults={
          <>
            <QuickLinks />
            <EducationLevelSelector />
            <GradeLevels />
            <TrendingContents />
            <PopularContents />
            <TrendingCourses />
            <StatisticsSection />
          </>
        }
      />
    </main>
  );
}