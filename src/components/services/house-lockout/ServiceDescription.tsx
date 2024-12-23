import { Shield, Clock } from "lucide-react";

const ServiceDescription = () => {
  return (
    <div className="prose max-w-none">
      <p className="text-lg mb-6">
        Being locked out of your home can be a stressful and potentially dangerous situation, 
        especially during late hours or severe weather. At Locksmith & Security LLC, we provide 
        rapid, professional house lockout services throughout North Bergen and surrounding areas, 
        ensuring you regain access to your home quickly and safely.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4">Comprehensive Lockout Solutions</h3>
      <p className="mb-6">
        Our residential lockout services include:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Emergency lockout assistance</li>
        <li>Lock picking and non-destructive entry</li>
        <li>Broken key extraction</li>
        <li>Lock repair and replacement</li>
        <li>Key duplication and replacement</li>
        <li>Smart lock installation and programming</li>
        <li>Security assessment and upgrades</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Professional Expertise</h3>
      <p className="mb-6">
        Our technicians are highly trained professionals with years of experience in residential 
        locksmith services. We stay up-to-date with the latest lock technologies and security 
        solutions to provide you with the best possible service. All our locksmiths are:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Licensed and certified</li>
        <li>Background checked</li>
        <li>Fully insured</li>
        <li>Continuously trained on new technologies</li>
      </ul>

      <div className="flex items-center gap-4 mt-8">
        <div className="flex items-center gap-2">
          <Shield className="text-primary h-6 w-6" />
          <span>Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-primary h-6 w-6" />
          <span>15-30 Min Response</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;