import PageLayout from "@/components/layouts/PageLayout";

const TermsConditionsPage = () => {
  return (
    <PageLayout
      title="Terms & Conditions | 24/7 Locksmith & Security LLC"
      description="Our terms and conditions outline the rules, guidelines, and agreements for using our locksmith services."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8" id="terms-heading">Terms & Conditions</h1>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8" aria-labelledby="acceptance-heading">
            <h2 className="text-2xl font-semibold mb-4" id="acceptance-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Locksmith & Security LLC (NJ DCA License #13VH13153100), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="services-heading">
            <h2 className="text-2xl font-semibold mb-4" id="services-heading">2. Service Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All services are provided on an "as is" and "as available" basis</li>
              <li>Service rates may vary based on time of day, location, and complexity</li>
              <li>Emergency services are available 24/7 but may incur additional charges</li>
              <li>We reserve the right to refuse service at our discretion</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="payment-heading">
            <h2 className="text-2xl font-semibold mb-4" id="payment-heading">3. Payment Terms</h2>
            <p>
              Payment is due upon completion of service. We accept major credit cards, cash, and approved payment methods. Additional fees may apply for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>After-hours service calls</li>
              <li>Holiday or weekend service</li>
              <li>Emergency response</li>
              <li>Travel beyond our standard service area</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="warranty-heading">
            <h2 className="text-2xl font-semibold mb-4" id="warranty-heading">4. Warranty & Guarantees</h2>
            <p>
              Our workmanship is guaranteed for 90 days from the date of service. This warranty:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Covers defects in workmanship</li>
              <li>Does not cover damage from misuse or normal wear and tear</li>
              <li>Is non-transferable</li>
              <li>Requires proof of service</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="liability-heading">
            <h2 className="text-2xl font-semibold mb-4" id="liability-heading">5. Limitation of Liability</h2>
            <p>
              Locksmith & Security LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="verification-heading">
            <h2 className="text-2xl font-semibold mb-4" id="verification-heading">6. Identity Verification</h2>
            <p>
              For security purposes, we require proof of identity and ownership/authorization for all locksmith services. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Government-issued photo ID</li>
              <li>Proof of residence or vehicle ownership</li>
              <li>Business authorization documentation</li>
              <li>Property management credentials</li>
            </ul>
          </section>

          <section className="mb-8" aria-labelledby="cancellation-heading">
            <h2 className="text-2xl font-semibold mb-4" id="cancellation-heading">7. Cancellation Policy</h2>
            <p>
              Please provide at least 2 hours notice for cancellations. Late cancellations or no-shows may incur a service charge.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="recaptcha-heading">
            <h2 className="text-2xl font-semibold mb-4" id="recaptcha-heading">9. Google reCAPTCHA</h2>
            <p>
              This site is protected by reCAPTCHA and the Google{' '}
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
              {' '}apply.
            </p>
          </section>

          <section className="mb-8" aria-labelledby="contact-heading">
            <h2 className="text-2xl font-semibold mb-4" id="contact-heading">10. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at:{' '}
              <a 
                href="mailto:support@247locksmithandsecurity.com" 
                className="text-primary hover:text-secondary transition-colors"
                aria-label="Email us about terms and conditions"
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

export default TermsConditionsPage;
