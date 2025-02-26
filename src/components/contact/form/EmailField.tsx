
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailFieldProps {
  isSubmitting: boolean;
}

const EmailField = ({ isSubmitting }: EmailFieldProps) => {
  const emailId = "contact-email";
  return (
    <div>
      <Label htmlFor={emailId} className="block text-sm font-medium mb-2">
        Email Address
      </Label>
      <Input 
        id={emailId}
        name="user_email" 
        type="email" 
        required 
        placeholder="john@example.com"
        disabled={isSubmitting}
      />
    </div>
  );
};

export default EmailField;
