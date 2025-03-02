
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
