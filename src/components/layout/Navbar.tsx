import {
  Search,
  Menu,
  Clock10Icon,
  ClosedCaption,
  PanelRightClose,
  PanelLeftClose,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="text-2xl font-extrabold tracking-widest">F1</div>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
              <a href="#calendar" className="hover:text-[#E10600] transition">
                Races
              </a>
              <a href="#standing" className="hover:text-[#E10600] transition">
                Standings
              </a>
              <a href="#drivers" className="hover:text-[#E10600] transition">
                Drivers
              </a>
              <a href="#teams" className="hover:text-[#E10600] transition">
                Teams
              </a>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 text-sm uppercase tracking-wider">
            <Search className="w-4 h-4 cursor-pointer hover:text-[#E10600] transition" />

            <a href="#footer" className="hover:text-[#E10600] transition">
              Sign In
            </a>

            <a
              href="#footer"
              className="bg-[#E10600] px-4 py-2 rounded-sm hover:opacity-90 transition"
            >
              Subscribe
            </a>

            <Menu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div
          className={`md:hidden bg-black text-white p-4 fixed top-0 left-0 w-[90%] sm:w-[80%] h-full z-100 ${isMenuOpen ? "block translate-x-0" : "hidden -translate-x-100"} border-t border-neutral-800 transition-all duration-200`}
        >
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl font-extrabold tracking-widest mb-8 p-4">F1</h1>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mb-8 cursor-pointer"
            >
              <PanelLeftClose />
            </button>
          </div>
          <nav className="flex flex-col justify-center items-center gap-4 pt-10">
            <a
              href="#calendar"
              className="hover:text-[#E10600] transition text-lg"
            >
              Races
            </a>
            <a
              href="#standing"
              className="hover:text-[#E10600] transition text-lg"
            >
              Standings
            </a>
            <a
              href="#drivers"
              className="hover:text-[#E10600] transition text-lg"
            >
              Drivers
            </a>
            <a
              href="#teams"
              className="hover:text-[#E10600] transition text-lg"
            >
              Teams
            </a>
          </nav>
          <div className="flex flex-col justify-center items-center gap-4 mt-12">
            <a
              href="#footer"
              className="hover:text-[#E10600] bg-black/50 px-6 py-3 w-[70%] mx-auto text-center rounded-sm hover:opacity-90 transition text-lg"
            >
              Sign In
            </a>
            <a
              href="#footer"
              className="bg-[#E10600] px-6 py-3 w-[70%] mx-auto text-center rounded-sm hover:opacity-90 transition text-lg"
            >
              Subscribe
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
