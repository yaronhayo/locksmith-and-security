
import HeroSection from "@/components/sections/HeroSection";
import HomeLayout from "@/components/layouts/HomeLayout";
import HomeContent from "@/components/sections/home/HomeContent";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import { BasicMetaTags } from "@/components/meta/BasicMetaTags";
import { OpenGraphTags } from "@/components/meta/OpenGraphTags";
import { TwitterTags } from "@/components/meta/TwitterTags";
import { createSiteNavigationSchema } from "@/components/meta/schema/SiteNavigationSchema";
import { trackComponentRender } from "@/utils/performanceMonitoring";

const Index = () => {
  const finishRenderTracking = trackComponentRender('HomePage');
  
  // Page view tracking for analytics
  useEffect(() => {
    console.log("Home page viewed");
    finishRenderTracking();
    // Future implementation: track page view in analytics
  }, []);

  const pageTitle = "24/7 Locksmith & Security LLC | Trusted Emergency Locksmith Services";
  const pageDescription = "Professional locksmith services available 24/7 for residential, commercial & automotive needs. Licensed & insured experts for all your security solutions.";
  const keywords = "locksmith, emergency locksmith, 24/7 locksmith, residential locksmith, commercial locksmith, auto locksmith, car lockout, lockout service";
  const canonicalUrl = "https://247locksmithandsecurity.com/";
  const imageUrl = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png";
  const baseUrl = "https://247locksmithandsecurity.com";

  // Website schema data (WebSite schema)
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
  
  // Organization schema
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
  
  // Navigation schema for main navigation
  const navigationSchema = createSiteNavigationSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Residential Locksmith", url: "/services/residential-locksmith" },
      { name: "Commercial Locksmith", url: "/services/commercial-locksmith" },
      { name: "Auto Locksmith", url: "/services/auto-locksmith" },
      { name: "Emergency Locksmith", url: "/services/emergency-locksmith" },
      { name: "Service Areas", url: "/service-areas" },
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" },
      { name: "Book Online", url: "/book-online" }
    ]
  });

  return (
    <>
      <BasicMetaTags 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        noindex={false}
        nofollow={false}
        canonicalUrl={canonicalUrl}
        modifiedDate={new Date().toISOString()}
      />
      
      <OpenGraphTags 
        title={pageTitle}
        description={pageDescription}
        image={imageUrl}
        url={canonicalUrl}
        modifiedDate={new Date().toISOString()}
        baseUrl={baseUrl}
        type="website"
      />
      
      <TwitterTags 
        title={pageTitle}
        description={pageDescription}
        image={imageUrl}
        baseUrl={baseUrl}
        cardType="summary_large_image"
      />
      
      <SchemaScripts 
        schemas={[
          { type: 'website', data: websiteSchema },
          { type: 'organization', data: organizationSchema },
          navigationSchema
        ]} 
      />
      
      {/* Extra canonical tag to ensure proper indexing */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        {/* Preconnect to important domains to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Help browsers prioritize which resources to load first */}
        <meta httpEquiv="Priority" content="High" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </Helmet>
      
      <HomeLayout>
        <HeroSection />
        <HomeContent />
      </HomeLayout>
    </>
  );
};

export default Index;
