import PageLayout from "@/components/layouts/PageLayout";
import { Shield, Award, Users, Clock, CheckCircle, Phone, MapPin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "97%", label: "Satisfaction Rate", icon: Users },
    { number: "3K+", label: "Projects Completed", icon: CheckCircle },
  ];

  const features = [
    {
      icon: Shield,
      title: "Experience You Can Count On",
      description: "Years of trusted experience in North Bergen, bringing in-lock and security expertise to town.",
    },
    {
      icon: Award,
      title: "Fast and Reliable Service",
      description: "Quick response times for emergencies, ensuring you're never left waiting.",
    },
    {
      icon: Users,
      title: "Customer Satisfaction is Our Priority",
      description: "Committed to exceeding your expectations and ensuring your 100% satisfaction.",
    },
    {
      icon: CheckCircle,
      title: "Local Expertise You Can Trust",
      description: "Deep knowledge of the community, rapid availability, and reliable solutions for homes, businesses, and cars.",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(551) 303-7874",
      link: "tel:5513037874"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "North Bergen, NJ, United States"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@locksmithandsecurity.com",
      link: "mailto:info@locksmithandsecurity.com"
    }
  ];

  return (
    <PageLayout
      title="About Us | Professional Locksmith Services"
      description="Learn about Locksmith & Security LLC - your trusted local locksmith serving North Bergen since 2010 with professional, reliable security solutions."
      heroTitle="About Our Company"
      heroDescription="Professional locksmith services with a commitment to excellence"
      schema={{
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "image": "public/lovable-uploads/902e3258-253f-4148-b84b-427ba1f768cb.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Bergen",
            "addressRegion": "NJ",
            "addressCountry": "US"
          },
          "telephone": "(551) 303-7874",
          "priceRange": "$$"
        }
      }}
    >
      <div className="container mx-auto px-4">
        {/* Mission & Vision Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  At Locksmith & Security LLC, we provide fast, reliable locksmith services and expert solutions, 
                  prioritizing safety and security for homes, businesses, and vehicles. Our goal is to deliver 
                  tailored solutions with a focus on customer satisfaction and security.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  We aim to be North Bergen's top locksmith provider, known for our commitment to strong customer trust 
                  and consistent improvement. We strive to give all customers reliable, effective solutions to meet 
                  security needs and exceed safety expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/lovable-uploads/902e3258-253f-4148-b84b-427ba1f768cb.png"
                alt="Professional locksmith at work"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Locksmith & Security LLC
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              We're here to help you 24/7. Contact us for any security concerns or questions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {info.link ? (
                  <a href={info.link} className="block p-6 hover:bg-white rounded-lg transition-colors">
                    <info.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </a>
                ) : (
                  <div className="p-6">
                    <info.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/contact">Contact Us Now</a>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutPage;