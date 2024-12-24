import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { timeframes } from "../constants";

interface TimeframeFieldProps {
  defaultValue?: string;
  onChange: (value: string) => void;
}

export const TimeframeField = ({ defaultValue, onChange }: TimeframeFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="timeframe">When do you need service?</Label>
      <Select
        name="timeframe"
        defaultValue={defaultValue}
        onValueChange={onChange}
      >
        <SelectTrigger id="timeframe" className="h-10">
          <SelectValue placeholder="Select timeframe" />
        </SelectTrigger>
        <SelectContent>
          {timeframes.map((timeframe) => (
            <SelectItem key={timeframe} value={timeframe}>
              {timeframe}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};