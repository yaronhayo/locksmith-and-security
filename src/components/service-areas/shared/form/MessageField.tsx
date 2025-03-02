
import React from "react";

interface MessageFieldProps {
  message: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageField = ({ message, isSubmitting, handleChange }: MessageFieldProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        rows={4}
        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
        required
        disabled={isSubmitting}
      />
    </div>
  );
};

export default MessageField;
