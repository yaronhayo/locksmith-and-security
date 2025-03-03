
import { NavItemProps } from './types/navigation';
import NavigationLink from './NavigationLink';

const NavItem = ({ item, isActive, isMenuOpen, getIcon }: NavItemProps) => {
  const { path, label, children } = item;
  
  return (
    <div className="w-full">
      <NavigationLink
        path={path}
        label={label}
        isActive={isActive}
        isMenuOpen={isMenuOpen}
        children={children}
        icon={getIcon(label)}
      />
    </div>
  );
};

export default NavItem;
