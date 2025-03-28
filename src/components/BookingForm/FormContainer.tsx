
import React from "react";
import { validateForm } from "./validation";
import SubmitButton from "./SubmitButton";
import { useBookingSubmission } from "./hooks/useBookingSubmission";

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
  console.log("FormContainer rendering with address:", address);
  
  const { handleSubmit } = useBookingSubmission({
    validateForm,
    setErrors,
    showVehicleInfo,
    recaptchaToken,
    address,
    allKeysLost,
    hasUnusedKey,
    showAllKeysLostField,
    showUnusedKeyField
  });

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
