
import LegalPageLayout from "@/components/layouts/LegalPageLayout";

const AccessibilityPage = () => {
  return (
    <LegalPageLayout
      title="Accessibility Statement | 24/7 Locksmith & Security LLC"
      description="Our commitment to digital accessibility and providing an inclusive experience for all users of our website and services."
    >
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Our Commitment</h2>
        <p className="mb-4">
          Locksmith & Security LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Conformance Status</h2>
        <p className="mb-4">
          We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
        </p>
        <p className="mb-4">
          The guidelines have three levels of accessibility (A, AA and AAA). We've chosen Level AA as our target.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Accessibility Features</h2>
        <p className="mb-4">Our website includes the following accessibility features:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Semantic HTML to ensure proper document structure</li>
          <li>ARIA landmarks to identify regions of the page</li>
          <li>Alt text for all informative images</li>
          <li>Keyboard navigation for all interactive elements</li>
          <li>Color contrast that meets WCAG 2.1 AA requirements</li>
          <li>Resizable text without loss of content or functionality</li>
          <li>Forms with proper labels and error messages</li>
          <li>Focus indicators for keyboard navigation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Accessible Services</h2>
        <p className="mb-4">
          Beyond our website, we are committed to providing accessible locksmith services to all customers, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Multiple communication methods (phone, email, text, online forms)</li>
          <li>Service for all types of properties, including those with accessibility modifications</li>
          <li>Staff trained to assist customers with various needs</li>
          <li>Clear, easy-to-understand documentation and instructions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Feedback</h2>
        <p className="mb-4">
          We welcome your feedback on the accessibility of our website and services. Please let us know if you encounter accessibility barriers:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Email: <a href="mailto:support@247locksmithandsecurity.com" className="text-primary hover:text-secondary transition-colors">support@247locksmithandsecurity.com</a>
          </li>
          <li>
            Phone: <a href="tel:2017482070" className="text-primary hover:text-secondary transition-colors">(201) 748-2070</a>
          </li>
        </ul>
        <p className="mb-4">
          We try to respond to feedback within 2 business days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Compatibility with Assistive Technologies</h2>
        <p className="mb-4">
          Our website is designed to be compatible with the following assistive technologies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
          <li>Screen magnification software</li>
          <li>Speech recognition software</li>
          <li>Keyboard-only navigation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Limitations & Alternatives</h2>
        <p className="mb-4">
          Despite our best efforts to ensure accessibility of our website, there may be some limitations. Below is a description of known limitations, and potential solutions:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>PDF documents: Not all PDF documents may be fully accessible. Please contact us for alternative formats if needed.</li>
          <li>Maps: Some interactive map features may not be fully accessible. We provide text directions and contact information as alternatives.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">
          For any questions regarding our accessibility statement or to request assistance, please contact us at:{' '}
          <a 
            href="mailto:support@247locksmithandsecurity.com" 
            className="text-primary hover:text-secondary transition-colors"
            aria-label="Email us about accessibility concerns"
          >
            support@247locksmithandsecurity.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default AccessibilityPage;
