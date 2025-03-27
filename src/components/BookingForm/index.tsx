
import React from "react";
import { useBookingForm } from "./hooks/useBookingFormState";
import { useBookingSubmission } from "./hooks/useBookingSubmission";
import FormContent from "./FormContent";
import FormLoadingSkeleton from "./FormLoadingSkeleton";
import FormFooter from "./FormFooter";
import SubmitButton from "./SubmitButton";

const BookingForm = () => {
  // Use the custom hook to manage form state
  const formState = useBookingForm();
  
  const {
    isLoading,
    showVehicleInfo,
    recaptchaToken,
    setRecaptchaToken,
    address,
    allKeysLost,
    hasUnusedKey,
    showAllKeysLostField,
    showUnusedKeyField,
    errors,
    setErrors,
    validateForm
  } = formState;

  // Use the booking submission hook
  const {
    isSubmitting,
    handleSubmit
  } = useBookingSubmission({
    validateForm,
    setErrors,
    showVehicleInfo,
    recaptchaToken,
    address,
    allKeysLost,
    hasUnusedKey,
    showAllKeysLostField,
    showUnusedKeyField
  });

  return (
    <div className="relative">
      {isLoading ? (
        <FormLoadingSkeleton />
      ) : (
        <>
          <FormContent 
            formState={formState}
            recaptchaToken={recaptchaToken}
            setRecaptchaToken={setRecaptchaToken}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />

          <SubmitButton 
            isSubmitting={isSubmitting} 
            disabled={Object.keys(errors).length > 0}
          />
        </>
      )}
      
      <FormFooter />
    </div>
  );
};

export default BookingForm;
