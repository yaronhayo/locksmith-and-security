
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdditionalNotesProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitting: boolean;
}

const AdditionalNotes = ({ value, onChange, isSubmitting }: AdditionalNotesProps) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="notes" className="text-sm">Additional Notes</Label>
      <Textarea
        id="notes"
        name="notes"
        placeholder="Additional Notes..."
        className="h-16 text-sm resize-none"
        disabled={isSubmitting}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default AdditionalNotes;
