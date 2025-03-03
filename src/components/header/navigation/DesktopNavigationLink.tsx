
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DesktopNavigationLinkProps {
  path: string;
  label: string;
  isActive: boolean;
}

const DesktopNavigationLink = ({ path, label, isActive }: DesktopNavigationLinkProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "text-base font-medium transition-colors duration-300 relative no-underline",
        isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
    </Link>
  );
};

export default DesktopNavigationLink;
