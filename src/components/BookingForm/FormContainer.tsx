
import React from "react";
import { validateForm } from "./validation";
import SubmitButton from "./SubmitButton";
import { useBookingSubmission } from "./hooks/useBookingSubmission";

interface FormContainerProps {
  children: React.ReactNode;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
  showVehicleInfo: boolean;
  recaptchaToken: string | null;
  address: string;
  allKeysLost: string;
  hasUnusedKey: string;
  showAllKeysLostField: boolean;
  showUnusedKeyField: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormContainer = ({
  children,
  onSubmit,
  ...props
}: FormContainerProps) => {
  return (
    <form 
      onSubmit={onSubmit} 
      className="space-y-2.5 max-w-full overflow-visible" 
      role="form" 
      aria-label="Service booking form"
    >
      <div className="space-y-2.5">
        {children}
      </div>
    </form>
  );
};

export default FormContainer;
