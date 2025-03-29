
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface OtherServiceFieldProps {
  isSubmitting: boolean;
}

const OtherServiceField = ({ isSubmitting }: OtherServiceFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="otherService">Please specify the service needed</Label>
      <Input
        id="otherService"
        name="otherService"
        type="text"
        required
        className="h-10 text-base"
        disabled={isSubmitting}
        autoComplete="off"
      />
    </div>
  );
};

export default OtherServiceField;
