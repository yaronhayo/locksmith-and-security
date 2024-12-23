import ServiceLayout from "@/components/layouts/ServiceLayout";

const BusinessLockChangePage = () => {
  return (
    <ServiceLayout
      title="Commercial Lock Change Service"
      description="Professional commercial lock change services in North Bergen. Secure your business with our expert locksmith solutions."
      service="Business Lock Change"
      callToAction="Need to Change Your Business Locks?"
    >
      <div className="prose prose-lg max-w-none">
        <p>
          Our commercial lock change service provides comprehensive security solutions for businesses of all sizes. We understand the importance of protecting your business assets and ensuring the safety of your employees and customers.
        </p>
        
        <h3>Our Commercial Lock Change Services Include:</h3>
        <ul>
          <li>High-security lock installation</li>
          <li>Master key system setup</li>
          <li>Emergency lock replacement</li>
          <li>Access control system integration</li>
          <li>24/7 emergency service</li>
        </ul>
      </div>
    </ServiceLayout>
  );
};

export default BusinessLockChangePage;