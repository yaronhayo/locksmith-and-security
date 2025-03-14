
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
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
    console.log("Booking form submission started");

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    // Ensure address is included
    formData.set('address', address);
    
    // Include conditional fields if shown
    if (showAllKeysLostField) {
      formData.set('all_keys_lost', allKeysLost);
    }
    
    if (showUnusedKeyField) {
      formData.set('has_unused_key', hasUnusedKey);
    }
    
    // Validate the form data
    const validationResult = validateForm(formData, showVehicleInfo);
    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      console.log("Form validation failed:", validationResult.errors);
      toast.error("Please check the form for errors");
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    console.log("Form validation passed, submitting...");

    try {
      // Prepare the submission data
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const service = formData.get("service") as string;
      const timeframe = formData.get("timeframe") as string;
      const notes = formData.get("notes") as string || null;
      const unitNumber = formData.get("unit_number") as string || null;
      const gateCode = formData.get("gate_code") as string || null;
      const otherService = formData.get("other_service") as string || null;

      // Format address with unit number if provided
      const formattedAddress = unitNumber 
        ? `${address} Unit ${unitNumber}`
        : address;

      // Prepare vehicle information if needed
      let vehicleInfo = null;
      if (showVehicleInfo) {
        vehicleInfo = {
          year: formData.get("vehicle_year") as string,
          make: formData.get("vehicle_make") as string,
          model: formData.get("vehicle_model") as string,
          all_keys_lost: allKeysLost === "yes",
          has_unused_key: hasUnusedKey === "yes"
        };
      }

      // Prepare the submission data
      const submissionData = {
        type: "booking" as const,
        name,
        phone,
        address: formattedAddress,
        unit_number: unitNumber,
        gate_code: gateCode,
        service: service === "Other" ? otherService : service,
        timeframe,
        notes: notes,
        status: "pending" as const,
        visitor_info: collectVisitorInfo(),
        source_url: location.pathname,
        recaptcha_token: recaptchaToken,
        vehicle_info: vehicleInfo
      };

      console.log("Submitting booking data:", JSON.stringify(submissionData, null, 2));
      
      // Submit the actual data to Supabase
      const result = await submitFormData(submissionData);
      
      console.log("Booking submitted successfully, result:", result);
      
      // Store flag for thank-you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      toast.success("Booking Received! We'll contact you shortly to confirm your appointment.");

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'event_category': 'form',
          'event_label': 'booking_submission',
          'value': 1
        });
      }

      // Redirect to thank-you page with timeout to ensure state updates complete
      console.log("Redirecting to thank-you page");
      setTimeout(() => {
        navigate('/thank-you');
      }, 300);
      
    } catch (error: any) {
      console.error('Booking form submission error:', error);
      toast.error(error.message || "Please try again or contact us directly.");
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
    collectVisitorInfo, 
    location.pathname, 
    navigate
  ]);

  return {
    isSubmitting,
    handleSubmit
  };
};
