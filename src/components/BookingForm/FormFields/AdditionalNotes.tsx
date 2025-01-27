import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdditionalNotesProps {
  isSubmitting: boolean;
}

const AdditionalNotes = ({ isSubmitting }: AdditionalNotesProps) => {
  return (
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
  );
};

export default AdditionalNotes;