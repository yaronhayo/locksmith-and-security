
import { useMemo } from "react";
import { useFormState } from "./hooks/useFormState";
import { useFormValidation } from "./hooks/useFormValidation";
import { useRecaptcha } from "./hooks/useRecaptcha";
import { useFormSubmission } from "./hooks/useFormSubmission";

export const useServiceAreaForm = () => {
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
  
  const isFormValidState = useMemo(() => {
    return isFormValid(recaptchaToken);
  }, [isFormValid, recaptchaToken]);

  return {
    formState,
    errors,
    isSubmitting,
    isSubmitted,
    recaptchaToken,
    recaptchaError,
    handleChange,
    handleBlur,
    handleRecaptchaChange,
    isFormValid: isFormValidState,
    handleSubmit
  };
};
