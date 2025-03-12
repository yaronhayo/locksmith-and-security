
import { Suspense } from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import { homePageSchema } from "@/schemas/homePageSchema";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const enhancedSchema = {
    ...homePageSchema,
    "@type": ["WebPage", "LocalBusiness"],
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Locksmith & Security LLC",
      "image": "/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png",
      "priceRange": "$$",
      "telephone": "+12017482070",
      "email": "support@247locksmithandsecurity.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "North Bergen",
          "sameAs": "https://en.wikipedia.org/wiki/North_Bergen,_New_Jersey"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  };

  return (
    <PageLayout
      title="24/7 Emergency Locksmith Services in North Bergen, NJ | Licensed & Insured"
      description="Professional locksmith services in North Bergen. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response and reliable service. Licensed (#13VH13153100) & insured."
      schema={enhancedSchema}
      keywords="locksmith, emergency locksmith, car lockout, house lockout, business lockout, lock change, lock rekey, North Bergen locksmith, 24/7 locksmith, automotive locksmith, residential locksmith, commercial locksmith"
      ogImage="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
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
