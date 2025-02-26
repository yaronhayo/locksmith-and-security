
import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavigationLinkProps } from "./types/navigation";
import { MapPin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen,
  children,
  icon
}: NavigationLinkProps) => {
  // In mobile menu, just show the main link without children
  if (isMenuOpen) {
    return (
      <Link
        to={path}
        className="flex items-center gap-2 w-full py-2 text-base font-medium text-white hover:text-secondary transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {icon}
        <span>{label}</span>
      </Link>
    );
  }

  // For desktop, show dropdown if there are children
  if (children) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              to={path}
              onClick={(e) => {
                // Don't prevent default - allow navigation to overview page
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <NavigationMenuTrigger
                className={cn(
                  "text-base font-medium transition-colors duration-300 relative px-0 bg-transparent hover:bg-transparent focus:bg-transparent",
                  isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
                )}
              >
                <span className="relative inline-flex">
                  {label}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-white">
                {children.map((child) => (
                  <NavigationMenuLink
                    key={child.path}
                    asChild
                  >
                    <Link
                      to={child.path}
                      className="flex items-center gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/10 hover:text-secondary focus:bg-accent focus:text-accent-foreground group"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {label === "Service Areas" && (
                        <MapPin className="w-4 h-4 text-gray-500 group-hover:text-secondary transition-colors" />
                      )}
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

  // Regular link for both mobile and desktop
  return (
    <Link
      to={path}
      className={cn(
        "text-base font-medium transition-colors duration-300 relative no-underline",
        isActive ? "text-secondary" : "text-gray-700 hover:text-secondary",
        isMenuOpen && "text-white hover:text-secondary w-full flex items-center gap-2 py-2"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {isMenuOpen && icon}
      <span className="relative inline-flex">
        {label}
        {!isMenuOpen && (
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary"
            initial={{ scaleX: isActive ? 1 : 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </span>
    </Link>
  );
});

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
