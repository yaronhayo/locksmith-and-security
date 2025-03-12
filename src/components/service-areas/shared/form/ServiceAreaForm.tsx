
import React from "react";
import { useServiceAreaForm } from "./useServiceAreaForm";
import FormContainer from "./FormContainer";
import ContactFields from "./ContactFields";
import EmailField from "./EmailField";
import ServiceField from "./ServiceField";
import MessageField from "./MessageField";

interface ServiceAreaFormProps {
  locationName?: string;
}

const ServiceAreaForm = ({ locationName }: ServiceAreaFormProps) => {
  const {
    formState,
    errors,
    isSubmitting,
    isSubmitted,
    recaptchaToken,
    recaptchaError,
    handleChange,
    handleBlur,
    handleRecaptchaChange,
    isFormValid,
    handleSubmit
  } = useServiceAreaForm();

  return (
    <FormContainer
      locationName={locationName}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      isFormValid={isFormValid}
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
        error={null}
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
