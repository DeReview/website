import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-gray-700">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
      <div className="space-y-6">
        {/* <p>Last updated: [Month Day, Year]</p> */}

        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the DeReview website and services (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold">2. Description of Service</h2>
        <p>
          DeReview is a decentralized platform for sharing and accessing authentic reviews. We provide users with tools to write, store, and retrieve reviews using blockchain technology.
        </p>

        <h2 className="text-2xl font-semibold">3. User Conduct</h2>
        <p>You agree not to engage in any of the following prohibited activities:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Impersonating another person or entity</li>
          <li>Posting false, misleading, or defamatory content</li>
          <li>Engaging in any unlawful or fraudulent activities</li>
          <li>Violating any applicable laws or regulations</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Intellectual Property Rights</h2>
        <p>
          All content on the Service, including text, graphics, logos, and software, is the property of DeReview or its content suppliers and is protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold">5. Disclaimer of Warranties</h2>
        <p>
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis. DeReview makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
        </p>

        <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
        <p>
          In no event shall DeReview, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
        </p>

        <h2 className="text-2xl font-semibold">7. Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold harmless DeReview and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold">8. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check this page periodically for changes.
        </p>

        <h2 className="text-2xl font-semibold">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:contact@dereview.org" className="text-primary hover:underline">
            contact@dereview.org
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
