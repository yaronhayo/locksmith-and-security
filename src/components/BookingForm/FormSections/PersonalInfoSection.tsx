
import React from "react";
import PersonalInfoFields from "../FormFields/PersonalInfoFields";
import FormSection from "./FormSection";

interface PersonalInfoSectionProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  name,
  setName,
  phone,
  setPhone,
  errors,
  isSubmitting
}) => {
  return (
    <FormSection>
      <PersonalInfoFields
        name={name}
        setName={setName}
        phone={setPhone}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </FormSection>
  );
};

export default PersonalInfoSection;
