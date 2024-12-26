import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';
import TopBar from './header/TopBar';
import Navigation from './header/Navigation';
import ActionButtons from './header/ActionButtons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
                alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services in North Bergen, NJ"
                className="max-w-[140px] min-w-[140px] h-auto md:max-w-[180px] md:min-w-[180px] object-contain transition-transform duration-300 hover:scale-105"
                loading="eager"
                width="180"
                height="180"
                fetchPriority="high"
                decoding="async"
              />
            </a>

            <Navigation isMenuOpen={isMenuOpen} isScrolled={isScrolled} />

            <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white text-lg font-semibold">Menu</span>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <ActionButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;