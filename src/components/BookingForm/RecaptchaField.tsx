
import React from "react";
import Recaptcha from "@/components/ui/recaptcha";

interface RecaptchaFieldProps {
  onChange: (token: string | null) => void;
}

const RecaptchaField = ({ onChange }: RecaptchaFieldProps) => {
  return (
    <div className="pt-2 w-full overflow-x-auto">
      <Recaptcha onChange={onChange} />
    </div>
  );
};

export default RecaptchaField;
