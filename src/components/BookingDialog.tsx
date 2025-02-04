import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { useEffect } from "react";

interface BookingDialogProps {
  className?: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const BookingDialog = ({ className, variant = "default", size = "default", children }: BookingDialogProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const dialog = document.querySelector('[role="dialog"]');
        if (dialog) {
          (dialog as HTMLElement).setAttribute('aria-hidden', 'true');
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button 
            variant={variant}
            size={size}
            className={className}
            aria-label="Open booking form"
          >
            <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
            Book Online
          </Button>
        )}
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto"
        aria-labelledby="booking-dialog-title"
      >
        <DialogHeader>
          <DialogTitle id="booking-dialog-title" className="text-2xl font-bold text-center">
            Book Your Service
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <BookingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;