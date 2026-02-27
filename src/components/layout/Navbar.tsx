import { Search, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-widest">
            F1
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-[#E10600] transition">
              Races
            </a>
            <a href="#" className="hover:text-[#E10600] transition">
              Standings
            </a>
            <a href="#" className="hover:text-[#E10600] transition">
              Drivers
            </a>
            <a href="#" className="hover:text-[#E10600] transition">
              Teams
            </a>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm uppercase tracking-wider">

          <Search className="w-4 h-4 cursor-pointer hover:text-[#E10600] transition" />

          <a href="#" className="hover:text-[#E10600] transition">
            Sign In
          </a>

          <a
            href="#"
            className="bg-[#E10600] px-4 py-2 rounded-sm hover:opacity-90 transition"
          >
            Subscribe
          </a>

          <Menu className="md:hidden w-5 h-5 cursor-pointer" />

        </div>
      </div>
    </header>
  );
};

export default Navbar;