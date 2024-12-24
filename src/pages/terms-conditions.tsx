import PageLayout from "@/components/layouts/PageLayout";
import { ExternalLink } from 'lucide-react';

const TermsConditionsPage = () => {
  return (
    <PageLayout
      title="Terms & Conditions | 24/7 Locksmith & Security LLC"
      description="Our comprehensive terms and conditions outline the rules, guidelines, and agreements for using our locksmith services."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8" aria-labelledby="acceptance-heading">
            <h2 className="text-2xl font-semibold mb-4" id="acceptance-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Locksmith & Security LLC (NJ DCA License #13VH13153100), you agree 
              to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these 
              terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="services-heading">
            <h2 className="text-2xl font-semibold mb-4" id="services-heading">2. Service Terms</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Service Availability:</h3>
              <ul className="list-disc pl-6">
                <li>24/7 emergency services available</li>
                <li>Regular business hours: Monday-Friday 8:00 AM - 6:00 PM</li>
                <li>Weekend availability: Saturday 9:00 AM - 4:00 PM</li>
                <li>Sunday: By appointment only</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              * Emergency service rates may vary based on time of day, location, and complexity
            </p>
          </section>

          <section className="mb-8" aria-labelledby="payment-heading">
            <h2 className="text-2xl font-semibold mb-4" id="payment-heading">3. Payment Terms</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Payment Policies:</h3>
              <ul className="list-disc pl-6">
                <li>Payment is due upon completion of service</li>
                <li>We accept major credit cards and cash</li>
                <li>Additional fees apply for after-hours service</li>
                <li>Emergency response fees may apply</li>
                <li>Travel fees may apply beyond service area</li>
              </ul>
            </div>
          </section>

          <section className="mb-8" aria-labelledby="warranty-heading">
            <h2 className="text-2xl font-semibold mb-4" id="warranty-heading">4. Warranty & Guarantees</h2>
            <div className="space-y-4">
              <p>Our workmanship is guaranteed for 90 days from the date of service.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Warranty Coverage:</h3>
                <ul className="list-disc pl-6">
                  <li>Defects in workmanship</li>
                  <li>Material defects</li>
                  <li>Installation issues</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Warranty Exclusions:</h3>
                <ul className="list-disc pl-6">
                  <li>Damage from misuse</li>
                  <li>Normal wear and tear</li>
                  <li>Unauthorized modifications</li>
                  <li>Acts of nature</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8" aria-labelledby="liability-heading">
            <h2 className="text-2xl font-semibold mb-4" id="liability-heading">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Locksmith & Security LLC shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use or inability to use our 
              services.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="verification-heading">
            <h2 className="text-2xl font-semibold mb-4" id="verification-heading">6. Identity Verification</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Required Documentation:</h3>
              <ul className="list-disc pl-6">
                <li>Government-issued photo ID</li>
                <li>Proof of residence or vehicle ownership</li>
                <li>Business authorization documentation</li>
                <li>Property management credentials</li>
              </ul>
            </div>
          </section>

          <section className="mb-8" aria-labelledby="cancellation-heading">
            <h2 className="text-2xl font-semibold mb-4" id="cancellation-heading">7. Cancellation Policy</h2>
            <div className="space-y-4">
              <p>We require at least 2 hours notice for service cancellations.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Cancellation Fees:</h3>
                <ul className="list-disc pl-6">
                  <li>No fee with 2+ hours notice</li>
                  <li>50% fee with less than 2 hours notice</li>
                  <li>Full service charge for no-shows</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8" aria-labelledby="privacy-heading">
            <h2 className="text-2xl font-semibold mb-4" id="privacy-heading">8. Privacy & Data Protection</h2>
            <p>
              Your use of our services is also governed by our{' '}
              <a 
                href="/privacy-policy" 
                className="text-primary hover:text-secondary inline-flex items-center"
              >
                Privacy Policy
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </p>
          </section>

          <section className="mb-8" aria-labelledby="contact-heading">
            <h2 className="text-2xl font-semibold mb-4" id="contact-heading">9. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at:{' '}
              <a 
                href="mailto:support@247locksmithandsecurity.com" 
                className="text-primary hover:text-secondary inline-flex items-center"
              >
                support@247locksmithandsecurity.com
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditionsPage;