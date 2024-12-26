import PageLayout from "@/components/layouts/PageLayout";

const NorthBergen = () => {
  return (
    <PageLayout
      title="North Bergen Locksmith"
      description="Professional locksmith services in North Bergen, NJ. Available 24/7 for all your security needs."
      heroTitle="North Bergen Locksmith Services"
      heroDescription="Your trusted local locksmith serving North Bergen with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">North Bergen Locksmith Services</h2>
        <p className="mb-4">At Locksmith & Security LLC, we provide a wide range of locksmith services to meet your needs in North Bergen. Whether you are locked out of your home, need a lock changed, or require emergency services, our team is here to help.</p>
        <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Emergency Lockout Services</li>
          <li>Lock Change and Rekeying</li>
          <li>Car Key Replacement and Programming</li>
          <li>Residential and Commercial Lock Services</li>
        </ul>
        <p>If you need immediate assistance, don't hesitate to contact us at (551) 303-7874. Our professional locksmiths are available 24/7 to ensure your safety and security.</p>
      </div>
    </PageLayout>
  );
};

export default NorthBergen;
