
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
      <EmergencyServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <ReviewsSection />
      <ServiceAreasSection />
      <FAQSection />
    </>
  );
};

export default HomeContent;
