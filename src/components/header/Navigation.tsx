
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState, useMemo } from "react";
import { navItems } from "./constants/navItems";
import { NavigationProps } from "./types/navigation";
import { useIconByLabel } from "./hooks/useIconByLabel";
import NavItem from "./NavItem";
import MobileMenuActions from "./MobileMenuActions";

/**
 * Main navigation component that handles both mobile and desktop navigation
 */
const Navigation = ({ className, isMenuOpen = false, isScrolled = false }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const getIcon = useIconByLabel();
  
  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === location.pathname) return true;
    const matchingNavItem = navItems.find(item => 
      item.children?.some(child => child.path === location.pathname)
    );
    return matchingNavItem?.path === path;
  };

  const displayItems = useMemo(() => 
    isOpen 
      ? navItems 
      : navItems.filter(item => !item.showMobileOnly),
    [isOpen]
  );

  return (
    <nav 
      className={cn(
        "hidden lg:flex items-center space-x-8",
        isOpen && "fixed inset-0 top-[65px] bg-primary/95 flex flex-col items-start px-6 py-6 space-y-3 overflow-y-auto lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0 max-h-[calc(100vh-65px)] z-50",
        isOpen && "!flex",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {displayItems.map((item) => (
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
