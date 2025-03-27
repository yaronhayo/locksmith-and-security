
import React from "react";
import AdditionalNotes from "../FormFields/AdditionalNotes";
import FormSection from "./FormSection";

interface NotesSectionProps {
  notes: string;
  setNotes: (notes: string) => void;
  isSubmitting: boolean;
}

const NotesSection: React.FC<NotesSectionProps> = ({
  notes,
  setNotes,
  isSubmitting
}) => {
  return (
    <FormSection>
      <AdditionalNotes
        value={notes}
        onChange={setNotes}
        isSubmitting={isSubmitting}
      />
    </FormSection>
  );
};

export default NotesSection;
