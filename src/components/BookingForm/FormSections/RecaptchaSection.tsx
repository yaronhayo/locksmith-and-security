
import React from "react";
import RecaptchaField from "../RecaptchaField";
import FormSection from "./FormSection";

interface RecaptchaSectionProps {
  onChange: (token: string | null) => void;
  error?: string;
}

const RecaptchaSection: React.FC<RecaptchaSectionProps> = ({
  onChange,
  error
}) => {
  return (
    <FormSection>
      <RecaptchaField
        onChange={onChange}
        error={error}
      />
    </FormSection>
  );
};

export default RecaptchaSection;
