import PageLayout from "@/components/layouts/PageLayout";

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Privacy Policy for Locksmith & Security LLC - Your trusted locksmith service provider in North Bergen, NJ."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Locksmith & Security LLC (NJ DCA License #13VH13153100) respects your privacy and is committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identity Data (name, title)</li>
              <li>Contact Data (address, email address, phone numbers)</li>
              <li>Technical Data (internet protocol address, browser type and version)</li>
              <li>Usage Data (information about how you use our website and services)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use your personal data only for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and managing our locksmith services</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
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

export default PrivacyPolicyPage;