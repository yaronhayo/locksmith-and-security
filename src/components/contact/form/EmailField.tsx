
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

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
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Mail className="h-4 w-4 text-gray-400" />
        </div>
        <Input 
          id={emailId}
          name="user_email" 
          type="email" 
          required 
          placeholder="john@example.com"
          disabled={isSubmitting}
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default EmailField;
