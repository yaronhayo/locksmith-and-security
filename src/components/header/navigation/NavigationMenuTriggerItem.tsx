
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

interface NavigationMenuTriggerItemProps {
  path: string;
  label: string;
  isActive: boolean;
}

const NavigationMenuTriggerItem = ({ path, label, isActive }: NavigationMenuTriggerItemProps) => {
  return (
    <Link 
      to={path}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="outline-none"
      aria-current={isActive ? "page" : undefined}
    >
      <NavigationMenuTrigger
        className={cn(
          "text-base font-medium transition-colors duration-300 relative px-0 bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md",
          isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
        )}
      >
        <div className="relative">
          {label}
          {isActive ? (
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary" />
          ) : (
            <motion.div 
              className="absolute -bottom-2 left-0 h-0.5 bg-secondary"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
      </NavigationMenuTrigger>
    </Link>
  );
};

export default NavigationMenuTriggerItem;
