import "../App.css";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useState } from "react";
import WidgetsDropdown from "./navbar/WidgetsDropdown";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileWidgetsOpen, setMobileWidgetsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
    setMenuOpen(false);
    setMobileWidgetsOpen(false);
  };

  return (
    <>
      <header className="relative top-0 bg-white text-white w-full z-50 shadow-md">
        {/* Wrapper som täcker både knapp + dropdown */}
        <div
          onMouseEnter={() => {
            if (window.innerWidth >= 768) setIsOpen(true)
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 768) setIsOpen(false)
          }}
        >
          <div className="flex items-center justify-between h-30">
            {/* Logo */}
            <Link to="/" className="flex items-center px-3">
              <img 
                src="https://skelleftea.se/images/18.57e3b0a17a75fbf0652ca88/1630320903542/skell-eftea.png"
                alt="Skelefteå logga"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop navbar */}
            <div className="hidden md:flex gap-6 ml-auto mr-24">
              <NavButton buttonText="Widgets" href="/" />
              <NavButton buttonText="Feed" href="/feed" />
            </div>

            {/* Hamburger meny */}
            <div 
              className={`ml-auto md:hidden cursor-pointer p-2 rounded-lg transition-all duration-300
                        ${menuOpen ? "bg-[#B87F45]" : "bg-[#985A1C] hover:bg-[#B87F45]"}`}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setIsOpen(false);
              }}
            >
              <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
            </div>
          </div>

          {/* Dropdown direkt under header, men inuti hover-wrapper */}
          {isOpen && !menuOpen && (
            <div className="absolute top-full left-0 w-screen z-40 hidden md:block">
              <WidgetsDropdown />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col gap-3 px-6 pb-4 text-left z-50">

            <div>
              <button
                onClick={() => setMobileWidgetsOpen(!mobileWidgetsOpen)}
                className="text-white w-full py-2"
              >
                Widgets
              </button>

              {mobileWidgetsOpen && (
                <div className="mt-2 bg-black text-white overflow-hidden">
                  <WidgetsDropdown />
                </div>
              )}
            </div>

            <NavButton
              buttonText="Feed"
              href="/feed"
              onClick={handleNavClick}
              className="text-white py-2 block"
            />
          </div> 

        )}
      </header>
    </>
  );
}

export default Header;