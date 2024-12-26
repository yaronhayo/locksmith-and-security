import PageLayout from "@/components/layouts/PageLayout";

const Secaucus = () => {
  return (
    <PageLayout
      title="Secaucus Locksmith"
      description="Professional locksmith services in Secaucus, NJ. Available 24/7 for all your security needs."
      heroTitle="Secaucus Locksmith Services"
      heroDescription="Your trusted local locksmith serving Secaucus with 24/7 emergency services"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Secaucus Locksmith Services</h2>
        <p className="mb-4">At Locksmith & Security LLC, we provide a wide range of locksmith services in Secaucus, NJ. Our team of experienced professionals is available 24/7 to assist you with any lock and key issues you may encounter.</p>
        
        <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Emergency lockout services</li>
          <li>Residential locksmith services</li>
          <li>Commercial locksmith solutions</li>
          <li>Automotive locksmith services</li>
          <li>Lock installation and repair</li>
          <li>Key duplication and rekeying</li>
        </ul>

        <p className="mb-4">Whether you are locked out of your home, need to change your locks, or require a new set of keys, our team is here to help. We pride ourselves on our quick response times and exceptional customer service.</p>

        <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
        <p className="mb-4">Locksmith & Security LLC is your trusted locksmith in Secaucus. We are fully licensed and insured, and our technicians are highly trained to handle any locksmith situation. Customer satisfaction is our top priority, and we strive to exceed your expectations with every service we provide.</p>

        <h3 className="text-xl font-semibold mb-2">Contact Us Today!</h3>
        <p>If you need immediate assistance or want to schedule a service, please call us at <a href="tel:5513037874" className="text-secondary">(551) 303-7874</a>. We are here to help you with all your locksmith needs in Secaucus, NJ!</p>
      </div>
    </PageLayout>
  );
};

export default Secaucus;
