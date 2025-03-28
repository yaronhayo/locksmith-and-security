
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { submitFormData } from "@/utils/formSubmission";
import { startFormTracking } from "@/utils/sessionTracker";

interface UseBookingSubmissionProps {
  validateForm: (formData: FormData, showVehicleInfo: boolean) => { 
    isValid: boolean; 
    errors: Record<string, string>; 
  };
  setErrors: (errors: Record<string, string>) => void;
  showVehicleInfo: boolean;
  recaptchaToken: string | null;
  address: string;
  allKeysLost: string;
  hasUnusedKey: string;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
}

export const useBookingSubmission = ({
  validateForm,
  setErrors,
  showVehicleInfo,
  recaptchaToken,
  address,
  allKeysLost,
  hasUnusedKey,
  showAllKeysLostField,
  showUnusedKeyField
}: UseBookingSubmissionProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Start form tracking when the component loads
  useEffect(() => {
    startFormTracking();
  }, []);

  const collectVisitorInfo = useCallback(() => {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString()
    };
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission initiated");

    if (!recaptchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set('address', address);
    
    if (showAllKeysLostField) {
      formData.set('all_keys_lost', allKeysLost);
    }
    
    if (showUnusedKeyField) {
      formData.set('has_unused_key', hasUnusedKey);
    }
    
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      console.log("Form validation failed:", validationResult.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    console.log("Form validation passed, proceeding with submission");

    try {
      // Prepare the submission data
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const service = formData.get("service") as string;
      const timeframe = formData.get("timeframe") as string;
      const notes = formData.get("notes") as string;
      const unitNumber = formData.get("unit_number") as string;
      const gateCode = formData.get("gate_code") as string;
      const otherService = formData.get("other_service") as string;

      // Prepare vehicle information if needed
      let vehicleInfo = null;
      if (showVehicleInfo) {
        // Get vehicle data with fallbacks to empty strings so they're correctly read as empty
        const vehicleYear = formData.get("vehicle_year") as string || "";
        const vehicleMake = formData.get("vehicle_make") as string || "";
        const vehicleModel = formData.get("vehicle_model") as string || "";
        
        vehicleInfo = {
          year: vehicleYear,
          make: vehicleMake,
          model: vehicleModel,
          all_keys_lost: allKeysLost === "yes",
          has_unused_key: hasUnusedKey === "yes"
        };
        
        // Log the vehicle info to verify it's being populated correctly
        console.log("Vehicle information being sent:", vehicleInfo);
      }

      // Prepare the submission data with explicit type literal
      const submissionData = {
        type: "booking" as const,
        name,
        phone,
        address: address,
        unit_number: unitNumber || null,
        gate_code: gateCode || null,
        service: service === "Other" ? otherService : service,
        timeframe,
        notes: notes || null,
        status: "pending" as const,
        visitor_info: collectVisitorInfo(),
        source_url: location.pathname,
        recaptcha_token: recaptchaToken,
        vehicle_info: vehicleInfo
      };

      console.log("Submitting form data:", submissionData);
      await submitFormData(submissionData);
      console.log("Form submission successful");
      
      // Store flag for thank-you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      toast({
        title: "Booking Received!",
        description: "We'll contact you shortly to confirm your appointment.",
        variant: "default",
      });

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'event_category': 'form',
          'event_label': 'booking_submission',
          'value': 1
        });
      }

      // Use window.location for a hard redirect to avoid dynamic import issues
      window.location.href = '/thank-you';
    } catch (error: any) {
      console.error('Booking form submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [
    recaptchaToken, 
    address, 
    showAllKeysLostField, 
    allKeysLost, 
    showUnusedKeyField, 
    hasUnusedKey, 
    validateForm, 
    showVehicleInfo, 
    setErrors, 
    toast, 
    collectVisitorInfo, 
    location.pathname, 
    navigate
  ]);

  return {
    isSubmitting,
    handleSubmit
  };
};
