
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import { createLocalBusinessSchema } from "@/components/meta/schema/LocalBusinessSchema";
import { createWebSiteSchema } from "@/components/meta/schema/WebSiteSchema";
import { createSiteNavigationSchema } from "@/components/meta/schema/SiteNavigationSchema";
import { createBreadcrumbSchema } from "@/components/meta/schema/BreadcrumbSchema";
import MetaTags from "@/components/layouts/MetaTags";
import ResourceHints from "@/components/meta/ResourceHints";

const ServiceAreasPage = () => {
  const pageTitle = "Service Areas | Locksmith & Security LLC";
  const pageDescription = "Professional locksmith services available in North Bergen, Jersey City, Union City, and surrounding areas. Fast response times and reliable service.";
  const canonicalUrl = "/service-areas";
  
  // Create breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema({
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Service Areas", item: "/service-areas" }
    ],
    baseUrl: "https://247locksmithandsecurity.com"
  });
  
  // Create enhanced LocalBusiness schema with service area information
  const localBusinessSchema = createLocalBusinessSchema({
    priceRange: "$$$",
    geo: {
      latitude: 40.7795,
      longitude: -74.0324
    },
    serviceArea: {
      name: "North Bergen and surrounding areas",
      type: "GeoCircle",
      geoRadius: "30"
    },
    hasOfferCatalog: {
      name: "Locksmith Services",
      itemListElement: [
        {
          name: "Emergency Locksmith",
          description: "24/7 emergency locksmith services for residential, commercial and automotive needs",
          price: "$75.00 - $250.00",
          priceCurrency: "USD"
        },
        {
          name: "Residential Locksmith",
          description: "Complete lock installation, repair and maintenance for homes",
          price: "$50.00 - $200.00",
          priceCurrency: "USD"
        },
        {
          name: "Commercial Locksmith",
          description: "Advanced security solutions for businesses including master key systems",
          price: "$100.00 - $500.00",
          priceCurrency: "USD"
        }
      ]
    }
  });
  
  // Create WebSite schema
  const websiteSchema = createWebSiteSchema();
  
  // Create SiteNavigation schema
  const navigationSchema = createSiteNavigationSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Service Areas", url: "/service-areas" },
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" }
    ]
  });

  // Preconnect to critical third-party domains
  const preconnectDomains = [
    "https://mtbgayqzjrxjjmsjikcg.supabase.co",
    "https://maps.googleapis.com",
    "https://www.google-analytics.com",
    "https://fonts.googleapis.com"
  ];

  // DNS prefetch for domains that will be needed later
  const dnsPrefetchDomains = [
    "https://fonts.gstatic.com",
    "https://www.google.com"
  ];

  // Preload critical resources
  const preloadResources = [
    {
      href: "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
      as: "image" as const,
    }
  ];

  return (
    <>
      <ResourceHints
        preconnect={preconnectDomains}
        preload={preloadResources}
        dnsPrefetch={dnsPrefetchDomains}
      />
      
      <MetaTags 
        title={pageTitle}
        description={pageDescription}
        keywords="locksmith near me, service areas, North Bergen locksmith, Jersey City locksmith, Hoboken locksmith, emergency locksmith services"
        noindex={false}
        nofollow={false}
        canonicalUrl={canonicalUrl}
        ogImage="/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png"
        modifiedDate={new Date().toISOString()}
        schemas={[
          breadcrumbSchema,
          localBusinessSchema,
          websiteSchema,
          navigationSchema
        ]}
      />

      <PageLayout
        title={pageTitle}
        description={pageDescription}
      >
        <ServiceAreasSection />
      </PageLayout>
    </>
  );
};

export default ServiceAreasPage;
