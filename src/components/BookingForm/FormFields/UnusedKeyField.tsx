
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface UnusedKeyFieldProps {
  isSubmitting: boolean;
  onChange: (value: string) => void;
  value: string;
}

const UnusedKeyField = ({ isSubmitting, onChange, value }: UnusedKeyFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="unused_key" className="font-medium">Do you currently have an unused, uncut key that matches your vehicle?</Label>
      <RadioGroup
        defaultValue={value}
        onValueChange={onChange}
        disabled={isSubmitting}
        className="flex gap-4"
        name="unused_key"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="unused_key_yes" />
          <Label htmlFor="unused_key_yes" className="cursor-pointer">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="unused_key_no" />
          <Label htmlFor="unused_key_no" className="cursor-pointer">No</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default UnusedKeyField;
