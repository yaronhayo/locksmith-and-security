import { useLocation } from 'react-router-dom';
import { Home, Wrench, MapPin, HelpCircle, Star, Users, Phone, Shield, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = ({ isMenuOpen, isScrolled }: { isMenuOpen: boolean; isScrolled: boolean }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    ...(isMobile ? [{ path: '/', label: 'Home', icon: Home }] : []),
    { path: '/services', label: 'Services', icon: Wrench },
    { path: '/service-areas', label: 'Service Areas', icon: MapPin },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/reviews', label: 'Reviews', icon: Star },
    { path: '/about', label: 'About', icon: Users },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  return (
    <nav className={`fixed inset-0 lg:static transform transition-transform duration-300 lg:transform-none ${
      isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    } bg-primary/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none lg:block lg:flex-1 lg:mx-8`}>
      <ul className="h-full flex flex-col lg:flex-row items-start lg:items-center lg:justify-center space-y-2 lg:space-y-0 lg:space-x-4 p-6 lg:p-0 mt-20 lg:mt-0">
        {menuItems.map(({ path, label, icon: Icon }) => (
          <li key={path} className="w-full lg:w-auto">
            <a 
              href={path} 
              className={`group flex items-center space-x-3 text-lg font-medium relative transition-all duration-300 p-3 lg:p-0 rounded-lg ${
                isActivePage(path) 
                  ? 'text-secondary lg:text-secondary after:scale-x-100 bg-white/10 lg:bg-transparent' 
                  : 'text-white lg:text-gray-900 hover:text-secondary hover:bg-white/10 lg:hover:bg-transparent'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              <span className="lg:hidden">
                <Icon className="w-5 h-5" />
              </span>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile-only trust badges and copy */}
      <div className="lg:hidden px-6 pb-6 space-y-6">
        <div className="border-t border-white/20 pt-6">
          <h3 className="text-white text-lg font-semibold mb-4">Why Choose Us?</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-white/10">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Licensed & Insured</p>
                <p className="text-white/70 text-sm">Your security is our priority</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-white/10">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">24/7 Service</p>
                <p className="text-white/70 text-sm">Always here when you need us</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-white/10">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">5-Star Rated</p>
                <p className="text-white/70 text-sm">Trusted by local customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-white/90 text-sm">
            Your trusted local locksmith serving North Bergen and surrounding areas. Fast response, fair prices, and professional service.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;