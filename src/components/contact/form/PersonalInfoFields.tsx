
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoFieldsProps {
  isSubmitting: boolean;
}

const PersonalInfoFields = ({ isSubmitting }: PersonalInfoFieldsProps) => {
  const nameId = "contact-name";
  const phoneId = "contact-phone";
  
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor={nameId} className="block text-sm font-medium mb-2">
          Full Name
        </Label>
        <Input 
          id={nameId}
          name="user_name" 
          required 
          placeholder="John Doe"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Label htmlFor={phoneId} className="block text-sm font-medium mb-2">
          Phone Number
        </Label>
        <Input 
          id={phoneId}
          name="user_phone" 
          type="tel" 
          required 
          placeholder="(555) 555-5555"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default PersonalInfoFields;
