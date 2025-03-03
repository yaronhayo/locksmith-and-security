
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { validateForm } from "./validation";
import { submitBookingForm } from "./utils/submitForm";
import SubmitButton from "./SubmitButton";
import { handleApiError } from "@/lib/utils";

interface FormContainerProps {
  children: React.ReactNode;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
  showVehicleInfo: boolean;
  recaptchaToken: string | null;
  address: string;
  allKeysLost: string;
  hasUnusedKey: string;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
}

const FormContainer = ({
  children,
  isSubmitting,
  setIsSubmitting,
  errors,
  setErrors,
  showVehicleInfo,
  recaptchaToken,
  address,
  allKeysLost,
  hasUnusedKey,
  showAllKeysLostField,
  showUnusedKeyField
}: FormContainerProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      // Silent error handling, no toast shown
      console.log('Missing reCAPTCHA token');
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
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitBookingForm(formData, showVehicleInfo, location.pathname, recaptchaToken, address);
      window.sessionStorage.setItem('fromFormSubmission', 'true');
      
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'event_category': 'form',
          'event_label': 'booking_submission',
          'value': 1
        });
      }

      navigate('/thank-you');
    } catch (error: any) {
      handleApiError(error, false, 'Booking form submission error:');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-2.5 max-w-full overflow-visible" 
      role="form" 
      aria-label="Service booking form"
    >
      <div className="space-y-2.5">
        {children}
      </div>
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default FormContainer;
