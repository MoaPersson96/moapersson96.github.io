import "../App.css";
import "./NavButton";
import NavButton from "./NavButton";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white text-white w-full mx-auto z-50 h-30">
        <div className="flex items-center justify-between h-full">
          <a className="flex items-center px-3">
            <img src="https://skelleftea.se/images/18.57e3b0a17a75fbf0652ca88/1630320903542/skell-eftea.png" alt="Skelefteå logga" className="h-16 w-auto"/>
          </a>

          <div className="flex-1 justify-center hidden md:flex">
            <NavButton buttonText="Widgets" href="widgets" />
            <NavButton buttonText="Feed" href="feed" />
          </div>

          <div className="ml-auto bg-[#985A1C] hover:bg-[#B87F45] m-2 space-y-1 rounded p-2 shadow md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
          </div>
        </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col gap-3 bg-black px-6 pb-4 w-full text-center">
              <NavButton buttonText="Widgets" href="widgets" />
              <NavButton buttonText="Feed" href="feed" />
            </div>
          )}

      </header>
    </>
  );
}

export default Header;
