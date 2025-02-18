
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/business-lock-change/EmergencyCallout";
import RealWorldExamples from "@/components/services/business-lock-change/RealWorldExamples";
import ServiceDescription from "@/components/services/business-lock-change/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import { Lock } from "lucide-react";

const BusinessLockChangePage = () => {
  return (
    <>
      <ServiceSchema
        name="Business Lock Change Service"
        description="Professional business lock change and replacement services. Our expert locksmiths provide reliable solutions to enhance your business security."
        serviceType="Commercial Locksmith"
        price={{ amount: 95, currency: "USD" }}
        estimatedTime="30-60 minutes"
      />
      <ServiceLayout
        title="Business Lock Change Service"
        description="Professional lock change services for your business. Our expert locksmiths provide reliable solutions to enhance your commercial security."
        icon={Lock}
        service="business-lock-change"
        callToAction="Schedule Lock Change"
      >
        <ServiceTrustIndicators
          responseTime="30-60 Min"
          rating="5.0"
          certifications={["Licensed", "Insured", "Bonded"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection category="commercial" />
      </ServiceLayout>
    </>
  );
};

export default BusinessLockChangePage;
