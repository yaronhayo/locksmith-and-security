
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div>
      <div className="mb-6">
        <Link to="/" aria-label="Go to homepage">
          <img 
            src="/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png" 
            alt="Locksmith & Security LLC Logo" 
            className="h-20 w-auto mx-auto md:mx-0 transform transition-transform duration-300 hover:scale-105"
            style={{
              objectFit: 'contain',
              maxWidth: 'none'
            }}
            width="400"
            height="80"
            loading="lazy"
          />
        </Link>
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
