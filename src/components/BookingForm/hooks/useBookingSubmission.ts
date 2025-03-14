
import { useState, useCallback, useEffect } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionAttempted, setSubmissionAttempted] = useState(false);

  // Start form tracking when the component loads
  useEffect(() => {
    try {
      startFormTracking();
    } catch (error) {
      console.error("Failed to start form tracking:", error);
    }
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
    setSubmissionAttempted(true);

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }
    
    if (!address.trim()) {
      setErrors({address: "Please enter a valid service address"});
      toast.error("Please enter a valid service address");
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
      
      // Show first error as toast
      const firstError = Object.values(validationResult.errors)[0];
      if (firstError) {
        toast.error(firstError);
      } else {
        toast.error("Please check the form for errors");
      }
      
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
      await submitFormData(submissionData);
      
      console.log("Booking submitted successfully");
      
      // Note: Redirection is now handled in submitFormData

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
    submissionAttempted
  ]);

  return {
    isSubmitting,
    submissionAttempted,
    handleSubmit
  };
};
