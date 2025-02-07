
import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavigationLinkProps } from "./types/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen,
  children,
  icon
}: NavigationLinkProps) => {
  if (children) {
    return isMenuOpen ? (
      <div className="space-y-2 w-full">
        <Link
          to={path}
          className="flex items-center gap-2 w-full py-2 text-base font-medium text-white hover:text-secondary transition-colors"
        >
          {icon}
          <span>{label}</span>
        </Link>
        <div className="pl-7 space-y-2">
          {children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="block text-sm text-white/90 hover:text-white transition-colors py-1"
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
