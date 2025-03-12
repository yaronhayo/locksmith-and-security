
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { navItems } from "./constants/navItems";
import { NavigationProps } from "./types/navigation";
import { Home, Settings, MapPin, Info, Star, MessageSquare, HelpCircle, ChevronRight } from 'lucide-react';
import NavItem from "./NavItem";
import MobileMenuActions from "./MobileMenuActions";

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
    if (path === location.pathname) return true;
    const matchingNavItem = navItems.find(item => 
      item.children?.some(child => child.path === location.pathname)
    );
    return matchingNavItem?.path === path;
  };

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

  return (
    <nav 
      className={cn(
        "flex-col items-start space-y-3 w-full",
        isOpen 
          ? "flex px-6 py-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0" 
          : "hidden lg:flex lg:flex-row lg:items-center lg:space-x-8",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          item={item}
          isActive={isActive(item.path)}
          isMenuOpen={isOpen}
          getIcon={getIcon}
        />
      ))}
      
      <MobileMenuActions isMenuOpen={isOpen} />
    </nav>
  );
};

export default memo(Navigation);
