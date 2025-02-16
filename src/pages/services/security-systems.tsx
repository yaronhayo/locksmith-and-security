
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Shield } from "lucide-react";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";

const SecuritySystemsPage = () => {
  return (
    <>
      <ServiceSchema
        name="Security System Installation"
        description="Professional security system installation and monitoring services. We provide cutting-edge security solutions tailored to your property's needs."
        serviceType="Security Installation"
        price={{ amount: 299, currency: "USD" }}
        estimatedTime="2-4 hours"
      />
      <ServiceLayout
        title="Security System Installation"
        description="Advanced security system installation services to protect your property. We provide cutting-edge security solutions tailored to your needs."
        icon={Shield}
        service="security-systems"
        callToAction="Secure Your Property"
      >
        <ServiceTrustIndicators
          responseTime="Same Day"
          rating="5.0"
          certifications={["Licensed", "Insured", "Security Systems Expert"]}
        />
        <ReviewsSection location="Security Systems" />
      </ServiceLayout>
    </>
  );
};

export default SecuritySystemsPage;
