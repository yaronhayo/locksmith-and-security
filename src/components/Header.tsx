
import { useState, useEffect, useCallback, memo } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from './header/TopBar';
import Navigation from './header/Navigation';
import ActionButtons from './header/ActionButtons';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';

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

  // Close mobile menu with ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
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

            <Navigation isMenuOpen={isMenuOpen} isScrolled={isScrolled} />

            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <div className="flex items-center">
              <ActionButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>
        </div>
      </header>
      <div id="main-content" tabIndex={-1} className="sr-only focus:not-sr-only">
        Main content starts here
      </div>
    </>
  );
};

export default memo(Header);
