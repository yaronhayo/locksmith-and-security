import { useState, useEffect } from 'react';
import { Menu, Phone, X, Clock, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">North Bergen, NJ</span>
              </div>
            </div>
            <a href="tel:5513037874" className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">(551) 303-7874</span>
            </a>
          </div>
        </div>
      </div>
      
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Locksmith & Security LLC</span>
            </a>

            <nav className={`absolute top-20 left-0 w-full transform transition-transform duration-300 lg:static lg:w-auto lg:translate-y-0 lg:bg-transparent ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white' : 'bg-primary/90 lg:bg-transparent'} lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                <li><a href="/services" className="text-lg font-medium hover:text-secondary transition-colors">Services</a></li>
                <li><a href="/service-areas" className="text-lg font-medium hover:text-secondary transition-colors">Service Areas</a></li>
                <li><a href="/faq" className="text-lg font-medium hover:text-secondary transition-colors">FAQ</a></li>
                <li><a href="/reviews" className="text-lg font-medium hover:text-secondary transition-colors">Reviews</a></li>
                <li><a href="/about" className="text-lg font-medium hover:text-secondary transition-colors">About</a></li>
                <li><a href="/contact" className="text-lg font-medium hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm text-gray-600">Emergency Service</span>
                <a href="tel:5513037874" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                  (551) 303-7874
                </a>
              </div>
              <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              <a href="tel:5513037874" className="md:hidden">
                <Button size="icon" variant="default">
                  <Phone className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;