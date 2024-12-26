import PageLayout from "@/components/layouts/PageLayout";

const Hoboken = () => {
  return (
    <PageLayout
      title="Hoboken Locksmith"
      description="Professional locksmith services in Hoboken, NJ. Available 24/7 for all your security needs."
      heroTitle="Hoboken Locksmith Services"
      heroDescription="Your trusted local locksmith serving Hoboken with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Hoboken Locksmith Services</h2>
        <p className="mb-4">At Locksmith & Security LLC, we provide a wide range of locksmith services in Hoboken, NJ. Our team of experienced professionals is available 24/7 to assist you with any locksmith needs you may have.</p>
        <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Emergency Lockout Services</li>
          <li>Lock Installation and Repair</li>
          <li>Key Duplication and Replacement</li>
          <li>Security System Installation</li>
          <li>Automotive Locksmith Services</li>
        </ul>
        <p>If you need immediate assistance, don't hesitate to contact us at (551) 303-7874. We are here to help you!</p>
      </div>
    </PageLayout>
  );
};

export default Hoboken;
