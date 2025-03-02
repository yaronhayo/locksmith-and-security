
import { Link } from "react-router-dom";

interface MobileNavigationLinkProps {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const MobileNavigationLink = ({ path, label, icon }: MobileNavigationLinkProps) => {
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
};

export default MobileNavigationLink;
