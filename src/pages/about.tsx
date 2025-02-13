
import PageLayout from "@/components/layouts/PageLayout";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import CompanyFeatures from "@/components/about/CompanyFeatures";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <PageLayout
      title="About Us | Professional Locksmith Services"
      description="Learn about Locksmith & Security LLC - your trusted local locksmith serving North Bergen since 2010 with professional, reliable security solutions."
      heroTitle="About Our Company"
      heroDescription="Professional locksmith services with a commitment to excellence"
      schema={{
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "image": "/uploads/308ce2b0-551b-48b6-b078-c7e793fa2153.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Bergen",
            "addressRegion": "NJ",
            "addressCountry": "US"
          },
          "telephone": "(551) 303-7874",
          "priceRange": "$$"
        }
      }}
    >
      <div className="container mx-auto px-4">
        <MissionVision />
        <CompanyStats />
        <CompanyFeatures />
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="/contact">Contact Us Now</a>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
