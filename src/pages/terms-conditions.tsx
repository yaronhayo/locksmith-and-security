import PageLayout from "@/components/layouts/PageLayout";

const TermsConditionsPage = () => {
  return (
    <PageLayout
      title="Terms & Conditions"
      description="Terms and Conditions for Locksmith & Security LLC - Your trusted locksmith service provider in North Bergen, NJ."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to Locksmith & Security LLC (NJ DCA License #13VH13153100). These terms and conditions outline the rules and regulations
              for the use of our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p>
              We provide professional locksmith services in North Bergen and surrounding areas. By using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information when requesting services</li>
              <li>Pay the agreed-upon fees for services rendered</li>
              <li>Allow our licensed technicians to perform necessary work</li>
              <li>Verify your identity and ownership/authorization when requesting locksmith services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Liability</h2>
            <p>
              While we strive to provide the best possible service, we are not liable for any indirect, incidental, or consequential damages
              arising from the use of our services. Our liability is limited to the amount paid for the specific service provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact us at:{' '}
              <a href="mailto:info@locksmithandsecurity.com" className="text-primary hover:text-secondary">
                info@locksmithandsecurity.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditionsPage;