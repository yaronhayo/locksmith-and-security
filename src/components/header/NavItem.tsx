
import { NavItemProps } from './types/navigation';
import NavigationLink from './NavigationLink';

/**
 * Individual navigation item component
 * Responsible for rendering a single navigation item
 */
const NavItem = ({ item, isActive, isMenuOpen, getIcon }: NavItemProps) => {
  const { path, label, children, className } = item;
  
  return (
    <div className="w-full">
      <NavigationLink
        path={path}
        label={label}
        isActive={isActive}
        isMenuOpen={isMenuOpen}
        children={children}
        icon={getIcon(label)}
        className={className}
      />
    </div>
  );
};

export default NavItem;
