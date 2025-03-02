
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const SitemapPage = () => {
  return (
    <PageLayout
      title="Sitemap | 247 Locksmith & Security"
      description="Browse the complete sitemap of our website for easy navigation of all our locksmith services, service areas, and informational pages."
      canonicalUrl="/sitemap"
      keywords="sitemap, locksmith services, service areas, emergency locksmith, residential locksmith, commercial locksmith, auto locksmith"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Website Sitemap
        </motion.h1>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Main Pages */}
          <SitemapSection 
            title="Main Pages" 
            items={[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Service Areas", path: "/service-areas" },
              { name: "FAQ", path: "/faq" },
              { name: "Reviews", path: "/reviews" },
              { name: "Contact", path: "/contact" },
              { name: "Book Online", path: "/book-online" },
            ]} 
          />
          
          {/* Emergency Locksmith */}
          <SitemapSection 
            title="Emergency Locksmith" 
            items={[
              { name: "Emergency Locksmith Services", path: "/services/emergency-locksmith" },
              { name: "Car Lockout", path: "/services/emergency-locksmith/car-lockout" },
              { name: "House Lockout", path: "/services/emergency-locksmith/house-lockout" },
              { name: "Business Lockout", path: "/services/emergency-locksmith/business-lockout" },
              { name: "Storage Unit Lockout", path: "/services/emergency-locksmith/storage-unit-lockout" },
            ]} 
          />
          
          {/* Residential Locksmith */}
          <SitemapSection 
            title="Residential Locksmith" 
            items={[
              { name: "Residential Locksmith Services", path: "/services/residential-locksmith" },
              { name: "Lock Replacement", path: "/services/residential-locksmith/lock-replacement" },
              { name: "Lock Rekey", path: "/services/residential-locksmith/lock-rekey" },
              { name: "Lock Repair", path: "/services/residential-locksmith/lock-repair" },
              { name: "Gate Locks", path: "/services/residential-locksmith/gate-locks" },
            ]} 
          />
          
          {/* Commercial Locksmith */}
          <SitemapSection 
            title="Commercial Locksmith" 
            items={[
              { name: "Commercial Locksmith Services", path: "/services/commercial-locksmith" },
              { name: "Commercial Lock Replacement", path: "/services/commercial-locksmith/lock-replacement" },
              { name: "Commercial Lock Rekey", path: "/services/commercial-locksmith/lock-rekey" },
              { name: "Emergency Exit Device", path: "/services/commercial-locksmith/emergency-exit-device" },
              { name: "Master Key Systems", path: "/services/commercial-locksmith/master-key" },
              { name: "Access Control", path: "/services/commercial-locksmith/access-control" },
            ]} 
          />
          
          {/* Auto Locksmith */}
          <SitemapSection 
            title="Auto Locksmith" 
            items={[
              { name: "Auto Locksmith Services", path: "/services/auto-locksmith" },
              { name: "Car Key Replacement", path: "/services/auto-locksmith/car-key-replacement" },
              { name: "Key Fob Programming", path: "/services/auto-locksmith/key-fob-programming" },
              { name: "Car Key Duplicate", path: "/services/auto-locksmith/car-key-duplicate" },
              { name: "Car Key Cutting", path: "/services/auto-locksmith/car-key-cutting" },
              { name: "Ignition Lock Cylinder", path: "/services/auto-locksmith/ignition-lock-cylinder" },
            ]} 
          />
          
          {/* Service Areas */}
          <SitemapSection 
            title="Service Areas" 
            items={[
              { name: "All Service Areas", path: "/service-areas" },
              { name: "North Bergen", path: "/service-areas/north-bergen" },
              { name: "Jersey City", path: "/service-areas/jersey-city" },
              { name: "Hoboken", path: "/service-areas/hoboken" },
              { name: "Weehawken", path: "/service-areas/weehawken" },
              { name: "Union City", path: "/service-areas/union-city" },
              { name: "West New York", path: "/service-areas/west-new-york" },
              { name: "Secaucus", path: "/service-areas/secaucus" },
              { name: "Guttenberg", path: "/service-areas/guttenberg" },
            ]} 
          />
          
          {/* Legal Pages */}
          <SitemapSection 
            title="Legal & Information" 
            items={[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Conditions", path: "/terms-conditions" },
              { name: "Sitemap", path: "/sitemap" },
            ]} 
          />
        </motion.div>
      </div>
    </PageLayout>
  );
};

interface SitemapSectionProps {
  title: string;
  items: { name: string; path: string }[];
}

const SitemapSection = ({ title, items }: SitemapSectionProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <nav aria-label={`${title} navigation`}>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
};

export default SitemapPage;
