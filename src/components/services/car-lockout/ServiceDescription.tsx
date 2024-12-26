import { Car, Shield, Clock } from "lucide-react";

const ServiceDescription = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Professional Car Lockout Services</h2>
      <p className="text-lg text-gray-600 mb-8">
        Getting locked out of your car can be a stressful experience, especially during late hours or in unfamiliar areas. 
        Our professional auto locksmiths are available 24/7 to help you regain access to your vehicle quickly and safely.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 my-12">
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Clock className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
          <p>15-30 minute response time in North Bergen and surrounding areas</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Shield className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
          <p>Professional auto locksmiths with proper certifications</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
          <Car className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">All Vehicle Types</h3>
          <p>Service for all car makes and models</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Our Car Lockout Services Include:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Emergency car lockout assistance</li>
        <li>Broken car key extraction</li>
        <li>Car key replacement</li>
        <li>Transponder key programming</li>
        <li>Smart key reprogramming</li>
        <li>Damage-free car opening techniques</li>
        <li>Car door lock repair</li>
        <li>Ignition lock repair and replacement</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Why Choose Our Auto Locksmith Service:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Specialized in automotive lock systems</li>
        <li>Advanced diagnostic equipment</li>
        <li>Factory-level programming tools</li>
        <li>Experience with all vehicle makes and models</li>
        <li>24/7 emergency response</li>
        <li>Competitive and transparent pricing</li>
        <li>Mobile service - we come to you</li>
        <li>Licensed and insured professionals</li>
      </ul>
    </div>
  );
};

export default ServiceDescription;