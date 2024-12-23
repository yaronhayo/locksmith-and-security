import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServiceLayout = ({ title, description, children }: ServiceLayoutProps) => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            {children}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Book Now</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;