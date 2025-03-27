
import HeroSection from "@/components/sections/HeroSection";
import HomeLayout from "@/components/layouts/HomeLayout";
import HomeContent from "@/components/sections/home/HomeContent";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { SchemaScripts } from "@/components/meta/SchemaScripts";
import { BasicMetaTags } from "@/components/meta/BasicMetaTags";
import { OpenGraphTags } from "@/components/meta/OpenGraphTags";
import { TwitterTags } from "@/components/meta/TwitterTags";
import SEOHead from "@/components/meta/SEOHead";

const Index = () => {
  useEffect(() => {
    console.log("Home page viewed");
  }, []);

  const pageTitle = "Emergency Locksmith Services | North Bergen, NJ";
  const pageDescription = "24/7 locksmith services in North Bergen. Professional assistance for residential, commercial, and auto lockouts. Licensed & insured professionals.";
  const keywords = "locksmith north bergen, emergency locksmith, 24/7 locksmith, car lockout, house lockout, business lockout, key replacement";
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
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        schemas={[
          { type: 'website', data: websiteSchema },
          { type: 'organization', data: organizationSchema }
        ]}
        ogImage={imageUrl}
        noindex={false}
        nofollow={false}
        ogType="website"
        twitterCardType="summary_large_image"
        geoRegion="US-NJ"
        geoPlaceName="North Bergen"
        geoPosition="40.7795;-74.0324"
        icbm="40.7795, -74.0324"
      />
      
      <HomeLayout>
        <HeroSection />
        <HomeContent />
      </HomeLayout>
    </>
  );
};

export default Index;
