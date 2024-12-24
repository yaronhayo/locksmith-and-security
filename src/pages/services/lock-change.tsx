import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Lock } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Lock Change Service in North Bergen",
  "description": "Expert lock change services for homes and businesses. Licensed locksmiths, 24/7 availability, and competitive rates in North Bergen.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "telephone": "+15513037874",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "geoRadius": "30mi"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lock Change Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Lock Change",
          "description": "Professional lock change service for homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Lock Change",
          "description": "Expert lock change solutions for businesses"
        }
      }
    ]
  }
};

const LockChangePage = () => {
  return (
    <ServiceLayout
      title="Professional Lock Change Service in North Bergen"
      description="Expert lock change services for homes and businesses. Licensed locksmiths, 24/7 availability, and competitive rates in North Bergen."
      icon={Lock}
      schema={schema}
      service="Lock Change"
      callToAction="Need to Change Your Locks?"
      benefits={[
        "24/7 Emergency Service Available",
        "Licensed & Insured Locksmiths",
        "All Types of Locks Serviced",
        "Competitive Pricing",
        "Fast Response Time",
        "Professional Installation",
        "High-Security Lock Options",
        "100% Satisfaction Guaranteed"
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-4">Professional Lock Change Services</h2>
        <p className="mb-6">
          Our professional lock change service provides comprehensive security solutions for both residential and commercial properties. Whether you've moved into a new home, lost your keys, or want to upgrade your security, our expert locksmiths are here to help.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Lock Change Services Include:</h3>
        <ul className="space-y-2 mb-6">
          <li>Residential lock changes</li>
          <li>Commercial lock installations</li>
          <li>High-security lock upgrades</li>
          <li>Smart lock installation</li>
          <li>Emergency lock replacement</li>
          <li>Master key system setup</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">When Should You Change Your Locks?</h3>
        <ul className="space-y-2 mb-6">
          <li>After moving into a new home</li>
          <li>When keys are lost or stolen</li>
          <li>Following a break-in attempt</li>
          <li>When locks show signs of wear</li>
          <li>To upgrade security</li>
          <li>After tenant turnover</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Types of Locks We Install</h3>
        <ul className="space-y-2 mb-6">
          <li>Deadbolts</li>
          <li>Smart locks</li>
          <li>High-security locks</li>
          <li>Keypad locks</li>
          <li>Mortise locks</li>
          <li>Euro-profile cylinders</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Why Choose Our Lock Change Service?</h3>
          <p>
            With years of experience in the locksmith industry, we provide reliable, professional, and efficient lock change services. Our team of licensed locksmiths ensures that your new locks are properly installed and functioning correctly, giving you peace of mind about your security.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LockChangePage;