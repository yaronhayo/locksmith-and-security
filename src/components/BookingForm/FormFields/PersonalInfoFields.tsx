
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface PersonalInfoFieldsProps {
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const PersonalInfoFields = ({ errors, isSubmitting }: PersonalInfoFieldsProps) => {
  return (
    <>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm">Your Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          aria-describedby="name-error"
          className={`h-9 text-sm ${errors.name ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="name"
          required
        />
        {errors.name && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.name}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          aria-describedby="phone-error"
          className={`h-9 text-sm ${errors.phone ? 'border-red-500' : ''}`}
          disabled={isSubmitting}
          autoComplete="tel"
          required
        />
        {errors.phone && (
          <Alert variant="destructive" className="py-2 px-3">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-xs">{errors.phone}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default PersonalInfoFields;
