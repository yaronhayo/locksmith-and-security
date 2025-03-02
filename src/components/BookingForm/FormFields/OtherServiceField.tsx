
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface OtherServiceFieldProps {
  isSubmitting: boolean;
}

const OtherServiceField = ({ isSubmitting }: OtherServiceFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="otherService" className="text-gray-800">Please specify the service needed</Label>
      <Input
        id="otherService"
        name="otherService"
        type="text"
        required
        className="h-10 text-base text-gray-900 placeholder:text-gray-500"
        disabled={isSubmitting}
        placeholder="Describe the service you need"
      />
    </div>
  );
};

export default OtherServiceField;
