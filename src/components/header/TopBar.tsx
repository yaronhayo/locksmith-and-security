import { Clock, MapPin, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceAreas = [
  { name: "North Bergen", slug: "north-bergen" },
  { name: "Jersey City", slug: "jersey-city" },
  { name: "Union City", slug: "union-city" },
  { name: "West New York", slug: "west-new-york" },
  { name: "Secaucus", slug: "secaucus" },
  { name: "Weehawken", slug: "weehawken" },
  { name: "Hoboken", slug: "hoboken" },
  { name: "Guttenberg", slug: "guttenberg" }
];

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300 ease-in-out group">
              <MapPin className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm">North Bergen, NJ</span>
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white">
              {serviceAreas.map((area) => (
                <DropdownMenuItem 
                  key={area.slug}
                  className="transition-all duration-300 hover:bg-[#D3E4FD] hover:text-primary hover:translate-x-1"
                >
                  <a 
                    href={`/service-areas/${area.slug}`}
                    className="w-full"
                  >
                    {area.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 group hover:text-secondary transition-colors duration-300 ease-in-out">
              <Clock className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
            <span className="text-sm hover:text-secondary transition-colors duration-300 ease-in-out cursor-pointer">
              NJ DCA License #13VH13153100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;