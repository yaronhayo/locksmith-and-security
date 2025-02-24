
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center" aria-label="Go to homepage">
      <img
        src="/website-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png"
        alt="Locksmith & Security LLC Logo"
        className="h-12 w-auto transform transition-transform duration-300 hover:scale-105"
        style={{
          objectFit: 'contain',
          maxWidth: 'none'
        }}
        width="200"
        height="48"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
