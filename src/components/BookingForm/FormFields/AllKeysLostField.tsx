
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AllKeysLostFieldProps {
  isSubmitting: boolean;
  onChange: (value: string) => void;
  value: string;
}

const AllKeysLostField = ({ isSubmitting, onChange, value }: AllKeysLostFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="all_keys_lost" className="font-medium text-gray-800">All Keys Lost?</Label>
      <RadioGroup
        defaultValue={value}
        onValueChange={onChange}
        disabled={isSubmitting}
        className="flex gap-4"
        name="all_keys_lost"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="all_keys_lost_yes" />
          <Label htmlFor="all_keys_lost_yes" className="cursor-pointer text-gray-700">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="all_keys_lost_no" />
          <Label htmlFor="all_keys_lost_no" className="cursor-pointer text-gray-700">No</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AllKeysLostField;
