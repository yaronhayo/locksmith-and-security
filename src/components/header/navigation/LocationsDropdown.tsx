
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import {
  NavigationMenuLink,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

interface LocationsDropdownProps {
  children: { path: string; label: string }[];
}

const LocationsDropdown = ({ children }: LocationsDropdownProps) => {
  return (
    <NavigationMenuContent>
      <div className="grid w-[400px] gap-3 p-4 bg-white">
        {children.map((child) => (
          <NavigationMenuLink
            key={child.path}
            asChild
          >
            <Link
              to={child.path}
              className="flex items-center gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/10 hover:text-secondary focus:bg-accent focus:text-accent-foreground group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <MapPin className="w-4 h-4 text-gray-500 group-hover:text-secondary transition-colors" />
              <div className="text-sm font-medium leading-none">{child.label}</div>
            </Link>
          </NavigationMenuLink>
        ))}
      </div>
    </NavigationMenuContent>
  );
};

export default LocationsDropdown;
