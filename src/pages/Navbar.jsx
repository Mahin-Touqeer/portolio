import { Phone, PhoneCall } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#f8f7f1] w-screen">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-6 max-w-7xl mx-auto relative bg-[#f8f7f1]">
        {/* Logo */}
        <h2 className="text-5xl portfolio text-[#194643]">Portfolio</h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text font-medium">
          <NavLink
            to="/"
            className="nav-item cursor-pointer hover:text-teal-700 relative px-2"
          >
            HOME
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-item cursor-pointer hover:text-teal-700 relative px-2"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/about"
            className="nav-item cursor-pointer hover:text-teal-700 relative px-2"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-item cursor-pointer hover:text-teal-700 relative px-2"
          >
            CONTACT
          </NavLink>
        </ul>

        {/* Contact */}
        <div className="flex items-center gap-3">
          <span className="text-s hidden lg:block">+91 691 380 7306</span>
          <button className="bg-white text-teal-900 w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 shadow">
            <PhoneCall width={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-teal-900 text-white w-9 h-9 rounded-full flex items-center justify-center ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white  border-y border-gray-200 overflow-hidden transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col py-4 px-4 gap-4 text-sm font-medium">
            <NavLink
              to="/"
              className="cursor-pointer hover:text-teal-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/projects"
              className="cursor-pointer hover:text-teal-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/about"
              className="cursor-pointer hover:text-teal-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className="cursor-pointer hover:text-teal-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
