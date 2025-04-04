
import { ReactNode } from "react";
import FormHeader from "./FormHeader";
import ContactOptions from "./ContactOptions";
import RecaptchaField from "@/components/BookingForm/RecaptchaField";
import SubmitButton from "./SubmitButton";
import { memo } from "react";
import { motion } from "framer-motion";

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

const FormContainer = memo(({
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
  const formId = "service-area-form";
  const formHeadingId = "service-area-form-heading";
  const recaptchaFieldId = "service-area-recaptcha";
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden" 
      id="contact-form"
    >
      <FormHeader locationName={locationName} />
      
      <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        <form 
          id={formId}
          onSubmit={onSubmit} 
          className="space-y-4 max-w-full"
          aria-labelledby={formHeadingId}
        >
          <h2 id={formHeadingId} className="sr-only">Contact Form for {locationName || "Service Area"}</h2>
          
          {children}
          
          <RecaptchaField 
            onChange={onRecaptchaChange} 
            error={recaptchaError || undefined}
            className="pt-2"
            id={recaptchaFieldId}
          />
          
          <SubmitButton 
            isSubmitting={isSubmitting}
            isDisabled={!isFormValid}
          />
        </form>
        
        <ContactOptions />
      </div>
    </motion.section>
  );
});

FormContainer.displayName = 'FormContainer';

export default FormContainer;
