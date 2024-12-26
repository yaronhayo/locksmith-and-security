import { Building2, Shield, Lock } from "lucide-react";

const ServiceDescription = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Professional Business Lock Change Services</h2>
      <p className="text-lg text-gray-600 mb-8">
        Our commercial lock change service provides comprehensive security solutions for businesses of all sizes. 
        We understand the importance of protecting your business assets and ensuring the safety of your employees and customers.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 my-12">
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Building2 className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">All Business Types</h3>
          <p>Solutions for retail, office, industrial, and more</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Shield className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
          <p>Professional commercial locksmiths you can trust</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Lock className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
          <p>High-security locks and master key systems</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Our Commercial Lock Change Services Include:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>High-security lock installation</li>
        <li>Master key system setup and management</li>
        <li>Emergency lock replacement</li>
        <li>Access control system integration</li>
        <li>Restricted key systems</li>
        <li>Lock standardization across multiple locations</li>
        <li>Security consultation and recommendations</li>
        <li>24/7 emergency service availability</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Why Choose Our Commercial Lock Change Service:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Experienced in commercial security systems</li>
        <li>Fast response times for emergency situations</li>
        <li>Professional grade hardware and equipment</li>
        <li>Comprehensive security solutions</li>
        <li>Competitive pricing for businesses</li>
        <li>Fully licensed and insured service</li>
        <li>Expert technical support</li>
        <li>Warranty on parts and labor</li>
      </ul>
    </div>
  );
};

export default ServiceDescription;