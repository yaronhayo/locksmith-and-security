
import { Phone, Clock, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopBar = () => {
  const serviceAreas = [
    { path: "/service-areas/north-bergen", label: "North Bergen" },
    { path: "/service-areas/union-city", label: "Union City" },
    { path: "/service-areas/west-new-york", label: "West New York" },
    { path: "/service-areas/weehawken", label: "Weehawken" },
    { path: "/service-areas/jersey-city", label: "Jersey City" },
    { path: "/service-areas/hoboken", label: "Hoboken" },
    { path: "/service-areas/secaucus", label: "Secaucus" },
    { path: "/service-areas/guttenberg", label: "Guttenberg" }
  ];

  return (
    <div className="bg-primary text-white text-sm py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-secondary transition-colors">
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-48">
                {serviceAreas.map((area) => (
                  <DropdownMenuItem key={area.path} asChild>
                    <Link 
                      to={area.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-secondary/10 hover:text-secondary transition-colors group"
                    >
                      <MapPin className="h-3 w-3 text-secondary group-hover:text-secondary" />
                      <span>{area.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-secondary" />
              <span>24/7 Emergency Service</span>
            </div>
            <a 
              href="tel:2017482070" 
              className="flex items-center gap-1 hover:text-secondary transition-colors"
              aria-label="Call our emergency service"
            >
              <Phone className="h-4 w-4" />
              <span>(201) 748-2070</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
