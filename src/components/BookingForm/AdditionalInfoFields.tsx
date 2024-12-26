import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdditionalInfoFieldsProps {
  selectedService: string;
  isSubmitting: boolean;
}

const AdditionalInfoFields = ({ selectedService, isSubmitting }: AdditionalInfoFieldsProps) => {
  return (
    <>
      {selectedService === "Other" && (
        <div className="space-y-2">
          <Label htmlFor="otherService">Please specify the service needed</Label>
          <Input
            id="otherService"
            name="otherService"
            type="text"
            required
            className="h-10 text-base"
            disabled={isSubmitting}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Additional Notes..."
          className="h-20 text-base resize-none"
          disabled={isSubmitting}
        />
      </div>
    </>
  );
};

export default AdditionalInfoFields;