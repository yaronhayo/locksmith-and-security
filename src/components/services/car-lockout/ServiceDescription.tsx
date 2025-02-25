
import { Car, Shield, Key, Lock, Wrench } from "lucide-react";

const ServiceDescription = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Professional Car Lockout Services</h2>
      <p className="text-lg text-gray-600 mb-8">
        Getting locked out of your car can be a stressful experience, especially during late hours or in unfamiliar areas. 
        Our professional auto locksmiths are here to help you regain access to your vehicle safely and securely. We 
        understand the importance of getting back on the road and provide comprehensive automotive locksmith solutions 
        for all vehicle makes and models.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 my-12">
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Car className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Licensed Experts</h3>
          <p>Professional auto locksmiths with extensive training and experience</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Shield className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
          <p>Fully licensed, bonded, and insured for your protection</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Key className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">All Vehicle Types</h3>
          <p>Expert service for all car makes and models</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Comprehensive Car Lockout Solutions</h3>
      <p className="text-gray-600 mb-6">
        Our car lockout services are designed to address every possible scenario you might encounter. Whether you've 
        locked your keys inside your vehicle, have a broken key in the lock, or are dealing with a malfunctioning 
        electronic lock system, our expert technicians have the knowledge and equipment to resolve your situation.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-4">Our Car Lockout Services Include:</h4>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Non-destructive car opening techniques</li>
          <li>Broken car key extraction</li>
          <li>Car key replacement</li>
          <li>Transponder key programming</li>
          <li>Smart key reprogramming</li>
          <li>Car door lock repair</li>
          <li>Ignition lock repair and replacement</li>
          <li>Vehicle security system service</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Specialized Vehicle Lock Types</h3>
      <p className="text-gray-600 mb-6">
        Modern vehicles employ various sophisticated locking mechanisms, each requiring specific expertise and tools to service properly. Our technicians are trained to work with all types of automotive locks, including:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Traditional Lock Systems</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manual door locks</li>
            <li>Mechanical ignition systems</li>
            <li>Trunk locks</li>
            <li>Glove compartment locks</li>
            <li>Fuel cap locks</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Electronic Lock Systems</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Power door locks</li>
            <li>Keyless entry systems</li>
            <li>Push-button start systems</li>
            <li>Smart key systems</li>
            <li>Biometric access systems</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Key Programming and Replacement</h3>
      <p className="text-gray-600 mb-6">
        In addition to lockout services, we offer comprehensive key programming and replacement solutions. Our advanced key services include:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-4">Key Services:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Transponder key programming</li>
          <li>Key fob replacement and programming</li>
          <li>Smart key duplication</li>
          <li>Push-to-start key programming</li>
          <li>Emergency key cutting</li>
          <li>Broken key extraction and replacement</li>
          <li>High-security key duplication</li>
          <li>Remote key fob battery replacement</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Diagnostic and Prevention Services</h3>
      <p className="text-gray-600 mb-6">
        Our comprehensive diagnostic services help identify and prevent future lock-related issues. We use advanced diagnostic tools to:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Electronic Diagnostics</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Key fob signal testing</li>
            <li>Lock mechanism electronic analysis</li>
            <li>Security system diagnostics</li>
            <li>Immobilizer system checking</li>
            <li>Battery and power system testing</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Mechanical Inspection</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lock mechanism wear assessment</li>
            <li>Door latch inspection</li>
            <li>Key wear evaluation</li>
            <li>Weather seal checking</li>
            <li>Complete lock system review</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Advanced Security Features</h3>
      <p className="text-gray-600 mb-6">
        We work with the latest vehicle security technologies and can help you understand and maintain your car's advanced security features:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-4">Security Systems We Service:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Factory alarm systems</li>
          <li>Aftermarket security systems</li>
          <li>GPS tracking systems</li>
          <li>Remote start systems</li>
          <li>Keyless entry systems</li>
          <li>Immobilizer systems</li>
          <li>Smart key systems</li>
          <li>Biometric security systems</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Professional Equipment and Tools</h3>
      <p className="text-gray-600 mb-6">
        We invest in professional-grade locksmith tools and diagnostic equipment to ensure we can service any vehicle 
        make and model. Our comprehensive toolkit includes specialized lock picks, key cutting machines, programming 
        devices, and diagnostic tools designed specifically for automotive use.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-4">Vehicle Security Best Practices</h4>
        <p className="text-gray-600 mb-4">
          To help prevent future lockouts, we recommend these security measures:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep a spare key in a magnetic key holder</li>
          <li>Consider a digital key backup system</li>
          <li>Regular maintenance of locks and ignition</li>
          <li>Update vehicle security software regularly</li>
          <li>Install a quality alarm system</li>
          <li>Use steering wheel locks for added security</li>
          <li>Consider GPS tracking systems</li>
          <li>Document all key copies and their locations</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Quality Assurance Guarantee</h3>
      <p className="text-gray-600 mb-6">
        Every car lockout service we perform comes with our quality assurance guarantee. We stand behind our work 
        and ensure that all services are performed to the highest professional standards. Our technicians follow 
        manufacturer-recommended procedures and use only quality parts and materials.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-4">Our Service Standards Include:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complete vehicle security assessment</li>
          <li>Detailed service documentation</li>
          <li>Professional grade tools and equipment</li>
          <li>Manufacturer-approved techniques</li>
          <li>Full testing after service completion</li>
          <li>Clear communication throughout service</li>
          <li>Written service warranty</li>
          <li>Ongoing technical support</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Service Process and Standards</h3>
      <p className="text-gray-600 mb-6">
        Our professional car lockout service follows a systematic approach to ensure your security and satisfaction:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Initial Assessment</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vehicle identification verification</li>
            <li>Lock system evaluation</li>
            <li>Damage assessment</li>
            <li>Security system status check</li>
            <li>Service options explanation</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Service Execution</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Non-destructive entry techniques</li>
            <li>Professional tool utilization</li>
            <li>Damage prevention measures</li>
            <li>System functionality testing</li>
            <li>Final security verification</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Vehicle Coverage</h3>
      <p className="text-gray-600 mb-6">
        Our automotive locksmith services cover all major vehicle brands and models, including but not limited to:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          "Toyota", "Honda", "Ford", "Chevrolet",
          "BMW", "Mercedes", "Audi", "Volkswagen",
          "Nissan", "Hyundai", "Kia", "Lexus",
          "Jeep", "Dodge", "Chrysler", "Subaru",
          "Mazda", "Acura", "Infiniti", "Volvo"
        ].map((brand, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDescription;
