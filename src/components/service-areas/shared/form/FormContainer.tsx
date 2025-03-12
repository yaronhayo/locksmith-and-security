
import { ReactNode } from "react";
import FormHeader from "./FormHeader";
import ContactOptions from "./ContactOptions";
import RecaptchaField from "@/components/BookingForm/RecaptchaField";
import SubmitButton from "./SubmitButton";
import { memo } from "react";

interface FormContainerProps {
  children: ReactNode;
  locationName?: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  isFormValid: boolean;
  recaptcha: {
    recaptchaToken: string | null;
    recaptchaError: string | null;
    isRecaptchaValid: boolean;
    handleRecaptchaChange: (token: string | null) => void;
  };
  onSubmit: (e: React.FormEvent) => void;
}

const FormContainer = memo(({
  children,
  locationName,
  isSubmitting,
  isSubmitted,
  isFormValid,
  recaptcha,
  onSubmit
}: FormContainerProps) => {
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden" id="contact-form">
      <FormHeader locationName={locationName} />
      
      <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        <form onSubmit={onSubmit} className="space-y-4 max-w-full">
          {children}
          
          <RecaptchaField 
            onChange={recaptcha.handleRecaptchaChange} 
            error={recaptcha.recaptchaError || undefined}
            className="pt-2"
          />
          
          <SubmitButton 
            isSubmitting={isSubmitting}
            isDisabled={!isFormValid || !recaptcha.isRecaptchaValid}
          />
        </form>
        
        <ContactOptions />
      </div>
    </section>
  );
});

FormContainer.displayName = 'FormContainer';

export default FormContainer;
