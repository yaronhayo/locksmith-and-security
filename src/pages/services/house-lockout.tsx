
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/house-lockout/EmergencyCallout";
import RealWorldExamples from "@/components/services/house-lockout/RealWorldExamples";
import ServiceDescription from "@/components/services/house-lockout/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Lock } from "lucide-react";

const HouseLockoutPage = () => {
  return (
    <>
      <ServiceSchema
        name="House Lockout Service"
        description="Professional house lockout service available 24/7. Our expert locksmiths provide fast, reliable assistance to help you regain access to your home."
        serviceType="Residential Locksmith"
        price={{ amount: 75, currency: "USD" }}
        estimatedTime="15-30 minutes"
      />
      <ServiceLayout
        title="House Lockout Service"
        description="Locked out of your house? Our professional locksmiths provide fast, reliable service 24/7 to help you regain access to your home."
        icon={Lock}
        service="house-lockout"
        callToAction="Get Back Inside Now"
      >
        <ServiceTrustIndicators
          responseTime="15-30 Min"
          rating="5.0"
          certifications={["Licensed", "Insured", "Bonded"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="House Lockout" />
      </ServiceLayout>
    </>
  );
};

export default HouseLockoutPage;
