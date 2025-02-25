
import { Car, Shield, Key } from "lucide-react";

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

      <h3 className="text-2xl font-semibold mb-4">Advanced Vehicle Security Solutions</h3>
      <p className="text-gray-600 mb-6">
        Modern vehicles come with sophisticated security systems that require specialized knowledge and equipment to 
        service properly. Our technicians stay up-to-date with the latest automotive security technology and carry 
        state-of-the-art tools to handle even the most complex vehicle security systems.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-4">Our Technical Expertise Covers:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Electronic key fob systems</li>
          <li>Keyless entry systems</li>
          <li>Push-to-start ignition systems</li>
          <li>Transponder chip programming</li>
          <li>Vehicle immobilizer systems</li>
          <li>Smart key technology</li>
          <li>Biometric security systems</li>
          <li>Advanced diagnostic services</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Professional Equipment and Techniques</h3>
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
