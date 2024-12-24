import PageLayout from "@/components/layouts/PageLayout";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Car } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Car Lockout Service in North Bergen",
  "description": "Professional car lockout services available 24/7 in North Bergen and surrounding areas. Fast response times and licensed technicians.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "image": "/og-image.png",
    "telephone": "+15513037874",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Bergen",
      "addressRegion": "NJ",
      "postalCode": "07047",
      "addressCountry": "US"
    }
  }
};

const CarLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 Car Lockout Service North Bergen | Emergency Auto Locksmith"
      description="Professional car lockout services in North Bergen. Available 24/7 with 15-30 minute response time. Licensed and insured auto locksmith specialists ready to help."
      schema={schema}
    >
      <ServiceLayout
        title="Car Lockout Service"
        description="Locked out of your car? Our professional auto locksmiths are available 24/7 to help you regain access to your vehicle quickly and safely. We service all car makes and models."
        icon={Car}
        service="car-lockout"
        benefits={[
          "24/7 Emergency Service Available",
          "15-30 Minute Response Time",
          "Licensed & Insured Technicians",
          "All Car Makes & Models",
          "Damage-Free Car Opening",
          "Competitive Pricing"
        ]}
      >
        <div className="prose max-w-none">
          <h2>Professional Car Lockout Services in North Bergen</h2>
          <p>
            Getting locked out of your car can be a stressful experience, especially during late hours or in unfamiliar areas. 
            Our professional auto locksmiths are available 24/7 to help you regain access to your vehicle quickly and safely.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3>Our Car Lockout Services Include:</h3>
              <ul className="space-y-2">
                <li>Emergency car lockout assistance</li>
                <li>Car key replacement and duplication</li>
                <li>Broken key extraction</li>
                <li>Transponder key programming</li>
                <li>All car makes and models serviced</li>
                <li>Professional damage-free techniques</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3>Service Areas</h3>
              <p className="mb-4">
                We provide fast car lockout services throughout:
              </p>
              <ul className="space-y-2">
                <li>North Bergen</li>
                <li>Jersey City</li>
                <li>Union City</li>
                <li>West New York</li>
                <li>Secaucus</li>
                <li>Weehawken</li>
                <li>Hoboken</li>
                <li>Guttenberg</li>
              </ul>
            </div>
          </div>
        </div>
      </ServiceLayout>
    </PageLayout>
  );
};

export default CarLockoutPage;