import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Key } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Lock Change Service in North Bergen",
  "description": "Expert lock change and replacement services for residential and commercial properties. Licensed and insured locksmiths.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC"
  }
};

const LockChangePage = () => {
  return (
    <ServiceLayout
      title="Professional Lock Change Services"
      description="Expert lock replacement services for your home, business, or vehicle. We ensure your security with high-quality locks and professional installation."
      icon={Key}
      schema={schema}
      benefits={[
        "Complete lock replacement service",
        "High-security lock options available",
        "Expert installation by certified technicians",
        "24/7 emergency service available",
        "Residential and commercial solutions",
        "Upfront pricing with no hidden fees",
        "All major lock brands supported",
        "Same-day service available"
      ]}
      service="Lock Change"
      callToAction="Need to Change Your Locks?"
    >
      <div className="prose max-w-none">
        <p className="text-lg">
          Our professional lock change service provides comprehensive security solutions for both residential 
          and commercial properties. Whether you're moving into a new home, upgrading your security, or 
          dealing with damaged locks, our expert technicians ensure a proper installation that enhances 
          your property's security.
        </p>

        <h3>Why Change Your Locks?</h3>
        <ul>
          <li>Moving into a new property</li>
          <li>Lost or stolen keys</li>
          <li>Outdated or damaged locks</li>
          <li>Security upgrades</li>
          <li>After a break-in attempt</li>
          <li>Tenant turnover</li>
        </ul>

        <h3>Our Lock Change Process</h3>
        <ol>
          <li>Initial security assessment</li>
          <li>Lock type recommendation</li>
          <li>Professional installation</li>
          <li>Quality testing</li>
          <li>Security verification</li>
        </ol>

        <h3>Available Lock Types</h3>
        <ul>
          <li>Deadbolts</li>
          <li>Smart locks</li>
          <li>High-security locks</li>
          <li>Keypad locks</li>
          <li>Commercial grade locks</li>
          <li>Mortise locks</li>
        </ul>
      </div>
    </ServiceLayout>
  );
};

export default LockChangePage;