
import React from "react";
import FormHeader from "./FormHeader";

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
  isSubmitting: boolean;
}

const FormContainer = ({
  children,
  onSubmit,
  isSubmitting,
  ...props
}: FormContainerProps) => {
  return (
    <>
      <FormHeader isSubmitting={isSubmitting} />
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
    </>
  );
};

export default FormContainer;
