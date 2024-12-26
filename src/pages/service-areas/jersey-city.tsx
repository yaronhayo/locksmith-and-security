import PageLayout from "@/components/layouts/PageLayout";

const JerseyCity = () => {
  return (
    <PageLayout
      title="Jersey City Locksmith"
      description="Professional locksmith services in Jersey City, NJ. Available 24/7 for all your security needs."
      heroTitle="Jersey City Locksmith Services"
      heroDescription="Your trusted local locksmith serving Jersey City with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Jersey City Locksmith Services</h2>
        <p className="mb-4">At Locksmith & Security LLC, we provide a wide range of locksmith services in Jersey City, NJ. Our team of experienced professionals is available 24/7 to assist you with all your locksmith needs.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Emergency lockout services</li>
          <li>Residential locksmith services</li>
          <li>Commercial locksmith solutions</li>
          <li>Automotive locksmith services</li>
          <li>Lock installation and repair</li>
          <li>Key duplication and cutting</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Why Choose Us?</h3>
        <p className="mb-4">We are committed to providing fast, reliable, and affordable locksmith services in Jersey City. Our technicians are fully licensed and insured, ensuring that you receive the highest quality service.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
        <p>If you need immediate assistance, don't hesitate to call us at <a href="tel:5513037874" className="text-secondary">(551) 303-7874</a>. We are here to help you!</p>
      </div>
    </PageLayout>
  );
};

export default JerseyCity;
