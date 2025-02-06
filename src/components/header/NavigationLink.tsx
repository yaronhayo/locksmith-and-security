import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavigationLinkProps } from "./types/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen,
  children 
}: NavigationLinkProps) => {
  if (children) {
    return isMenuOpen ? (
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

export default NavigationLink;