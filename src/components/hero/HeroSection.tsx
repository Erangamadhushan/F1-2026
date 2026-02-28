import Navbar from "../layout/Navbar";
import { useEffect, useState } from "react";
import { images } from "../../data/images";
import { newsData } from "../../data/News";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const imgTimeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 5000);
    return () => clearTimeout(imgTimeout);
  }, [index]);
  return (
    <section
      className="relative min-h-screen bg-[#0c0f1a] overflow-hidden"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
      {/* Red Diagonal Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-[60%] h-[50%] bg-red-600 transform -skew-y-12 -translate-y-40" />
        <div className="absolute bottom-0 right-0 w-[60%] h-[50%] bg-red-600 transform -skew-y-12 translate-y-40" />
      </div>

      {/* Navbar inside hero */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="relative w-full px-6 pt-32 pb-20">
        {/* Text Content */}
        <div className="flex min-h-[65vh] flex-col justify-center px-4 md:px-12 max-w-4xl">
          <span className="bg-red-600 text-xs uppercase tracking-wider px-3 py-1 w-fit mb-6">
            News
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {
              newsData[index].title
            }
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8">
            {
              newsData[index].description
            }
          </p>

          <button className="text-sm uppercase tracking-wide flex items-center gap-2 group">
            Find out more
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </div>

        {/* Bottom News Preview Bar */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-sm">
          <div className="border-t border-neutral-700 pt-4">
            <p className="opacity-60 text-xs mb-2">6 March 2026</p>
            <p>
              McLaren's new wind tunnel is a key part of their 2026 development
              plan
            </p>
          </div>

          <div className="border-t border-neutral-700 pt-4">
            <p className="opacity-60 text-xs mb-2">12 August 2026</p>
            <p>Red Bull's new car design is causing controversy</p>
          </div>

          <div className="border-t border-neutral-700 pt-4">
            <p className="opacity-60 text-xs mb-2">08 August 2026</p>
            <p>Formula 1's new technical regulations are being discussed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
