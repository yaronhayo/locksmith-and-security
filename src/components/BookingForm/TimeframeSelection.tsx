import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { timeframes } from "./constants";

interface TimeframeSelectionProps {
  isSubmitting: boolean;
}

const TimeframeSelection = ({ isSubmitting }: TimeframeSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="timeframe">When do you need service?</Label>
      <Select name="timeframe" disabled={isSubmitting}>
        <SelectTrigger 
          id="timeframe" 
          className="h-10 text-base"
          aria-label="Select when you need the service"
        >
          <SelectValue placeholder="When do you need service?" />
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

export default TimeframeSelection;