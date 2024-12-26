import PageLayout from "@/components/layouts/PageLayout";

const WestNewYork = () => {
  return (
    <PageLayout
      title="West New York Locksmith"
      description="Professional locksmith services in West New York, NJ. Available 24/7 for all your security needs."
      heroTitle="West New York Locksmith Services"
      heroDescription="Your trusted local locksmith serving West New York with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to West New York Locksmith Services</h2>
        <p className="mb-4">At Locksmith & Security LLC, we provide top-notch locksmith services tailored to your needs. Whether you're locked out of your home, need a lock change, or require emergency assistance, our team is here to help.</p>
        <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Emergency Lockout Services</li>
          <li>Residential and Commercial Lock Changes</li>
          <li>Key Duplication and Replacement</li>
          <li>Lock Rekeying Services</li>
          <li>24/7 Availability for All Your Locksmith Needs</li>
        </ul>
        <p>If you need immediate assistance, don't hesitate to contact us at (551) 303-7874. Our professional locksmiths are ready to assist you at any time!</p>
      </div>
    </PageLayout>
  );
};

export default WestNewYork;
