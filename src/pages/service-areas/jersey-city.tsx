import PageLayout from "@/components/layouts/PageLayout";
import { Clock, Shield, Phone } from "lucide-react";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";
import ServiceAreaHero from "@/components/service-areas/jersey-city/ServiceAreaHero";
import ServicesList from "@/components/service-areas/jersey-city/ServicesList";
import ReviewsSection from "@/components/sections/ReviewsSection";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Locksmith Services in Jersey City, NJ",
  "description": "Professional locksmith services in Jersey City, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "+15513037874",
    "areaServed": {
      "@type": "City",
      "name": "Jersey City",
      "containedIn": {
        "@type": "State",
        "name": "New Jersey"
      }
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7282",
      "longitude": "-74.0776"
    },
    "geoRadius": "5mi"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Sarah M."
    },
    "reviewBody": "Excellent emergency locksmith service in Jersey City. Fast response and professional work."
  }
};

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for all your locksmith needs in Jersey City."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured professional locksmith services."
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "15-30 minute response time throughout Jersey City."
  }
];

const JerseyCity = () => {
  return (
    <PageLayout
      title="Jersey City Locksmith Services | 24/7 Emergency Locksmith"
      description="Professional locksmith services in Jersey City, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response times and competitive rates."
      schema={schema}
      heroTitle="Jersey City Locksmith Services"
      heroDescription="Your trusted local locksmith serving Jersey City with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ServiceAreaHero />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Request Service</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <ServicesList />
        </div>

        <div className="mt-16">
          <ReviewsSection location="Jersey City" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default JerseyCity;