import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layouts/PageLayout";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Need immediate assistance? Contact our 24/7 emergency locksmith service or fill out the form below, and we'll get back to you as soon as possible."
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="prose max-w-none mb-8">
              <p className="text-lg">
                Need immediate assistance? Contact our 24/7 emergency locksmith service or fill out the form below, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:5513037874" className="text-primary hover:text-primary/80">
                    (551) 303-7874
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>North Bergen, NJ</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:contact@example.com" className="text-primary hover:text-primary/80">
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" rows={6} required />
              </div>

              <Button type="submit" className="w-full">
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