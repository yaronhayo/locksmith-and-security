
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layouts/PageLayout";

const ThankYouPage = () => {
  const navigate = useNavigate();

  // Prevent accessing this page directly by URL and handle edge cases
  useEffect(() => {
    const fromForm = sessionStorage.getItem('fromFormSubmission');
    
    if (!fromForm) {
      console.log("User attempted to access thank-you page directly, redirecting to home");
      navigate('/', { replace: true });
      return;
    }
    
    // Clear the flag after checking to prevent stale state
    sessionStorage.removeItem('fromFormSubmission');
    
    // Log successful access
    console.log("Thank you page accessed via proper form submission");
  }, [navigate]);

  return (
    <PageLayout
      title="Thank You | Locksmith & Security LLC"
      description="Thank you for your submission"
      noindex={true}
      nofollow={true}
    >
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center space-y-6 bg-white p-8 rounded-lg shadow-lg"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
          >
            <Check className="h-10 w-10 text-green-600" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
          
          <p className="text-lg text-gray-600">
            We've received your submission and will get back to you as soon as possible.
          </p>

          <div className="pt-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ThankYouPage;
