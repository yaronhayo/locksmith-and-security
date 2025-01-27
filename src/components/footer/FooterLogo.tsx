import { Shield } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div>
      <div className="mb-6">
        <a href="/" aria-label="Go to homepage">
          <span className="text-2xl font-bold text-white">
            Locksmith & Security LLC
          </span>
        </a>
      </div>
      <p className="text-gray-300 mb-4 text-center md:text-left">
        Professional locksmith services available 24/7 in North Bergen and surrounding areas.
      </p>
      <p className="text-gray-300 mb-4 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
        <Shield className="w-4 h-4 text-secondary" />
        NJ DCA License #13VH13153100
      </p>
    </div>
  );
};

export default FooterLogo;