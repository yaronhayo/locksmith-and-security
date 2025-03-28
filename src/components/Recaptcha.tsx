
import React from "react";
import Recaptcha from "@/components/ui/recaptcha";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
  error?: string;
}

const RecaptchaWrapper: React.FC<RecaptchaProps> = ({ onChange, error }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <Recaptcha onChange={onChange} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default RecaptchaWrapper;
