
import { memo } from "react";
import { NavigationLinkProps } from "./types/navigation";
import MobileNavigationLink from "./navigation/MobileNavigationLink";
import DesktopNavigationLink from "./navigation/DesktopNavigationLink";
import DropdownNavigationLink from "./navigation/DropdownNavigationLink";

const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen,
  children,
  icon
}: NavigationLinkProps) => {
  // In mobile menu, always show the mobile link
  if (isMenuOpen) {
    return <MobileNavigationLink path={path} label={label} icon={icon} />;
  }

  // For desktop, show dropdown if there are children
  if (children) {
    return <DropdownNavigationLink path={path} label={label} isActive={isActive} children={children} />;
  }

  // Regular link for desktop
  return (
    <DesktopNavigationLink path={path} label={label} isActive={isActive} />
  );
});

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
