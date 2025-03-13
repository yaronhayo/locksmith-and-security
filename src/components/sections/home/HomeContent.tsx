
import { lazy, Suspense, memo, useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

// Define a type for component factory functions
type ComponentFactory = () => Promise<{ default: React.ComponentType<any> }>;

// Add preload capability to lazy components
interface LazyComponentWithPreload extends React.LazyExoticComponent<React.ComponentType<any>> {
  preload: () => Promise<{ default: React.ComponentType<any> }>;
}

// Custom function to create lazy components with preload capability
const preloadComponent = (factory: ComponentFactory): LazyComponentWithPreload => {
  const Component = lazy(factory) as LazyComponentWithPreload;
  Component.preload = factory;
  return Component;
};

// Lazy loaded components with preload capability
const ServiceAreasSection = preloadComponent(() => import('../ServiceAreasSection'));
const WhyChooseUs = preloadComponent(() => import('../WhyChooseUs'));
const EmergencyServicesSection = preloadComponent(() => import('../EmergencyServicesSection'));
const ProcessSection = preloadComponent(() => import('../ProcessSection'));
const ServicesSection = preloadComponent(() => import('../ServicesSection'));
const FAQSection = preloadComponent(() => import('../FAQSection'));
const HomeReviewsSection = preloadComponent(() => import('./HomeReviewsSection'));
const GoogleMapsProvider = preloadComponent(() => import('@/components/providers/GoogleMapsProvider'));

// Section loading component with animation - optimized for less CLS
const SectionLoading = () => (
  <div className="py-16 w-full">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
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
  const [isVisible, setIsVisible] = useState(false);
  
  // Start preloading components after initial render
  useEffect(() => {
    // Preload essential components first
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        ServicesSection.preload();
        EmergencyServicesSection.preload();
      });
      
      // Preload secondary components after a short delay
      const timer = setTimeout(() => {
        window.requestIdleCallback(() => {
          ProcessSection.preload();
          WhyChooseUs.preload();
        });
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        ServicesSection.preload();
        EmergencyServicesSection.preload();
      }, 100);
      
      const timer = setTimeout(() => {
        ProcessSection.preload();
        WhyChooseUs.preload();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Set up visibility observer for below-the-fold content
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' } // Increased from 200px for earlier preloading
    );
    
    observer.observe(document.getElementById('home-content-observer') || document.body);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <Suspense fallback={<SectionLoading />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <EmergencyServicesSection />
      </Suspense>
      
      <div id="home-content-observer" />
      
      <Suspense fallback={<SectionLoading />}>
        <ProcessSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <WhyChooseUs />
      </Suspense>
      
      {isVisible && (
        <>
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
      )}
    </>
  );
};

export default memo(HomeContent);
