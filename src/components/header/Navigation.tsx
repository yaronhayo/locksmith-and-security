import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { memo } from "react";

interface NavigationProps {
  className?: string;
  isMenuOpen?: boolean;
  isScrolled?: boolean;
}

type NavItem = {
  path: string;
  label: string;
  showMobileOnly?: boolean;
};

const navItems: readonly NavItem[] = [
  { path: "/", label: "Home", showMobileOnly: true },
  { path: "/services", label: "Services" },
  { path: "/service-areas", label: "Service Areas" },
  { path: "/about", label: "About" },
  { path: "/reviews", label: "Reviews" },
  { path: "/book-online", label: "Book Online" },
  { path: "/contact", label: "Contact" },
] as const;

interface NavigationLinkProps {
  path: string;
  label: string;
  isActive: boolean;
  isMenuOpen: boolean;
}

const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen 
}: NavigationLinkProps) => (
  <Link
    to={path}
    className={cn(
      "text-base font-medium transition-colors duration-300 relative group no-underline",
      isActive ? "text-secondary" : "text-gray-700 hover:text-secondary",
      isMenuOpen && "text-white lg:text-gray-700"
    )}
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
));

NavigationLink.displayName = 'NavigationLink';

const Navigation = ({ className, isMenuOpen = false, isScrolled = false }: NavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={cn(
        "hidden lg:flex items-center space-x-8",
        isMenuOpen && "fixed inset-0 top-[65px] bg-primary/95 flex flex-col items-start px-6 py-8 space-y-4 lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map(({ path, label, showMobileOnly }) => (
        (!showMobileOnly || (showMobileOnly && isMenuOpen)) && (
          <NavigationLink
            key={path}
            path={path}
            label={label}
            isActive={isActive(path)}
            isMenuOpen={isMenuOpen}
          />
        )
      ))}
    </nav>
  );
};

export default memo(Navigation);