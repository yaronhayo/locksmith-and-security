
import { useEffect, useState } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

// Group links by category
interface LinkGroup {
  title: string;
  links: { path: string; label: string }[];
}

const Sitemap = () => {
  const [linkGroups, setLinkGroups] = useState<LinkGroup[]>([]);
  
  useEffect(() => {
    // Hardcoded routes for now to avoid import issues
    const mainLinks = [
      '/about',
      '/contact',
      '/services',
      '/reviews',
      '/faq',
      '/book-online',
      '/service-areas',
      '/privacy-policy',
      '/terms-conditions',
    ].map(path => ({
      path,
      label: path.split("/").pop()?.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ") || path,
    }));
    
    const serviceAreaLinks = [
      '/service-areas/north-bergen',
      '/service-areas/union-city',
      '/service-areas/west-new-york',
      '/service-areas/guttenberg',
      '/service-areas/weehawken',
      '/service-areas/jersey-city',
      '/service-areas/hoboken',
      '/service-areas/secaucus',
    ].map(path => ({
      path,
      label: path.split("/").pop()?.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ") || path,
    }));
    
    // Service categories and their services
    const serviceCategories = {
      'emergency-locksmith': [
        '/services/emergency-locksmith/car-lockout',
        '/services/emergency-locksmith/house-lockout',
        '/services/emergency-locksmith/business-lockout',
        '/services/emergency-locksmith/storage-unit-lockout',
      ],
      'residential-locksmith': [
        '/services/residential-locksmith/lock-replacement',
        '/services/residential-locksmith/lock-rekey',
        '/services/residential-locksmith/lock-repair',
        '/services/residential-locksmith/gate-locks',
      ],
      'commercial-locksmith': [
        '/services/commercial-locksmith/lock-replacement',
        '/services/commercial-locksmith/lock-rekey',
        '/services/commercial-locksmith/emergency-exit-device',
        '/services/commercial-locksmith/master-key',
        '/services/commercial-locksmith/access-control',
      ],
      'auto-locksmith': [
        '/services/auto-locksmith/car-key-replacement',
        '/services/auto-locksmith/key-fob-programming',
        '/services/auto-locksmith/car-key-duplicate',
        '/services/auto-locksmith/car-key-cutting',
        '/services/auto-locksmith/ignition-lock-cylinder',
      ],
    };
    
    // Convert service categories to link groups
    const serviceGroups = Object.entries(serviceCategories).map(([category, paths]) => ({
      title: category.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ") + " Services",
      links: paths.map(path => ({
        path,
        label: path.split("/").pop()?.split("-").map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ") || path,
      })),
    }));
    
    // Set all link groups
    setLinkGroups([
      { title: "Main Pages", links: mainLinks },
      { title: "Service Areas", links: serviceAreaLinks },
      ...serviceGroups,
    ]);
    
    console.log("Sitemap page rendered with static route data");
  }, []);
  
  return (
    <PageLayout
      title="Sitemap | Locksmith & Security LLC"
      description="Browse our complete sitemap to find all pages on our site. Navigate to information about locksmith services and service areas."
      heroTitle="Website Sitemap"
      heroDescription="Find all the pages on our website organized by category"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="sr-only">Main Navigation</h2>
            <Link to="/" className="text-primary hover:text-primary/90 font-bold text-xl" aria-label="Home page">
              Home
            </Link>
          </div>
          
          {linkGroups.map((group, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">{group.title}</h2>
              <Separator aria-hidden="true" />
              <ul className="space-y-2" role="list">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-primary/80 hover:text-primary transition-colors"
                      aria-label={`Navigate to ${link.label} page`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">XML Sitemap</h2>
          <p className="mb-4">
            For search engines, an XML version of our sitemap is available at:
          </p>
          <a 
            href="/sitemap.xml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
            aria-label="View XML sitemap in new tab"
          >
            sitemap.xml
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sitemap;
