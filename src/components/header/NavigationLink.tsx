
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
              className={cn(
                "text-base font-medium transition-colors duration-300 px-4 py-2 inline-flex items-center gap-1",
                isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
              )}
            >
              {label}
            </Link>
            <NavigationMenuTrigger
              className={cn(
                "text-base font-medium transition-colors duration-300 -ml-2",
                isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
              )}
            >
              Menu
            </NavigationMenuTrigger>
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
        "text-base font-medium transition-colors duration-300 relative group no-underline",
        isActive ? "text-secondary" : "text-gray-700 hover:text-secondary",
        isMenuOpen && "text-white hover:text-secondary w-full flex items-center gap-2 py-2"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {isMenuOpen && icon}
      {label}
      {!isMenuOpen && (
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-secondary"
          initial={{ width: isActive ? "100%" : "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}
    </Link>
  );
});

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
