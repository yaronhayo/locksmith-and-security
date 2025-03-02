
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { memo, useState } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";

const FooterLogo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const logoUrl = "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="no-underline block" aria-label="Go to homepage">
          <div className="relative w-[300px] h-[80px] mx-auto md:mx-0">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner size="md" className="text-white" />
              </div>
            )}
            
            {hasError ? (
              <div className="w-full h-full flex items-center justify-center text-white font-semibold text-xl">
                Locksmith & Security LLC
              </div>
            ) : (
              <img 
                src={logoUrl}
                alt="Locksmith & Security LLC Logo" 
                className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                style={{ objectFit: 'contain' }}
                width={300}
                height={80}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                  console.error('Footer logo failed to load:', e);
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            )}
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

export default memo(FooterLogo);
