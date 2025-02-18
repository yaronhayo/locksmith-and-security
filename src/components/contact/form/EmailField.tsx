
import { Input } from "@/components/ui/input";

interface EmailFieldProps {
  isSubmitting: boolean;
}

const EmailField = ({ isSubmitting }: EmailFieldProps) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email Address
      </label>
      <Input 
        id="email" 
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
