import HeroSection from "../components/hero/HeroSection";
import TeamsSection from "../components/teams/TeamsSection";
import DriversSection from "../components/drivers/DriversSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <TeamsSection />
      <DriversSection />
      <Footer />
    </main>
  );
};

export default Home;