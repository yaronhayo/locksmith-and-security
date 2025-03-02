
import { memo } from "react";
import { NavigationLinkProps } from "./types/navigation";
import MobileNavigationLink from "./navigation/MobileNavigationLink";
import DesktopNavigationLink from "./navigation/DesktopNavigationLink";
import DropdownNavigationLink from "./navigation/DropdownNavigationLink";

/**
 * NavigationLink component that handles different display modes based on props
 * Renders appropriate link variant for mobile or desktop views
 */
const NavigationLink = memo(({ 
  path, 
  label, 
  isActive, 
  isMenuOpen,
  children,
  icon,
  className
}: NavigationLinkProps) => {
  // In mobile menu, just show the main link without children
  if (isMenuOpen) {
    return <MobileNavigationLink path={path} label={label} icon={icon} className={className} />;
  }

  // For desktop, show dropdown if there are children
  if (children) {
    return (
      <DropdownNavigationLink 
        path={path} 
        label={label} 
        isActive={isActive} 
        children={children} 
      />
    );
  }

  // Regular link for desktop
  return (
    <DesktopNavigationLink 
      path={path} 
      label={label} 
      isActive={isActive} 
      className={className} 
    />
  );
});

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
