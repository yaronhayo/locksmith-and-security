import PageLayout from "@/components/layouts/PageLayout";
import { Shield, Clock, Check, Key, Lock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Emergency House Lockout Service in North Bergen",
  "description": "Professional residential lockout services available 24/7 in North Bergen and surrounding areas. Fast response times and licensed technicians.",
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
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7995",
        "longitude": "-74.0246"
      },
      "geoRadius": "30mi"
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7995",
      "longitude": "-74.0246"
    },
    "geoRadius": "30mi"
  }
};

const commonQuestions = [
  {
    question: "How quickly can you arrive for a house lockout?",
    answer: "We typically arrive within 15-30 minutes of your call in North Bergen and surrounding areas. Our emergency response team is available 24/7 and strategically positioned throughout the service area to ensure rapid response times."
  },
  {
    question: "What are your rates for house lockout services?",
    answer: "Our house lockout service rates start at $75, with final pricing depending on factors like time of day, lock type, and specific service requirements. We provide upfront pricing before beginning any work and don't have hidden fees."
  },
  {
    question: "Do you damage the lock when opening it?",
    answer: "No, we use non-destructive entry methods whenever possible. Our professional locksmiths are trained in various techniques to open locks without causing damage. However, if the lock is compromised, we can replace it on the spot."
  },
  {
    question: "What identification do I need to prove it's my house?",
    answer: "We require valid government-issued ID and proof of residency (utility bill, lease agreement, or property deed) matching the address. This is for your security and protection."
  },
  {
    question: "Can you handle all types of residential locks?",
    answer: "Yes, we're experienced with all types of residential locks including traditional pin tumbler locks, deadbolts, smart locks, high-security locks, and keypad entry systems."
  }
];

const realWorldExamples = [
  {
    title: "Late Night Emergency",
    description: "A family returned from vacation at 2 AM to find their house keys missing. Our technician arrived within 20 minutes, verified their identity, and had them safely inside within minutes using non-destructive entry techniques."
  },
  {
    title: "Smart Lock Malfunction",
    description: "A homeowner's smart lock stopped responding after a power outage. We diagnosed the issue, replaced the backup battery, and restored access while also showing them how to manually override the system in future emergencies."
  },
  {
    title: "Lost Keys During Move-In",
    description: "New homeowners lost their only set of keys during moving day. We arrived promptly, created new keys, and recommended a master key system to prevent future lockouts."
  }
];

const HouseLockoutPage = () => {
  return (
    <PageLayout
      title="24/7 House Lockout Service North Bergen | Emergency Residential Locksmith"
      description="Professional house lockout services in North Bergen. Available 24/7 with 15-30 minute response time. Licensed and insured residential locksmith specialists ready to help."
      schema={schema}
    >
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Emergency House Lockout Service in North Bergen
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Locked out of your home? Our professional locksmiths provide fast, reliable residential lockout solutions with response times as quick as 15-30 minutes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="text-primary mr-2" />
                    <span>15-30 minute response time</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="text-primary mr-2" />
                    <span>Licensed and insured technicians</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" />
                    <span>Available 24/7/365</span>
                  </li>
                  <li className="flex items-center">
                    <Lock className="text-primary mr-2" />
                    <span>Non-destructive entry methods</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Service Coverage</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MapPin className="text-primary mr-2" />
                    <span>North Bergen</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="text-primary mr-2" />
                    <span>Jersey City</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="text-primary mr-2" />
                    <span>Union City</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="text-primary mr-2" />
                    <span>Surrounding Areas</span>
                  </li>
                </ul>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our House Lockout Services</h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Being locked out of your home can be a stressful and potentially dangerous situation, 
                  especially during late hours or severe weather. At Locksmith & Security LLC, we provide 
                  rapid, professional house lockout services throughout North Bergen and surrounding areas, 
                  ensuring you regain access to your home quickly and safely.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Lockout Solutions</h3>
                <p className="mb-6">
                  Our residential lockout services include:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Emergency lockout assistance</li>
                  <li>Lock picking and non-destructive entry</li>
                  <li>Broken key extraction</li>
                  <li>Lock repair and replacement</li>
                  <li>Key duplication and replacement</li>
                  <li>Smart lock installation and programming</li>
                  <li>Security assessment and upgrades</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Professional Expertise</h3>
                <p className="mb-6">
                  Our technicians are highly trained professionals with years of experience in residential 
                  locksmith services. We stay up-to-date with the latest lock technologies and security 
                  solutions to provide you with the best possible service. All our locksmiths are:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Licensed and certified</li>
                  <li>Background checked</li>
                  <li>Fully insured</li>
                  <li>Continuously trained on new technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Real-World Examples</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {realWorldExamples.map((example, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                    <p className="text-gray-600">{example.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {commonQuestions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <div className="bg-primary/5 p-8 rounded-lg my-8">
              <h2 className="text-3xl font-bold mb-4">Need Emergency House Lockout Service?</h2>
              <p className="text-lg mb-6">
                Don't wait outside your home. Our professional locksmiths are ready to help 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="tel:5513037874" className="flex items-center">
                    <Phone className="mr-2" />
                    Call (551) 303-7874
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="/booking">Book Online</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HouseLockoutPage;