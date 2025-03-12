
import { Key, Building, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SystemComponents = () => {
  return (
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
  );
};

export default SystemComponents;
