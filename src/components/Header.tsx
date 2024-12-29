import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./header/Navigation";
import ActionButtons from "./header/ActionButtons";
import TopBar from "./header/TopBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <TopBar />
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Locksmith & Security</span>
          </Link>
          
          <Navigation isMenuOpen={isMenuOpen} />
          
          <div className="flex items-center space-x-4">
            <ActionButtons 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;