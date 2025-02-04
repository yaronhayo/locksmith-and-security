import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  className?: string;
  isMenuOpen?: boolean;
  isScrolled?: boolean;
}

type NavItem = {
  path: string;
  label: string;
  showMobileOnly?: boolean;
  children?: { path: string; label: string }[];
};

const navItems: readonly NavItem[] = [
  { path: "/", label: "Home", showMobileOnly: true },
  { 
    path: "/services", 
    label: "Services",
    children: [
      { path: "/services/house-lockout", label: "House Lockout" },
      { path: "/services/car-lockout", label: "Car Lockout" },
      { path: "/services/business-lockout", label: "Business Lockout" },
      { path: "/services/lock-change", label: "Lock Change" },
      { path: "/services/lock-rekey", label: "Lock Rekey" },
      { path: "/services/business-lock-change", label: "Business Lock Change" },
      { path: "/services/new-car-key", label: "New Car Key" },
      { path: "/services/car-key-program", label: "Car Key Program" },
    ]
  },
  { path: "/service-areas", label: "Service Areas" },
  { path: "/about", label: "About" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact" },
] as const;

interface NavigationLinkProps {
  path: string;
  label: string;
  isActive: boolean;
  isMenuOpen: boolean;
  children?: { path: string; label: string }[];
}

const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen,
  children 
}: NavigationLinkProps) => {
  if (children) {
    return isMenuOpen ? (
      // Mobile view: show as expanded list
      <div className="space-y-2">
        <span className="text-base font-medium text-white lg:text-gray-700">{label}</span>
        <div className="pl-4 space-y-2">
          {children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="block text-sm text-white/90 hover:text-white lg:text-gray-600 lg:hover:text-gray-900"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    ) : (
      // Desktop view: show as dropdown
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-base font-medium transition-colors duration-300",
                isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
              )}
            >
              {label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4">
                {children.map((child) => (
                  <NavigationMenuLink asChild key={child.path}>
                    <Link
                      to={child.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <div className="text-sm font-medium leading-none">{child.label}</div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Link
      to={path}
      className={cn(
        "text-base font-medium transition-colors duration-300 relative group no-underline",
        isActive ? "text-secondary" : "text-gray-700 hover:text-secondary",
        isMenuOpen && "text-white lg:text-gray-700"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {label}
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-secondary"
        initial={{ width: isActive ? "100%" : "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </Link>
  );
});

NavigationLink.displayName = 'NavigationLink';

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