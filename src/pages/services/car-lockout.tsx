import ServiceLayout from "@/components/layouts/ServiceLayout";
import CarLockoutHero from "@/components/sections/CarLockoutHero";
import ServiceDescription from "@/components/services/car-lockout/ServiceDescription";
import RealWorldExamples from "@/components/services/car-lockout/RealWorldExamples";
import EmergencyCallout from "@/components/services/car-lockout/EmergencyCallout";

const CarLockout = () => {
  const serviceName = "Car Lockout Service";
  const serviceUrl = "/services/car-lockout";
  const description = "24/7 emergency car lockout service in North Bergen, NJ. Professional automotive locksmith providing fast response within 15-30 minutes. Licensed & insured experts for all vehicle makes and models.";
  const keywords = "car lockout service, automotive locksmith, car key replacement, vehicle locksmith, emergency car lockout, North Bergen car locksmith, 24/7 car lockout service, locked keys in car";

  return (
    <ServiceLayout
      title="24/7 Emergency Car Lockout Service"
      description={description}
      keywords={keywords}
      serviceName={serviceName}
      serviceUrl={serviceUrl}
      heroTitle="Professional Car Lockout Service"
      heroDescription="Locked out of your car? Our expert automotive locksmiths provide fast, reliable service 24/7. We'll get you back in your vehicle quickly and safely."
      canonicalUrl={serviceUrl}
      ogImage="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
    >
      <main className="flex flex-col">
        <CarLockoutHero />
        <ServiceDescription />
        <RealWorldExamples />
        <EmergencyCallout />
      </main>
    </ServiceLayout>
  );
};

export default CarLockout;