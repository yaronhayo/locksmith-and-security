
import ServiceAreasSection from '../ServiceAreasSection';
import WhyChooseUs from '../WhyChooseUs';
import EmergencyServicesSection from '../EmergencyServicesSection';
import ProcessSection from '../ProcessSection';
import ServicesSection from '../ServicesSection';
import FAQSection from '../FAQSection';
import ReviewsSection from '../ReviewsSection';

const HomeContent = () => {
  return (
    <>
      <ServicesSection />
      <ServiceAreasSection />
      <EmergencyServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <ReviewsSection />
      <FAQSection />
    </>
  );
};

export default HomeContent;
