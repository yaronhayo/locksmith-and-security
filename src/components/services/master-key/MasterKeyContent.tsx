
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Key, Shield, Building, Users, ArrowRight, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { masterKeySchema, masterKeyFAQSchema } from "./MasterKeySchema";
import ServicePageContent from "@/components/sections/services/service-page";

export const relatedServices = [
  {
    title: "Commercial Lock Replacement",
    description: "Complete replacement of commercial locks with high-security options",
    link: "/services/commercial-locksmith/lock-replacement",
    path: "/services/commercial-locksmith/lock-replacement",
    icon: Lock
  },
  {
    title: "Commercial Lock Rekey",
    description: "Rekey existing locks to work with new keys without replacing hardware",
    link: "/services/commercial-locksmith/lock-rekey",
    path: "/services/commercial-locksmith/lock-rekey",
    icon: Key
  },
  {
    title: "Access Control Systems",
    description: "Electronic access control solutions for enhanced security",
    link: "/services/commercial-locksmith/access-control",
    path: "/services/commercial-locksmith/access-control",
    icon: Shield
  }
];

const MasterKeyContent = () => {
  return (
    <ServicePageContent
      title="Master Key System Design & Installation"
      description="Professional master key system implementation for effective access control in your business"
      schema={masterKeySchema}
      faqSchema={masterKeyFAQSchema}
      relatedServices={relatedServices}
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Comprehensive Master Key System Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                A well-designed master key system provides precise control over who can access specific areas of your facility, creating a balance between security and convenience.
              </p>
              <p className="text-gray-700 mb-4">
                Our professional locksmiths specialize in designing and implementing custom master key systems that meet the unique security requirements of your business, from simple systems to complex multi-level hierarchies.
              </p>
              <p className="text-gray-700">
                We use high-quality restricted keyways to prevent unauthorized key duplication, ensuring the long-term integrity of your security system.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Streamlined access management with hierarchical control</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reduced key carrying with selective access privileges</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Enhanced security with restricted keyways</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Scalable design that grows with your business</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive key control and tracking systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Master Key System Components</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <Key className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Restricted Keyways</h3>
                <p className="text-gray-600">
                  Specialized key profiles that can only be duplicated with proper authorization, preventing unauthorized key copying and maintaining system integrity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <Building className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hierarchical Structure</h3>
                <p className="text-gray-600">
                  Custom-designed access levels from grand master keys down to individual room keys, creating a logical structure that matches your organizational needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Key Control System</h3>
                <p className="text-gray-600">
                  Documentation and protocols for tracking key assignments, managing authorization for new keys, and handling lost or terminated employee keys.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Master Key System Hierarchy</h2>
          <Tabs defaultValue="structure" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="structure">System Structure</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            <TabsContent value="structure">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Understanding Master Key Hierarchy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Grand Master Key</h4>
                      <p className="text-sm text-gray-600">Opens all locks in the entire system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded">
                      <Key className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Master Keys</h4>
                      <p className="text-sm text-gray-600">Open all locks within a specific department or floor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 rounded">
                      <Key className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sub-Master Keys</h4>
                      <p className="text-sm text-gray-600">Open specific groups of locks within a master system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-50 p-2 rounded">
                      <Key className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Change Keys (User Keys)</h4>
                      <p className="text-sm text-gray-600">Open only one specific lock</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="implementation">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Professional Implementation Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-medium text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Needs Assessment</h4>
                      <p className="text-sm text-gray-600">We conduct a thorough analysis of your facility and security requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-medium text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">System Design</h4>
                      <p className="text-sm text-gray-600">Custom design of your master key hierarchy and access levels</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-medium text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Key Chart Creation</h4>
                      <p className="text-sm text-gray-600">Development of a comprehensive key chart documenting the entire system</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-medium text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Installation & Cylinder Pinning</h4>
                      <p className="text-sm text-gray-600">Precision installation and pinning of cylinders according to the key chart</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-medium text-sm">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Key Cutting & System Testing</h4>
                      <p className="text-sm text-gray-600">Cutting keys and thorough testing of all access levels</p>
                    </div>
                  </li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="maintenance">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Ongoing System Maintenance</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Key Control Protocols</h4>
                      <p className="text-sm text-gray-600">Procedures for issuing, tracking, and revoking keys throughout the system lifecycle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">System Expansion</h4>
                      <p className="text-sm text-gray-600">Adding new doors or access levels to accommodate business growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Lost Key Management</h4>
                      <p className="text-sm text-gray-600">Strategic rekeying when keys are lost or security is compromised</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Regular Security Audits</h4>
                      <p className="text-sm text-gray-600">Periodic review of the master key system to identify and address security vulnerabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Ready to secure your business with a professional master key system?</h2>
              <p className="text-gray-600">Contact our experts for a consultation and custom solution design.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href="tel:2017482070">Call Now</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ServicePageContent>
  );
};

export default MasterKeyContent;
