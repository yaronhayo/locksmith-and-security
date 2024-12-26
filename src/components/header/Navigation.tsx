import { ChevronRight, Map, HelpCircle, Star, Info, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navigation = ({ isMenuOpen, isScrolled }: { isMenuOpen: boolean; isScrolled: boolean }) => {
  const location = useLocation();
  
  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed inset-0 lg:static transform transition-transform duration-300 lg:transform-none ${
      isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    } ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-primary/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none'
    } lg:block lg:flex-1 lg:mx-8`}>
      <ul className="h-full flex flex-col lg:flex-row items-start lg:items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4 p-6 lg:p-0">
        {[
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
              className={`group flex items-center space-x-3 text-lg font-medium relative transition-all duration-300 ${
                isActivePage(path) 
                  ? 'text-secondary lg:text-secondary after:scale-x-100' 
                  : `${isMenuOpen ? 'text-white lg:text-gray-900' : 'text-gray-900'} hover:text-secondary`
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              <Icon className="w-5 h-5 lg:hidden" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;