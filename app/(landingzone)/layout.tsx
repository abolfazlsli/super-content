import BottomNav from "../../src/components/layout/BottomNav";
import Header from "../../src/components/layout/Header";
import LandingFooter from "../../src/components/layout/LandingFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <LandingFooter />
      <BottomNav />
    </>
  );
}
