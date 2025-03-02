
import { memo } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationMenuTriggerItem from "./NavigationMenuTriggerItem";
import LocationsDropdown from "./LocationsDropdown";
import ServicesMegaMenu from "./ServicesMegaMenu";

interface DropdownNavigationLinkProps {
  path: string;
  label: string;
  isActive: boolean;
  children: { path: string; label: string }[];
}

const DropdownNavigationLink = memo(({ path, label, isActive, children }: DropdownNavigationLinkProps) => {
  // Special handling for Services mega menu
  if (label === "Services") {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTriggerItem path={path} label={label} isActive={isActive} />
            <ServicesMegaMenu />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  // For other dropdowns (like Service Areas)
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTriggerItem path={path} label={label} isActive={isActive} />
          <LocationsDropdown children={children} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
});

DropdownNavigationLink.displayName = 'DropdownNavigationLink';

export default DropdownNavigationLink;
