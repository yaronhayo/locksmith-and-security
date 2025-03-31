
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Home } from "lucide-react";
import { createBreadcrumbSchema } from "../meta/schema/BreadcrumbSchema";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface EnhancedBreadcrumbsProps {
  baseUrl?: string;
  includeSchema?: boolean;
  customPaths?: Record<string, string>;
}

const defaultPathNameMap: Record<string, string> = {
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

const EnhancedBreadcrumbs = ({ 
  baseUrl = "https://247locksmithandsecurity.com", 
  includeSchema = true,
  customPaths = {}
}: EnhancedBreadcrumbsProps) => {
  const location = useLocation();
  const pathNameMap = { ...defaultPathNameMap, ...customPaths };
  
  const breadcrumbs = useMemo(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    return pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      
      const name = pathNameMap[segment] || 
        segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      
      return { name, path };
    });
  }, [location.pathname, pathNameMap]);
  
  // Generate schema breadcrumbs with home page
  const schemaBreadcrumbs = useMemo(() => {
    const homeBreadcrumb = { name: "Home", item: "/" };
    
    return [
      homeBreadcrumb,
      ...breadcrumbs.map(crumb => ({ name: crumb.name, item: crumb.path }))
    ];
  }, [breadcrumbs]);

  // If we're on the home page, don't show breadcrumbs
  if (breadcrumbs.length === 0) {
    return null;
  }

  const breadcrumbSchema = includeSchema ? createBreadcrumbSchema({ 
    breadcrumbs: schemaBreadcrumbs,
    baseUrl
  }) : null;

  return (
    <>
      {includeSchema && breadcrumbSchema && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema.data)
          }}
        />
      )}
      
      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path}>{crumb.name}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default EnhancedBreadcrumbs;
