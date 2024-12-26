import PageLayout from "@/components/layouts/PageLayout";

const Guttenberg = () => {
  return (
    <PageLayout
      title="Guttenberg Locksmith"
      description="Professional locksmith services in Guttenberg, NJ. Available 24/7 for all your security needs."
      heroTitle="Guttenberg Locksmith Services"
      heroDescription="Your trusted local locksmith serving Guttenberg with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Guttenberg Locksmith Services</h2>
        <p className="mb-4">At Locksmith & Security LLC, we provide a wide range of locksmith services in Guttenberg, NJ. Our team of experienced professionals is available 24/7 to assist you with any lock and key issues you may encounter.</p>
        
        <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Emergency lockout services</li>
          <li>Residential locksmith services</li>
          <li>Commercial locksmith services</li>
          <li>Automotive locksmith services</li>
          <li>Lock installation and repair</li>
          <li>Key duplication and cutting</li>
          <li>Security system installation</li>
        </ul>

        <p className="mb-4">Whether you are locked out of your home, need to change your locks, or require a new set of keys, our team is here to help. We pride ourselves on our quick response times and exceptional customer service.</p>

        <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
        <p className="mb-4">Locksmith & Security LLC is your trusted locksmith in Guttenberg. We are fully licensed and insured, and our technicians are highly trained to handle any locksmith situation. We use the latest tools and techniques to ensure that your security needs are met efficiently and effectively.</p>

        <p className="mb-4">Contact us today for all your locksmith needs in Guttenberg, NJ. We are available 24/7 to assist you!</p>
      </div>
    </PageLayout>
  );
};

export default Guttenberg;
