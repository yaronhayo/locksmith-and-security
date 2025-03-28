
export type NavItem = {
  path: string;
  label: string;
  showMobileOnly?: boolean;
  children?: { path: string; label: string; children?: { path: string; label: string }[] }[];
};

export interface NavigationProps {
  className?: string;
  isMenuOpen?: boolean;
  isScrolled?: boolean;
}

export interface NavigationLinkProps {
  path: string;
  label: string;
  isActive: boolean;
  isMenuOpen: boolean;
  children?: { path: string; label: string }[];
  icon?: React.ReactNode;
}

export interface NavItemProps {
  item: NavItem;
  isActive: boolean;
  isMenuOpen: boolean;
  getIcon: (label: string) => React.ReactNode;
}

export interface MobileMenuActionsProps {
  isMenuOpen: boolean;
}
