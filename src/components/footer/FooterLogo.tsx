
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="no-underline block" aria-label="Go to homepage">
          <div className="relative w-[300px] h-[80px] mx-auto md:mx-0">
            <img 
              src="https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg" 
              alt="Locksmith & Security LLC Logo" 
              className="w-full h-full"
              style={{
                objectFit: 'contain'
              }}
              width={300}
              height={80}
              loading="eager"
              onError={(e) => {
                console.error('Footer logo failed to load:', e);
              }}
            />
          </div>
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
