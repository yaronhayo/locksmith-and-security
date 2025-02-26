
import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavigationLinkProps } from "./types/navigation";
import { MapPin, Key, Car, Building2, Home, Star, ArrowRight } from "lucide-react";
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
    // Special handling for Services mega menu
    if (label === "Services") {
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                <div className="w-[850px] p-6 bg-white">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <Key className="h-5 w-5" />
                        <h3 className="font-semibold">Emergency</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/services/emergency-locksmith/car-lockout"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Car Lockout</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/emergency-locksmith/house-lockout"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>House Lockout</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/emergency-locksmith/business-lockout"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Business Lockout</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/emergency-locksmith/storage-unit-lockout"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Storage Unit Lockout</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <Home className="h-5 w-5" />
                        <h3 className="font-semibold">Residential</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/services/residential-locksmith/lock-replacement"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Lock Replacement</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/residential-locksmith/lock-rekey"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Lock Rekey</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/residential-locksmith/lock-repair"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Lock Repair</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/residential-locksmith/gate-locks"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Gate Locks</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <Building2 className="h-5 w-5" />
                        <h3 className="font-semibold">Commercial</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/services/commercial-locksmith/lock-replacement"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Lock Replacement</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/commercial-locksmith/lock-rekey"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Lock Rekey</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/commercial-locksmith/emergency-exit-device"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Emergency Exit Device</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/commercial-locksmith/master-key"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Master Key Systems</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/commercial-locksmith/access-control"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Access Control</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <Car className="h-5 w-5" />
                        <h3 className="font-semibold">Automotive</h3>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/services/auto-locksmith/car-key-replacement"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Car Key Replacement</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/auto-locksmith/key-fob-programming"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Key Fob Programming</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/auto-locksmith/car-key-duplicate"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Car Key Duplicate</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/auto-locksmith/car-key-cutting"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Car Key Cutting</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services/auto-locksmith/ignition-lock-cylinder"
                            className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
                          >
                            <span>Ignition Lock Cylinder</span>
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
    }

    // For other dropdowns (like Service Areas)
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              to={path}
              onClick={(e) => {
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
