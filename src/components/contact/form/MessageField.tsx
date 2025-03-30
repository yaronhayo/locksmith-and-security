
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface MessageFieldProps {
  isSubmitting: boolean;
  error?: string;
}

const MessageField = ({ isSubmitting, error }: MessageFieldProps) => {
  const [value, setValue] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (isDirty && !value.trim()) {
      setLocalError("Please enter a message");
    } else {
      setLocalError(null);
    }
  }, [value, isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (!isDirty) setIsDirty(true);
  };

  const handleBlur = () => {
    setIsDirty(true);
  };

  // Show external error (from form submission) or internal error (from validation)
  const displayError = error || (isDirty ? localError : null);

  return (
    <div>
      <Label htmlFor="message" className="block text-sm font-medium mb-2">
        Message
      </Label>
      <Textarea
        id="message"
        name="message"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        placeholder="How can we help you?"
        disabled={isSubmitting}
        className={`min-h-[120px] ${displayError ? 'border-red-500' : ''}`}
        aria-invalid={!!displayError}
        aria-describedby={displayError ? "message-error" : undefined}
      />
      {displayError && (
        <Alert variant="destructive" className="mt-1 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id="message-error">{displayError}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default MessageField;
