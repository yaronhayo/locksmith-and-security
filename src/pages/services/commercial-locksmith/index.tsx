import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';
import FAQSection from '@/components/sections/FAQSection';
import { commercialFaqs } from '@/data/faqData';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Key, 
  Lock, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  Store, 
  Building, 
  Stethoscope, 
  GraduationCap, 
  Utensils, 
  Hotel, 
  Factory, 
  Warehouse 
} from 'lucide-react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';

const commercialServices = [
  {
    icon: Lock,
    title: "Commercial Lock Replacement",
    description: "Enhance your business security with high-quality commercial-grade lock installation.",
    path: "/services/commercial-locksmith/lock-replacement"
  },
  {
    icon: Key,
    title: "Commercial Lock Rekey",
    description: "Maintain control over who has access to your business with our rekeying services.",
    path: "/services/commercial-locksmith/lock-rekey"
  },
  {
    icon: ShieldCheck,
    title: "Emergency Exit Device",
    description: "Ensure safety and code compliance with professionally installed panic hardware.",
    path: "/services/commercial-locksmith/emergency-exit-device"
  },
  {
    icon: Key,
    title: "Master Key Systems",
    description: "Implement sophisticated access control with customized master key systems.",
    path: "/services/commercial-locksmith/master-key"
  },
  {
    icon: ShieldCheck,
    title: "Access Control Systems",
    description: "Control and monitor access to your facility with modern electronic access systems.",
    path: "/services/commercial-locksmith/access-control"
  }
];

const businessTypes = [
  { name: "Retail Stores", icon: Store },
  { name: "Office Buildings", icon: Building },
  { name: "Medical Facilities", icon: Stethoscope },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Restaurants", icon: Utensils },
  { name: "Hotels", icon: Hotel },
  { name: "Manufacturing", icon: Factory },
  { name: "Warehouses", icon: Warehouse }
];

const CommercialLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Commercial Locksmith Services"
        description="Comprehensive commercial locksmith solutions for businesses of all sizes. From high-security locks to access control systems, we provide expert commercial security services."
      />
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold">Business Security Specialists</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
              Complete Commercial Security Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Protect your business, assets, and employees with our comprehensive commercial locksmith services. From basic hardware to advanced access control systems, we have the expertise to secure your facility.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button asChild variant="outline" className="group w-full">
                      <Link to={service.path} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Building2 className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Protecting Your Business Assets
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your business deserves the highest level of security. Our commercial locksmith services are designed to protect your assets, employees, and customers while ensuring compliance with fire codes and ADA requirements. We work with businesses of all sizes, from small retail shops to large corporate facilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Tiered Access Systems</h3>
                    <p className="text-gray-600">Control who has access to different areas of your facility with customized security solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Commercial Grade Hardware</h3>
                    <p className="text-gray-600">We use only high-quality, commercial-grade hardware built to withstand heavy use.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Code Compliance</h3>
                    <p className="text-gray-600">Our installations meet all local building codes, fire regulations, and ADA requirements.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Our Commercial Services Include</h3>
              <ul className="space-y-4">
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Building2 className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Lockouts</h4>
                    <p className="text-gray-600 text-sm">Emergency access to your business premises</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Lock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">High-Security Locks</h4>
                    <p className="text-gray-600 text-sm">Advanced lock systems for maximum security</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <Key className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Key Control Systems</h4>
                    <p className="text-gray-600 text-sm">Manage and track all keys to your facility</p>
                  </div>
                </li>
                <li className="flex items-center p-4 border-b border-gray-100">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Panic Hardware</h4>
                    <p className="text-gray-600 text-sm">Emergency exit devices that comply with fire codes</p>
                  </div>
                </li>
                <li className="flex items-center p-4">
                  <div className="bg-secondary/10 p-2 rounded-full mr-4">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Security Assessments</h4>
                    <p className="text-gray-600 text-sm">Comprehensive evaluation of your facility's security</p>
                  </div>
                </li>
              </ul>
              
              <Button className="w-full mt-8 py-6" size="lg">
                <Link to="/contact" className="flex items-center justify-center">
                  Request Business Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              We Serve All Types of Businesses
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commercial locksmith services are tailored to meet the unique security needs of various industries and business types.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <type.icon className="h-8 w-8 text-primary mb-3" />
                <span className="text-lg font-semibold text-gray-700">{type.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-20 -mb-20"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-white rounded-full -ml-20 -mt-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Commercial Security Best Practices
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 mt-12 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Implement Access Controls</h3>
                <p className="text-white/80">
                  Use electronic access control systems to monitor and restrict entry to sensitive areas.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Maintain Key Control</h3>
                <p className="text-white/80">
                  Keep detailed records of all keys and establish clear protocols for issuing and returning keys.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Regular Security Audits</h3>
                <p className="text-white/80">
                  Conduct periodic security assessments to identify and address potential vulnerabilities.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-sky-100">Employee Training</h3>
                <p className="text-white/80">
                  Ensure all staff members understand security protocols and their role in maintaining facility security.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <FAQSection 
        faqs={commercialFaqs.slice(0, 12)}
        title="Commercial Locksmith FAQ"
        description="Common questions about our commercial locksmith services"
      />
      
      <ServicesCTA />
    </main>
  );
};

export default CommercialLocksmith;
