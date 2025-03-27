
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
  timeframe: string;
  setTimeframe: (value: string) => void;
  error?: string;
  isSubmitting: boolean;
}

const TimeframeSelection = ({ timeframe, setTimeframe, error, isSubmitting }: TimeframeSelectionProps) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="timeframe" className="text-sm">When do you need service?</Label>
      <Select 
        name="timeframe" 
        disabled={isSubmitting} 
        value={timeframe} 
        onValueChange={setTimeframe}
      >
        <SelectTrigger id="timeframe" className="h-9 text-sm">
          <SelectValue placeholder="When do you need service?" />
        </SelectTrigger>
        <SelectContent>
          {timeframes.map((timeframeOption) => (
            <SelectItem key={timeframeOption} value={timeframeOption} className="text-sm">
              {timeframeOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TimeframeSelection;
