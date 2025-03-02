
import { Link } from "react-router-dom";
import { Key, Home, Building2, Car, ArrowRight } from "lucide-react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";

// Service category definitions
const serviceCategories = [
  {
    title: "Emergency",
    icon: Key,
    items: [
      { path: "/services/emergency-locksmith/car-lockout", label: "Car Lockout" },
      { path: "/services/emergency-locksmith/house-lockout", label: "House Lockout" },
      { path: "/services/emergency-locksmith/business-lockout", label: "Business Lockout" },
      { path: "/services/emergency-locksmith/storage-unit-lockout", label: "Storage Unit Lockout" }
    ]
  },
  {
    title: "Residential",
    icon: Home,
    items: [
      { path: "/services/residential-locksmith/lock-replacement", label: "Lock Replacement" },
      { path: "/services/residential-locksmith/lock-rekey", label: "Lock Rekey" },
      { path: "/services/residential-locksmith/lock-repair", label: "Lock Repair" },
      { path: "/services/residential-locksmith/gate-locks", label: "Gate Locks" }
    ]
  },
  {
    title: "Commercial",
    icon: Building2,
    items: [
      { path: "/services/commercial-locksmith/lock-replacement", label: "Commercial Lock Replacement" },
      { path: "/services/commercial-locksmith/lock-rekey", label: "Commercial Lock Rekey" },
      { path: "/services/commercial-locksmith/emergency-exit-device", label: "Emergency Exit Device" },
      { path: "/services/commercial-locksmith/master-key", label: "Master Key Systems" },
      { path: "/services/commercial-locksmith/access-control", label: "Access Control" }
    ]
  },
  {
    title: "Automotive",
    icon: Car,
    items: [
      { path: "/services/auto-locksmith/car-key-replacement", label: "Car Key Replacement" },
      { path: "/services/auto-locksmith/key-fob-programming", label: "Key Fob Programming" },
      { path: "/services/auto-locksmith/car-key-duplicate", label: "Car Key Duplicate" },
      { path: "/services/auto-locksmith/car-key-cutting", label: "Car Key Cutting" },
      { path: "/services/auto-locksmith/ignition-lock-cylinder", label: "Ignition Lock Cylinder" }
    ]
  }
];

const ServicesMegaMenu = () => {
  return (
    <NavigationMenuContent>
      <div className="w-[850px] p-6 bg-white">
        <div className="grid grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => (
            <ServiceCategory 
              key={index}
              title={category.title} 
              icon={<category.icon className="h-4 w-4" />}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </NavigationMenuContent>
  );
};

interface ServiceCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: { path: string; label: string }[];
}

const ServiceCategory = ({ title, icon, items }: ServiceCategoryProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-secondary border-b border-gray-100 pb-2">
        {icon}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path}
              className="text-sm text-gray-600 hover:text-secondary flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span>{item.label}</span>
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesMegaMenu;
