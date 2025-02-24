
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/lock-rekey/EmergencyCallout";
import RealWorldExamples from "@/components/services/lock-rekey/RealWorldExamples";
import ServiceDescription from "@/components/services/lock-rekey/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Key } from "lucide-react";

const LockRekeyPage = () => {
  return (
    <>
      <ServiceSchema
        name="Lock Rekey Service"
        description="Professional lock rekeying service. Our expert locksmiths rekey your existing locks to work with new keys, maintaining security without full replacement."
        serviceType="Lock Modification"
        price={{ amount: 65, currency: "USD" }}
        estimatedTime="Professional Service"
      />
      <ServiceLayout
        title="Lock Rekey Service"
        description="Want to keep your locks but need new keys? Our expert locksmiths rekey your existing locks to work with new keys, perfect for rental properties or after key loss."
        icon={Key}
        service="lock-rekey"
        callToAction="Rekey Your Locks"
      >
        <ServiceTrustIndicators
          responseTime="Professional Service"
          rating="5.0"
          certifications={["Licensed", "Insured", "Key Systems Expert"]}
        />
        <EmergencyCallout />
        <ServiceDescription />
        <RealWorldExamples />
        <ReviewsSection location="Lock Rekey" />
      </ServiceLayout>
    </>
  );
};

export default LockRekeyPage;
