import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha = ({ onChange }: RecaptchaProps) => {
  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        sitekey="6LeQE6YqAAAAAPQkLboESEwCMnnKVkaGTbj63EPN"
        onChange={onChange}
      />
    </div>
  );
};

export default Recaptcha;