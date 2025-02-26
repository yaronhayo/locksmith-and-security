
import ServiceAreasSection from '../ServiceAreasSection';
import WhyChooseUs from '../WhyChooseUs';
import EmergencyServicesSection from '../EmergencyServicesSection';
import ProcessSection from '../ProcessSection';
import ServicesSection from '../ServicesSection';
import FAQSection from '../FAQSection';
import ReviewsSection from '../ReviewsSection';
import GoogleMapsProvider from '@/components/providers/GoogleMapsProvider';

const HomeContent = () => {
  return (
    <>
      <ServicesSection />
      <EmergencyServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <GoogleMapsProvider>
        <ServiceAreasSection />
      </GoogleMapsProvider>
      <ReviewsSection />
      <FAQSection />
    </>
  );
};

export default HomeContent;
