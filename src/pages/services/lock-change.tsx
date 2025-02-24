
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/lock-change/EmergencyCallout";
import RealWorldExamples from "@/components/services/lock-change/RealWorldExamples";
import ServiceDescription from "@/components/services/lock-change/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Lock } from "lucide-react";

const LockChangePage = () => {
  return (
    <>
      <ServiceSchema
        name="Lock Change & Replacement Service"
        description="Professional lock change and replacement services. Our expert locksmiths install high-security locks to enhance your property's security."
        serviceType="Security Installation"
        price={{ amount: 85, currency: "USD" }}
        estimatedTime="30-45 minutes"
      />
      <ServiceLayout
        title="Lock Change & Replacement"
        description="Need new locks? Our professional locksmiths install high-security locks for better protection. Perfect for new homeowners or upgrading security."
        icon={Lock}
        service="lock-change"
        callToAction="Upgrade Your Locks"
      >
        <ServiceTrustIndicators
          responseTime="Professional Service"
          rating="5.0"
          certifications={["Licensed", "Insured", "Master Locksmith"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="Lock Change" />
      </ServiceLayout>
    </>
  );
};

export default LockChangePage;
