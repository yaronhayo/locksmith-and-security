
import HeroSection from "@/components/sections/HeroSection";
import HomeLayout from "@/components/layouts/HomeLayout";
import HomeContent from "@/components/sections/home/HomeContent";
import { useEffect } from "react";
import MetaTags from "@/components/layouts/MetaTags";

const Index = () => {
  useEffect(() => {
    console.log("Home page viewed");
  }, []);

  const pageTitle = "Expert Locksmith Solutions | Trusted Security Professionals";
  const pageDescription = "Transform your security with professional locksmith expertise. From advanced home security to modern business solutions, we deliver peace of mind with guaranteed results.";
  const keywords = "professional locksmith, residential locksmith, commercial locksmith, auto locksmith, car lockout, lockout service, key replacement, security solutions";
  const canonicalUrl = "https://247locksmithandsecurity.com/";
  const imageUrl = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png";
  const baseUrl = "https://247locksmithandsecurity.com";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Locksmith & Security LLC",
    "url": "https://247locksmithandsecurity.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://247locksmithandsecurity.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
    "url": "https://247locksmithandsecurity.com",
    "telephone": "+12017482070",
    "priceRange": "$$", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7116 Bergenline Ave",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7795",
      "longitude": "-74.0324"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/247locksmithandsecurity/",
      "https://twitter.com/LocksmithSecurity",
      "https://www.instagram.com/247locksmithandsecurity/",
      "https://www.yelp.com/biz/locksmith-and-security-north-bergen"
    ]
  };

  return (
    <>
      <MetaTags 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={imageUrl}
        baseUrl={baseUrl}
        schemas={[
          { type: 'website', data: websiteSchema },
          { type: 'organization', data: organizationSchema }
        ]}
      />
      
      <HomeLayout>
        <HeroSection />
        <HomeContent />
      </HomeLayout>
    </>
  );
};

export default Index;
