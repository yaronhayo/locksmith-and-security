
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface MessageFieldProps {
  isSubmitting: boolean;
}

const MessageField = ({ isSubmitting }: MessageFieldProps) => {
  const messageId = "contact-message";
  return (
    <div>
      <Label htmlFor={messageId} className="block text-sm font-medium mb-2">
        How Can We Help You?
      </Label>
      <Textarea 
        id={messageId}
        name="message" 
        rows={4} 
        required 
        placeholder="Please describe what service you need..."
        className="min-h-[120px]"
        disabled={isSubmitting}
      />
    </div>
  );
};

export default MessageField;
