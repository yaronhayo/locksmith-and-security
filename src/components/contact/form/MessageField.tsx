
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";

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
      <div className="relative">
        <div className="absolute top-3 left-3 pointer-events-none">
          <MessageSquare className="h-4 w-4 text-gray-400" />
        </div>
        <Textarea 
          id={messageId}
          name="message" 
          rows={4} 
          required 
          placeholder="Please describe what service you need..."
          className="min-h-[120px] pl-10"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default MessageField;
