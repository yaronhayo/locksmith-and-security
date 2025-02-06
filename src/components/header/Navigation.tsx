import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import { navItems } from "./constants/navItems";
import { NavigationProps } from "./types/navigation";

const Navigation = ({ className, isMenuOpen = false, isScrolled = false }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={cn(
        "hidden lg:flex items-center space-x-8",
        isOpen && "fixed inset-0 top-[65px] bg-primary/95 flex flex-col items-start px-6 py-8 space-y-4 lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map(({ path, label, showMobileOnly, children }) => (
        (!showMobileOnly || (showMobileOnly && isOpen)) && (
          <NavigationLink
            key={path}
            path={path}
            label={label}
            isActive={isActive(path)}
            isMenuOpen={isOpen}
            children={children}
          />
        )
      ))}
    </nav>
  );
};

export default memo(Navigation);