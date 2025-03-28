
import { Suspense } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { homePageSchema } from "@/schemas/homePageSchema";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": {
      "@type": "ImageObject",
      "url": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
      "width": "1200",
      "height": "630"
    },
    "priceRange": "$$",
    "telephone": "+12017482070",
    "email": "support@247locksmithandsecurity.com",
    "url": "https://247locksmithandsecurity.com",
    "description": "Professional 24/7 locksmith services for residential, commercial, and automotive needs. Licensed (#13VH13153100) & insured experts serving North Bergen and surrounding areas.",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "North Bergen",
        "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
      },
      {
        "@type": "City",
        "name": "Jersey City",
        "sameAs": "https://en.wikipedia.org/wiki/Jersey_City,_New_Jersey"
      },
      {
        "@type": "City",
        "name": "Hoboken",
        "sameAs": "https://en.wikipedia.org/wiki/Hoboken,_New_Jersey"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/247locksmithandsecurity/",
      "https://www.instagram.com/247locksmithandsecurity/",
      "https://www.yelp.com/biz/locksmith-and-security-north-bergen"
    ]
  };

  const enhancedSchema = {
    ...homePageSchema,
    "@type": ["WebPage", "LocalBusiness"],
    "mainEntity": localBusinessSchema
  };

  return (
    <PageLayout
      title="24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service. Licensed (#13VH13153100) & insured."
      schema={enhancedSchema}
      keywords="locksmith north bergen, emergency locksmith, 24/7 locksmith nj, car lockout service, house lockout, residential locksmith, commercial locksmith, automotive locksmith, lock repair, lock installation, lock rekey, high security locks, master key systems"
      ogImage="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
      canonicalUrl="/"
      geoRegion="US-NJ"
      geoPlaceName="North Bergen"
      geoPosition="40.7795;-74.0324"
      icbm="40.7795, -74.0324"
    >
      <AnimatePresence mode="wait">
        <motion.main 
          className="flex flex-col" 
          role="main" 
          aria-label="Main content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </PageLayout>
  );
};

export default HomeLayout;
