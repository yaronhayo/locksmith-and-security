import { useState, useEffect } from 'react';
import { Menu, X, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <div className="flex justify-end items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">North Bergen, NJ</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {serviceAreas.map((area) => (
                  <DropdownMenuItem key={area.slug}>
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
                <li><a href="/services" className="text-lg font-medium hover:text-secondary transition-colors">Services</a></li>
                <li><a href="/booking" className="text-lg font-medium hover:text-secondary transition-colors">Book Online</a></li>
                <li><a href="/faq" className="text-lg font-medium hover:text-secondary transition-colors">FAQ</a></li>
                <li><a href="/reviews" className="text-lg font-medium hover:text-secondary transition-colors">Reviews</a></li>
                <li><a href="/about" className="text-lg font-medium hover:text-secondary transition-colors">About</a></li>
                <li><a href="/contact" className="text-lg font-medium hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex flex-col items-end">
                <a href="tel:5513037874" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                  (551) 303-7874
                </a>
              </div>
              <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              <a href="tel:5513037874" className="md:hidden">
                <Button size="icon" variant="default">
                  <Menu className="h-6 w-6" />
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
