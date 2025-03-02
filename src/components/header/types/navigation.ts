
import { ReactNode } from 'react';

export interface NavigationItem {
  path: string;
  label: string;
  children?: NavigationItem[]; // Changed from Omit<NavigationItem, 'children'>[] to allow nested children
  showMobileOnly?: boolean;
  className?: string;
}

export interface NavigationProps {
  className?: string;
  isMenuOpen?: boolean;
  isScrolled?: boolean;
}

export interface NavigationLinkProps {
  path: string;
  label: string;
  isActive?: boolean;
  isMenuOpen?: boolean;
  children?: NavigationItem[]; // Updated here too
  icon?: ReactNode;
  className?: string;
}

export interface NavItemProps {
  item: NavigationItem;
  isActive: boolean;
  isMenuOpen: boolean;
  getIcon: (label: string) => ReactNode;
}

// Add the missing MobileMenuActionsProps interface
export interface MobileMenuActionsProps {
  isMenuOpen: boolean;
}

// Fix the interface name - this was NavItem in the import but NavigationItem in the actual file
export type NavItem = NavigationItem;
