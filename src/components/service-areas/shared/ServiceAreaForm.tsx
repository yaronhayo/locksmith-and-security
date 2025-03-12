
import { useServiceAreaForm } from "./form/useServiceAreaForm";
import FormContainer from "./form/FormContainer";
import ContactFields from "./form/ContactFields";
import EmailField from "./form/EmailField";
import ServiceField from "./form/ServiceField";
import MessageField from "./form/MessageField";
import { memo } from "react";

interface ServiceAreaFormProps {
  locationName?: string;
}

const ServiceAreaForm = memo(({ locationName }: ServiceAreaFormProps) => {
  const {
    formState,
    errors,
    isSubmitting,
    isSubmitted,
    recaptcha,
    handleChange,
    handleBlur,
    isFormValid,
    handleSubmit
  } = useServiceAreaForm();
  
  return (
    <FormContainer
      locationName={locationName}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      isFormValid={isFormValid}
      recaptcha={recaptcha}
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
});

ServiceAreaForm.displayName = 'ServiceAreaForm';

export default ServiceAreaForm;
