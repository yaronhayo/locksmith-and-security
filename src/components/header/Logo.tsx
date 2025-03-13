
import { Link } from "react-router-dom";
import { memo, useState, useEffect } from "react";

const Logo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const logoUrl = "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";
  
  // Preload the logo image for better LCP
  useEffect(() => {
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error('Logo failed to load');
      setIsLoaded(false);
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
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-l-transparent animate-spin"></div>
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
            className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectFit: 'contain' }}
            width={200}
            height={48}
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              console.error('Logo failed to load');
              setIsLoaded(false);
              setHasError(true);
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(Logo);
