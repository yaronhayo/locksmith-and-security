
import { Button } from "@/components/ui/button";
import { Phone, Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full space-y-8 text-center"
      >
        <div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. Let us help you get back on track.
          </p>
        </div>

        <div className="grid gap-4">
          <Button onClick={() => navigate(-1)} variant="outline" className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          <Button asChild className="w-full">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t">
          <p className="text-gray-600 mb-4">Need immediate assistance?</p>
          <Button asChild variant="secondary">
            <a href="tel:2017482070" className="flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" />
              Call (201) 748-2070
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
