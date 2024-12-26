import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, Phone, Car, Home, Building2, Star, Tool } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "24/7 Locksmith Services in North Bergen, NJ",
  "description": "Professional locksmith services in North Bergen, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Locksmith & Security LLC",
    "telephone": "+15513037874",
    "areaServed": {
      "@type": "City",
      "name": "North Bergen",
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
      "latitude": "40.7995",
      "longitude": "-74.0246"
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
      "name": "John D."
    },
    "reviewBody": "Excellent emergency locksmith service in North Bergen. Fast response and professional work."
  }
};

const services = [
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "House lockouts, lock changes, rekeying, and security upgrades for your home.",
    link: "/services/house-lockout",
    features: ["24/7 Emergency Service", "Key Duplication", "Lock Installation", "Security Consultation"]
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "Car lockouts, key replacement, and programming for all vehicle makes and models.",
    link: "/services/car-lockout",
    features: ["Emergency Car Lockout", "Key Programming", "Key Replacement", "Transponder Keys"]
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description: "Business security solutions, master key systems, and access control installation.",
    link: "/services/business-lockout",
    features: ["Access Control", "Master Key Systems", "Lock Maintenance", "Security Upgrades"]
  }
];

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Called them at 2 AM when I was locked out of my car in North Bergen. The technician arrived in 20 minutes and had me back in my car quickly. Extremely professional and reasonable pricing.",
    service: "Emergency Car Lockout",
    date: "Last week"
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Had all the locks changed in my new home. They were thorough in explaining the security options and completed the work efficiently. Great service!",
    service: "Residential Lock Change",
    date: "2 weeks ago"
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "Installed a complete access control system for our office building. Their expertise in commercial security is impressive. Highly recommend for business security needs.",
    service: "Commercial Security Installation",
    date: "1 month ago"
  }
];

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for all your locksmith needs in North Bergen."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured professional locksmith services."
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "15-30 minute response time throughout North Bergen."
  }
];

const NorthBergen = () => {
  return (
    <PageLayout
      title="North Bergen Locksmith Services | 24/7 Emergency Locksmith"
      description="Professional locksmith services in North Bergen, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs. Fast response times and competitive rates."
      schema={schema}
      heroTitle="North Bergen Locksmith Services"
      heroDescription="Your trusted local locksmith serving North Bergen with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Serving North Bergen, NJ</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                At Locksmith & Security LLC, we provide comprehensive locksmith services throughout North Bergen. 
                Our team of experienced professionals is available 24/7 to handle all your residential, 
                commercial, and automotive locksmith needs with prompt and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="tel:+15513037874">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link to="/book-online">
                    Book Online
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services in North Bergen</h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="group block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <service.icon className="h-10 w-10 text-primary flex-shrink-0" />
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Tool className="h-4 w-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Customer Reviews in North Bergen</h2>
              <div className="grid gap-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-secondary"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">{review.text}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <p className="text-sm text-gray-500">{review.service}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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

          {/* Booking Form Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Request Service</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NorthBergen;