
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AlertError from "./AlertError";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  isSubmitting?: boolean;
  required?: boolean;
  className?: string;
}

const SelectField = ({
  id,
  name,
  label,
  placeholder = "Select an option",
  options,
  value,
  onChange,
  error,
  isSubmitting = false,
  required = false,
  className = "",
}: SelectFieldProps) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
      <Select
        value={value}
        onValueChange={onChange}
        disabled={isSubmitting}
        name={name}
      >
        <SelectTrigger
          id={id}
          className={`h-9 text-sm ${error ? "border-red-500" : ""}`}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <AlertError id={`${id}-error`} message={error} />}
    </div>
  );
};

export default SelectField;
