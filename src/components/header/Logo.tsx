
import { Link } from "react-router-dom";
import { memo } from "react";
import OptimizedImage from "@/components/shared/OptimizedImage";

const Logo = () => {
  const logoUrl = "https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg";
  
  return (
    <Link to="/" className="flex items-center no-underline" aria-label="Go to homepage">
      <OptimizedImage
        src={logoUrl}
        alt="Locksmith & Security LLC - Professional 24/7 Locksmith Services"
        width={200}
        height={48}
        priority={true}
        objectFit="contain"
      />
    </Link>
  );
};

export default memo(Logo);
