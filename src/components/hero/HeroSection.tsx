import Navbar from "../layout/Navbar";
import { useEffect, useState } from "react";
import { images } from "../../data/images";

const HeroSection = () => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const imgTimeout = setTimeout(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearTimeout(imgTimeout);
  }, [imgIndex]);
  return (
    <section
      className="relative min-h-screen bg-[#0c0f1a] overflow-hidden"
      style={{
        backgroundImage: `url(${images[imgIndex]})`,
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
        <div className="flex min-h-[60vh] flex-col justify-center px-12 max-w-2xl">
          <span className="bg-red-600 text-xs uppercase tracking-wider px-3 py-1 w-fit mb-6">
            News
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            New McLaren wind tunnel ‘critical’ to future performance
          </h1>

          <button className="text-sm uppercase tracking-wide flex items-center gap-2 group">
            Find out more
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </div>

        {/* Bottom News Preview Bar */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-sm">
          <div className="border-t border-neutral-700 pt-4">
            <p className="opacity-60 text-xs mb-2">16 August 2019</p>
            <p>New McLaren wind tunnel ‘critical’ to future performance</p>
          </div>

          <div className="border-t border-neutral-700 pt-4">
            <p className="opacity-60 text-xs mb-2">12 August 2019</p>
            <p>What To Watch For in the Hungarian Grand Prix</p>
          </div>

          <div className="border-t border-neutral-700 pt-4">
            <p className="opacity-60 text-xs mb-2">08 August 2019</p>
            <p>Hamilton wants harder championship fight</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
