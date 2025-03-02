
import HeroSection from "@/components/sections/HeroSection";
import HomeLayout from "@/components/layouts/HomeLayout";
import HomeContent from "@/components/sections/home/HomeContent";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Index = () => {
  // Page view tracking for analytics
  useEffect(() => {
    console.log("Home page viewed");
    // Future implementation: track page view in analytics
  }, []);

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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <HomeLayout>
        <HeroSection />
        <HomeContent />
      </HomeLayout>
    </>
  );
};

export default Index;
