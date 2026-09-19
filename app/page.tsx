import Header from "../src/components/Header";
import HomeContent from "../src/components/HomeContent";
import QuickLinks from "../src/components/quickLinks/QuickLinks";
import EducationLevelSelector from "../src/components/EducationLevelSelector";
import GradeLevels from "../src/components/gradeLevels/GradeLevels"
import TrendingContents from "../src/components/TrendigContents";
import PopularContents from "../src/components/PopularContents";
import TrendingCourses from "../src/components/trendigCourses/TrendigCourses";
import StatisticsSection from "../src/components/StatisticsSection";
import Footer from "../src/components/Footer";
import BottomNav from "../src/components/BottomNav";

export default function HomePage() {
  return (
    <main className="app">
      <Header />

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
      <Footer />
      <BottomNav />
    </main>
  );
}