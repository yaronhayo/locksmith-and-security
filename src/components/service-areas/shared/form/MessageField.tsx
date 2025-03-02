
import React from "react";

interface MessageFieldProps {
  message: string;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
}

const MessageField = ({ 
  message, 
  isSubmitting, 
  handleChange,
  className = "",
  placeholder = "Tell us about your locksmith needs..." 
}: MessageFieldProps) => {
  const messageId = "message-field";
  
  return (
    <div className={className}>
      <label htmlFor={messageId} className="block text-sm font-medium text-gray-700 mb-1">
        Message <span className="text-gray-400 text-xs">(Optional)</span>
      </label>
      <textarea
        id={messageId}
        name="message"
        value={message}
        onChange={handleChange}
        rows={4}
        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary text-sm sm:text-base resize-y"
        placeholder={placeholder}
        disabled={isSubmitting}
        aria-describedby={`${messageId}-hint`}
      />
      <p className="text-xs text-gray-500 mt-1" id={`${messageId}-hint`}>
        Include any specific details that might help us better understand your needs.
      </p>
    </div>
  );
};

export default MessageField;
