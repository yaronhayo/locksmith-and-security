
import React, { useState } from "react";
import { useBookingFormState } from "./hooks/useBookingFormState";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import VehicleFields from "./FormFields/VehicleFields";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import OtherServiceField from "./FormFields/OtherServiceField";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import AllKeysLostField from "./FormFields/AllKeysLostField";
import UnusedKeyField from "./FormFields/UnusedKeyField";
import FormContainer from "./FormContainer";
import AddressFields from "./AddressFields";
import RecaptchaField from "./RecaptchaField";

const BookingForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const {
    selectedService,
    allKeysLost,
    hasUnusedKey,
    showVehicleInfo,
    showAllKeysLostField,
    showUnusedKeyField,
    errors,
    setErrors,
    handleServiceChange,
    handleAllKeysLostChange,
    handleUnusedKeyChange,
  } = useBookingFormState();

  return (
    <FormContainer
      errors={errors}
      setErrors={setErrors}
      showVehicleInfo={showVehicleInfo}
      recaptchaToken={recaptchaToken}
      address={address}
      allKeysLost={allKeysLost}
      hasUnusedKey={hasUnusedKey}
      showAllKeysLostField={showAllKeysLostField}
      showUnusedKeyField={showUnusedKeyField}
    >
      <PersonalInfoFields errors={errors} isSubmitting={false} />
      
      <AddressFields 
        address={address}
        onChange={setAddress}
        errors={errors}
        isSubmitting={false}
      />
      
      <ServiceSelection 
        error={errors.service}
        isSubmitting={false}
        onServiceChange={handleServiceChange}
      />

      {showAllKeysLostField && (
        <AllKeysLostField
          isSubmitting={false}
          onChange={handleAllKeysLostChange}
          value={allKeysLost}
        />
      )}

      {showUnusedKeyField && (
        <UnusedKeyField
          isSubmitting={false}
          onChange={handleUnusedKeyChange}
          value={hasUnusedKey}
        />
      )}

      {showVehicleInfo && (
        <VehicleFields errors={errors} isSubmitting={false} />
      )}

      <TimeframeSelection isSubmitting={false} />

      {selectedService === "Other" && (
        <OtherServiceField isSubmitting={false} />
      )}

      <AdditionalNotes isSubmitting={false} />
      
      <RecaptchaField onChange={setRecaptchaToken} />
    </FormContainer>
  );
};

export default BookingForm;
