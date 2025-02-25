
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center no-underline" aria-label="Go to homepage">
      <div className="relative w-[200px] h-[48px]">
        <img
          src="https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg"
          alt="Locksmith & Security LLC Logo"
          className="w-full h-full"
          style={{
            objectFit: 'contain'
          }}
          width={200}
          height={48}
          loading="eager"
          onError={(e) => {
            console.error('Logo failed to load:', e);
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
