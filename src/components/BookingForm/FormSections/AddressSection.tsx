
import React from "react";
import AddressFields from "../FormFields/AddressFields";
import FormSection from "./FormSection";

interface AddressSectionProps {
  address: string;
  setAddress: (address: string) => void;
  unitNumber: string;
  setUnitNumber: (unitNumber: string) => void;
  gateCode: string;
  setGateCode: (gateCode: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  address,
  setAddress,
  unitNumber,
  setUnitNumber,
  gateCode,
  setGateCode,
  errors,
  isSubmitting
}) => {
  return (
    <FormSection>
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
    </FormSection>
  );
};

export default AddressSection;
