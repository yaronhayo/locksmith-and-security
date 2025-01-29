import ServiceLayout from "@/components/layouts/ServiceLayout";
import ServiceDescription from "@/components/services/car-lockout/ServiceDescription";
import EmergencyCallout from "@/components/services/car-lockout/EmergencyCallout";
import RealWorldExamples from "@/components/services/car-lockout/RealWorldExamples";
import CarLockoutHero from "@/components/sections/CarLockoutHero";

const CarLockout = () => {
  return (
    <ServiceLayout
      title="24/7 Car Lockout Service in North Bergen, NJ | Professional Auto Locksmith"
      description="Professional car lockout service in North Bergen, NJ. Available 24/7 for emergency auto locksmith needs. Fast response time and reliable service."
      serviceName="Car Lockout Service"
      serviceUrl="/services/car-lockout"
      keywords="car lockout service, auto locksmith, car key replacement, vehicle lockout, emergency car locksmith"
      ogImage="/lovable-uploads/car-lockout-service.jpg"
      faqSchema={[
        {
          question: "How long does it take to unlock a car?",
          answer: "Our professional locksmiths typically unlock cars within 5-15 minutes of arrival."
        },
        {
          question: "Do you provide 24/7 car lockout service?",
          answer: "Yes, we provide 24/7 emergency car lockout service in North Bergen and surrounding areas."
        }
      ]}
    >
      <CarLockoutHero />
      <ServiceDescription />
      <EmergencyCallout />
      <RealWorldExamples />
    </ServiceLayout>
  );
};

export default CarLockout;