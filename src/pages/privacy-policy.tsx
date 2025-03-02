
import LegalPageLayout from "@/components/layouts/LegalPageLayout";

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy | 24/7 Locksmith & Security LLC"
      description="Our commitment to protecting your privacy. Learn how we collect, use, and safeguard your personal information."
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Locksmith & Security LLC (NJ DCA License #13VH13153100) ("we," "our," or "us") values your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services or visit our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">We collect and process the following types of personal data:</p>
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
        <p className="mb-4">We use your personal data for the following purposes:</p>
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
        <p className="mb-4">
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
        <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
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
        <h2 className="text-2xl font-semibold mb-4">6. Cookies and Similar Technologies</h2>
        <p className="mb-4">
          Our website uses cookies and similar technologies to enhance your browsing experience. We use the following types of cookies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Necessary Cookies:</strong> Essential for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver advertisements more relevant to you.</li>
          <li><strong>Third-Party Cookies:</strong> Set by external services like Google reCAPTCHA and analytics tools.</li>
        </ul>
        <p className="mb-4">
          <strong>Important Note on Third-Party Cookies:</strong> Web browsers are phasing out third-party cookies for enhanced privacy. Some features on our website may use third-party cookies with the SameSite=None; Secure attributes. You can manage your cookie preferences through our Cookie Settings dialog or your browser settings.
        </p>
        <p className="mb-4">
          For most browsers, you can refuse to accept cookies by activating the setting on your browser that allows you to refuse cookies. Be aware that disabling some cookies may impact your experience on our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Google reCAPTCHA</h2>
        <p className="mb-4">
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
        <p className="mb-4">
          Google reCAPTCHA may use third-party cookies with SameSite=None; Secure attributes. As browsers phase out support for third-party cookies, we are working to ensure our website continues to function properly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">
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
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
