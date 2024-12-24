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
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Locksmith & Security LLC (NJ DCA License #13VH13153100). These terms and conditions govern your use of our website and services. By using our website or services, you accept these terms and conditions in full.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
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
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Locksmith & Security LLC or our licensors and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Advertising and Third-Party Services</h2>
            <p>Our website uses various third-party services, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Ads and Analytics for advertising and site analytics</li>
              <li>Microsoft Advertising (Bing Ads) for advertising</li>
              <li>Meta (Facebook) Advertising for social media advertising</li>
              <li>Google Maps Platform for location services</li>
            </ul>
            <p>
              These services may collect and process data about your use of our website. By using our website, you consent to the processing of data about you by these third-party services in accordance with their respective privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Liability</h2>
            <p>
              While we strive to provide accurate information and reliable services, we provide our website and services "as is" without any warranties. We will not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Dispute Resolution</h2>
            <p>
              Any disputes arising from the use of our website or services shall be governed by the laws of New Jersey. You agree to submit to the exclusive jurisdiction of the courts of New Jersey for the resolution of any disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes indicates your acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at:{' '}
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