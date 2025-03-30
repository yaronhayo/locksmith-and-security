
import { Link } from "react-router-dom";
import { memo, useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const Logo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const logoUrl = "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";
  
  // Preload the logo image for better LCP
  useEffect(() => {
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      console.error('Logo failed to load');
      setIsLoading(false);
      setHasError(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);
  
  return (
    <Link to="/" className="flex items-center no-underline" aria-label="Go to homepage">
      <div className="relative w-[200px] h-[48px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="sm" />
          </div>
        )}
        
        {hasError ? (
          <div className="w-full h-full flex items-center justify-center text-primary font-semibold">
            Locksmith & Security
          </div>
        ) : (
          <img
            src={logoUrl}
            alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services"
            className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            style={{ objectFit: 'contain' }}
            width={200}
            height={48}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              console.error('Logo failed to load:', e);
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(Logo);
