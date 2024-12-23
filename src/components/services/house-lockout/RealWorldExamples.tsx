import { Card, CardContent } from "@/components/ui/card";

const examples = [
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

const RealWorldExamples = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Real-World Examples</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              <p className="text-gray-600">{example.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RealWorldExamples;