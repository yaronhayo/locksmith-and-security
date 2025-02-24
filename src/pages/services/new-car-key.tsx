
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/new-car-key/EmergencyCallout";
import RealWorldExamples from "@/components/services/new-car-key/RealWorldExamples";
import ServiceDescription from "@/components/services/new-car-key/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Car } from "lucide-react";

const NewCarKeyPage = () => {
  return (
    <>
      <ServiceSchema
        name="New Car Key Service"
        description="Professional car key cutting and programming service. Our automotive locksmiths create new keys for all vehicle makes and models."
        serviceType="Automotive Locksmith"
        price={{ amount: 120, currency: "USD" }}
        estimatedTime="Professional Service"
      />
      <ServiceLayout
        title="New Car Key Service"
        description="Lost your car key or need a spare? We cut and program new keys for all vehicle makes and models, including transponder and smart keys."
        icon={Car}
        service="new-car-key"
        callToAction="Get a New Car Key"
      >
        <ServiceTrustIndicators
          responseTime="Professional Service"
          rating="5.0"
          certifications={["Licensed", "Insured", "Auto Security Certified"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="New Car Key" />
      </ServiceLayout>
    </>
  );
};

export default NewCarKeyPage;
