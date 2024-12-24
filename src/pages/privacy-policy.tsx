import PageLayout from "@/components/layouts/PageLayout";
import { ExternalLink } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy | 24/7 Locksmith & Security LLC"
      description="Our comprehensive privacy policy outlines how we collect, use, and protect your personal information in compliance with GDPR and other privacy regulations."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Locksmith & Security LLC (NJ DCA License #13VH13153100) ("we," "our," or "us") respects your privacy and is committed 
              to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information 
              when you use our services or visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. GDPR Compliance</h2>
            <p>Under the General Data Protection Regulation (GDPR), you have several rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to be informed about our collection and use of your personal data</li>
              <li>The right to access your personal data</li>
              <li>The right to rectification if your personal data is inaccurate or incomplete</li>
              <li>The right to erasure (to be forgotten)</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to our processing of your personal data</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information We Collect</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Personal Information:</h3>
              <ul className="list-disc pl-6">
                <li>Name and contact details</li>
                <li>Service addresses</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Payment information</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Technical Information:</h3>
              <ul className="list-disc pl-6">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
            <p>We use your personal data for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and managing our locksmith services</li>
              <li>Communicating with you about your service requests</li>
              <li>Processing payments</li>
              <li>Improving our services</li>
              <li>Marketing communications (with your consent)</li>
              <li>Legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookie Policy</h2>
            <p>Our website uses cookies to enhance your experience. You can control cookie preferences through our Cookie Settings:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Types of Cookies:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Necessary Cookies:</strong> Essential for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized 
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p>
              We may use third-party service providers to help us operate our business and website. These providers have 
              access to your personal data only to perform specific tasks and are obligated to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information from 
              children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              For questions about this Privacy Policy or to exercise your rights, please contact us at:{' '}
              <a 
                href="mailto:support@247locksmithandsecurity.com" 
                className="text-primary hover:text-secondary inline-flex items-center"
              >
                support@247locksmithandsecurity.com
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;