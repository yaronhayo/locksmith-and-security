
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { timeframes } from "../constants";

interface TimeframeSelectionProps {
  isSubmitting: boolean;
}

const TimeframeSelection = ({ isSubmitting }: TimeframeSelectionProps) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="timeframe" className="text-sm">When do you need service?</Label>
      <Select name="timeframe" disabled={isSubmitting}>
        <SelectTrigger id="timeframe" className="h-9 text-sm">
          <SelectValue placeholder="When do you need service?" />
        </SelectTrigger>
        <SelectContent>
          {timeframes.map((timeframe) => (
            <SelectItem key={timeframe} value={timeframe} className="text-sm">
              {timeframe}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeframeSelection;
