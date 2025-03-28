
import { lazy, Suspense, memo } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

// Lazy loaded components
const ServiceAreasSection = lazy(() => import('../ServiceAreasSection'));
const WhyChooseUs = lazy(() => import('../WhyChooseUs'));
const EmergencyServicesSection = lazy(() => import('../EmergencyServicesSection'));
const ProcessSection = lazy(() => import('../ProcessSection'));
const ServicesSection = lazy(() => import('../ServicesSection'));
const FAQSection = lazy(() => import('../FAQSection'));
const HomeReviewsSection = lazy(() => import('./HomeReviewsSection'));
const GoogleMapsProvider = lazy(() => import('@/components/providers/GoogleMapsProvider'));

// Section loading component with animation
const SectionLoading = () => (
  <div className="py-16 w-full">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Skeleton className="h-10 w-2/3 mx-auto mb-6" />
        <Skeleton className="h-6 w-3/4 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

const HomeContent = () => {
  return (
    <>
      <Suspense fallback={<SectionLoading />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <EmergencyServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ProcessSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <HomeReviewsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <GoogleMapsProvider>
          <ServiceAreasSection />
        </GoogleMapsProvider>
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <FAQSection />
      </Suspense>
    </>
  );
};

export default memo(HomeContent);
