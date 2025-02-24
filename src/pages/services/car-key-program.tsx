
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/car-key-program/EmergencyCallout";
import RealWorldExamples from "@/components/services/car-key-program/RealWorldExamples";
import ServiceDescription from "@/components/services/car-key-program/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Key } from "lucide-react";

const CarKeyProgramPage = () => {
  return (
    <>
      <ServiceSchema
        name="Car Key Programming Service"
        description="Professional car key programming and transponder coding. Our automotive locksmiths program keys and fobs for all vehicle makes and models."
        serviceType="Automotive Locksmith"
        price={{ amount: 85, currency: "USD" }}
        estimatedTime="Professional Service"
      />
      <ServiceLayout
        title="Car Key Programming"
        description="Need car key programming? We program all types of car keys, including transponder keys, smart keys, and remote fobs for all vehicle makes and models."
        icon={Key}
        service="car-key-program"
        callToAction="Program Your Car Key"
      >
        <ServiceTrustIndicators
          responseTime="Professional Service"
          rating="5.0"
          certifications={["Licensed", "Insured", "Automotive Security Certified"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="Car Key Programming" />
      </ServiceLayout>
    </>
  );
};

export default CarKeyProgramPage;
