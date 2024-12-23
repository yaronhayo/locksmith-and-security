import ServiceLayout from "@/components/layouts/ServiceLayout";

const LockRekeyPage = () => {
  return (
    <ServiceLayout
      title="Professional Lock Rekey Service"
      description="Expert lock rekeying service in North Bergen. Fast, reliable, and affordable lock rekeying by licensed locksmiths."
      service="Lock Rekey"
      callToAction="Need Your Locks Rekeyed?"
    >
      <div className="prose prose-lg max-w-none">
        <p>
          Our professional lock rekeying service provides a cost-effective solution to secure your property without replacing the entire lock. Whether you've lost your keys, moved into a new home, or want to improve security, our expert locksmiths can rekey your locks quickly and efficiently.
        </p>
        
        <h3>Why Choose Our Lock Rekey Service?</h3>
        <ul>
          <li>Fast and professional service</li>
          <li>Cost-effective alternative to lock replacement</li>
          <li>Experienced, licensed locksmiths</li>
          <li>Available 24/7 for emergency service</li>
          <li>Guaranteed workmanship</li>
        </ul>
      </div>
    </ServiceLayout>
  );
};

export default LockRekeyPage;