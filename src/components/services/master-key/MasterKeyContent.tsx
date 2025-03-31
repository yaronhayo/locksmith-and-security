
import { masterKeySchema, masterKeyFAQSchema } from "./MasterKeySchema";
import ServicePageContent from "@/components/sections/services/service-page";
import Introduction from "./sections/Introduction";
import SystemComponents from "./sections/SystemComponents";
import HierarchyTabs from "./sections/HierarchyTabs";
import CallToAction from "./sections/CallToAction";
import { relatedServices } from "./relatedServices";

// Convert FAQ schema to the format expected by ServicePageContent
const faqs = masterKeyFAQSchema.mainEntity.map(item => ({
  question: item.name,
  answer: item.acceptedAnswer.text
}));

const MasterKeyContent = () => {
  const mainContent = (
    <div className="space-y-12">
      <Introduction />
      <SystemComponents />
      <HierarchyTabs />
      <CallToAction />
    </div>
  );

  return (
    <ServicePageContent
      title="Master Key System Design & Installation"
      description="Professional master key system implementation for effective access control in your business"
      serviceName="Master Key System"
      serviceCategory="Commercial Locksmith"
      canonicalUrl="/services/commercial-locksmith/master-key"
      mainContent={mainContent}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default MasterKeyContent;
