
import { Button } from "@/components/ui/button";
import Recaptcha from "@/components/ui/recaptcha";
import PersonalInfoFields from "./form/PersonalInfoFields";
import EmailField from "./form/EmailField";
import AddressField from "./form/AddressField";
import MessageField from "./form/MessageField";
import { useContactForm } from "./hooks/useContactForm";

const ContactForm = () => {
  const {
    form,
    address,
    setAddress,
    recaptchaToken,
    setRecaptchaToken,
    isSubmitting,
    errors,
    handleSubmit
  } = useContactForm();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <PersonalInfoFields isSubmitting={isSubmitting} />
        <EmailField isSubmitting={isSubmitting} />
        <AddressField 
          value={address}
          onChange={setAddress}
          isSubmitting={isSubmitting}
          error={errors.address}
        />
        <MessageField isSubmitting={isSubmitting} error={errors.message} />
        <Recaptcha onChange={setRecaptchaToken} />

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary-hover"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
