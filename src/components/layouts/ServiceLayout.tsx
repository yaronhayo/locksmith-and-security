import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import { LucideIcon } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  benefits?: string[];
}

const ServiceLayout = ({ title, description, children, icon: Icon, benefits }: ServiceLayoutProps) => {
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
            <div className="flex items-center gap-4 mb-4">
              {Icon && <Icon className="h-8 w-8 text-primary" />}
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            {benefits && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Service Benefits</h2>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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