import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import TeamsSection from "../components/teams/TeamsSection";
import CalendarSection from "../components/calendar/CalendarSection";
import GlobeSection from "../components/globe/GlobeSection";
import DriversSection from "../components/drivers/DriversSection";
import ConclusionSection from "../components/conclusion/ConclusionSection";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";

const Home = () => {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CalendarSection />
      <GlobeSection />
      <TeamsSection />
      <DriversSection />
      <ConclusionSection />
      <ScrollToTop />
      <Footer />
    </main>
  );
};

export default Home;
