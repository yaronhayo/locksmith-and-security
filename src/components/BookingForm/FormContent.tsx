
import React from "react";
import PersonalInfoFields from "./FormFields/PersonalInfoFields";
import ServiceSelection from "./FormFields/ServiceSelection";
import TimeframeSelection from "./FormFields/TimeframeSelection";
import AddressFields from "./FormFields/AddressFields";
import VehicleFields from "./FormFields/VehicleFields";
import AdditionalNotes from "./FormFields/AdditionalNotes";
import RecaptchaField from "./RecaptchaField";
import FormContainer from "./FormContainer";
import OtherServiceField from "./FormFields/OtherServiceField";
import AllKeysLostField from "./FormFields/AllKeysLostField";
import UnusedKeyField from "./FormFields/UnusedKeyField";

interface FormContentProps {
  formState: {
    name: string;
    setName: (name: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    service: string;
    setService: (service: string) => void;
    otherService: string;
    setOtherService: (service: string) => void;
    timeframe: string;
    setTimeframe: (timeframe: string) => void;
    address: string;
    setAddress: (address: string) => void;
    unitNumber: string;
    setUnitNumber: (unitNumber: string) => void;
    gateCode: string;
    setGateCode: (gateCode: string) => void;
    notes: string;
    setNotes: (notes: string) => void;
    showVehicleInfo: boolean;
    setShowVehicleInfo: (show: boolean) => void;
    showAllKeysLostField: boolean;
    setShowAllKeysLostField: (show: boolean) => void;
    showUnusedKeyField: boolean;
    setShowUnusedKeyField: (show: boolean) => void;
    allKeysLost: string;
    setAllKeysLost: (value: string) => void;
    hasUnusedKey: string;
    setHasUnusedKey: (value: string) => void;
    errors: Record<string, string>;
  };
  recaptchaToken: string | null;
  setRecaptchaToken: (token: string | null) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormContent: React.FC<FormContentProps> = ({
  formState,
  recaptchaToken,
  setRecaptchaToken,
  isSubmitting,
  onSubmit
}) => {
  const {
    name,
    setName,
    phone,
    setPhone,
    service,
    setService,
    otherService,
    setOtherService,
    timeframe,
    setTimeframe,
    address,
    setAddress,
    unitNumber,
    setUnitNumber,
    gateCode,
    setGateCode,
    notes,
    setNotes,
    showVehicleInfo,
    setShowVehicleInfo,
    allKeysLost,
    setAllKeysLost,
    hasUnusedKey,
    setHasUnusedKey,
    showAllKeysLostField,
    setShowAllKeysLostField,
    showUnusedKeyField,
    setShowUnusedKeyField,
    errors
  } = formState;

  return (
    <FormContainer
      errors={errors}
      setErrors={() => {}}
      showVehicleInfo={showVehicleInfo}
      recaptchaToken={recaptchaToken}
      address={address}
      allKeysLost={allKeysLost}
      hasUnusedKey={hasUnusedKey}
      showAllKeysLostField={showAllKeysLostField}
      showUnusedKeyField={showUnusedKeyField}
      onSubmit={onSubmit}
    >
      <PersonalInfoFields
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      
      <ServiceSelection
        service={service}
        setService={setService}
        error={errors.service}
        isSubmitting={isSubmitting}
        setShowVehicleInfo={setShowVehicleInfo}
        setShowAllKeysLostField={setShowAllKeysLostField}
        setShowUnusedKeyField={setShowUnusedKeyField}
      />
      
      {service === "Other" && (
        <OtherServiceField
          value={otherService}
          onChange={setOtherService}
          error={errors.otherService}
          isSubmitting={isSubmitting}
        />
      )}
      
      <TimeframeSelection
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        error={errors.timeframe}
        isSubmitting={isSubmitting}
      />
      
      <AddressFields
        address={address}
        setAddress={setAddress}
        unitNumber={unitNumber}
        setUnitNumber={setUnitNumber}
        gateCode={gateCode}
        setGateCode={setGateCode}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      
      {showVehicleInfo && (
        <>
          <VehicleFields errors={errors} isSubmitting={isSubmitting} />
          
          {showAllKeysLostField && (
            <AllKeysLostField
              value={allKeysLost}
              onChange={setAllKeysLost}
              isSubmitting={isSubmitting}
            />
          )}
          
          {showUnusedKeyField && (
            <UnusedKeyField
              value={hasUnusedKey}
              onChange={setHasUnusedKey}
              isSubmitting={isSubmitting}
            />
          )}
        </>
      )}
      
      <AdditionalNotes
        value={notes}
        onChange={setNotes}
        isSubmitting={isSubmitting}
      />
      
      <RecaptchaField
        onChange={setRecaptchaToken}
        error={errors.recaptcha}
      />
    </FormContainer>
  );
};

export default FormContent;
