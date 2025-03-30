
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface OtherServiceFieldProps {
  isSubmitting: boolean;
}

const OtherServiceField = ({ isSubmitting }: OtherServiceFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="otherServiceField">Please specify the service needed</Label>
      <Input
        id="otherServiceField"
        name="otherService"
        type="text"
        required
        className="h-10 text-base"
        disabled={isSubmitting}
        autoComplete="off"
        aria-label="Other service description"
        aria-required="true"
      />
    </div>
  );
};

export default OtherServiceField;
