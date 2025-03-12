
import React from "react";
import { useFormState } from "./hooks/useFormState";
import { useFormValidation } from "./hooks/useFormValidation";
import { useRecaptcha } from "./hooks/useRecaptcha";
import { useFormSubmission } from "./hooks/useFormSubmission";
import FormContainer from "./FormContainer";
import ContactFields from "./ContactFields";
import EmailField from "./EmailField";
import ServiceField from "./ServiceField";
import MessageField from "./MessageField";

interface ServiceAreaFormProps {
  locationName?: string;
}

const ServiceAreaForm = ({ locationName }: ServiceAreaFormProps) => {
  // Use individual hooks for form functionality
  const {
    formState,
    isDirty,
    handleChange,
    handleBlur
  } = useFormState();
  
  const {
    errors,
    validateForm,
    isFormValid
  } = useFormValidation(formState, isDirty);
  
  const {
    recaptchaToken,
    recaptchaError,
    setRecaptchaError,
    handleRecaptchaChange
  } = useRecaptcha();
  
  const {
    isSubmitting,
    isSubmitted,
    handleSubmit
  } = useFormSubmission(
    formState, 
    errors, 
    validateForm, 
    recaptchaToken,
    setRecaptchaError
  );

  // Calculate if form is valid based on validation and recaptcha
  const isFormValidState = isFormValid(recaptchaToken);

  return (
    <FormContainer
      locationName={locationName}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      isFormValid={isFormValidState}
      recaptchaToken={recaptchaToken}
      recaptchaError={recaptchaError}
      onRecaptchaChange={handleRecaptchaChange}
      onSubmit={handleSubmit}
    >
      <ContactFields 
        formState={formState}
        errors={errors}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      
      <EmailField 
        email={formState.email}
        error={errors.email}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleBlur={() => handleBlur('email')}
      />
      
      <ServiceField 
        service={formState.service}
        error={errors.service}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
      />
      
      <MessageField 
        message={formState.message}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
      />
    </FormContainer>
  );
};

export default ServiceAreaForm;
