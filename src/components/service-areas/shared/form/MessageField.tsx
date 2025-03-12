
import React from "react";
import { MessageSquare } from "lucide-react";

interface MessageFieldProps {
  message: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageField = ({ message, isSubmitting, handleChange }: MessageFieldProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <div className="relative">
        <div className="absolute left-3 top-3 pointer-events-none">
          <MessageSquare className="h-4 w-4 text-gray-400" />
        </div>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          rows={4}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary text-sm sm:text-base"
          placeholder="Tell us about your locksmith needs..."
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default MessageField;
