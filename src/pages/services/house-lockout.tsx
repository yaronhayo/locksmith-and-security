import ServiceLayout from "@/components/layouts/ServiceLayout";
import ServiceDescription from "@/components/services/house-lockout/ServiceDescription";
import EmergencyCallout from "@/components/services/house-lockout/EmergencyCallout";
import RealWorldExamples from "@/components/services/house-lockout/RealWorldExamples";
import HouseLockoutHero from "@/components/sections/HouseLockoutHero";

const HouseLockout = () => {
  return (
    <ServiceLayout
      title="24/7 House Lockout Service in North Bergen, NJ | Residential Locksmith"
      description="Professional house lockout service in North Bergen, NJ. Available 24/7 for emergency residential locksmith needs. Fast response time and reliable service."
      serviceName="House Lockout Service"
      serviceUrl="/services/house-lockout"
      keywords="house lockout service, residential locksmith, home lockout, emergency locksmith, door unlock service"
      ogImage="/lovable-uploads/house-lockout-service.jpg"
      faqSchema={[
        {
          question: "How quickly can you respond to a house lockout?",
          answer: "We typically arrive within 15-30 minutes for house lockout emergencies in our service area."
        },
        {
          question: "Do you provide 24/7 house lockout service?",
          answer: "Yes, we provide 24/7 emergency house lockout service in North Bergen and surrounding areas."
        }
      ]}
    >
      <HouseLockoutHero />
      <ServiceDescription />
      <EmergencyCallout />
      <RealWorldExamples />
    </ServiceLayout>
  );
};

export default HouseLockout;