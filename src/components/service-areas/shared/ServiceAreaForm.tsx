
import { 
  useServiceAreaForm,
  FormContainer,
  ContactFields,
  EmailField,
  ServiceField,
  MessageField
} from "./form";

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
