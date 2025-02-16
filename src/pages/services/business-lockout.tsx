
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/business-lockout/EmergencyCallout";
import RealWorldExamples from "@/components/services/business-lockout/RealWorldExamples";
import ServiceDescription from "@/components/services/business-lockout/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Building2 } from "lucide-react";

const BusinessLockoutPage = () => {
  return (
    <>
      <ServiceSchema
        name="Commercial Lockout Service"
        description="Professional commercial lockout solutions available 24/7. Our expert locksmiths provide rapid response for all types of business lockouts."
        serviceType="Commercial Locksmith"
        price={{ amount: 95, currency: "USD" }}
        estimatedTime="15-30 minutes"
        areaServed={[
          "North Bergen",
          "Union City",
          "West New York",
          "Guttenberg",
          "Jersey City",
          "Hoboken"
        ]}
      />
      <ServiceLayout
        title="Commercial Lockout Service"
        description="Locked out of your business? Our commercial locksmith team provides rapid, professional service to minimize business disruption."
        icon={Building2}
        service="business-lockout"
        callToAction="Get Back to Business"
      >
        <ServiceTrustIndicators
          responseTime="15-30 Min"
          rating="5.0"
          certifications={["Licensed", "Insured", "Commercial Security Expert"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="Business Lockout" />
      </ServiceLayout>
    </>
  );
};

export default BusinessLockoutPage;
