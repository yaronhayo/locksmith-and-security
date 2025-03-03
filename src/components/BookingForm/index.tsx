
import React, { useState, useEffect } from "react";
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

interface BookingFormProps {
  preselectedService?: string;
}

const BookingForm = ({ preselectedService }: BookingFormProps) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const {
    isSubmitting,
    setIsSubmitting,
    selectedService,
    setSelectedService,
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

  // Set preselected service if provided
  useEffect(() => {
    if (preselectedService && !selectedService) {
      handleServiceChange(preselectedService);
    }
  }, [preselectedService, selectedService, handleServiceChange]);

  // Handle address changes
  const handleAddressChange = (newAddress: string) => {
    console.log("BookingForm address changed to:", newAddress);
    setAddress(newAddress);
  };

  return (
    <FormContainer
      isSubmitting={isSubmitting}
      setIsSubmitting={setIsSubmitting}
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
      <PersonalInfoFields errors={errors} isSubmitting={isSubmitting} />
      
      <AddressFields 
        address={address}
        onChange={handleAddressChange}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      
      <ServiceSelection 
        error={errors.service}
        isSubmitting={isSubmitting}
        onServiceChange={handleServiceChange}
        selectedService={selectedService}
      />

      {showAllKeysLostField && (
        <AllKeysLostField
          isSubmitting={isSubmitting}
          onChange={handleAllKeysLostChange}
          value={allKeysLost}
        />
      )}

      {showUnusedKeyField && (
        <UnusedKeyField
          isSubmitting={isSubmitting}
          onChange={handleUnusedKeyChange}
          value={hasUnusedKey}
        />
      )}

      {showVehicleInfo && (
        <VehicleFields errors={errors} isSubmitting={isSubmitting} />
      )}

      <TimeframeSelection isSubmitting={isSubmitting} />

      {selectedService === "Other" && (
        <OtherServiceField isSubmitting={isSubmitting} />
      )}

      <AdditionalNotes isSubmitting={isSubmitting} />
      
      <RecaptchaField onChange={setRecaptchaToken} />
    </FormContainer>
  );
};

export default BookingForm;
