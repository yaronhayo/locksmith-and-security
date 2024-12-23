import { ArrowRight, Lock, Car, Building2, Key, Settings, Wrench } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Lock, title: "House Lockout", description: "Quick access restoration to your home", link: "/services/house-lockout" },
  { icon: Car, title: "Car Lockout", description: "Fast vehicle lockout assistance", link: "/services/car-lockout" },
  { icon: Building2, title: "Business Lockout", description: "Commercial security solutions", link: "/services/business-lockout" },
  { icon: Key, title: "Lock Change", description: "Complete lock replacement service", link: "/services/lock-change" },
  { icon: Settings, title: "Lock Rekey", description: "Professional lock rekeying service", link: "/services/lock-rekey" },
  { icon: Building2, title: "Business Lock Change", description: "Commercial lock replacement", link: "/services/business-lock-change" },
  { icon: Car, title: "New Car Key", description: "Car key replacement and programming", link: "/services/new-car-key" }
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="secondary">
                  <a href={service.link}>Learn More <ArrowRight className="ml-2" /></a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;