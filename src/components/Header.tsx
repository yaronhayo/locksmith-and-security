
import { useState, useEffect, useCallback, memo } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';
import TopBar from './header/TopBar';
import Navigation from './header/Navigation';
import ActionButtons from './header/ActionButtons';
import Logo from './header/Logo';

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

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />

            {/* Desktop Navigation (hidden on mobile) */}
            <div className="hidden lg:block">
              <Navigation isMenuOpen={false} isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <div 
                className="lg:hidden fixed inset-0 top-[64px] z-40 bg-primary/95 overflow-y-auto"
                aria-hidden={!isMenuOpen}
              >
                <div className="pt-2 pb-20">
                  <Navigation isMenuOpen={true} isScrolled={isScrolled} />
                </div>
              </div>
            )}

            {/* Mobile Menu Header */}
            {isMenuOpen && (
              <div 
                className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b border-white/10 bg-primary/95"
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
            )}

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
