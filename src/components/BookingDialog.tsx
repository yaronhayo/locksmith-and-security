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

interface BookingDialogProps {
  className?: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const BookingDialog = ({ className, variant = "default", size = "default", children }: BookingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button 
            variant={variant}
            size={size}
            className={className}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Online
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Book Your Service</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <BookingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;