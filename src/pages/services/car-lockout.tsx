
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/car-lockout/EmergencyCallout";
import RealWorldExamples from "@/components/services/car-lockout/RealWorldExamples";
import ServiceDescription from "@/components/services/car-lockout/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Car } from "lucide-react";

const CarLockoutPage = () => {
  return (
    <>
      <ServiceSchema
        name="Car Lockout Service"
        description="24/7 car lockout assistance. Our automotive locksmiths provide fast, professional service to get you back in your vehicle quickly and safely."
        serviceType="Automotive Locksmith"
        price={{ amount: 75, currency: "USD" }}
        estimatedTime="15-30 minutes"
      />
      <ServiceLayout
        title="Car Lockout Service"
        description="Locked out of your car? Our professional auto locksmiths provide fast, reliable service to get you back on the road quickly."
        icon={Car}
        service="car-lockout"
        callToAction="Get Back in Your Car"
      >
        <ServiceTrustIndicators
          responseTime="Emergency Service"
          rating="5.0"
          certifications={["Licensed", "Insured", "Auto Security Expert"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="Car Lockout" />
      </ServiceLayout>
    </>
  );
};

export default CarLockoutPage;
