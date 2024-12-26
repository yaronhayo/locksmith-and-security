import ServiceLayout from "@/components/layouts/ServiceLayout";
import ServiceDescription from "@/components/services/business-lock-change/ServiceDescription";

const BusinessLockChangePage = () => {
  return (
    <ServiceLayout
      title="Commercial Lock Change Service"
      description="Professional commercial lock change services in North Bergen. Secure your business with our expert locksmith solutions."
      service="Business Lock Change"
      callToAction="Need to Change Your Business Locks?"
    >
      <ServiceDescription />
    </ServiceLayout>
  );
};

export default BusinessLockChangePage;