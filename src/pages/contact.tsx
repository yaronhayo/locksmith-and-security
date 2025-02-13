
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/layouts/PageLayout";
import { supabase } from "@/integrations/supabase/client";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import Recaptcha from "@/components/ui/recaptcha";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [address, setAddress] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    if (!form.current) return;
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const submissionData = {
      type: 'contact',
      name: String(formData.get('user_name')),
      email: String(formData.get('user_email')),
      phone: String(formData.get('user_phone')),
      address: address,
      message: String(formData.get('message')),
      status: 'pending',
      recaptcha_token: recaptchaToken,
      visitor_info: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        timestamp: new Date().toISOString(),
      },
      source_url: window.location.pathname
    };

    try {
      // First store in database
      const { error: dbError } = await supabase
        .from('submissions')
        .insert(submissionData);

      if (dbError) throw dbError;

      // Then send email notification
      const { error } = await supabase.functions.invoke('send-form-email', {
        body: submissionData
      });

      if (error) throw error;

      // Set flag for thank you page
      sessionStorage.setItem('fromFormSubmission', 'true');
      
      // Navigate to thank you page
      navigate('/thank-you');

    } catch (error: any) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
          {/* Left column with contact info */}
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
                  <a href="tel:2017482070" className="text-primary hover:text-primary/80">
                    (201) 748-2070
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:support@247locksmithandsecurity.com" className="text-primary hover:text-primary/80">
                    support@247locksmithandsecurity.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Service Area</h3>
                  <p>Serving North Bergen, NJ and surrounding areas</p>
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

            <div className="h-[300px] w-full">
              <img
                src="/lovable-uploads/5769d20e-e251-4e5f-a743-870d5c267bd1.png"
                alt="Professional mobile locksmith workspace with key programming equipment and tools"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
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
                  <Input 
                    id="name" 
                    name="user_name" 
                    required 
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="user_phone" 
                    type="tel" 
                    required 
                    placeholder="(555) 555-5555"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  name="user_email" 
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Service Address
                </label>
                <AddressAutocomplete
                  value={address}
                  onChange={setAddress}
                  placeholder="123 Main St, North Bergen, NJ"
                  disabled={isSubmitting}
                  required
                />
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
                  disabled={isSubmitting}
                />
              </div>

              <Recaptcha onChange={setRecaptchaToken} />

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
