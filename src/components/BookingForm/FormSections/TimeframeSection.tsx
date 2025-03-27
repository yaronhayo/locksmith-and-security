
import React from "react";
import TimeframeSelection from "../FormFields/TimeframeSelection";
import FormSection from "./FormSection";

interface TimeframeSectionProps {
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

const TimeframeSection: React.FC<TimeframeSectionProps> = ({
  timeframe,
  setTimeframe,
  errors,
  isSubmitting
}) => {
  return (
    <FormSection>
      <TimeframeSelection
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        error={errors.timeframe}
        isSubmitting={isSubmitting}
      />
    </FormSection>
  );
};

export default TimeframeSection;
