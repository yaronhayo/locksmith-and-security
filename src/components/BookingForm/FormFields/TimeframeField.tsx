import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { timeframes } from "../constants";

export const TimeframeField = () => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="timeframe" className="text-sm">When do you need service?</Label>
      <Select name="timeframe">
        <SelectTrigger id="timeframe" className="h-8 text-sm">
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