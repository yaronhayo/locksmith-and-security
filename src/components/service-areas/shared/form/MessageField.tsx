
import React from "react";
import { MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface MessageFieldProps {
  message: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageField = ({ message, isSubmitting, handleChange }: MessageFieldProps) => {
  const messageId = "service-area-message";
  
  return (
    <div className="space-y-2">
      <Label htmlFor={messageId} className="text-sm font-medium text-gray-700">
        Message
      </Label>
      <div className="relative">
        <div className="absolute left-3 top-3 pointer-events-none">
          <MessageSquare className="h-4 w-4 text-gray-400" aria-hidden="true" />
        </div>
        <Textarea
          id={messageId}
          name="message"
          value={message}
          onChange={handleChange}
          rows={4}
          className="w-full pl-10 pr-3 py-2 min-h-[120px] border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base"
          placeholder="Tell us about your locksmith needs..."
          disabled={isSubmitting}
          aria-label="Describe your locksmith service requirements"
        />
      </div>
      <p className="text-xs text-gray-500">
        Please provide details about your security needs for a more accurate response
      </p>
    </div>
  );
};

export default MessageField;
