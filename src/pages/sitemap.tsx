
import { useEffect, useState } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { generateSitemapXml } from '@/utils/sitemapGenerator';
import { mainRoutes } from '@/routes/mainRoutes';
import { serviceRoutes } from '@/routes/serviceRoutes';
import { serviceAreaRoutes } from '@/routes/serviceAreaRoutes';

// Group links by category
interface LinkGroup {
  title: string;
  links: { path: string; label: string }[];
}

const Sitemap = () => {
  const [linkGroups, setLinkGroups] = useState<LinkGroup[]>([]);
  
  useEffect(() => {
    // Process routes into user-friendly groups
    const mainLinks = mainRoutes
      .filter(route => route.path !== "*" && route.path !== "/")
      .map(route => ({
        path: route.path,
        label: route.path.split("/").pop()?.split("-").map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ") || route.path,
      }));
    
    const serviceAreaLinks = serviceAreaRoutes
      .filter(route => !route.path.includes(":") && route.path !== "/service-areas")
      .map(route => ({
        path: route.path,
        label: route.path.split("/").pop()?.split("-").map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ") || route.path,
      }));
    
    // Group service routes by category
    const serviceCategories: Record<string, { path: string; label: string }[]> = {};
    
    serviceRoutes
      .filter(route => !route.path.includes(":"))
      .forEach(route => {
        const parts = route.path.split("/").filter(Boolean);
        
        if (parts.length === 1) return; // Skip the main services page
        
        const category = parts[1];
        const serviceLink = {
          path: route.path,
          label: parts[parts.length - 1]?.split("-").map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(" ") || route.path,
        };
        
        if (!serviceCategories[category]) {
          serviceCategories[category] = [];
        }
        
        serviceCategories[category].push(serviceLink);
      });
    
    // Convert service categories to link groups
    const serviceGroups = Object.entries(serviceCategories).map(([category, links]) => ({
      title: category.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ") + " Services",
      links,
    }));
    
    // Set all link groups
    setLinkGroups([
      { title: "Main Pages", links: mainLinks },
      { title: "Service Areas", links: serviceAreaLinks },
      ...serviceGroups,
    ]);
    
    // Generate XML sitemap and log it
    console.log("Dynamic sitemap generated");
  }, []);
  
  return (
    <PageLayout
      title="Sitemap | Locksmith & Security LLC"
      description="Browse our complete sitemap to find all pages on our site. Navigate to information about our locksmith services, service areas, and more."
      heroTitle="Website Sitemap"
      heroDescription="Find all the pages on our website organized by category"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/" className="text-primary hover:text-primary/90 font-bold text-xl">
              Home
            </Link>
          </div>
          
          {linkGroups.map((group, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">{group.title}</h2>
              <Separator />
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-primary/80 hover:text-primary transition-colors"
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
          >
            sitemap.xml
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sitemap;
