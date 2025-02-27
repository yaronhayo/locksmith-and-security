
import { ShieldCheck, Lock, Home, AlertCircle } from "lucide-react";

interface ServiceAreaSecurityTipsProps {
  locationName: string;
}

const ServiceAreaSecurityTips = ({ locationName }: ServiceAreaSecurityTipsProps) => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-white rounded-xl p-8 md:p-12">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">Security Tips for {locationName} Residents</h2>
      </div>
      
      <p className="text-lg text-gray-700 mb-8">
        At Locksmith & Security LLC, we're committed to helping {locationName} residents stay safe and secure. Here are some important security tips tailored to properties in the {locationName} area:
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Door & Lock Security</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Install deadbolt locks on all exterior doors for maximum security</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Ensure your strike plates are secured with 3-inch screws that reach the door frame</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Consider high-security locks for main entrances</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Reinforce sliding doors with security bars or pins</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Home className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Home Security</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Keep bushes trimmed below window level to eliminate hiding spots</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Install motion-sensor lighting around entrances</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Consider a smart doorbell or camera system for your property</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2.5"></div>
              <p className="text-gray-700">Make your home look occupied when you're away with timers for lights</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-8">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">{locationName} Security Considerations</h3>
        </div>
        <p className="text-gray-700 mb-4">
          {locationName} properties have specific security needs based on the local environment and neighborhood characteristics. Our local locksmith experts understand these requirements and can provide customized recommendations for your property.
        </p>
        <p className="text-gray-700">
          For a professional security assessment of your {locationName} home or business, contact our team. We can identify potential vulnerabilities and recommend the most effective security upgrades for your specific situation.
        </p>
      </div>
    </section>
  );
};

export default ServiceAreaSecurityTips;
