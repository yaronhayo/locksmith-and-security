
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface OtherServiceFieldProps {
  isSubmitting: boolean;
}

const OtherServiceField = ({ isSubmitting }: OtherServiceFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="other_service">Please specify the service needed</Label>
      <Input
        id="other_service"
        name="other_service"
        type="text"
        required
        className="h-10 text-base"
        disabled={isSubmitting}
      />
    </div>
  );
};

export default OtherServiceField;
