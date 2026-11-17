import BottomNav from "../../src/components/layout/BottomNav";
import Header from "../../src/components/layout/Header";
import LandingFooter from "../../src/components/layout/LandingFooter";
import ZoneProviders from "../zone-providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ZoneProviders zone="landing">
      <Header />
      {children}
      <LandingFooter />
      <BottomNav />
    </ZoneProviders>
  );
}
