
import { ReactNode } from 'react';

export interface NavigationItem {
  path: string;
  label: string;
  children?: Omit<NavigationItem, 'children'>[];
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
  children?: { path: string; label: string }[];
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
