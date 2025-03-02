import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import { useMemo } from "react";

interface BreadcrumbsProps {
  className?: string;
  baseUrl?: string;
  items?: Array<{name: string, path: string}>;
  showSchema?: boolean;
}

const pathNameMap: Record<string, string> = {
  "services": "Services",
  "residential-locksmith": "Residential",
  "commercial-locksmith": "Commercial",
  "auto-locksmith": "Automotive",
  "emergency-locksmith": "Emergency",
  "about": "About Us",
  "contact": "Contact",
  "book-online": "Book Online",
  "reviews": "Reviews",
  "service-areas": "Service Areas",
  "north-bergen": "North Bergen",
  "jersey-city": "Jersey City",
  "hoboken": "Hoboken",
  "weehawken": "Weehawken",
  "west-new-york": "West New York",
  "secaucus": "Secaucus",
  "union-city": "Union City",
  "guttenberg": "Guttenberg",
  "lock-replacement": "Lock Replacement",
  "lock-rekey": "Lock Rekeying",
  "house-lockout": "House Lockout",
  "car-lockout": "Car Lockout",
  "business-lockout": "Business Lockout",
  "storage-unit-lockout": "Storage Lockout",
  "lock-repair": "Lock Repair",
  "gate-locks": "Gate Locks",
  "access-control": "Access Control",
  "emergency-exit-device": "Exit Devices",
  "master-key": "Master Key Systems",
  "car-key-replacement": "Car Key Replacement",
  "car-key-duplicate": "Car Key Duplication",
  "car-key-cutting": "Car Key Cutting",
  "key-fob-programming": "Key Fob Programming",
  "ignition-lock-cylinder": "Ignition Repair",
  "faq": "FAQ",
  "privacy-policy": "Privacy Policy",
  "terms-conditions": "Terms & Conditions",
  "thank-you": "Thank You",
  "404": "Page Not Found",
  "sitemap": "Sitemap"
};

const Breadcrumbs = ({ className, baseUrl = "https://247locksmithandsecurity.com", items, showSchema = false }: BreadcrumbsProps) => {
  const location = useLocation();
  
  const breadcrumbs = useMemo(() => {
    if (items && items.length > 0) {
      return items;
    }
    
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    return pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      
      const name = pathNameMap[segment] || 
        segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      
      return { name, path };
    });
  }, [location.pathname, items]);

  if (breadcrumbs.length === 0 || location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      className={cn("flex items-center space-x-1 text-sm", className)} 
      aria-label="Breadcrumb"
    >
      <Link to="/" className="flex items-center text-gray-500 hover:text-primary transition-colors">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
          <Link
            to={crumb.path}
            className={cn(
              "ml-1 hover:text-primary transition-colors",
              index === breadcrumbs.length - 1 
                ? "font-medium text-primary" 
                : "text-gray-500"
            )}
            aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
          >
            {crumb.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
