
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ResponsiveImage from '@/components/ui/responsive-image';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      content: "(201) 748-2070",
      link: "tel:2017482070"
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@247locksmithandsecurity.com",
      link: "mailto:support@247locksmithandsecurity.com"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Serving North Bergen, NJ and surrounding areas"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Emergency Service Available"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
        <p className="text-lg text-gray-600">
          Our experienced team provides fast, reliable service for everything from emergency lockouts 
          to advanced security system installations for homes and businesses. Serving North Bergen 
          and beyond, we offer clear communication, transparent pricing, and peace of mind with every job.
        </p>
      </div>

      <div className="grid gap-6">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-primary hover:text-primary/80">
                  {item.content}
                </a>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="h-[300px] w-full">
        <img
          src="https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Tech%20Rekeying%20a%20lock.jpg"
          alt="Professional locksmith technician rekeying a lock"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
