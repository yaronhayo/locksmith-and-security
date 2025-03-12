
import PageLayout from "@/components/layouts/PageLayout";

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy | 24/7 Locksmith & Security LLC"
      description="Our commitment to protecting your privacy. Learn how we collect, use, and safeguard your personal information."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Locksmith & Security LLC (NJ DCA License #13VH13153100) ("we," "our," or "us") values your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services or visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identity Data: Full name, title, business name (if applicable)</li>
              <li>Contact Data: Physical address, email address, telephone numbers</li>
              <li>Technical Data: IP address, browser type and version, time zone setting, operating system</li>
              <li>Service Data: Information about the locksmith services you request</li>
              <li>Vehicle Data: Make, model, and year of your vehicle (for automotive services)</li>
              <li>Marketing Data: Your preferences in receiving marketing communications from us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and manage our locksmith services</li>
              <li>To communicate with you about your service requests</li>
              <li>To verify your identity when providing locksmith services</li>
              <li>To improve our services and website functionality</li>
              <li>To send you relevant marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Google reCAPTCHA</h2>
            <p>
              We use Google reCAPTCHA on our website to help prevent spam and abuse. By using reCAPTCHA, you agree to the Google{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                Privacy Policy
              </a>
              {' '}and{' '}
              <a 
                href="https://policies.google.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                Terms of Service
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or to exercise your rights, please contact us at:{' '}
              <a 
                href="mailto:support@247locksmithandsecurity.com" 
                className="text-primary hover:text-secondary transition-colors"
                aria-label="Email us about privacy concerns"
              >
                support@247locksmithandsecurity.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;
