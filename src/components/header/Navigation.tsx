
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import { navItems } from "./constants/navItems";
import { NavigationProps } from "./types/navigation";
import { Phone, Calendar, Home, ChevronRight, Settings, MapPin, Info, Star, MessageSquare, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = ({ className, isMenuOpen = false, isScrolled = false }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  
  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    // Check if the current path matches the nav item path or its children paths
    if (path === location.pathname) return true;
    const matchingNavItem = navItems.find(item => item.children?.some(child => child.path === location.pathname));
    return matchingNavItem?.path === path;
  };

  // Get icon for menu item
  const getIcon = (label: string) => {
    switch (label) {
      case "Home":
        return <Home className="w-5 h-5" />;
      case "Services":
        return <Settings className="w-5 h-5" />;
      case "Service Areas":
        return <MapPin className="w-5 h-5" />;
      case "About":
        return <Info className="w-5 h-5" />;
      case "Reviews":
        return <Star className="w-5 h-5" />;
      case "Contact":
        return <MessageSquare className="w-5 h-5" />;
      case "FAQ":
        return <HelpCircle className="w-5 h-5" />;
      default:
        return <ChevronRight className="w-5 h-5" />;
    }
  };

  // Filter items based on whether we're in mobile view (isOpen) or not
  const displayItems = isOpen 
    ? navItems
    : navItems.filter(item => !item.showMobileOnly);

  return (
    <nav 
      className={cn(
        "hidden lg:flex items-center space-x-8",
        isOpen && "fixed inset-0 top-[65px] bg-primary/95 flex flex-col items-start px-6 py-6 space-y-3 overflow-y-auto lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0 max-h-[calc(100vh-65px)]",
        isOpen && "!flex",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {displayItems.map(({ path, label, showMobileOnly, children }) => (
        <div key={path} className="w-full">
          <NavigationLink
            path={path}
            label={label}
            isActive={isActive(path)}
            isMenuOpen={isOpen}
            children={children}
            icon={getIcon(label)}
          />
        </div>
      ))}
      
      {isOpen && (
        <div className="mt-2 space-y-3 w-full">
          <Button 
            asChild 
            variant="secondary" 
            className="w-full bg-secondary hover:bg-secondary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/book-online" className="inline-flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Service
            </Link>
          </Button>
          
          <a 
            href="tel:2017482070" 
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 rounded-md text-white text-lg font-bold hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5 animate-phone-ring" />
            (201) 748-2070
          </a>
        </div>
      )}
    </nav>
  );
};

export default memo(Navigation);
