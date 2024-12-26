import { useState, useEffect } from 'react';
import { Menu, X, Clock, MapPin, ChevronDown, Phone, Calendar, Home, HelpCircle, Star, Info, MessageSquare, ChevronRight, Map } from 'lucide-react';
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

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300 ease-in-out group">
                <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm">North Bergen, NJ</span>
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                {serviceAreas.map((area) => (
                  <DropdownMenuItem 
                    key={area.slug}
                    className="transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
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
              <div className="flex items-center space-x-2 group hover:text-secondary transition-colors duration-300 ease-in-out">
                <Clock className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
              <span className="text-sm hover:text-secondary transition-colors duration-300 ease-in-out cursor-pointer">NJ DCA License #13VH13153100</span>
            </div>
          </div>
        </div>
      </div>
      
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <a href="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
                alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services in North Bergen, NJ"
                className="h-[180px] w-auto transform transition-transform duration-300 group-hover:scale-110"
                loading="eager"
                width="180"
                height="180"
                fetchPriority="high"
                decoding="async"
                style={{
                  aspectRatio: '1/1',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/placeholder.svg';
                }}
              />
            </a>

            <nav className={`fixed inset-0 lg:static transform transition-transform duration-300 lg:transform-none ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            } ${
              isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-primary/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none'
            } lg:block`}>
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
              <ul className="h-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center space-y-4 lg:space-y-0 lg:space-x-8 p-6 lg:p-0">
                {[
                  { path: '/', label: 'Home', icon: Home },
                  { path: '/services', label: 'Services', icon: ChevronRight },
                  { path: '/service-areas', label: 'Service Areas', icon: Map },
                  { path: '/faq', label: 'FAQ', icon: HelpCircle },
                  { path: '/reviews', label: 'Reviews', icon: Star },
                  { path: '/about', label: 'About', icon: Info },
                  { path: '/contact', label: 'Contact', icon: MessageSquare }
                ].map(({ path, label, icon: Icon }) => (
                  <li key={path} className="w-full lg:w-auto">
                    <a 
                      href={path} 
                      className={`group flex items-center space-x-3 text-lg font-medium relative transition-colors duration-300 ${
                        isActivePage(path) 
                          ? 'text-secondary lg:text-secondary' 
                          : `${isMenuOpen ? 'text-white lg:text-gray-900' : 'text-gray-900'} hover:text-secondary`
                      } ${
                        !isMenuOpen && 'lg:after:content-[""] lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:w-full lg:after:h-0.5 lg:after:bg-secondary lg:after:transform lg:after:scale-x-0 lg:after:origin-left lg:after:transition-transform lg:after:duration-300 lg:hover:after:scale-x-100'
                      }`}
                    >
                      <Icon className="w-5 h-5 lg:hidden" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <a href="tel:5513037874" className="inline-flex items-center space-x-2 text-xl font-bold text-primary hover:text-secondary transition-all duration-300 group transform hover:scale-105">
                  <Phone className="w-6 h-6 animate-phone-ring" />
                  <span className="text-2xl transform transition-transform duration-300 group-hover:translate-y-[-2px]">(551) 303-7874</span>
                </a>
                <Button asChild className="bg-secondary hover:bg-secondary-hover text-white text-lg px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a href="/booking" className="inline-flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </a>
                </Button>
              </div>
              <div className="flex md:hidden items-center space-x-2">
                <Button asChild size="sm" className="bg-secondary hover:bg-secondary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a href="/booking" className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Book
                  </a>
                </Button>
                <a href="tel:5513037874">
                  <Button 
                    size="icon" 
                    variant="default" 
                    className="hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-6 w-6 animate-phone-ring" />
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 z-50" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;