import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layouts/PageLayout";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });

      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Need immediate assistance? Contact our 24/7 emergency locksmith service or fill out the form below, and we'll get back to you as soon as possible."
      heroTitle="Get in Touch"
      heroDescription="Locked out or need to upgrade your security? We're here to help you feel safe and secure."
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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
              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:5513037874" className="text-primary hover:text-primary/80">
                    (551) 303-7874
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>North Bergen, NJ</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-[300px] w-full">
                <img
                  src="/lovable-uploads/5769d20e-e251-4e5f-a743-870d5c267bd1.png"
                  alt="Professional mobile locksmith workspace with key programming equipment and tools"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div className="h-[300px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24153.928494694108!2d-74.0266685!3d40.7995864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f8c8b02ac6cd%3A0x449b1c4cd0845e49!2sNorth%20Bergen%2C%20NJ!5e0!3m2!1sen!2sus!4v1647894537183!5m2!1sen!2sus"
                  className="w-full h-full rounded-lg shadow-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input id="name" name="user_name" required placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" name="user_phone" type="tel" required placeholder="(555) 555-5555" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input id="email" name="user_email" type="email" required placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Service Address
                </label>
                <Input id="address" name="address" required placeholder="123 Main St, North Bergen, NJ" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  How Can We Help You?
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  placeholder="Please describe what service you need..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;