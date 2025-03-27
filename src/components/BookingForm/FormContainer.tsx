
import { ReactNode, FormEvent } from "react";
import FormHeader from "./FormHeader";

interface FormContainerProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
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
  onSubmit,
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
  return (
    <div className="w-full">
      <FormHeader />
      <form 
        id="booking-form" 
        className="space-y-6 mb-6"
        onSubmit={onSubmit}
        noValidate
      >
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
