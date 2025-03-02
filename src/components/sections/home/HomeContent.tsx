
import { lazy, Suspense, memo } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

// Lazy loaded components with prefetching hints
// This technique helps browsers prioritize important script downloads
const ServicesSectionComponent = lazy(() => {
  // Add a hint for the browser to prefetch this component
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = '/src/components/sections/ServicesSection.tsx';
  link.as = 'script';
  document.head.appendChild(link);
  return import('../ServicesSection')
});

const EmergencyServicesSectionComponent = lazy(() => import('../EmergencyServicesSection'));
const ProcessSectionComponent = lazy(() => import('../ProcessSection'));
const WhyChooseUsComponent = lazy(() => import('../WhyChooseUs'));
const HomeReviewsSectionComponent = lazy(() => import('./HomeReviewsSection'));
const GoogleMapsProviderComponent = lazy(() => import('@/components/providers/GoogleMapsProvider'));
const ServiceAreasSectionComponent = lazy(() => import('../ServiceAreasSection'));
const FAQSectionComponent = lazy(() => import('../FAQSection'));

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

// Intersection Observer for better lazy loading
const LazySection = ({ children, id }) => {
  return (
    <div id={id} data-section={id}>
      <Suspense fallback={<SectionLoading />}>
        {children}
      </Suspense>
    </div>
  );
};

const HomeContent = () => {
  return (
    <>
      <LazySection id="services">
        <ServicesSectionComponent />
      </LazySection>
      
      <LazySection id="emergency">
        <EmergencyServicesSectionComponent />
      </LazySection>
      
      <LazySection id="process">
        <ProcessSectionComponent />
      </LazySection>
      
      <LazySection id="why-choose">
        <WhyChooseUsComponent />
      </LazySection>
      
      <LazySection id="reviews">
        <HomeReviewsSectionComponent />
      </LazySection>
      
      <LazySection id="service-areas">
        <GoogleMapsProviderComponent>
          <ServiceAreasSectionComponent />
        </GoogleMapsProviderComponent>
      </LazySection>
      
      <LazySection id="faq">
        <FAQSectionComponent />
      </LazySection>
    </>
  );
};

export default memo(HomeContent);
