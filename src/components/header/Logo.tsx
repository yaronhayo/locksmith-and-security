
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center" aria-label="Go to homepage">
      <img
        src="https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg"
        alt="Locksmith & Security LLC Logo"
        className="h-12 w-auto"
        style={{
          objectFit: 'contain',
          maxHeight: '48px'
        }}
        width="200"
        height="48"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
