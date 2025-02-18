
import { Textarea } from "@/components/ui/textarea";

interface MessageFieldProps {
  isSubmitting: boolean;
}

const MessageField = ({ isSubmitting }: MessageFieldProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        How Can We Help You?
      </label>
      <Textarea 
        id="message" 
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
