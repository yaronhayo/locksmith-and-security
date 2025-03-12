
import { Key, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HierarchyTabs = () => {
  return (
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
  );
};

export default HierarchyTabs;
