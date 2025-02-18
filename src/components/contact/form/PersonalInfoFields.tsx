
import { Input } from "@/components/ui/input";

interface PersonalInfoFieldsProps {
  isSubmitting: boolean;
}

const PersonalInfoFields = ({ isSubmitting }: PersonalInfoFieldsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <Input 
          id="name" 
          name="user_name" 
          required 
          placeholder="John Doe"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <Input 
          id="phone" 
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
