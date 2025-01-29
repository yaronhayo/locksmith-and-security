import React from "react";
import PageLayout from "@/components/layouts/PageLayout";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Thank You | Locksmith & Security LLC"
      description="Thank you for your service request. We'll be in touch shortly."
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
          
          <h1 className="text-4xl font-bold text-gray-900">
            Thank You for Your Request
          </h1>
          
          <p className="text-xl text-gray-600">
            We've received your service request and will contact you shortly to confirm the details.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-lg font-semibold mb-4">What happens next?</h2>
            <ul className="text-left space-y-3 text-gray-600">
              <li>✓ Our team will review your request</li>
              <li>✓ We'll contact you to confirm details</li>
              <li>✓ A professional locksmith will be assigned</li>
              <li>✓ Service will be provided at your location</li>
            </ul>
          </div>

          <div className="pt-8">
            <Button 
              onClick={() => navigate("/")}
              size="lg"
              className="mx-2"
            >
              Return Home
            </Button>
            <Button 
              onClick={() => navigate("/services")}
              variant="outline"
              size="lg"
              className="mx-2"
            >
              View Our Services
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            If you need immediate assistance, please call us at (555) 123-4567
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ThankYouPage;