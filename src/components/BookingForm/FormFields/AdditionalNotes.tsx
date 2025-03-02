
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdditionalNotesProps {
  isSubmitting: boolean;
}

const AdditionalNotes = ({ isSubmitting }: AdditionalNotesProps) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="notes" className="text-sm text-gray-800">Additional Notes</Label>
      <Textarea
        id="notes"
        name="notes"
        placeholder="Additional Notes..."
        className="h-16 text-sm resize-none text-gray-900 placeholder:text-gray-500"
        disabled={isSubmitting}
      />
    </div>
  );
};

export default AdditionalNotes;
