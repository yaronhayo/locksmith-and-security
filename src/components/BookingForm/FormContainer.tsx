
import React from "react";
import SubmitButton from "./SubmitButton";
import { useBookingSubmission } from "./hooks/useBookingSubmission";
import { FormErrors } from "./types";

interface FormContainerProps {
  children: React.ReactNode;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  errors: FormErrors;
  setErrors: (errors: FormErrors) => void;
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
  const { handleSubmit, status } = useBookingSubmission({
    validateForm: (formValues) => ({ isValid: true, errors: {} }), // This will be overridden by the real validation in the hook
    setErrors,
    showVehicleInfo,
    recaptchaToken,
    address,
    allKeysLost,
    hasUnusedKey,
    showAllKeysLostField,
    showUnusedKeyField
  });

  // Update the submitting state based on the status from the hook
  React.useEffect(() => {
    if (status === 'submitting') {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [status, setIsSubmitting]);

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
