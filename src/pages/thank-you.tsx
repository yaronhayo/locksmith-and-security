
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layouts/PageLayout";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [invalidAccess, setInvalidAccess] = useState(false);

  // Check for form submission flag with a more graceful fallback
  useEffect(() => {
    const fromForm = sessionStorage.getItem('fromFormSubmission');
    const referrer = document.referrer;
    
    // Allow access if either:
    // 1. Has valid session storage flag (normal flow)
    // 2. Has a referrer from the same site (form redirect)
    // 3. Has searchParams with a success parameter (API redirect)
    const hasValidReferrer = referrer && (
      referrer.includes(window.location.origin) || 
      referrer.includes('247locksmithandsecurity.com')
    );
    const urlParams = new URLSearchParams(window.location.search);
    const hasSuccessParam = urlParams.has('success');
    
    if (!fromForm && !hasValidReferrer && !hasSuccessParam) {
      console.log("User attempted to access thank-you page directly with no valid context");
      setInvalidAccess(true);
      // Allow viewing the page but with a notice, rather than forcing a redirect
    } else {
      console.log("Thank you page accessed via proper channels");
    }
    
    // Clear the flag after checking to prevent stale state
    sessionStorage.removeItem('fromFormSubmission');
  }, [navigate]);

  return (
    <PageLayout
      title="Thank You | Locksmith & Security LLC"
      description="Thank you for your submission"
      noindex={true}
      nofollow={true}
    >
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        {invalidAccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg w-full text-center space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-3xl font-bold text-gray-900">Welcome!</h1>
            
            <p className="text-lg text-gray-600">
              This is our confirmation page that is normally shown after form submission.
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
        ) : (
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
        )}
      </div>
    </PageLayout>
  );
};

export default ThankYouPage;
