
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Key, Shield, Users, Lock, Fingerprint, Smartphone, Wifi, KeyRound } from "lucide-react";
import { motion } from "framer-motion";
import { accessControlSchema, accessControlFAQSchema } from "./AccessControlSchema";
import ServicePageContent from "@/components/sections/services/service-page";

export const relatedServices = [
  {
    title: "Master Key System",
    description: "Custom master key system design and implementation",
    link: "/services/commercial-locksmith/master-key",
    path: "/services/commercial-locksmith/master-key",
    icon: Key
  },
  {
    title: "Commercial Lock Replacement",
    description: "Complete replacement of commercial locks with high-security options",
    link: "/services/commercial-locksmith/lock-replacement",
    path: "/services/commercial-locksmith/lock-replacement",
    icon: Lock
  },
  {
    title: "Emergency Exit Devices",
    description: "Installation and repair of emergency exit devices and push bars",
    link: "/services/commercial-locksmith/emergency-exit-device",
    path: "/services/commercial-locksmith/emergency-exit-device",
    icon: Shield
  }
];

// Convert FAQ schema to the format expected by ServicePageContent
const faqs = accessControlFAQSchema.data.mainEntity.map(item => ({
  question: item.name,
  answer: item.acceptedAnswer.text
}));

const AccessControlContent = () => {
  const mainContent = (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Modern Access Control Solutions for Businesses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Access control systems provide an advanced security solution that goes beyond traditional locks and keys, allowing businesses to manage and monitor who enters specific areas of their facility.
            </p>
            <p className="text-gray-700 mb-4">
              Our comprehensive access control services include consultation, system design, professional installation, and ongoing maintenance to ensure your business security remains at its peak performance.
            </p>
            <p className="text-gray-700">
              We work with industry-leading manufacturers to provide reliable, scalable systems that grow with your business needs, from small single-door setups to enterprise-level integrated security solutions.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Advanced security with customizable access privileges</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Detailed entry logs and security event tracking</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Immediate access revocation for lost credentials</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Remote management through mobile and web applications</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Integration with existing security and building systems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Access Control Technology Options</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <KeyRound className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Card & Fob Systems</h3>
              <p className="text-gray-600">
                Traditional proximity card or key fob systems that offer reliable security with easy credential management and distribution.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <Fingerprint className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Biometric Access</h3>
              <p className="text-gray-600">
                Advanced fingerprint, retina scan, or facial recognition systems for maximum security with unique personal identification.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <Smartphone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Credentials</h3>
              <p className="text-gray-600">
                Modern smartphone-based access using secure encrypted credentials, eliminating the need for physical cards or fobs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">System Components & Features</h2>
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="components">Core Components</TabsTrigger>
            <TabsTrigger value="features">Advanced Features</TabsTrigger>
            <TabsTrigger value="integration">System Integration</TabsTrigger>
          </TabsList>
          <TabsContent value="components">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Essential System Components</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Electronic Door Hardware</h4>
                    <p className="text-sm text-gray-600">Electromagnetic locks, electric strikes, or smart locksets installed on doors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Access Control Panels</h4>
                    <p className="text-sm text-gray-600">Central processing units that control multiple doors and store access permissions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-2 rounded">
                    <Fingerprint className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Credential Readers</h4>
                    <p className="text-sm text-gray-600">Card readers, keypads, or biometric scanners that authenticate users</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-50 p-2 rounded">
                    <Wifi className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Management Software</h4>
                    <p className="text-sm text-gray-600">Software to program and monitor the entire system from a central location</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Advanced Security Features</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-medium text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Time-Based Access Control</h4>
                    <p className="text-sm text-gray-600">Set specific hours when individuals can access particular areas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-medium text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Anti-Passback</h4>
                    <p className="text-sm text-gray-600">Prevents credential sharing by requiring proper entry/exit sequences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-medium text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Requires two different credentials for enhanced security</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-medium text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Lockdown Capabilities</h4>
                    <p className="text-sm text-gray-600">Immediate lockdown of all or specific doors during emergency situations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-medium text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Detailed Audit Trails</h4>
                    <p className="text-sm text-gray-600">Comprehensive logs of all access attempts, successful or denied</p>
                  </div>
                </li>
              </ol>
            </div>
          </TabsContent>
          <TabsContent value="integration">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Integration Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Video Surveillance</h4>
                    <p className="text-sm text-gray-600">Link door events with video records for visual verification of access events</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Alarm Systems</h4>
                    <p className="text-sm text-gray-600">Coordinate with intrusion detection for comprehensive security monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">HR Systems</h4>
                    <p className="text-sm text-gray-600">Synchronize with employee databases for automatic credential management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Building Automation</h4>
                    <p className="text-sm text-gray-600">Control lighting, HVAC, and other systems based on occupancy</p>
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
            <h2 className="text-xl font-bold mb-2">Ready to upgrade your business security with modern access control?</h2>
            <p className="text-gray-600">Contact our security experts for a customized system design and implementation plan.</p>
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
  );

  return (
    <ServicePageContent
      title="Access Control Systems"
      description="Professional access control system design, installation and maintenance for enhanced business security"
      serviceName="Access Control Systems"
      serviceCategory="Commercial Locksmith"
      mainContent={mainContent}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
};

export default AccessControlContent;
