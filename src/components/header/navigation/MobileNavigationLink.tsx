
import { Link } from "react-router-dom";

interface MobileNavigationLinkProps {
  path: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

const MobileNavigationLink = ({ 
  path, 
  label, 
  icon,
  className = "" 
}: MobileNavigationLinkProps) => {
  return (
    <Link
      to={path}
      className={`flex items-center gap-2 w-full py-2 text-base font-medium text-white hover:text-secondary transition-colors focus:outline-none focus-visible:bg-white/10 focus-visible:text-secondary rounded px-2 ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={`Navigate to ${label}`}
    >
      <span className="text-current" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default MobileNavigationLink;
