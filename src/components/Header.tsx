import { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

// Lazy load sub-components
const TopBar = lazy(() => import('./header/TopBar'));
const Navigation = lazy(() => import('./header/Navigation'));
const ActionButtons = lazy(() => import('./header/ActionButtons'));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    const options = { passive: true };
    window.addEventListener('scroll', handleScroll, options);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <TopBar />
      </Suspense>
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between min-h-[100px] lg:min-h-[35px]">
            <a 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="Go to homepage"
            >
              <img 
                src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
                alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services in North Bergen, NJ"
                className={`h-[100px] w-auto md:h-[180px] lg:h-[84px] transform transition-transform duration-300 group-hover:scale-110 ${
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
              />
            </a>

            <Suspense fallback={<LoadingSpinner />}>
              <Navigation isMenuOpen={isMenuOpen} isScrolled={isScrolled} />
            </Suspense>

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
              <Suspense fallback={<LoadingSpinner />}>
                <ActionButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              </Suspense>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);