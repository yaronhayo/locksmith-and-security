import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
  isMenuOpen?: boolean;
  isScrolled?: boolean;
}

const Navigation = ({ className, isMenuOpen, isScrolled }: NavigationProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/service-areas", label: "Service Areas" },
    { path: "/about", label: "About" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "hidden lg:flex items-center space-x-8",
      isMenuOpen && "fixed inset-0 top-[65px] bg-primary/95 flex flex-col items-start px-6 py-8 space-y-4 lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 lg:p-0",
      className
    )}>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={cn(
            "text-base font-medium transition-all duration-300 relative group",
            isActive(path) ? "text-secondary" : "text-gray-700 hover:text-secondary",
            isMenuOpen && "text-white lg:text-gray-700"
          )}
        >
          {label}
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
            initial={false}
            animate={isActive(path) ? { width: "100%" } : { width: "0%" }}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;