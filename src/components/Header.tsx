import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navigation from "./header/Navigation";
import TopBar from "./header/TopBar";
import ActionButtons from "./header/ActionButtons";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <TopBar />
      <div
        className={cn(
          "relative bg-white transition-all duration-300",
          isScrolled && "shadow-md",
          isMenuOpen && "bg-primary lg:bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/company-logo.png"
                alt="Locksmith & Security LLC"
                className="h-10 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              <Navigation isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen} />
              <ActionButtons />
            </div>

            <button
              className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white lg:text-gray-600" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 top-[98px] z-50 bg-primary transform transition-transform duration-300 lg:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container mx-auto px-4 py-6">
            <Navigation
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              className="flex flex-col space-y-4"
            />
            <div className="mt-6">
              <ActionButtons className="flex flex-col space-y-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;