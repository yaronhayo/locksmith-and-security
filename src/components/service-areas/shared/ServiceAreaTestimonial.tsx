
import { Quote } from "lucide-react";

interface ServiceAreaTestimonialProps {
  locationName: string;
}

const ServiceAreaTestimonial = ({ locationName }: ServiceAreaTestimonialProps) => {
  return (
    <section className="bg-primary/10 rounded-xl overflow-hidden">
      <div className="p-8 md:p-12 relative">
        <Quote className="absolute top-10 right-10 h-32 w-32 text-primary/10 rotate-180" />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-8 relative z-10">What Our {locationName} Customers Say</h2>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm max-w-3xl relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-xl">JD</span>
            </div>
            
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">John D., {locationName}</h3>
              
              <blockquote className="text-gray-700 italic mb-4">
                "I was locked out of my house in {locationName} late on a Sunday evening. I called Locksmith & Security and they had someone at my door within 30 minutes. The technician was professional, efficient, and had me back inside quickly. I highly recommend their services to anyone in the {locationName} area who needs a reliable locksmith."
              </blockquote>
              
              <p className="text-sm text-gray-500">Verified Customer • Residential Lockout Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaTestimonial;
