
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import { navItems } from "./constants/navItems";
import { NavigationProps } from "./types/navigation";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";

const Navigation = ({ className, isMenuOpen = false, isScrolled = false }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  
  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  // Filter items based on whether we're in mobile view (isOpen) or not
  const displayItems = isOpen 
    ? navItems.filter(item => !item.children || ["Services", "Service Areas"].includes(item.label)) // Show main pages and Services/Service Areas in mobile menu
    : navItems;

  return (
    <nav 
      className={cn(
        "hidden lg:flex items-center space-x-8",
        isOpen && "fixed inset-0 top-[65px] bg-primary/95 flex flex-col items-start px-6 py-8 space-y-4 lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0",
        isOpen && "!flex",  // Force display when menu is open
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {displayItems.map(({ path, label, showMobileOnly, children }) => (
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
      
      {isOpen && (
        <div className="mt-6 space-y-4 w-full">
          <BookingDialog 
            variant="secondary"
            className="w-full bg-secondary hover:bg-secondary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Button asChild variant="secondary" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Service
              </span>
            </Button>
          </BookingDialog>
          
          <a 
            href="tel:2017482070" 
            className="w-full inline-flex items-center justify-center gap-2 text-white text-lg font-bold hover:text-secondary transition-colors"
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
