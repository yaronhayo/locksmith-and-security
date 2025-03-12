
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { memo } from 'react';
import OptimizedImage from "@/components/shared/OptimizedImage";

const FooterLogo = () => {
  const logoUrl = "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="no-underline block" aria-label="Go to homepage">
          <OptimizedImage
            src={logoUrl}
            alt="Locksmith & Security LLC - 24/7 Professional Locksmith Services in North Bergen, NJ"
            width={300}
            height={80}
            className="mx-auto md:mx-0"
            objectFit="contain"
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

export default memo(FooterLogo);
