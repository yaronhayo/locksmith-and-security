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
          <div className="flex items-center justify-between min-h-[100px]">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
                alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services in North Bergen, NJ"
                className={`h-[100px] w-auto md:h-[180px] lg:h-[240px] transform transition-transform duration-300 group-hover:scale-110 ${
                  isMenuOpen ? 'brightness-0 invert' : ''
                }`}
                style={{
                  aspectRatio: '1/1',
                  objectFit: 'contain',
                  maxWidth: 'none'
                }}
                loading="eager"
                width="180"
                height="180"
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/placeholder.svg';
                }}
              />
            </a>

            <Navigation isMenuOpen={isMenuOpen} isScrolled={isScrolled} />

            {/* Mobile Menu Header - Only visible when menu is open */}
            <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b border-white/10 bg-primary/95 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}>
              <span className="text-white text-lg font-semibold">Menu</span>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6 text-white" strokeWidth={2.5} />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center">
              <ActionButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;