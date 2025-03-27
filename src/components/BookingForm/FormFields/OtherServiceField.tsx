
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface OtherServiceFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  isSubmitting: boolean;
}

const OtherServiceField = ({ value, onChange, error, isSubmitting }: OtherServiceFieldProps) => {
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default OtherServiceField;
