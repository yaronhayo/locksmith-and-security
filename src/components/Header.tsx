import { useState, useEffect, useCallback, memo } from 'react';
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

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <TopBar />
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-3">
            <a 
              href="/" 
              className="flex items-center space-x-3 group no-underline"
              aria-label="Go to homepage"
            >
              <img 
                src="/logo.png" 
                alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services in North Bergen, NJ"
                className={`w-auto h-16 sm:h-20 md:h-24 lg:h-20 transition-transform duration-300 group-hover:scale-105 ${
                  isMenuOpen ? 'brightness-0 invert' : ''
                }`}
                style={{
                  objectFit: 'contain'
                }}
                loading="eager"
                width="200"
                height="80"
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/placeholder.svg';
                  console.error('Logo failed to load:', e);
                }}
              />
            </a>

            <Navigation isMenuOpen={isMenuOpen} isScrolled={isScrolled} />

            <div 
              className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b border-white/10 bg-primary/95 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
              aria-hidden={!isMenuOpen}
            >
              <span className="text-white text-lg font-semibold">Menu</span>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" strokeWidth={2.5} />
              </Button>
            </div>

            <div className="flex items-center">
              <ActionButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);