
import React from "react";
import FormContainer from "./FormContainer";
import PersonalInfoSection from "./FormSections/PersonalInfoSection";
import ServiceSection from "./FormSections/ServiceSection";
import TimeframeSection from "./FormSections/TimeframeSection";
import AddressSection from "./FormSections/AddressSection";
import VehicleSection from "./FormSections/VehicleSection";
import NotesSection from "./FormSections/NotesSection";
import RecaptchaSection from "./FormSections/RecaptchaSection";

interface FormStateProps {
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
}

interface FormContentProps {
  formState: FormStateProps;
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
      <PersonalInfoSection
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      
      <ServiceSection
        service={service}
        setService={setService}
        otherService={otherService}
        setOtherService={setOtherService}
        errors={errors}
        isSubmitting={isSubmitting}
        setShowVehicleInfo={setShowVehicleInfo}
        setShowAllKeysLostField={setShowAllKeysLostField}
        setShowUnusedKeyField={setShowUnusedKeyField}
      />
      
      <TimeframeSection
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      
      <AddressSection
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
        <VehicleSection
          errors={errors}
          isSubmitting={isSubmitting}
          showAllKeysLostField={showAllKeysLostField}
          showUnusedKeyField={showUnusedKeyField}
          allKeysLost={allKeysLost}
          setAllKeysLost={setAllKeysLost}
          hasUnusedKey={hasUnusedKey}
          setHasUnusedKey={setHasUnusedKey}
        />
      )}
      
      <NotesSection
        notes={notes}
        setNotes={setNotes}
        isSubmitting={isSubmitting}
      />
      
      <RecaptchaSection
        onChange={setRecaptchaToken}
        error={errors.recaptcha}
      />
    </FormContainer>
  );
};

export default FormContent;
