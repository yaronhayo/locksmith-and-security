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
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Locksmith & Security LLC (NJ DCA License #13VH13153100) ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website and tells you about your privacy rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identity Data: name, title</li>
              <li>Contact Data: address, email address, phone numbers</li>
              <li>Technical Data: IP address, browser type and version, time zone setting, operating system</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing Data: your preferences in receiving marketing from us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Collect Your Data</h2>
            <p>We collect data through:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Direct interactions when you contact us or fill out forms</li>
              <li>Automated technologies or interactions (cookies, web beacons)</li>
              <li>Third parties (Google Analytics, advertising partners)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Advertising and Analytics</h2>
            <p>We use various third-party advertising and analytics services, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Ads and Analytics</li>
              <li>Microsoft Advertising (Bing Ads)</li>
              <li>Meta (Facebook) Advertising</li>
              <li>Google Maps Platform</li>
            </ul>
            <p>
              These services use cookies and similar technologies to serve ads and analyze website traffic. You can opt out of personalized advertising by visiting:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google: <a href="https://adssettings.google.com" className="text-primary hover:text-secondary">https://adssettings.google.com</a></li>
              <li>Microsoft: <a href="https://account.microsoft.com/privacy" className="text-primary hover:text-secondary">https://account.microsoft.com/privacy</a></li>
              <li>Meta: <a href="https://www.facebook.com/settings/?tab=ads" className="text-primary hover:text-secondary">https://www.facebook.com/settings/?tab=ads</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>Under applicable data protection laws, you have rights including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to correction of your personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>
              For questions about this Privacy Policy, please contact us at:{' '}
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