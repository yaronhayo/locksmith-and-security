import { useState, useEffect } from 'react';
import { Menu, X, Clock, MapPin, ChevronDown, Phone, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from 'react-router-dom';

const serviceAreas = [
  { name: "North Bergen", slug: "north-bergen" },
  { name: "Jersey City", slug: "jersey-city" },
  { name: "Union City", slug: "union-city" },
  { name: "West New York", slug: "west-new-york" },
  { name: "Secaucus", slug: "secaucus" },
  { name: "Weehawken", slug: "weehawken" },
  { name: "Hoboken", slug: "hoboken" },
  { name: "Guttenberg", slug: "guttenberg" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentCity = "North Bergen";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">North Bergen, NJ</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {serviceAreas.map((area) => (
                  <DropdownMenuItem 
                    key={area.slug}
                    className={`${area.name === currentCity ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/5 hover:text-primary transition-colors`}
                  >
                    <a 
                      href={`/service-areas/${area.slug}`}
                      className="w-full"
                    >
                      {area.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
              <span className="text-sm">NJ DCA License #13VH13153100</span>
            </div>
          </div>
        </div>
      </div>
      
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
                alt="Locksmith & Security LLC Logo" 
                className="h-16 w-auto"
              />
            </a>

            <nav className={`absolute top-20 left-0 w-full transform transition-transform duration-300 lg:static lg:w-auto lg:translate-y-0 lg:bg-transparent ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white' : 'bg-primary/90 lg:bg-transparent'} lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                {[
                  { path: '/services', label: 'Services' },
                  { path: '/faq', label: 'FAQ' },
                  { path: '/reviews', label: 'Reviews' },
                  { path: '/about', label: 'About' },
                  { path: '/contact', label: 'Contact' }
                ].map(({ path, label }) => (
                  <li key={path}>
                    <a 
                      href={path} 
                      className={`text-lg font-medium hover:text-secondary transition-colors relative
                        ${isActivePage(path) ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-secondary' : ''}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <a href="tel:5513037874" className="inline-flex items-center space-x-2 text-xl font-bold text-primary hover:text-secondary transition-colors group">
                  <Phone className="w-6 h-6 animate-phone-ring" />
                  <span className="text-2xl">(551) 303-7874</span>
                </a>
                <Button asChild className="bg-secondary hover:bg-secondary-hover text-white text-lg px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  <a href="/booking" className="inline-flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </a>
                </Button>
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