
import { ReactNode, useState } from "react";
import FormHeader from "./FormHeader";
import ThankYouMessage from "./ThankYouMessage";
import ContactOptions from "./ContactOptions";
import RecaptchaField from "@/components/BookingForm/RecaptchaField";
import SubmitButton from "./SubmitButton";

interface FormContainerProps {
  children: ReactNode;
  locationName?: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  isFormValid: boolean;
  recaptchaToken: string | null;
  recaptchaError: string | null;
  onRecaptchaChange: (token: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FormContainer = ({
  children,
  locationName,
  isSubmitting,
  isSubmitted,
  isFormValid,
  recaptchaToken,
  recaptchaError,
  onRecaptchaChange,
  onSubmit
}: FormContainerProps) => {
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden" id="contact-form">
      <FormHeader locationName={locationName} />
      
      <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        {isSubmitted ? (
          <ThankYouMessage />
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 max-w-full">
            {children}
            
            <RecaptchaField 
              onChange={onRecaptchaChange} 
              error={recaptchaError || undefined}
              className="pt-2"
            />
            
            <SubmitButton 
              isSubmitting={isSubmitting}
              isDisabled={!isFormValid}
            />
          </form>
        )}
        
        <ContactOptions />
      </div>
    </section>
  );
};

export default FormContainer;
