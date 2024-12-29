import { Lock } from "lucide-react";

const ServiceDescription = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
        <Lock className="h-6 w-6 text-primary" />
        Professional House Lockout Service
      </h2>
      <p>
        Our professional house lockout service in North Bergen provides fast, reliable assistance when you're locked out of your home. Available 24/7, our licensed locksmiths arrive within 15-30 minutes to help you regain access to your property safely and without damage.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Why Choose Our House Lockout Service?</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>24/7 emergency availability</li>
          <li>Fast 15-30 minute response time</li>
          <li>Licensed and insured technicians</li>
          <li>Damage-free entry methods</li>
          <li>Upfront, transparent pricing</li>
          <li>Experience with all types of residential locks</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceDescription;